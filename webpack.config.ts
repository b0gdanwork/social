import * as path from 'path';
import * as webpack from 'webpack';
import 'webpack-dev-server';

const config: webpack.Configuration = {
  mode: 'production',
  entry: './index.ts',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'index.bundle.js',
  },
};

export default config;