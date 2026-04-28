import { useEffect, useRef, useState } from "react";
import { Play, Pause, SkipBack, SkipForward, Download, Loader2 } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { SURAHS, getSurahAudioUrl } from "@/data/surahs";
import { RECITERS } from "@/data/reciters";
import { toast } from "sonner";

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
    if (playing) {
      audio.play().catch(() => setPlaying(false));
    }
  }, [surahNumber, reciterId]);

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
        toast.error("Nuk u luajt audio. Provoni përsëri.");
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
      toast.success(`U shkarkua: ${surah.englishName}`);
    } catch {
      toast.error("Shkarkimi dështoi.");
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
          setPlaying(false);
          onNext();
        }}
        onWaiting={() => setLoading(true)}
        onCanPlay={() => setLoading(false)}
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
