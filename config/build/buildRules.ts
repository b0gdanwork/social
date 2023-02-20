import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import type webpack from 'webpack'
import { type BuildOptionsT } from './types'

function buildRules ({ isDev }: BuildOptionsT): webpack.RuleSetRule[] {

  // const tsRule = {
  //   test: /\.(tsx|ts)?$/,
  //   use: 'ts-loader',
  //   exclude: /node_modules/
  // }

  const babelRule = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          [
            'i18next-extract',
            {
              locales: ['ru', 'en'],
              keyAsDefaultValue: true
            }
          ]
        ]
      }
    }
  };

  const scssRule = {
    test: /\.(sa|sc|c)ss$/,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resourcePath: string) => resourcePath.includes('.module.'),
            localIdentName: isDev ? '[name]__[path]--[hash:base64:5]' : '[hash:base64:5]'
          }
        }
      },
      'sass-loader'
    ]
  }

  const svgRule = {
    test: /\.svg$/,
    use: ['@svgr/webpack']
  }

  const imgRule = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader'
      }
    ]
  }

  const jsonRule = {
    test: /\.json$/,
    loader: 'json-loader'
  }

  return [
    jsonRule,
    svgRule,
    imgRule,
    babelRule,
    // tsRule,
    scssRule
  ]

}

export default buildRules