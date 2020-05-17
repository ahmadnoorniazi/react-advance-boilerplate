const webpackMerge = require('webpack-merge');
const common = require('./build-utils/webpack.base');
const modeConfig = (env) => require(`./build-utils/webpack.${env}.js`);
const presetConfig = (presets) => require(`./build-utils/presets/webpack.${presets}.js`)(presets);

module.exports = ({
  mode = 'production', presets = [],
}) => webpackMerge(common, modeConfig(mode),
  presets.length && presetConfig(presets));

