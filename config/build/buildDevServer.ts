import { type BuildOptionsT } from "./types"
import type { Configuration as ConfigurationServerT } from "webpack-dev-server"

function DevServerBuild({ paths, port, isDev }: BuildOptionsT): ConfigurationServerT {
	return {
		hot: true,
		port,
		open: true,
		historyApiFallback: {
			index: "/",
		},
		static: {
			directory: paths.html,
		},
	}
}

export default DevServerBuild
