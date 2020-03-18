/* eslint-disable */
const withCss = require('@zeit/next-css');
const withOptimizedImages = require('next-optimized-images');

module.exports = withOptimizedImages(withCss({
  webpack: (config, { isServer }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '~': __dirname // eslint-disable-line
    };

    return config
  },
}));
