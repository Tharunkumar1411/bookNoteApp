const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const path = require('path');
const deps = require("./package.json").dependencies;

module.exports = () => (
  {
  output: {
    path: path.resolve(__dirname, 'dist'), // Output to 'dist'
    filename: '[name].[contenthash].js',
    publicPath: "http://localhost:8080/", // Ensure the public path matches the parent app's address
  },

    resolve: {
      extensions: [".tsx", ".ts", ".jsx", ".js", ".json", ".scss"],
    },

    devServer: {
      port: 8081,
      historyApiFallback: true,
    },

    module: {
      rules: [
        {
          test: /\.m?js/,
          type: "javascript/auto",
          resolve: {
            fullySpecified: false,
          },
        },
        {
          test: /\.(css|s[ac]ss)$/i,
          use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
        },
        {
          test: /\.(ts|tsx|js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.(gif|svg|jpg|png|jpeg)$/,
          loader: 'file-loader',
        }
      ],
    },

    plugins: [
      new ModuleFederationPlugin({
        name: "parentApp",
        remotes: "home@https://kicks-home.vercel.app/home-app.js" ,
        shared: {
          ...deps,
          react: {
            singleton: true,
            requiredVersion: deps.react,
          },
          "react-dom": {
            singleton: true,
            requiredVersion: deps["react-dom"],
          },
        },
      }),
      new HtmlWebPackPlugin({
        template: "./src/index.html",
      }),
      new Dotenv(),
    ],
  });