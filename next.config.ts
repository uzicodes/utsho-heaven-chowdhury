import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'skillicons.dev',
      },
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
      },
    ],
  },
};

export default nextConfig;
