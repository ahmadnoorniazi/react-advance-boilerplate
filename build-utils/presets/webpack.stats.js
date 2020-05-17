const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const config = require('../webpack.production');
const webpackMerge = require('webpack-merge')

module.exports = () => {
  return webpackMerge({
    plugins: [
      new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          openAnalyzer: true,
          generateStatsFile: true
      })
  ]
    },config)
};
