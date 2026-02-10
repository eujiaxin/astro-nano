export const languages = {
  en: "EN",
  zh: "中",
};

export const defaultLang = "en";

// NOTE: honestly this might be unnecessary - maybe we can just use content folder to hold all the tranlated strings?
export const ui = {
  en: {
    "nav.blog": "thoughts",
    "blog.title": "collection of my silly little thoughts."
  },
  zh: {
    "nav.blog": "想法",
    "blog.title": "头脑里突发奇想的小东西。"
  },
} as const;
