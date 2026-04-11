import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { client, urlFor } from "../../sanity/schemas/client";
import i18n from "i18next";

interface SanityExhibition {
  _id: string;
  title_ru: string;
  title_en?: string;
  date: string;
  location?: string;
  images?: any[];
}

function localized(doc: SanityExhibition, field: string): string {
  const lang = i18n.language?.startsWith("ru") ? "ru" : "en";
  return (doc as any)[`${field}_${lang}`] || (doc as any)[`${field}_ru`] || "";
}

export function Exhibitions() {
  const { t } = useTranslation();
  const [sanityExhibitions, setSanityExhibitions] = useState<
    SanityExhibition[]
  >([]);

  useEffect(() => {
    client
      .fetch<SanityExhibition[]>(
        `*[_type == "exhibition"] | order(date desc) {
          _id, title_ru, title_en, date, location, images
        }`,
      )
      .then(setSanityExhibitions)
      .catch(console.error);
  }, []);

  const staticExhibitions = [
    {
      title: t("exhibitions.items.0.title"),
      type: t("exhibitions.items.0.type"),
      venue: t("exhibitions.items.0.venue"),
      date: t("exhibitions.items.0.date"),
      status: t("exhibitions.items.0.status"),
      image: "exh1.webp",
    },
    {
      title: t("exhibitions.items.1.title"),
      type: t("exhibitions.items.1.type"),
      venue: t("exhibitions.items.1.venue"),
      date: t("exhibitions.items.1.date"),
      status: t("exhibitions.items.1.status"),
      image: "exh2.webp",
    },
    {
      title: t("exhibitions.items.2.title"),
      type: t("exhibitions.items.2.type"),
      venue: t("exhibitions.items.2.venue"),
      date: t("exhibitions.items.2.date"),
      status: t("exhibitions.items.2.status"),
      image: "exh3.webp",
    },
    {
      title: t("exhibitions.items.3.title"),
      type: t("exhibitions.items.3.type"),
      venue: t("exhibitions.items.3.venue"),
      date: t("exhibitions.items.3.date"),
      status: t("exhibitions.items.3.status"),
      image: "exh4.webp",
    },
    {
      title: t("exhibitions.items.4.title"),
      type: t("exhibitions.items.4.type"),
      venue: t("exhibitions.items.4.venue"),
      date: t("exhibitions.items.4.date"),
      status: t("exhibitions.items.4.status"),
      image: "exh5.webp",
    },
  ];

  const usingSanity = sanityExhibitions.length > 0;

  const exhibitions = usingSanity
    ? sanityExhibitions.map((ex) => ({
        title: localized(ex, "title"),
        type: "",
        venue: ex.location || "",
        date: ex.date,
        status: "",
        image: ex.images?.[0] ? urlFor(ex.images[0]).width(1080).url() : "",
      }))
    : staticExhibitions;

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl mb-4 tracking-tight">
        {t("exhibitions.title")}
      </h1>
      <p className="text-gray-400 mb-12 md:mb-16">
        {t("exhibitions.subtitle")}
      </p>

      <div className="space-y-16 md:space-y-24">
        {exhibitions.map((exhibition, index) => (
          <div
            key={index}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start"
          >
            <div className={index % 2 === 0 ? "order-1" : "order-1 lg:order-2"}>
              <div className="aspect-[4/3]">
                <ImageWithFallback
                  src={exhibition.image}
                  alt={exhibition.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className={index % 2 === 0 ? "order-2" : "order-2 lg:order-1"}>
              <div className="space-y-4">
                {exhibition.status === t("exhibitions.currentLabel") && (
                  <span className="inline-block text-xs uppercase tracking-wider border border-black px-3 py-1">
                    {t("exhibitions.currentLabel")}
                  </span>
                )}
                <h2 className="text-2xl md:text-3xl tracking-tight">
                  {exhibition.title}
                </h2>
                <div className="text-gray-600 space-y-1">
                  <p className="text-sm uppercase tracking-wider text-gray-400">
                    {exhibition.type}
                  </p>
                  <p>{exhibition.venue}</p>
                  <p>{exhibition.date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
