const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  webpack: function (config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '~': __dirname,
    };
    return config;
  }
};
