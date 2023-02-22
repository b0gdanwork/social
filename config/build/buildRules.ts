import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import type webpack from 'webpack'
import { type BuildOptionsT } from './types'

function buildRules ({ isDev, paths }: BuildOptionsT): webpack.RuleSetRule[] {

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
    test: /\.(png|jpe?g|gif)$/i,
    loader: 'file-loader',
    options: {
      name (resourcePath: string) {
        let path = resourcePath.toString()
        path = resourcePath.toString().slice(path.indexOf('assets'), path.lastIndexOf('\\'))
          .replace('\\', '/')

        return `${path}/[contenthash].[ext]`;

      }
    }
  }

  return [
    jsonRule,
    imgsRule,
    svgRule,
    scssRule,
    babelRule
    // tsRule,
  ]

}

export default buildRules