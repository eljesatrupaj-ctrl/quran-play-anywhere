import { useMemo, useState } from "react";
import { Search, BookOpen } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SURAHS } from "@/data/surahs";

interface Props {
  selected: number;
  onSelect: (n: number) => void;
}

export const SurahList = ({ selected, onSelect }: Props) => {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const lower = q.toLowerCase().trim();
    if (!lower) return SURAHS;
    return SURAHS.filter(
      (s) =>
        s.englishName.toLowerCase().includes(lower) ||
        s.englishNameTranslation.toLowerCase().includes(lower) ||
        s.name.includes(lower) ||
        String(s.number) === lower
    );
  }, [q]);

  return (
    <div className="space-y-3">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Kërko Sure..."
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="pl-10 bg-card/50 border-border rounded-2xl h-11 focus-visible:ring-accent"
        />
      </div>

      <ScrollArea className="h-[380px] pr-3">
        <div className="space-y-1.5">
          {filtered.map((s) => {
            const isActive = s.number === selected;
            return (
              <button
                key={s.number}
                onClick={() => onSelect(s.number)}
                className={`w-full flex items-center gap-3 rounded-xl p-3 transition-smooth border ${
                  isActive
                    ? "gradient-emerald border-accent shadow-gold"
                    : "bg-card/30 border-transparent hover:bg-card hover:border-accent/30"
                }`}
              >
                <div
                  className={`h-10 w-10 shrink-0 rounded-lg rotate-45 flex items-center justify-center border ${
                    isActive ? "border-accent gradient-gold" : "border-accent/40"
                  }`}
                >
                  <span
                    className={`-rotate-45 text-xs font-bold ${
                      isActive ? "text-accent-foreground" : "text-accent"
                    }`}
                  >
                    {s.number}
                  </span>
                </div>
                <div className="flex-1 min-w-0 text-left">
                  <p className="font-display text-base leading-tight text-foreground truncate">
                    {s.englishName}
                  </p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                    <BookOpen className="h-3 w-3" />
                    {s.numberOfAyahs} ajete · {s.revelationType}
                  </p>
                </div>
                <p className="font-arabic text-xl text-accent shrink-0">{s.name}</p>
              </button>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
};
