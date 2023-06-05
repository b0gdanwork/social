module.exports = {
	stories: ["../../src/**/*.stories.@(js|jsx|ts|tsx)"],
	addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
	framework: "@storybook/react",
	core: {
		builder: "webpack5",
	},
	addons: [
		"@storybook/addon-essentials",
		"@storybook/preset-scss",
		"storybook-addon-themes",
		"storybook-addon-react-router-v6",
		"@storybook/addon-backgrounds",
	],
}
