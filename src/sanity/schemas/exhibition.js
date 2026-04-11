export default {
  name: "exhibition",
  title: "Выставка",
  type: "document",
  fields: [
    {
      name: "title_ru",
      title: "Название (RU) *",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "title_en",
      title: "Title (EN)",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title_ru" },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "date",
      title: "Дата",
      type: "date",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "location",
      title: "Место",
      type: "string",
    },
    {
      name: "description_ru",
      title: "Описание (RU)",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "description_en",
      title: "Description (EN)",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "images",
      title: "Изображения",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    },
  ],
};
