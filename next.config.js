/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true,
    },
    basePath: '/NewHomePage',
    assetPrefix: '/NewHomePage/'
  }
  
  module.exports = nextConfig