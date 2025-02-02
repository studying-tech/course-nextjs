import { Suspense } from 'react'
import { LoadingSpinner } from '@/components/LoadingSpinner'

async function getPosts() {
  // 3秒待つ処理
  await new Promise((resolve) => setTimeout(resolve, 3000))

  // ダミーデータを返す
  return ['記事1', '記事2', '記事3']
}

async function PostsList() {
  const posts = await getPosts()

  return (
    <ul className='space-y-4'>
      {posts.map((post, index) => (
        <li key={index} className='p-4 border rounded'>
          {post}
        </li>
      ))}
    </ul>
  )
}

export default function Posts() {
  return (
    <div className='max-w-4xl mx-auto py-8'>
      <h1 className='text-2xl font-bold mb-4'>記事一覧</h1>
      <Suspense fallback={<LoadingSpinner />}>
        <PostsList />
      </Suspense>
    </div>
  )
}
