const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackLoader = require('html-webpack-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const path = require('path')

const PATHS = {
  src: path.join(__dirname, '../src/index.js'),
  dist: path.join(__dirname, '../dist')
};

module.exports = () => ({
    entry: PATHS.src,
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader,
            {
              loader: require.resolve( 'css-loader' ), options: {url:false, sourceMap:true}
              },
              {
              loader: 'sass-loader', options: { sourceMap: true }
            }
          ]
          }
        ]
    },
    devtool: 'source-map',
   optimization: {
    removeAvailableModules: false,
      minimizer: [
        new TerserJSPlugin({
          terserOptions: {
            parse: {
              // we want terser to parse ecma 8 code. However, we don't want it
              // to apply any minfication steps that turns valid ecma 5 code
              // into invalid ecma 5 code. This is why the 'compress' and 'output'
              // sections only apply transformations that are ecma 5 safe
              // https://github.com/facebook/create-react-app/pull/4234
              ecma: 8
            },
            compress: {
              ecma       : 5,
              warnings   : false,
              // Disabled because of an issue with Uglify breaking seemingly valid code:
              // https://github.com/facebook/create-react-app/issues/2376
              // Pending further investigation:
              // https://github.com/mishoo/UglifyJS2/issues/2011
              comparisons: false,
              // Disabled because of an issue with Terser breaking valid code:
              // https://github.com/facebook/create-react-app/issues/5250
              // Pending futher investigation:
              // https://github.com/terser-js/terser/issues/120
              inline     : 2
            },
            mangle: {
              safari10: true
            },
            output: {
              ecma      : 5,
              comments  : false,
              // Turned on because emoji and regex is not minified properly using default
              // https://github.com/facebook/create-react-app/issues/2488
              ascii_only: true
            }
          },
          cache: true,
          parallel: true,
          sourceMap: true, // Must be set to true if using source-maps in production
        }),
        new OptimizeCSSAssetsPlugin({})
    ],
    runtimeChunk: true
    },
  plugins: [
      //minify css for production
    new MiniCssExtractPlugin({
        //minified filename
        filename: "style.css",
      }),
    new HtmlWebpackLoader({
        //make html file
        template:"./index.html"
      }),
       new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify(true),
            VERSION: JSON.stringify('1.2.0'),
            DEBUG: false
        })
      ]
})