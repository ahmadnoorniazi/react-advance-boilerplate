const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpackMerge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')
const modeConfig = env => require(`./build-utils/webpack.${env}`)(env)
const presetConfig = presets => require(`./build-utils/presets/webpack.${presets}`)(presets);

const PATHS = {
  src: path.join(__dirname, './src'),
  dist: path.join(__dirname, './dist')
};

module.exports = ({ mode = "production" , presets= []}) => {
  return webpackMerge({
    mode,
    output: {
      // the output bundle
      filename: 'js/bundle.[hash].js',
      // the output chunk bundle
      chunkFilename : 'js/[name].chunk.[hash].js',

      // output directory
      path: PATHS.dist,

      publicPath: '/'
      // necessary for HMR to know where to load the hot update chunks
    },
    optimization: {
      splitChunks: {
        chunks: "all",
        name: false,
        cacheGroups: {
            vendor: {
                name: 'vendors',
                test: /[\\/]node_modules[\\/]/,
            }
        }
      },
      runtimeChunk: true

    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js','.jsx']
    },
    module: {
      rules: [{
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
          use: [
            'babel-loader'
          ],
          exclude: /node_modules/
      },
        // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
        {
          test: /\.(ts|tsx)$/,
          loader: ['awesome-typescript-loader', 'tslint-loader']
        },
          // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
        { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },

        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          loader: 'url-loader',
          options: {
              limit: 8000, // Convert images < 8kb to base64 strings
              name: '[name].[ext]',
              publicPath: 'images/' //path for images directory
          }
      }, {
          test: /\.(pdf|docx)$/,
          loader: 'file-loader?name=documents/[name].[ext]',
      }
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({
        template:"./index.html"
      }),
      new webpack.ProgressPlugin(),
      new CleanWebpackPlugin()
    ]
  }, modeConfig(mode),
  presets.length && presetConfig(presets))

};