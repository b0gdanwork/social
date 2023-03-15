import { type BuildOptionsT } from './types'
import type { Configuration as ConfigurationServerT } from 'webpack-dev-server'

function DevServerBuild ({ paths, port, isDev }: BuildOptionsT): ConfigurationServerT {
  return (
    {
      static: {
        directory: paths.html
      },
      hot: true,
      port,
      open: true,
      historyApiFallback: true

    }
  )
}

export default DevServerBuild
