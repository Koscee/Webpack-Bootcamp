const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/
      },
      {
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
        test: /\.css$/
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        type: 'asset',
        parser: {
         dataUrlCondition: {
           maxSize: 40000 // 40kb
         }
       }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename:'style.css' })
  ]
};

module.exports = config;
