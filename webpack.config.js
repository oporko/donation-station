const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'donation-station.js',
    path: path.resolve(__dirname, 'dist'),
  },
};