const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "donation-station.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "less-loader",
          },
        ],
      },
    ],
  },
  devServer: {
    openPage: "example.html",
    open: true,
  },
};
