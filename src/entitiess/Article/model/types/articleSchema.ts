import { type UserT } from "@/entitiess/User"

export enum ArticleSortField {
	VIEWS = "views",
	TITLE = "title",
	CREATED = "createdAt",
}

export enum ArticleSortOrder {
	asc = "asc",
	desc = "desc",
}

export enum ArticleType {
	ALL = "ALL",
	IT = "IT",
	SCINCE = "SCINCE",
	ECONOMICS = "ECONOMICS",
}

export enum ARTICLE_TYPES {
	TEXT = "TEXT",
	CODE = "CODE",
	IMAGE = "IMAGE",
}

export interface ArticleTextT {
	id: number
	type: ARTICLE_TYPES.TEXT
	title: string
	value: string
}

export interface ArticleImageT {
	id: number
	type: ARTICLE_TYPES.IMAGE
	title: string
	src: string
}

export interface ArticleCodeT {
	id: number
	type: ARTICLE_TYPES.CODE
	code: string
}

export type ArticleBlocks = ArticleCodeT | ArticleImageT | ArticleTextT

export interface ArticleT {
	id: string
	user: UserT
	userId: string
	title: string
	subtitle: string
	img: string | undefined
	views: string
	createdAt: number
	type: string[]
	blocks: ArticleBlocks[]
}

export interface ArticleDetailsSchema {
	data: ArticleT | undefined
	error: string | undefined
	readonly: boolean
	isLoading: boolean
}

export enum ArticleListViewT {
	list = "list",
	grid = "grid",
}
