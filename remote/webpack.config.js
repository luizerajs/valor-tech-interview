const HtmlWebpackPlugin = require('html-webpack-plugin');
const { withZephyr } = require("zephyr-webpack-plugin");
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

module.exports = (_, argv) => {
  const MODE = argv.mode || 'development';
  const IS_PRODUCTION = MODE === 'production';
  const config = {
    entry: './src/index',
    mode: MODE,
    devServer: {
      static: path.join(__dirname, 'dist'),
      port: 3002,
      hot: false,
      liveReload: true,
      watchFiles: ['src/**/*', 'public/**/*'],
    },
    output: {
      publicPath: 'auto',
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
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
      // To learn more about the usage of this plugin, please visit https://webpack.js.org/plugins/module-federation-plugin/
      new ModuleFederationPlugin({
        name: 'remoteApp',
        filename: 'remoteEntry.js',
        exposes: {
          './App': './src/App',
        },
        shared: { react: { singleton: true }, 'react-dom': { singleton: true } },
      }),
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
    ],
  };
  return IS_PRODUCTION ? withZephyr()(config) : config;
};