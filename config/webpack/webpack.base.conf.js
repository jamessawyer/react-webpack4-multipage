/* eslint-disable */
const entry = require('./webpack.entry.conf');

let newEntry = {};

for (let name in entry) {
  newEntry[name] = entry[name][0];
}

let config = {
  entry: newEntry,
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css', '.pcss'],
  },
};

module.exports = config;
