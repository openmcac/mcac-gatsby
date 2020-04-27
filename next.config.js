const withCSS = require("@zeit/next-css");
module.exports = withCSS({
  webpack(config, options) {
    config.module.rules.push({
      test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
      use: {
        loader: "url-loader",
        options: {
          limit: 8192,
          publicPath: "/_next/static/",
          outputPath: "static/",
          name: "[name].[ext]",
        },
      },
    });
    return config;
  },
});
