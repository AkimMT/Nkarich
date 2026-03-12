import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useTranslation } from "react-i18next";

export function About() {
  const { t } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
        <div>
          <h1 className="text-4xl md:text-5xl mb-6 md:mb-8 tracking-tight">
            {t("about.title")}
          </h1>
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>{t("about.bio.0")}</p>
            <p>{t("about.bio.1")}</p>
            <p>{t("about.bio.2")}</p>
          </div>

          <div className="mt-12 space-y-6">
            <div>
              <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-2">
                {t("about.education.label")}
              </h3>
              <p className="text-gray-600">
                {t("about.education.ba")}
                <br />
                {t("about.education.ma")}
              </p>
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-2">
                {t("about.recognition.label")}
              </h3>
              <p className="text-gray-600">
                {t("about.recognition.0")}
                <br />
                {t("about.recognition.1")}
                <br />
                {t("about.recognition.2")}
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="aspect-[3/4]">
            <ImageWithFallback
              // src="https://images.unsplash.com/photo-1628586431263-44040b966252?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc3QlMjBzdHVkaW8lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzczMDM3OTEzfDA&ixlib=rb-4.1.0&q=80&w=1080"
              src="artist.jpg"
              alt={t("about.imageAlt")}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-sm text-gray-400 italic">
            {t("about.imageCaption")}
          </p>
        </div>
      </div>
    </div>
  );
}
