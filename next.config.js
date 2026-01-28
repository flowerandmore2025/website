/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  // Enable Turbopack (Next.js 16 default)
  turbopack: {},
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
