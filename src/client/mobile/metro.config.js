const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const path = require('path');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const extraNodeModules = {
  common: path.resolve(path.join(__dirname, '../common')),
};
const watchFolders = [path.resolve(path.join(__dirname, '/../common'))];

const config = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  resolver: {
    extraNodeModules,
  },
  watchFolders,
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
