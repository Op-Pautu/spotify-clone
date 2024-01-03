/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pvqyanxtrpzublkpkkfh.supabase.co",
      },
    ],
  },
};

module.exports = nextConfig;
