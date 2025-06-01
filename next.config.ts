import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  assetPrefix: process.env.ASSET_PREFIX,
  basePath: "/portfolio2",
};

export default nextConfig;
