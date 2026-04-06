export default {
  name: "aboutPage",
  title: "About Page",
  type: "document",
  fields: [
    {
      name: "bio",
      title: "Biography",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "photo",
      title: "Photo",
      type: "image",
      options: { hotspot: true },
    },
  ],
  __experimental_actions: ["update", "publish"],
};
