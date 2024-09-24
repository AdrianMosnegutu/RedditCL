/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.thumbs.redditmedia.com",
      },
    ],
  },
};

export default nextConfig;
