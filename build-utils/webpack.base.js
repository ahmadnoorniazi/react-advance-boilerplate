
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const paths = require('./paths');

module.exports = ({
  mode: process.env.NODE_ENV || 'production',
  output: {
    // the output bundle
    filename: process.env.NODE_ENV === 'production' ? 'js/[name].[contenthash].js' : 'js/[name].js',
    // the output chunk bundle
    chunkFilename: process.env.NODE_ENV === 'production' ? 'js/[name].[contenthash].chunk.js' : 'js/[name].chunk.js',
  
    // output directory
    path: paths.outputPath,
  
    publicPath: paths.publicUrlOrPath,
    // necessary for HMR to know where to load the hot update chunks
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['*', '.js', '.jsx', '.css', '.scss'],
  },
  
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/,
      },
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      {
        test: /\.(ts|tsx)$/,
        loader: ['awesome-typescript-loader', 'tslint-loader'],
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: 'pre', test: /\.js$/, loader: 'source-map-loader',
      },
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: require.resolve('url-loader'),
        options: {
          limit: 10000,
          name: 'images/[name].[hash:8].[ext]',
        },
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(pdf|docx)$/,
        loader: 'file-loader?name=documents/[name].[ext]',
      },
    ],
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

            // npm package names are URL-safe, but some servers don't like @ symbols
            return `npm.${packageName.replace('@', '')}`;
          },
        },
      },
    },
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin(), // so that file hashes don't change unexpectedly
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: paths.appHtml,
    }),
    new Dotenv(),
  ],
});
