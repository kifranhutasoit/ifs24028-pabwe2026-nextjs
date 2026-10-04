import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  async rewrites() {
    return [
      {
        source: "/api-proxy/:path*",
        destination: "https://open-api.delcom.org/api/v1/:path*",
      },
    ];
  },
};

export default nextConfig;