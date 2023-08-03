import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

const config = defineConfig({
  projectId: "ro4mg4d0",
  dataset: "production",
  title: "Jonjo.io",
  apiVersion: "2023-08-03",
  basePath: "/admin",
  plugins: [deskTool()],
});

export default config;
