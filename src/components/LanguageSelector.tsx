import { Globe } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const LanguageSelector = () => {
  const { lang, setLangCode, languages, t } = useLang();
  return (
    <div className="inline-flex items-center gap-2">
      <Globe className="h-4 w-4 text-accent" />
      <Select value={lang.code} onValueChange={setLangCode}>
        <SelectTrigger
          aria-label={t.language}
          className="h-9 w-[170px] rounded-full bg-card/40 border-accent/30 text-foreground"
        >
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="max-h-[320px]">
          {languages.map((l) => (
            <SelectItem key={l.code} value={l.code}>
              <span className="font-medium">{l.name}</span>
              <span className="text-muted-foreground ml-2 text-xs">{l.english}</span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
