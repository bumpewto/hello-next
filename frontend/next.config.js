module.exports = {
  target: "serverless"
};

// Serving Service Worker

const withOffline = moduleExists("next-offline") ? require("next-offline") : {};

const nextConfig = {
  workboxOpts: {
    swDest: "static/service-worker.js",
    // Set Prefix for serving serviceworker.js from /static
    globPatterns: ["frontend/static/**/*"],
    globDirectory: ".",
    modifyUrlPrefix: {
      frontend: assetPrefix
    },
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: "networkFirst",
        options: {
          cacheName: "https-calls",
          networkTimeoutSeconds: 15,
          expiration: {
            maxEntries: 150,
            maxAgeSeconds: 30 * 24 * 60 * 60 // 1 month
          },
          cacheableResponse: {
            statuses: [0, 200]
          }
        }
      }
    ]
  }
};

module.exports = moduleExists("next-offline")
  ? withOffline(nextConfig)
  : nextConfig;

function moduleExists(name) {
  try {
    return require.resolve(name);
  } catch (error) {
    return false;
  }
}
