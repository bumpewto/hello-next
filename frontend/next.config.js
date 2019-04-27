const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");
const withPlugins = require("next-compose-plugins");
const withOffline = require("next-offline");

const nextConfig = {
    target: "serverless",
};

module.exports = withPlugins(
    [
        // add a plugin with specific configuration
        [
            withBundleAnalyzer,
            {
                analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
                analyzeBrowser: ["browser", "both"].includes(process.env.BUNDLE_ANALYZE),
                bundleAnalyzerConfig: {
                    server: {
                        analyzerMode: "static",
                        reportFilename: "../bundles/server.html",
                    },
                    browser: {
                        analyzerMode: "static",
                        reportFilename: "../bundles/client.html",
                    },
                },
            },
        ],
        [
            withOffline,
            {
                generateInDevMode: true,
                workboxOpts: {
                    swDest: "static/sw.js",
                    clientsClaim: true,
                    skipWaiting: true,
                    globPatterns: ["static/**/*"],
                    globDirectory: ".",
                    runtimeCaching: [
                        {
                            urlPattern: /.*\.(?:png|jpg|jpeg|svg|gif)/,
                            handler: "cacheFirst",
                            options: {
                                cacheName: "image-cache",
                                cacheableResponse: {
                                    statuses: [0, 200],
                                },
                            },
                        },
                        {
                            urlPattern: /^https?.*/,
                            handler: "networkFirst",
                            options: {
                                cacheName: "https-calls",
                                networkTimeoutSeconds: 15,
                                expiration: {
                                    maxEntries: 150,
                                    maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
                                },
                                cacheableResponse: {
                                    statuses: [0, 200],
                                },
                            },
                        },
                    ],
                },
            },
        ],
    ],
    nextConfig
);
