/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    unoptimized: true,
  },
  // Ensure static assets are properly handled
  webpack(config) {
    return config;
  },
};

module.exports = nextConfig;