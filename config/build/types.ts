export type BuildModeT = 'development' | 'production'

type BuildPathsT = {
  html?: string,
  build?: string,
  srcFolder?: string,
  srcJs?: string
}

export interface BuildOptionsT {
  mode?: BuildModeT,
  paths?: BuildPathsT,
  isDev?: boolean,
  port?: number,
}

export interface BuildEnv {
  port: number,
  mode: BuildModeT
}
