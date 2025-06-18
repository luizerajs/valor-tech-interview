const HtmlWebpackPlugin = require("html-webpack-plugin");
const { withZephyr } = require("zephyr-webpack-plugin");
const {ModuleFederationPlugin} = require("webpack").container;
const path = require("path");

const LATEST_REMOTE_APP_URL = "https://t-web-latest-luiz-chaves-remote-valor-tech-interview--13210c-ze.zephyrcloud.app";

module.exports = (_, argv) => {
  const MODE = argv.mode || "development";
  const IS_PRODUCTION = MODE === "production";
  const REMOTE_APP_URL = IS_PRODUCTION ? LATEST_REMOTE_APP_URL : "http://localhost:3002";

  const config = {
    entry: "./src/index",
    mode: MODE,
    devServer: {
      static: path.join(__dirname, "dist"),
      port: 3001,
    },
    output: {
      publicPath: "auto",
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: "babel-loader",
          exclude: /node_modules/,
          options: {
            presets: [
              ["@babel/preset-react", { runtime: "automatic", development: !IS_PRODUCTION }]
            ],
          },
        },
      ],
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "shellApp",
        remotes: {
          remote: `remoteApp@${REMOTE_APP_URL}/remoteEntry.js`,
        },
        shared: {react: {singleton: true}, "react-dom": {singleton: true}},
      }),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
    ],
  };
  return IS_PRODUCTION ? withZephyr()(config) : config;
};