import { useTranslation } from "react-i18next";

export function Contacts() {
  const { t } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl mb-12 md:mb-16 tracking-tight">
        {t("contacts.title")}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        <div>
          <h2 className="text-xl md:text-2xl mb-6 md:mb-8 tracking-tight">
            {t("contacts.form.heading")}
          </h2>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm uppercase tracking-wider text-gray-400 mb-2"
              >
                {t("contacts.form.name")}
              </label>
              <input
                type="text"
                id="name"
                className="w-full border-b border-gray-300 py-2 focus:border-black focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm uppercase tracking-wider text-gray-400 mb-2"
              >
                {t("contacts.form.email")}
              </label>
              <input
                type="email"
                id="email"
                className="w-full border-b border-gray-300 py-2 focus:border-black focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm uppercase tracking-wider text-gray-400 mb-2"
              >
                {t("contacts.form.subject")}
              </label>
              <input
                type="text"
                id="subject"
                className="w-full border-b border-gray-300 py-2 focus:border-black focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm uppercase tracking-wider text-gray-400 mb-2"
              >
                {t("contacts.form.message")}
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full border border-gray-300 p-4 focus:border-black focus:outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="border border-black px-8 py-3 text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-colors"
            >
              {t("contacts.form.submit")}
            </button>
          </form>
        </div>

        <div className="space-y-12">
          <div>
            <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-4">
              {t("contacts.info.locationLabel")}
            </h3>
            <p className="text-gray-600">
              {t("contacts.info.address.0")}
              <br />
              {t("contacts.info.address.1")}
              <br />
              {t("contacts.info.address.2")}
              <br />
              {t("contacts.info.address.3")}
            </p>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-4">
              {t("contacts.info.emailLabel")}
            </h3>
            <a
              href="mailto:laziza9765@gmail.com"
              className="text-gray-600 hover:text-black transition-colors"
            >
              laziza9765@gmail.com
            </a>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-4">
              {t("contacts.info.followLabel")}
            </h3>
            <div className="space-y-2">
              <a
                target="_blank"
                href="https://www.instagram.com/nkarich_"
                className="block text-gray-600 hover:text-black transition-colors"
              >
                Instagram
              </a>
              <a
                target="_blank"
                href="https://t.me/nkarich"
                className="block text-gray-600 hover:text-black transition-colors"
              >
                Telegram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
