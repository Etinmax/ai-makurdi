import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 eslint: {
    ignoreDuringBuilds: true, // ← skips ALL eslint errors during build
  },};

export default nextConfig;
