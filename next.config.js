/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true, 
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io' ,
        port: '', 
      },
    ],
    domains: ['images.unsplash.com'],
  },
}

module.exports = nextConfig
