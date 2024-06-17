import { defaultTheme } from "@vuepress/theme-default";

export const theme = defaultTheme({
  logo: "/images/logo.png",
  logoAlt: "",

  colorMode: "dark",
  colorModeSwitch: true,

  editLinkPattern: ":repo/edit/:branch/:path",

  lastUpdated: true,
  contributors: true,
});
