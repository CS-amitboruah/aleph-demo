type ContentType = {
  en: () => void;
  bm: () => void;
};
const langContent: ContentType = {
  en: () => import("./content/en.json").then((r) => r.default),
  bm: () => import("./content/bm.json").then((r) => r.default),
};
export const getContent = (locale: string) => {
  return langContent[locale as keyof ContentType]();
};
