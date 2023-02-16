import { type BuildOptionsT } from './types';
import type webpack from 'webpack'

function resolvesBuild (options: BuildOptionsT): webpack.ResolveOptions {
  return {
    modules: [options.paths.src, 'node_modules'],
    // alias:{
    //   "": [options.paths.src, 'node_modules']
    // },
    mainFiles: ['index'],
    preferAbsolute: true, 
    extensions: ['.tsx', '.ts', '.js', '.scss']
  }
}

export default resolvesBuild