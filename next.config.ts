import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "cloudainary.com",
      "res.cloudinary.com",

    ],

  },
  async rewrites() {
    return [
      {
        source: '/api/:path*', // gọi từ FE
        destination: 'http://localhost:9222/api', // gọi thực sự
      },
    ]
  },
};

export default nextConfig;
