/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.thumbs.redditmedia.com",
      },
      {
        protocol: "https",
        hostname: "*.redd.it",
      },
      {
        protocol: "https",
        hostname: "*.redditmedia.com",
      },
      {
        protocol: "https",
        hostname: "*.redditstatic.com",
      },
      {
        protocol: "https",
        hostname: "media.makeameme.org",
      },
      {
        protocol: "https",
        hostname: "*.imgur.com",
      },
      {
        protocol: "https",
        hostname: "scontent.fias1-1.fna.fbcdn.net",
      },
    ],
  },
};

export default nextConfig;
