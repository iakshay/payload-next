/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  rewrites: async () => {
    if (process.env.NODE_ENV !== "production") {
      return [
        {
          source: "/admin(.*)",
          destination: "/api/admin",
        },
        {
          source: "/__webpack_hmr",
          destination: "/api/__webpack_hmr",
        },
      ];
    } else {
      return [
        {
          source: "/admin(.*)",
          destination: "/admin/index.html",
        }
      ];
    }
  },
};

module.exports = nextConfig;
