import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useTranslation } from "react-i18next";

export function Exhibitions() {
  const { t } = useTranslation();

  const exhibitions = [
    {
      title: t("exhibitions.items.0.title"),
      type: t("exhibitions.items.0.type"),
      venue: t("exhibitions.items.0.venue"),
      date: t("exhibitions.items.0.date"),
      status: t("exhibitions.items.0.status"),
      image:
        "https://images.unsplash.com/photo-1723974591057-ccadada1f283?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcnQlMjBnYWxsZXJ5fGVufDF8fHx8MTc3MzAyMDEyNnww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: t("exhibitions.items.1.title"),
      type: t("exhibitions.items.1.type"),
      venue: t("exhibitions.items.1.venue"),
      date: t("exhibitions.items.1.date"),
      status: t("exhibitions.items.1.status"),
      image:
        "https://images.unsplash.com/photo-1635141849017-c531949fb5b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHBhaW50aW5nJTIwY2FudmFzfGVufDF8fHx8MTc3MzAzNzkxMXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: t("exhibitions.items.2.title"),
      type: t("exhibitions.items.2.type"),
      venue: t("exhibitions.items.2.venue"),
      date: t("exhibitions.items.2.date"),
      status: t("exhibitions.items.2.status"),
      image:
        "https://images.unsplash.com/photo-1705254613735-1abb457f8a60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGFic3RyYWN0JTIwYXJ0fGVufDF8fHx8MTc3Mjk2NjQ2Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: t("exhibitions.items.3.title"),
      type: t("exhibitions.items.3.type"),
      venue: t("exhibitions.items.3.venue"),
      date: t("exhibitions.items.3.date"),
      status: t("exhibitions.items.3.status"),
      image:
        "https://images.unsplash.com/photo-1580136608079-72029d0de130?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBwYWludGluZyUyMGFydHdvcmt8ZW58MXx8fHwxNzczMDUxMjA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: t("exhibitions.items.4.title"),
      type: t("exhibitions.items.4.type"),
      venue: t("exhibitions.items.4.venue"),
      date: t("exhibitions.items.4.date"),
      status: t("exhibitions.items.4.status"),
      image:
        "https://images.unsplash.com/photo-1580136607993-fd598cf5c4f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwcGFpbnRpbmd8ZW58MXx8fHwxNzczMDUxMjA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

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
