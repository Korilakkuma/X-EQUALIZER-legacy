/* eslint-disable @typescript-eslint/no-var-requires */
const TerserPlugin         = require('terser-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin   = require('css-minimizer-webpack-plugin');
/* eslint-enable @typescript-eslint/no-var-requires */

const terserPlugin = new TerserPlugin({
  terserOptions: {
    compress: {
      drop_console: true
    },
    keep_classnames: /^.*?Processor$/
  }
});

module.exports = {
  mode: 'development',
  entry: {
    chrome: ['./src/chrome.ts', './src/styles/app.css'],
    firefox: ['./src/firefox.ts', './src/styles/app.css']
  },
  output: {
    globalObject: 'this',
    filename: '[name].js',
    path: `${__dirname}/dist`,
    publicPath: '/dist/',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          MiniCSSExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts']
  },
  plugins: [
    new MiniCSSExtractPlugin({
      filename: 'app.css'
    })
  ],
  optimization: {
    minimize: process.env.NODE_ENV === 'production',
    minimizer: [
      terserPlugin,
      new CssMinimizerPlugin()
    ]
  },
  devtool: 'source-map'
};
