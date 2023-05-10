/* eslint-disable @typescript-eslint/no-unused-vars */
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import type webpack from 'webpack'
import scssRuleBuild from './rules/styleRule'
import { type BuildOptionsT } from './types'

function buildRules (BuildOptions: BuildOptionsT): webpack.RuleSetRule[] {

  const tsRule = {
    test: /\.(tsx|ts)?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  }

  const babelRule = {
    test: /\.(js|jsx|tsx|ts)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader'
    }
  }

  const svgRule = {
    test: /\.svg$/,
    use: ['@svgr/webpack']
  }

  const jsonRule = {
    test: /\.json$/,
    loader: 'json-loader'
  }

  const imgsRule = {
    test: /\.(png|jpe?g|gif|svg)$/i,
    loader: 'file-loader',
    options: {
      name (resourcePath: string) {
        let path = resourcePath.toString()
        path = resourcePath.toString().slice(path.indexOf('assets'), path.lastIndexOf('\\'))
          .replace('\\', '/')

        return `${path}/[contenthash].[ext]`

      }
    }
  }

  return [
    jsonRule,
    imgsRule,
    // svgRule,
    scssRuleBuild(BuildOptions),
    babelRule,
    // BuildOptions.isDev ? tsRule : null as any
  ]

}

export default buildRules
