const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
  {
    mode: 'development',
    entry: {
      app: [
        '@babel/polyfill',
        './src/index.js',
      ],
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/[name].js',
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules\/.*/,
          loader: 'babel-loader',
          query: {
            presets: [
              [
                '@babel/preset-env',
              ],
              [
                '@babel/preset-react',
              ],
            ],
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: `${__dirname}/src/index.html`,
        hash: true,
      }),
    ],
  },
];
