const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const deps = require("./package.json").dependencies;
const path = require("path");

module.exports = () => ({
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    publicPath: "https://kicks-app-two.vercel.app/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json", ".scss"],
  },

  devServer: {
    port: 8081, // Parent app runs on a different port
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
      name: "parentApp", // Name of the parent app
      remotes: {
        home: "home@https://kicks-home.vercel.app/home-app.js", // Reference your deployed microfrontend
      },
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
