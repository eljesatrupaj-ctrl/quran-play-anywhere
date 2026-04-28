import { Check } from "lucide-react";
import { RECITERS } from "@/data/reciters";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Props {
  selected: string;
  onSelect: (id: string) => void;
}

export const ReciterList = ({ selected, onSelect }: Props) => {
  return (
    <ScrollArea className="h-[420px] pr-3">
      <div className="space-y-2">
        {RECITERS.map((r) => {
          const isActive = r.id === selected;
          return (
            <button
              key={r.id}
              onClick={() => onSelect(r.id)}
              className={`w-full text-left rounded-2xl p-4 border transition-smooth flex items-center justify-between group ${
                isActive
                  ? "gradient-emerald border-accent shadow-gold"
                  : "bg-card/50 border-border hover:border-accent/50 hover:bg-card"
              }`}
            >
              <div className="flex-1 min-w-0">
                <p className={`font-display text-lg leading-tight ${isActive ? "text-accent-glow" : "text-foreground"}`}>
                  {r.name}
                </p>
                <p className="font-arabic text-base text-muted-foreground truncate">{r.arabicName}</p>
                <p className="text-[10px] tracking-widest uppercase text-accent/70 mt-1">{r.style}</p>
              </div>
              {isActive && (
                <div className="h-8 w-8 rounded-full gradient-gold flex items-center justify-center shrink-0 ml-2">
                  <Check className="h-4 w-4 text-accent-foreground" />
                </div>
              )}
            </button>
          );
        })}
      </div>
    </ScrollArea>
  );
};
