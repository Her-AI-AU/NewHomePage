/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true,
    },
    basePath: process.env.NODE_ENV === 'development' ? '' : '/NewHomePage',
    assetPrefix: process.env.NODE_ENV === 'development' ? '' : '/NewHomePage/'
  }
  
  module.exports = nextConfig