import { ArticlesData } from '@/types/article'
import articlesData from '@/data/articles.json'

export default function BlogPage() {
  const { articles } = articlesData as ArticlesData

  return (
    <div className='max-w-4xl mx-auto py-8'>
      <h1 className='text-3xl font-bold mb-6'>ブログ記事一覧</h1>

      <div className='space-y-4'>
        {articles.map((article) => (
          <article key={article.id} className='p-4 border rounded'>
            <h2 className='text-xl font-semibold'>{article.title}</h2>
            <div className='text-gray-600'>
              <span>{article.author}</span>
              <span className='mx-2'>•</span>
              <time>{article.publishedAt}</time>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
