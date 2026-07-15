import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import bn from "./bn.json";
import en from "./en.json";

export type Language = "bn" | "en";
type Dictionary = typeof en;
type I18nContextValue = { language: Language; setLanguage: (language: Language) => void; content: Dictionary };
const I18nContext = createContext<I18nContextValue | null>(null);
const dictionaries: Record<Language, Dictionary> = { bn, en };

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => (localStorage.getItem("language") === "en" ? "en" : "bn"));
  useEffect(() => { localStorage.setItem("language", language); document.documentElement.lang = language === "bn" ? "bn" : "en"; }, [language]);
  const value = useMemo(() => ({ language, setLanguage, content: dictionaries[language] }), [language]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
export function useI18n() { const context = useContext(I18nContext); if (!context) throw new Error("useI18n must be used within I18nProvider"); return context; }
