import path from "path"
import webpack from "webpack"
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CopyPlugin from "copy-webpack-plugin";

import { BuildOptionsT } from './types';
import HtmlWebpackPlugin from "html-webpack-plugin"


function plaginsBuild({paths, isDev}:BuildOptionsT):webpack.WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({ template: paths.html}),
    new webpack.ProgressPlugin({}),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new webpack.DefinePlugin({ '__IS_DEV__': JSON.stringify(isDev)}),
    new CopyPlugin({
      patterns: [
        { from: paths.publicFolder + '/locales', to: "locales" },
      ],
    })
  ]
}

export default plaginsBuild