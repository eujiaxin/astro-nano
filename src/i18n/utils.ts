import { getCollection } from "astro:content";
import { ui, defaultLang } from "./ui";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

/**
 * Creates a translation function for the specified language.
 *
 * @param lang - The language key to use for translations
 * @returns A translation function that retrieves localized strings by key.
 *          Falls back to the default language if the key is not found in the specified language.
 *
 * @example
 * ```ts
 * const t = useTranslations('en');
 * const greeting = t('hello'); // Returns translated string or fallback
 * ```
 */
export function useTranslations(lang: keyof typeof ui) {
    console.log(`Creating translation function for language: ${lang}`);
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return key in ui[lang] ? (ui[lang] as any)[key] : ui[defaultLang][key];
  };
}


export async function getBlogsByLocale(locale: keyof typeof ui) {
    return (await getCollection('blog')).filter(entry => {
        console.log("Checking entry:", entry.id, "for locale:", locale); 
        return entry.id.startsWith(locale);
    });
}
