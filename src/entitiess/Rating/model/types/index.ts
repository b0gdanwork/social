export type StarT = 1 | 2 | 3 | 4 | 5

export interface RatingSchema {
	value: StarT
	error?: string
	isLoading?: boolean
}
