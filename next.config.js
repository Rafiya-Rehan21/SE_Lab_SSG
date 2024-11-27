/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // Ensures static export
  basePath: '/SE_Lab_SSG',  // Add your repository name here
  images: {
    unoptimized: true,  // Disable image optimization for static exports
  },
};

module.exports = nextConfig;
