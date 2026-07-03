import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: isGithubPages ? "export" : undefined,

  images: {
    unoptimized: isGithubPages,
  },

  trailingSlash: isGithubPages,

  basePath: isGithubPages ? "/main" : "",
  assetPrefix: isGithubPages ? "/main/" : "",
};

export default nextConfig;