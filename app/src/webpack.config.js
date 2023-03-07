const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'web',
  externals: [nodeExternals()],
};
