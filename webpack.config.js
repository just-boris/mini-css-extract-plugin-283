const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/styles.css",
  // mode: "production",
  mode: "none",
  // devtool: "eval",
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.css"
    }),
    new webpack.NamedModulesPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  }
};
