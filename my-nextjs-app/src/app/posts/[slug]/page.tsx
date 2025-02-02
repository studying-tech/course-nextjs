import { getPostContent } from '@/lib/markdown'

interface PostPageProps {
  params: { slug: string }
}

export default async function PostPage({ params }: PostPageProps) {
  const { metadata, content } = await getPostContent(params.slug)

  return (
    <article className='prose mx-auto py-8'>
      <h1>{metadata.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} className='mt-8' />
    </article>
  )
}
