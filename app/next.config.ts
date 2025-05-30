import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  experimental: {
    serverActions: {
      originCheck: false, // ou similar, dependendo da versão
    },
  }
};

export default nextConfig;
