const path = require("path");

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    fallback: {
      util: require.resolve("util/"),
    },
  };
  return config;
};
