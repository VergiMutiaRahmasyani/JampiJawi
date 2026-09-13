import { createContext, useContext, useState, useEffect } from "react";
import { translations } from "../translations";

const LanguageContext = createContext(undefined);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "id");

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const toggleLang = () => setLang((prev) => (prev === "id" ? "en" : "id"));

  const t = (key) => {
    const keys = key.split(".");
    let result = translations[lang];
    for (const k of keys) {
      result = result?.[k];
    }
    return result || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}