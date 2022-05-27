/* eslint-disable */
const path = require('path');
module.exports = (env = {}) => {
  return {
    entry: {
      'button-excercise': './src/Button.ts'
    },
    module: {
      rules: [
        {
          test: /\.ts?$/,
          use: 'ts-loader'
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
      filename: 'bundle.min.js',
      path: path.resolve(__dirname, 'dist'),
    },
  };
};
