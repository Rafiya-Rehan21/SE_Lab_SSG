/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // Ensures static export
  images: {
    unoptimized: true,  // Disable image optimization for static exports
  },
};

module.exports = nextConfig;
