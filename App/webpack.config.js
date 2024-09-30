const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const path = require('path');
const deps = require("./package.json").dependencies;

module.exports = (_, argv) => {
  const isDevelopment = argv.mode === 'development';

  return {
    output: {
      path: path.resolve(__dirname, 'dist'), // Ensure the output path is set
      filename: '[name].[contenthash].js',
      publicPath: isDevelopment
        ? "http://localhost:8081/" // Development publicPath
        : "https://your-production-domain.com/", // Production publicPath (replace with your production domain)
    },

    resolve: {
      extensions: [".tsx", ".ts", ".jsx", ".js", ".json", ".scss"],
    },

    devServer: {
      port: 8081, // Parent app runs on port 8080
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
        remotes: {
          // Dynamic remote URL depending on environment
          home: isDevelopment
            ? "home@http://localhost:8080/home-app.js" // Use localhost in development
            : "home@https://kicks-home.vercel.app/home-app.js", // Use the deployed URL in production
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
  };
};
