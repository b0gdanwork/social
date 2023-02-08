import DevServerBuild from './buildDevServer';
import plaginsBuild from './buildPlagins';
import resolvesBuild from './buildResolves';
import buildRules from './buildRules';
import { BuildOptionsT } from './types';


export function WebpackBuild(options:BuildOptionsT) {

  const {isDev, mode, paths} = options

  return {
    mode: mode,
    entry: paths.srcJs,
    resolve: resolvesBuild(options),
    devtool: isDev ? 'inline-source-map': undefined,
    output: {
      filename: '[name][contenthash].js',
      path: paths.build,
      clean: true
    },
    module: {
      rules: buildRules(options),
    },
    plugins: plaginsBuild(options),
    devServer:DevServerBuild(options),
  }
}