const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    main: "./src/index.js",
  },
  output: {
    filename: "[name]-[contenthash].js",
    path: path.resolve(__dirname, "../", "build"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(sass|scss)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpg|png|svg|gif|jpeg|webp)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name][contenthash:6].[ext]",
              outputPath: "images",
            },
          },
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                quality: 70,
                progressive: true,
              },
            },
          },
        ],
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            ["@babel/preset-env", { useBuiltIns: "usage", corejs: "2.0.0" }],
          ],
          plugins: ["@babel/plugin-proposal-class-properties"],
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "src/templates/template.html",
      title: "Filip Sojecki | Frontend developer",
    }),
    new MiniCssExtractPlugin({
      filename: "[name]-[contenthash:4].css",
    }),
    new CopyPlugin([
      {
        from: "public/images",
        to: "images",
      },
    ]),
  ],
};
