import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";

import { theme } from "./definitions/theme";
import { plugins } from "./definitions/plugins";

import { repository, name, description } from "../../package.json";

if (!repository) {
  throw new Error("repository field is required in package.json");
}

let base: "/" | `/${string}/` | undefined;

if (!/\.github\.io\/?/.test(repository)) {
  let repo = repository.split("/").filter(Boolean).at(-1);
  if (repo === undefined) {
    throw new Error("repository field in package.json is invalid");
  }
  base = `/${repo}/`;
}

export default defineUserConfig({
  base,
  bundler: viteBundler(),

  theme,
  plugins,
  title: name,
  description: description ?? "",

  head: [["meta", { charset: "utf-8" }]],
});
