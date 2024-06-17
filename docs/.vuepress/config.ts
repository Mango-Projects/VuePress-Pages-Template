import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";

import { theme } from "./definitions/theme";
import { plugins } from "./definitions/plugins";

import { repository, name, description } from "../../package.json";

if (!repository) {
  throw new Error("repository field is required in package.json");
}

export default defineUserConfig({
  base: /\.github\.io\/?/.test(repository) ? "/" : `/${repository.split("/").at(-1)}/`,
  bundler: viteBundler(),

  theme,
  plugins,
  title: name,
  description: description ?? "",

  head: [["meta", { charset: "utf-8" }]],
});
