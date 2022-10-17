/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['logodownload.org', 'cdn-icons-png.flaticon.com' , 'media-exp1.licdn.com', 'i.ibb.co', 'www.tutorsvalley.com']
  }
}

module.exports = nextConfig
