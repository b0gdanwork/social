/* eslint-disable @typescript-eslint/no-unused-vars */
import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import CopyPlugin from 'copy-webpack-plugin'

import { type BuildOptionsT } from './types'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import CircularDependencyPlugin from 'circular-dependency-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'

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
    }),
    new ForkTsCheckerWebpackPlugin()
  ]

  if (isDev) {
    plagins.push(new ReactRefreshWebpackPlugin({ overlay: true }))
    plagins.push(new CircularDependencyPlugin({
      // exclude detection of files based on a RegExp
      exclude: /a\.js|node_modules/,
      // include specific files based on a RegExp
      // include: /dir/,
      // add errors to webpack instead of warnings
      failOnError: true,
      // allow import cycles that include an asyncronous import,
      // e.g. via import(/* webpackMode: "weak" */ './file.js')
      allowAsyncCycles: false,
      // set the current working directory for displaying module paths
      cwd: process.cwd()
    }))
    // plagins.push(new BundleAnalyzerPlugin())
  }

  return [
    ...plagins
  ]
}

export default plaginsBuild
