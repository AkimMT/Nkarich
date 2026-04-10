import { defineConfig } from "sanity";
import { StructureContext } from "sanity/structure";

export default defineConfig({
  name: "default",
  title: "Nkarich",

  projectId: "4tvr9alr", // 👈 replace this
  dataset: "production",

  plugins: [structuredContentPlugin()],

  schema: {
    types: [],
  },

  basePath: "/studio",
});
function structuredContentPlugin(): any {
  throw new Error("Function not implemented.");
}
