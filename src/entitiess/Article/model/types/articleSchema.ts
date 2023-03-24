enum ARTICLE_TYPES {
  TEXT = 'TEXT',
  CODE = 'CODE',
  IMAGE = 'IMAGE'
}

export interface ArticleTextT {
  id: number,
  type: ARTICLE_TYPES.TEXT,
  title: string,
  paragraphs: string[]
}

export interface ArticleImageT {
  id: number,
  type: ARTICLE_TYPES.IMAGE,
  title: string,
  src: string
}

export interface ArticleCodeT {
  id: number,
  type: ARTICLE_TYPES.CODE,
  code: string
}

export interface ArticleT { 
  id: 1,
  title: string,
  subtitle: string,
  img: string | null,
  views: string,
  createdAt: number,
  type: string[],
  blocks: ArticleCodeT | ArticleImageT | ArticleTextT
}

export interface ArticleDetailsSchema {
  data: ArticleT | null;
  error: string | undefined;
  readonly: boolean;
  isLoading: boolean;
}
