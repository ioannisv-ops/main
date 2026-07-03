import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  images: {
    unoptimized: true,
  },

  trailingSlash: true,

  // Required for GitHub Pages project site
  basePath: "/main",
  assetPrefix: "/main/",
};

export default nextConfig;