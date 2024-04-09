/**
 * @type {import('next').NextConfig}
 */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  basePath: isProd ? "/movement-undercommons" : "",
  exportPathMap: async function () {
    return {
      "/": { page: "/" }, // Example entry point
      // Add additional paths if needed
    };
  },

  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,

  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,

  // Optional: Change the output directory `out` -> `dist`
  distDir: "dist",

  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
