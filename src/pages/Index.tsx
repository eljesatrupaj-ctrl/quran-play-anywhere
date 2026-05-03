import { useState } from "react";
import { Moon } from "lucide-react";
import { QuranPlayer } from "@/components/QuranPlayer";
import { ReciterList } from "@/components/ReciterList";
import { SurahList } from "@/components/SurahList";
import { AdBanner } from "@/components/AdBanner";
import { LanguageSelector } from "@/components/LanguageSelector";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SURAHS } from "@/data/surahs";
import { RECITERS } from "@/data/reciters";
import { useLang } from "@/i18n/LanguageContext";
import heroPattern from "@/assets/hero-pattern.jpg";

const Index = () => {
  const { t } = useLang();
  const [surahNumber, setSurahNumber] = useState(1);
  const [reciterId, setReciterId] = useState("alafasy");

  const goPrev = () => setSurahNumber((n) => Math.max(1, n - 1));
  const goNext = () => setSurahNumber((n) => Math.min(SURAHS.length, n + 1));

  return (
    <div className="min-h-screen flex flex-col">
      {/* HERO */}
      <header className="relative overflow-hidden border-b border-accent/20">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${heroPattern})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 gradient-hero opacity-90" />
        <div className="relative max-w-5xl mx-auto px-6 py-10 text-center">
          <div className="absolute right-4 top-4 md:right-6 md:top-6">
            <LanguageSelector />
          </div>
          <div className="inline-flex items-center gap-2 mb-3 px-4 py-1.5 rounded-full border border-accent/30 bg-card/30 backdrop-blur-sm">
            <Moon className="h-3.5 w-3.5 text-accent" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-accent">
              {t.bismillah}
            </span>
          </div>
          <h1 className="font-arabic text-6xl md:text-7xl text-gradient-gold mb-2 leading-tight">
            القرآن الكريم
          </h1>
          <p className="font-display text-xl md:text-2xl text-foreground/90 italic">
            Nūr al-Qurʾān
          </p>
          <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mt-2">
            {t.tagline}
          </p>
          <p className="text-[10px] tracking-[0.3em] uppercase text-accent/80 mt-4">
            {t.createdBy}
          </p>
        </div>
      </header>

      {/* MAIN */}
      <main className="flex-1 max-w-5xl mx-auto w-full px-4 md:px-6 py-8">
        <div className="grid lg:grid-cols-[1fr_380px] gap-6">
          {/* PLAYER */}
          <div className="order-1">
            <QuranPlayer
              surahNumber={surahNumber}
              reciterId={reciterId}
              onPrev={goPrev}
              onNext={goNext}
            />

            {/* Decorative ornament */}
            <div className="mt-8 flex items-center justify-center gap-3 opacity-60">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-accent/50" />
              <span className="font-arabic text-2xl text-accent">۞</span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-accent/50" />
            </div>
          </div>

          {/* SIDEBAR */}
          <aside className="order-2 gradient-card rounded-3xl p-5 border border-accent/20 shadow-elegant">
            <Tabs defaultValue="surahs" className="w-full">
              <TabsList className="grid grid-cols-2 w-full bg-secondary/50 rounded-xl mb-4">
                <TabsTrigger
                  value="surahs"
                  className="rounded-lg data-[state=active]:gradient-gold data-[state=active]:text-accent-foreground font-display"
                >
                  {t.surahs} · {SURAHS.length}
                </TabsTrigger>
                <TabsTrigger
                  value="reciters"
                  className="rounded-lg data-[state=active]:gradient-gold data-[state=active]:text-accent-foreground font-display"
                >
                  {t.reciters} · {RECITERS.length}
                </TabsTrigger>
              </TabsList>
              <TabsContent value="surahs" className="mt-0">
                <SurahList selected={surahNumber} onSelect={setSurahNumber} />
              </TabsContent>
              <TabsContent value="reciters" className="mt-0">
                <ReciterList selected={reciterId} onSelect={setReciterId} />
              </TabsContent>
            </Tabs>
          </aside>
        </div>
      </main>

      {/* AD BANNER */}
      <AdBanner />
    </div>
  );
};

export default Index;
