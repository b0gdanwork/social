import { BuildOptionsT, BuildModeT, BuildEnv } from './config/build/types';
import webpack from 'webpack';
import { WebpackBuild } from './config/build/webpackBuild';
import path from 'path';  

export default (env:BuildEnv) => {

  const port = env.port
  const mode = env.mode
  const isDev = mode === 'development'

  const options:BuildOptionsT = {
    mode: mode,
    paths: {
      build:  path.resolve(__dirname, 'dist'),
      src: path.resolve(__dirname, 'src', 'index.tsx'),
      html:  path.resolve(__dirname, 'src', 'public', 'index.html')
    },
    isDev: isDev,
    port: port
  }
  
  const config: webpack.Configuration = WebpackBuild(options)

  return config
}