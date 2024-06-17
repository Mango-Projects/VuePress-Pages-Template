import { searchPlugin } from "@vuepress/plugin-search";
import MdDefinePlugin from "vuepress-plugin-markdown-define2";

import { name } from "../../../package.json";

export const plugins = [
  searchPlugin(),
  MdDefinePlugin({
    __main_title__: name,
  }),
];
