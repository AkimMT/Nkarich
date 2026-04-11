import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import i18n from "i18next";

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  apiVersion: "2024-01-01",
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

export function localized(doc: any, field: string): string {
  const lang = i18n.language?.startsWith("ru") ? "ru" : "en";
  return doc[`${field}_${lang}`] || doc[`${field}_ru`] || "";
}
