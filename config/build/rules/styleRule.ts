import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import path from 'path'
import { type BuildOptionsT } from '../types'

const styleRuleBuild = ({ isDev, paths }: BuildOptionsT) => ({
  test: /\.(sa|sc|c)ss$/,
  sideEffects: true,
  use: [
    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        modules: {
          auto: (resPath: string) => Boolean(resPath.includes('.module.')),
          localIdentName: isDev
            ? '[path][name]__[local]--[hash:base64:5]'
            : '[hash:base64:8]'
        }
      }
    },
    'postcss-loader',
    {
      loader: 'sass-loader',
      options: {
        sourceMap: isDev
      }
    }
  ]
})

export default styleRuleBuild
