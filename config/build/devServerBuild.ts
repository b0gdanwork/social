import { BuildOptionsT } from './types';
import type {Configuration as ConfigurationServerT} from 'webpack-dev-server'

function DevServerBuild({paths, port}: BuildOptionsT):ConfigurationServerT {
  return (
    {
      open: true,
      static: {
        directory: paths.html,
      },
      compress: false,
      port: port,
    }
  )
}

export default DevServerBuild