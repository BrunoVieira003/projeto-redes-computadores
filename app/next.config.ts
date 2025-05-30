import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost'] // ou similar, dependendo da versão
    },
  }
};

export default nextConfig;
