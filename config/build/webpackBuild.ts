import DevServerBuild from './buildDevServer'
import plaginsBuild from './buildPlagins'
import resolvesBuild from './buildResolves'
import buildRules from './buildRules'
import { type BuildOptionsT } from './types'

export function WebpackBuild (options: BuildOptionsT) {

  const { isDev, mode, paths } = options

  return {
    mode,
    entry: paths.srcJs,
    output: {
      filename: '[name][contenthash].js',
      assetModuleFilename: 'assets/[hash][ext][query]',
      path: paths.build,
      clean: true,
      publicPath: '/'
    },
    module: {
      rules: buildRules(options)
    },
    resolve: resolvesBuild(options),
    plugins: plaginsBuild(options),
    devtool: isDev ? 'eval-cheap-module-source-map' : undefined,
    devServer: DevServerBuild(options)
  }
}
