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
    { path: "/blog", label: t("nav.blog") },
    { path: "/contacts", label: t("nav.contacts") },
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
            <p>{t("nav.footer")}</p>
            <p>{t("nav.footerSub")}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
