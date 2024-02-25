/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.worldweatheronline.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
