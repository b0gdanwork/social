import DevServerBuild from './devServerBuild';
import plaginsBuild from './plaginsBuild';
import resolvesBuild from './resolvesBuild';
import buildRules from './rulesBuild';
import { BuildOptionsT } from './types';


export function WebpackBuild(options:BuildOptionsT) {

  const {isDev, mode, paths} = options

  return {
    mode: mode,
    entry: paths.src,
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