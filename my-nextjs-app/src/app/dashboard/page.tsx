import { Suspense } from 'react'
import { LoadingSpinner } from '@/components/LoadingSpinner'

async function getUserStats() {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  return {
    totalPosts: 42,
    totalLikes: 123,
    totalComments: 56,
  }
}

async function getRecentActivity() {
  await new Promise((resolve) => setTimeout(resolve, 4000))
  return [
    { id: 1, action: '記事を投稿しました', date: '2024-02-01' },
    { id: 2, action: 'コメントしました', date: '2024-01-31' },
    { id: 3, action: 'いいねしました', date: '2024-01-30' },
  ]
}

async function getPopularPosts() {
  await new Promise((resolve) => setTimeout(resolve, 6000))
  return [
    { id: 1, title: '人気記事1', views: 1000 },
    { id: 2, title: '人気記事2', views: 800 },
    { id: 3, title: '人気記事3', views: 600 },
  ]
}

interface DashboardCardProps {
  title: string
  children: React.ReactNode
}

function DashboardCard({ title, children }: DashboardCardProps) {
  return (
    <div className='p-4 bg-white rounded shadow text-gray-900'>
      <h2 className='text-xl font-bold mb-4'>{title}</h2>
      {children}
    </div>
  )
}

async function UserStats() {
  const stats = await getUserStats()
  return (
    <DashboardCard title='統計情報'>
      <div className='space-y-2'>
        <p>投稿数: {stats.totalPosts}</p>
        <p>いいね数: {stats.totalLikes}</p>
        <p>コメント数: {stats.totalComments}</p>
      </div>
    </DashboardCard>
  )
}

async function RecentActivity() {
  const activities = await getRecentActivity()
  return (
    <DashboardCard title='最近の活動'>
      <ul className='space-y-2'>
        {activities.map((activity) => (
          <li key={activity.id}>
            {activity.action} - {activity.date}
          </li>
        ))}
      </ul>
    </DashboardCard>
  )
}

async function PopularPosts() {
  const posts = await getPopularPosts()
  return (
    <DashboardCard title='人気の投稿'>
      <ul className='space-y-2'>
        {posts.map((post) => (
          <li key={post.id}>
            {post.title} - {post.views}閲覧
          </li>
        ))}
      </ul>
    </DashboardCard>
  )
}

export default function Dashboard() {
  return (
    <div className='max-w-6xl mx-auto py-8'>
      <h1 className='text-3xl font-bold mb-8'>ダッシュボード</h1>

      <div className='grid gap-6 md:grid-cols-2'>
        <Suspense fallback={<LoadingSpinner />}>
          <UserStats />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <RecentActivity />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <PopularPosts />
        </Suspense>
      </div>
    </div>
  )
}
