import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CopyPlugin from 'copy-webpack-plugin';

import { type BuildOptionsT } from './types';
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

function plaginsBuild ({ paths, isDev }: BuildOptionsT): webpack.WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({ template: paths.html }),
    new ReactRefreshWebpackPlugin({ overlay: false }),
    new webpack.ProgressPlugin({}),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
    new webpack.DefinePlugin({ __IS_DEV__: JSON.stringify(isDev) }),
    new CopyPlugin({
      patterns: [
        { from: paths.publicFolder + '/locales', to: 'locales' }
      ]
    })
  ]
}

export default plaginsBuild