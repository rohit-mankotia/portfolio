import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export", // Needed for `next export`
  images: {
    unoptimized: true, // GitHub Pages can't handle Next.js image optimization
  },
  // basePath: "/portfolio", // Replace with your repo name
  // assetPrefix: "/portfolio/",
};

export default nextConfig;
