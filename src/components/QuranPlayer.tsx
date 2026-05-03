import { useEffect, useRef, useState } from "react";
import { Play, Pause, SkipBack, SkipForward, Download, Loader2 } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { SURAHS, getSurahAudioUrl } from "@/data/surahs";
import { RECITERS } from "@/data/reciters";
import { toast } from "sonner";
import { Capacitor } from "@capacitor/core";
// @ts-ignore - plugin nuk ka tipe
import { CapacitorMusicControls } from "capacitor-music-controls-plugin";
import { useLang } from "@/i18n/LanguageContext";

const isNative = Capacitor.isNativePlatform?.() ?? false;

const destroyMusicControls = () => {
  if (!isNative) return;
  try { CapacitorMusicControls.destroy(); } catch {}
};

const createMusicControls = (title: string, artist: string, isPlaying: boolean) => {
  if (!isNative) return;
  try {
    CapacitorMusicControls.create({
      track: title,
      artist,
      album: "Nūr al-Qurʾān · DS Interactive",
      cover: "ic_launcher",
      isPlaying,
      dismissable: false,
      hasPrev: true,
      hasNext: true,
      hasClose: true,
      hasScrubbing: false,
      ticker: title,
      playIcon: "media_play",
      pauseIcon: "media_pause",
      prevIcon: "media_prev",
      nextIcon: "media_next",
      closeIcon: "media_close",
      notificationIcon: "notification",
    });
  } catch (e) {
    console.error("MusicControls error", e);
  }
};

const updateMusicControls = (isPlaying: boolean) => {
  if (!isNative) return;
  try { CapacitorMusicControls.updateIsPlaying({ isPlaying }); } catch {}
};

interface PlayerProps {
  surahNumber: number;
  reciterId: string;
  onPrev: () => void;
  onNext: () => void;
}

const formatTime = (s: number) => {
  if (!isFinite(s)) return "0:00";
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
};

export const QuranPlayer = ({ surahNumber, reciterId, onPrev, onNext }: PlayerProps) => {
  const { t } = useLang();
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [downloading, setDownloading] = useState(false);

  const surah = SURAHS.find((s) => s.number === surahNumber)!;
  const reciter = RECITERS.find((r) => r.id === reciterId)!;
  const audioUrl = getSurahAudioUrl(reciterId, surahNumber);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    setLoading(true);
    setProgress(0);
    audio.load();
    // Always try to autoplay the newly-selected surah so playback continues seamlessly.
    audio.play().then(() => setPlaying(true)).catch(() => {
      // Autoplay may be blocked on first interaction in browsers; keep silent.
      if (!playing) setPlaying(false);
    });
  }, [surahNumber, reciterId]);

  // 🔔 Media Session — kontrollet në lock screen / notification (Android & iOS)
  useEffect(() => {
    if (!("mediaSession" in navigator)) return;

    navigator.mediaSession.metadata = new MediaMetadata({
      title: `${surah.englishName} · ${surah.name}`,
      artist: reciter.name,
      album: "Nūr al-Qurʾān · DS Interactive",
      artwork: [
        { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
        { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      ],
    });

    const handlers: Array<[MediaSessionAction, () => void]> = [
      ["play", () => audioRef.current?.play().then(() => setPlaying(true)).catch(() => {})],
      ["pause", () => { audioRef.current?.pause(); setPlaying(false); }],
      ["previoustrack", () => onPrev()],
      ["nexttrack", () => onNext()],
      ["seekbackward", () => {
        if (audioRef.current) audioRef.current.currentTime = Math.max(0, audioRef.current.currentTime - 10);
      }],
      ["seekforward", () => {
        if (audioRef.current) audioRef.current.currentTime = Math.min(duration, audioRef.current.currentTime + 10);
      }],
    ];

    handlers.forEach(([action, handler]) => {
      try { navigator.mediaSession.setActionHandler(action, handler); } catch {}
    });

    return () => {
      handlers.forEach(([action]) => {
        try { navigator.mediaSession.setActionHandler(action, null); } catch {}
      });
    };
  }, [surah, reciter, duration, onPrev, onNext]);

  // Përditëso state e Media Session
  useEffect(() => {
    if ("mediaSession" in navigator) {
      navigator.mediaSession.playbackState = playing ? "playing" : "paused";
    }
    updateMusicControls(playing);
  }, [playing]);

  // Përditëso pozicionin për scrubber-in në notification
  useEffect(() => {
    if ("mediaSession" in navigator && "setPositionState" in navigator.mediaSession && duration > 0) {
      try {
        navigator.mediaSession.setPositionState({
          duration,
          position: Math.min(progress, duration),
          playbackRate: 1,
        });
      } catch {}
    }
  }, [progress, duration]);

  // 🎵 Native Music Controls (Android lock screen / notification)
  useEffect(() => {
    if (!isNative) return;
    destroyMusicControls();
    createMusicControls(`${surah.englishName} · ${surah.name}`, reciter.name, playing);

    const handler = (action: any) => {
      let message = action;
      try {
        message = typeof action === "string" ? JSON.parse(action).message : action.message;
      } catch {}
      switch (message) {
        case "music-controls-play":
          audioRef.current?.play().then(() => setPlaying(true)).catch(() => {});
          break;
        case "music-controls-pause":
          audioRef.current?.pause();
          setPlaying(false);
          break;
        case "music-controls-next":
          onNext();
          break;
        case "music-controls-previous":
          onPrev();
          break;
        case "music-controls-destroy":
          audioRef.current?.pause();
          setPlaying(false);
          break;
        case "music-controls-headset-unplugged":
        case "music-controls-pause-event":
          audioRef.current?.pause();
          setPlaying(false);
          break;
        case "music-controls-play-event":
          audioRef.current?.play().then(() => setPlaying(true)).catch(() => {});
          break;
      }
    };

    document.addEventListener("controlsNotification", handler as EventListener);
    return () => {
      document.removeEventListener("controlsNotification", handler as EventListener);
      destroyMusicControls();
    };
  }, [surah, reciter, onNext, onPrev]);


  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      try {
        await audio.play();
        setPlaying(true);
      } catch {
        toast.error(t.playFailed);
      }
    }
  };

  const handleDownload = async () => {
    setDownloading(true);
    try {
      const res = await fetch(audioUrl);
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${surah.number}-${surah.englishName}-${reciter.name}.mp3`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      toast.success(`${t.downloaded}: ${surah.englishName}`);
    } catch {
      toast.error(t.downloadFailed);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="gradient-card border border-accent/20 rounded-3xl p-6 shadow-elegant">
      <audio
        ref={audioRef}
        src={audioUrl}
        onLoadedMetadata={(e) => {
          setDuration(e.currentTarget.duration);
          setLoading(false);
        }}
        onTimeUpdate={(e) => setProgress(e.currentTarget.currentTime)}
        onEnded={() => {
          // Auto-play the next surah continuously
          onNext();
        }}
        onWaiting={() => setLoading(true)}
        onCanPlay={() => setLoading(false)}
        onError={() => {
          setLoading(false);
          setPlaying(false);
          toast.error(`Audio nuk u ngarkua për ${reciter.name}. Provoni një recitues tjetër.`);
        }}
        preload="metadata"
      />

      <div className="text-center mb-6">
        <p className="font-arabic text-5xl text-gradient-gold mb-2">{surah.name}</p>
        <h3 className="font-display text-2xl text-foreground">{surah.englishName}</h3>
        <p className="text-sm text-muted-foreground mt-1">
          {surah.englishNameTranslation} · {surah.numberOfAyahs} ajete
        </p>
        <p className="text-xs text-accent mt-3 tracking-widest uppercase">
          {reciter.name}
        </p>
        <p className="text-[10px] text-muted-foreground mt-2 tracking-[0.2em] uppercase">
          Krijuar nga DS Interactive
        </p>
      </div>

      <div className="space-y-2 mb-6">
        <Slider
          value={[progress]}
          max={duration || 100}
          step={0.5}
          onValueChange={([v]) => {
            if (audioRef.current) audioRef.current.currentTime = v;
          }}
          className="cursor-pointer"
        />
        <div className="flex justify-between text-xs text-muted-foreground font-mono">
          <span>{formatTime(progress)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={onPrev}
          className="rounded-full hover:bg-accent/10 text-accent"
        >
          <SkipBack className="h-6 w-6" />
        </Button>

        <Button
          onClick={togglePlay}
          className="rounded-full h-16 w-16 gradient-gold hover:opacity-90 shadow-gold animate-pulse-gold border-0"
        >
          {loading ? (
            <Loader2 className="h-7 w-7 animate-spin text-accent-foreground" />
          ) : playing ? (
            <Pause className="h-7 w-7 text-accent-foreground" fill="currentColor" />
          ) : (
            <Play className="h-7 w-7 text-accent-foreground ml-1" fill="currentColor" />
          )}
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={onNext}
          className="rounded-full hover:bg-accent/10 text-accent"
        >
          <SkipForward className="h-6 w-6" />
        </Button>
      </div>

      <div className="mt-6 flex justify-center">
        <Button
          variant="outline"
          onClick={handleDownload}
          disabled={downloading}
          className="rounded-full border-accent/30 hover:bg-accent/10 hover:border-accent text-accent"
        >
          {downloading ? (
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
          ) : (
            <Download className="h-4 w-4 mr-2" />
          )}
          Shkarko Suren
        </Button>
      </div>
    </div>
  );
};
