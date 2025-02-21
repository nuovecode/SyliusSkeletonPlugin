const path = require('path');
const Encore = require('@symfony/webpack-encore');
const pluginName = 'skeleton';

const getConfig = (pluginName, type) => {
  Encore.reset();

  Encore
  .setOutputPath(`public/build/wilma-digital/${pluginName}/${type}/`)
  .setPublicPath(`/build/wilma-digital/${pluginName}/${type}/`)
  .addEntry(`wilma-digital-${pluginName}-${type}`, path.resolve(__dirname, `./assets/${type}/entry.js`))
  .disableSingleRuntimeChunk()
  .cleanupOutputBeforeBuild()
  .enableSourceMaps(!Encore.isProduction())
  .enableSassLoader();

  const config = Encore.getWebpackConfig();
  config.name = `wilma-digital-${pluginName}-${type}`;

  return config;
}

Encore
.setOutputPath(`src/Resources/public/`)
.setPublicPath(`/public/`)
.addEntry(`wilma-digital-${pluginName}-shop`, path.resolve(__dirname, `./assets/shop/entry.js`))
.cleanupOutputBeforeBuild()
.disableSingleRuntimeChunk()
.enableSassLoader();

const distConfig = Encore.getWebpackConfig();
distConfig.name = `wilmaDigitalSkeleton`;

Encore.reset();

const shopConfig = getConfig(pluginName, 'shop');

module.exports = [shopConfig, distConfig];
