const HtmlWebpackPlugin = require('html-webpack-plugin');
const { type } = require('os');
const path = require("path");

module.exports = {
  entry: {
    main: "./src/index.js",
    vendor: "./src/vendor.js"
},
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.[contenthash].js",
    clean: true
  },
    module: {
      rules: [
        
          {
            test: /\.html$/,
            use:["html-loader"]
          },
          {
            test: /\.(png|jpg|svg|gif|jpeg)$/,
            type:"asset/resource"
          }
      ],
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/index.html",
        inject: "body"
    })],
  };
