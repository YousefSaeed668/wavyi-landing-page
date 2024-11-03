/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.wavyi.com",
      },
    ],
  },
};

export default nextConfig;
