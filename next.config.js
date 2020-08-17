const withSass = require('@zeit/next-sass');
const path = require('path');

module.exports = withSass({
  webpack: (config) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    return config
  },
})


// pensar sobre el import de imagenes