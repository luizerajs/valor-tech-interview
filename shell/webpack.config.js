const HtmlWebpackPlugin = require("html-webpack-plugin");
const { withZephyr } = require("zephyr-webpack-plugin");
const {ModuleFederationPlugin} = require("webpack").container;
const ExternalTemplateRemotesPlugin = require("external-remotes-plugin");
const path = require("path");

const MODE = process.env.NODE_ENV || "development";
const IS_PRODUCTION = MODE === "production";

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
        remoteApp: "remoteApp@[remoteAppUrl]/remoteEntry.js",
      },
      shared: {react: {singleton: true}, "react-dom": {singleton: true}},
    }),
    new ExternalTemplateRemotesPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};

module.exports = IS_PRODUCTION ? withZephyr()(config) : config;