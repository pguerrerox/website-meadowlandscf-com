const withSass = require('@zeit/next-sass');
const path = require('path');

module.exports = withSass({
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    },
    config.module.rules.push({
      test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
      loader: require.resolve("url-loader")
    });

    return config
  },
})


// pensar sobre el import de imagenes