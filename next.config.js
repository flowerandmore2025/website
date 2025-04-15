/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  // Ensure static assets are properly handled
  webpack(config) {
    return config;
  },
  // Enable static exports
  output: 'export',
  // Configure trailing slash behavior
  trailingSlash: true,
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;