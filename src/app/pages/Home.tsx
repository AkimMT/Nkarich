import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useTranslation } from "react-i18next";

export function Home() {
  const { t } = useTranslation();

  const works = [
    {
      title: t("home.works.0.title"),
      year: t("home.works.0.year"),
      medium: t("home.works.0.medium"),
      image: "/chess.webp",
    },
    {
      title: t("home.works.1.title"),
      year: t("home.works.1.year"),
      medium: t("home.works.1.medium"),
      image: "/green_girl.webp",
    },
    {
      title: t("home.works.2.title"),
      year: t("home.works.2.year"),
      medium: t("home.works.2.medium"),
      image: "/lady_in_red.webp",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl mb-6 tracking-tight">
              {t("home.hero.title")}
            </h1>
            <p className="text-base md:text-lg text-gray-400 mb-8 leading-relaxed">
              {t("home.hero.description")}
            </p>
            <Link
              to="/exhibitions"
              className="inline-block border border-black px-6 md:px-8 py-3 text-sm tracking-wide hover:bg-black hover:text-white transition-colors"
            >
              {t("home.hero.cta")}
            </Link>
          </div>
          <div className="aspect-square">
            <ImageWithFallback
              src="/wall_mix.webp"
              alt={t("home.hero.imageAlt")}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Featured Works */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-24">
        <h2 className="text-3xl md:text-4xl mb-12 md:mb-16 tracking-tight">
          {t("home.featured.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {works.map((work, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="aspect-[3/4] mb-4 overflow-hidden">
                <ImageWithFallback
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-lg mb-1">{work.title}</h3>
              <p className="text-sm text-gray-400">
                {work.year} · {work.medium}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
