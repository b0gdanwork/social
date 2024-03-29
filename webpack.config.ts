import { type BuildOptionsT, type BuildEnv } from "./config/build/types"
import type webpack from "webpack"
import { WebpackBuild } from "./config/build/webpackBuild"
import path from "path"

export default (env: BuildEnv) => {
	const port = env.port
	const mode = env.mode
	const isDev = mode === "development"

	const options: BuildOptionsT = {
		mode,
		paths: {
			src: path.resolve(__dirname, "src"),
			build: path.resolve(__dirname, "dist"),
			srcJs: path.resolve(__dirname, "src", "app", "Index.tsx"),
			html: path.resolve(__dirname, "src", "app", "public", "index.html"),
			publicFolder: path.resolve(__dirname, "src", "app", "public"),
		},
		isDev,
		port,
	}

	const config: webpack.Configuration = WebpackBuild(options)

	return config
}
