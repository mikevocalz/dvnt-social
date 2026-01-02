<<<<<<< HEAD
=======
const path = require('path');
>>>>>>> pr-2
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');
 
const config = getDefaultConfig(__dirname)
<<<<<<< HEAD
 
module.exports = withNativeWind(config, { input: './global.css' })
=======

config.watchFolders = [
  path.resolve(__dirname, '../../packages/app'),
];

config.resolver.extraNodeModules = {
  ...(config.resolver.extraNodeModules || {}),
  app: path.resolve(__dirname, '../../packages/app'),
};
 
module.exports = withNativeWind(config, { input: './global.css' })
>>>>>>> pr-2
