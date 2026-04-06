import { defineConfig } from "sanity";
import * as SanityStructure from "sanity/structure";
import { schemaTypes } from "./src/sanity/schemas/index";

const { structureTool } = SanityStructure;

export default defineConfig({
  name: "default",
  title: "Nkarich Studio",
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  plugins: [structureTool()],
  schema: { types: schemaTypes },
  basePath: "/studio",
});
