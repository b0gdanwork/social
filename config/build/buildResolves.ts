import { BuildOptionsT } from './types';
import webpack from "webpack"

function resolvesBuild(options:BuildOptionsT): webpack.ResolveOptions {
  return {
    modules: [options.paths.srcFolder, 'node_modules'],
    // alias:{
    //   "": [options.paths.src, 'node_modules']
    // },
    mainFiles: ['index'],
    preferAbsolute: true, 
    extensions: ['.tsx', '.ts', '.js', '.scss'],
  }
}

export default resolvesBuild