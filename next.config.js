/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Ensures static export
  basePath: process.env.NODE_ENV === 'production' ? '/SE_Lab_SSG' : '', // Apply basePath only in production
  images: {
    unoptimized: true, // Disable image optimization for static exports
  },
};

module.exports = nextConfig;
