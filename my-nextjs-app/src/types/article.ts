interface Article {
  id: number
  title: string
  author: string
  publishedAt: string
}

export interface ArticlesData {
  articles: Article[]
}
