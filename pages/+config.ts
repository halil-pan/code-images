import vikeReact from "vike-react/config";
import type { Config } from "vike/types";
import Layout from "../layouts/LayoutDefault.js";

// Default config (can be overridden by pages)
// https://vike.dev/config

export default {
  // https://vike.dev/Layout
  Layout,
  ssr: false,
  // https://vike.dev/head-tags
  title: "tw code image",
  description: "show your code with tw style",

  extends: vikeReact,
} satisfies Config;
