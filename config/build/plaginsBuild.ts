import path from "path"
import webpack from "webpack"
import MiniCssExtractPlugin from "mini-css-extract-plugin";

import { BuildOptionsT } from './types';
import HtmlWebpackPlugin from "html-webpack-plugin"


function plaginsBuild({paths}:BuildOptionsT):webpack.WebpackPluginInstance[] {
  return [
    new webpack.ProgressPlugin({}),
    new HtmlWebpackPlugin({ template: paths.html}),
    new MiniCssExtractPlugin({filename: '[name][contenthash].css', chunkFilename: '[name][contenthash].css'})
  ]
}

export default plaginsBuild