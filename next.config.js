/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  basePath: '/dist',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['https://www.qarirgenerator.com'],
  },
}

module.exports = nextConfig
