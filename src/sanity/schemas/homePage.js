export default {
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    {
      name: "heroText",
      title: "Hero Text",
      type: "string",
    },
    {
      name: "tagline",
      title: "Tagline",
      type: "text",
    },
  ],
  __experimental_actions: ["update", "publish"],
};
