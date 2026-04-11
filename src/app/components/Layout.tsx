import { Link, Outlet, useLocation } from "react-router";
import { Menu, X, Globe } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export function Layout() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const currentLanguage = i18n.language.toUpperCase();

  const navItems = [
    { path: "/", label: t("nav.home") },
    { path: "/about", label: t("nav.about") },
    { path: "/exhibitions", label: t("nav.exhibitions") },
  ];

  const languages = [
    { code: "ru", label: "Русский" },
    { code: "en", label: "English" },
  ];

  const handleLanguageChange = (code: string) => {
    i18n.changeLanguage(code);
    setIsLanguageMenuOpen(false);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-6 py-6 md:py-8">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-xl md:text-2xl tracking-tight">
              {t("nav.brand")}
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <ul className="flex gap-8">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={`text-sm tracking-wide transition-colors ${
                        location.pathname === item.path
                          ? "text-black"
                          : "text-gray-400 hover:text-black"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Language Switcher - Desktop */}
              <div className="relative">
                <button
                  onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-black transition-colors"
                  aria-label="Change language"
                >
                  <Globe size={16} />
                  <span>{currentLanguage}</span>
                </button>

                {isLanguageMenuOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-10"
                      onClick={() => setIsLanguageMenuOpen(false)}
                    />
                    <div className="absolute right-0 top-full mt-2 bg-white border border-gray-200 shadow-sm z-20 min-w-[140px]">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => handleLanguageChange(lang.code)}
                          className={`block w-full text-left px-4 py-3 text-sm transition-colors ${
                            i18n.language === lang.code
                              ? "text-black bg-gray-50"
                              : "text-gray-600 hover:bg-gray-50"
                          }`}
                        >
                          {lang.label}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 -mr-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden pt-6 pb-4">
              <ul className="space-y-4 mb-6">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      onClick={closeMobileMenu}
                      className={`block text-lg tracking-wide transition-colors ${
                        location.pathname === item.path
                          ? "text-black"
                          : "text-gray-400"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Language Switcher - Mobile */}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                  <Globe size={16} />
                  <span>{t("nav.language")}</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        handleLanguageChange(lang.code);
                        closeMobileMenu();
                      }}
                      className={`px-4 py-2 text-sm border transition-colors ${
                        i18n.language === lang.code
                          ? "border-black bg-black text-white"
                          : "border-gray-200 text-gray-600 hover:border-black"
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="border-t border-gray-200 mt-32">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            {/* Left: footer text */}
            <div className="flex flex-col gap-2">
              <p>{t("nav.footerSub")}</p>
              <p>{t("nav.footer")}</p>
            </div>

            {/* Center: social icons */}
            <div className="flex items-center gap-4">
              <a
                href="https://t.me/nkarich"
                target="_blank"
                rel="noreferrer"
                className="hover:text-black transition-colors"
                aria-label="Telegram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/nkarich_/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-black transition-colors"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 25 24"
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </a>
              <a
                href="mailto:laziza9765@gmail.com"
                className="hover:text-black transition-colors"
                aria-label="Email"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>
            </div>

            {/* Right: made by */}
            <div className="flex flex-col gap-2 items-end">
              <p>
                {t("nav.madeBy")}{" "}
                <a
                  href="https://webrunners.lt"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-black transition-colors underline"
                >
                  webrunners.lt
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
