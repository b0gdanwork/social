type Params = Record<string, string | undefined>

export const setSearchParams = (props: Params, url = window.location.search) => {
	const params = new URLSearchParams(url)
	Object.entries(props).forEach(([name, value]) => {
		if (value === undefined) {
			return
		}
		params.set(name, value)
	})

	window.history.pushState(null, "", `?${params.toString()}`)
	return params.toString()
}

export const getSearchParams = (url = window.location.search) => {
	const params = new URLSearchParams(url)
	return Object.fromEntries(params.entries())
}
