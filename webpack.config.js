const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "public"),
    clean: true,
  },

  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },

  watch: true,

  module: {
    rules: [
      // {
      //   exclude: /node_modules/,
      //   test: /\.(j|t)s(x)?$/,
      //   loaders: ["babel-loader", "ts-loader"],
      // },
      {
        exclude: /node_modules/,
        test: /\.(j|t)s(x)?$/,
        use: [
          {
            loader: "babel-loader",
            // babel.config.json이 존재하고 내용이 적혀 있으면 option을 적으면 안됨. 만약 babel.config.json 파일이 존재하지 않으면 여기다 적을 것.
            // options: {
            //   presets: [["@babel/preset-react", { runtime: "automatic" }]],
            // },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/src/index.html",
    }),
  ],
};
