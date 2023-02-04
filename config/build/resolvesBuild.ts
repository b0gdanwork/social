import { BuildOptionsT } from './types';
import webpack from "webpack"

function resolvesBuild(options:BuildOptionsT): webpack.ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js', '.scss'],
  }
}

export default resolvesBuild