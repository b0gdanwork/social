import { BuildPathsT } from "./../build/types"
import webpack from "webpack"
import path from "path"

export default ({ config }: { config: webpack.Configuration }) => {
	const paths: BuildPathsT = {
		src: path.resolve(__dirname, "..", "..", "src"),
		build: "",
		srcJs: "",
		html: "",
		publicFolder: "",
	}

	config!.resolve!.alias = {
		...config.resolve?.alias,
		"@": paths.src,
	}

	config.resolve?.modules?.push(paths.src)
	config.resolve?.extensions?.push("ts", "tsx")

	return config
}
