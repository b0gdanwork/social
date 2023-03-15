export type BuildModeT = 'development' | 'production'

export interface BuildPathsT {
  html: string,
  build: string,
  src: string,
  srcJs: string,
  publicFolder: string,
}

export interface BuildOptionsT {
  mode: BuildModeT,
  paths: BuildPathsT,
  isDev: boolean,
  port: number,
}

export interface BuildEnv {
  port: number,
  mode: BuildModeT
}
