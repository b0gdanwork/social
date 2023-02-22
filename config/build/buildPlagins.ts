/* eslint-disable @typescript-eslint/no-unused-vars */
import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CopyPlugin from 'copy-webpack-plugin';

import { type BuildOptionsT } from './types';
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

function plaginsBuild ({ paths, isDev }: BuildOptionsT): webpack.WebpackPluginInstance[] {

  const plagins: webpack.WebpackPluginInstance[] = [
    new HtmlWebpackPlugin({ template: paths.html }),
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

  if (isDev) {
    plagins.push(new ReactRefreshWebpackPlugin({ overlay: false }))
    // plagins.push(new BundleAnalyzerPlugin())
  }

  return [
    ...plagins
  ]
}

export default plaginsBuild