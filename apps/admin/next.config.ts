import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@fie-api/ui"],
  output: "standalone",
};

export default nextConfig;
