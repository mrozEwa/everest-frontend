/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["images.ctfassets.net"],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
