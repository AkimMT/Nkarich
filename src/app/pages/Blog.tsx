import { useTranslation } from "react-i18next";

export function Blog() {
  const { t } = useTranslation();

  const posts = [
    {
      title: t("blog.posts.0.title"),
      date: t("blog.posts.0.date"),
      excerpt: t("blog.posts.0.excerpt"),
      category: t("blog.posts.0.category"),
    },
    {
      title: t("blog.posts.1.title"),
      date: t("blog.posts.1.date"),
      excerpt: t("blog.posts.1.excerpt"),
      category: t("blog.posts.1.category"),
    },
    {
      title: t("blog.posts.2.title"),
      date: t("blog.posts.2.date"),
      excerpt: t("blog.posts.2.excerpt"),
      category: t("blog.posts.2.category"),
    },
    {
      title: t("blog.posts.3.title"),
      date: t("blog.posts.3.date"),
      excerpt: t("blog.posts.3.excerpt"),
      category: t("blog.posts.3.category"),
    },
    {
      title: t("blog.posts.4.title"),
      date: t("blog.posts.4.date"),
      excerpt: t("blog.posts.4.excerpt"),
      category: t("blog.posts.4.category"),
    },
    {
      title: t("blog.posts.5.title"),
      date: t("blog.posts.5.date"),
      excerpt: t("blog.posts.5.excerpt"),
      category: t("blog.posts.5.category"),
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl mb-4 tracking-tight">
        {t("blog.title")}
      </h1>
      <p className="text-gray-400 mb-12 md:mb-16">{t("blog.subtitle")}</p>

      <div className="space-y-12 md:space-y-16">
        {posts.map((post, index) => (
          <article
            key={index}
            className="border-b border-gray-200 pb-12 md:pb-16 last:border-b-0"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-sm">
                <span className="text-gray-400">{post.date}</span>
                <span className="text-gray-300">·</span>
                <span className="text-gray-400 uppercase tracking-wider">
                  {post.category}
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl tracking-tight hover:text-gray-600 cursor-pointer transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                {post.excerpt}
              </p>
              <button className="text-sm uppercase tracking-wider hover:text-gray-600 transition-colors">
                {t("blog.readMore")}
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
