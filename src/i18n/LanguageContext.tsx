import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from "react";
import { LANGUAGES, DEFAULT_LANG, Translation, Language } from "./translations";

interface Ctx {
  lang: Language;
  setLangCode: (code: string) => void;
  t: Translation;
  languages: Language[];
}

const LanguageContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "app-lang";

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [code, setCode] = useState<string>(() => {
    if (typeof window === "undefined") return DEFAULT_LANG;
    return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
  });

  const lang = useMemo(
    () => LANGUAGES.find((l) => l.code === code) ?? LANGUAGES[0],
    [code]
  );

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang.code);
    document.documentElement.lang = lang.code;
    const rtl = ["ar", "ur", "fa", "he"].includes(lang.code);
    document.documentElement.dir = rtl ? "rtl" : "ltr";
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLangCode: setCode, t: lang.t, languages: LANGUAGES }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
};
