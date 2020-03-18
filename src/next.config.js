/* eslint-disable */
const withCss = require('@zeit/next-css');
const withImages = require('next-images');

module.exports = withImages(withCss({
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '~': __dirname // eslint-disable-line
    };

    return config
  },
}));
