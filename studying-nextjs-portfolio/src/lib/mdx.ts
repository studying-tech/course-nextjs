import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { compileMDX } from 'next-mdx-remote/rsc'
import { type Post } from '@/types/blog'

const postsDirectory = path.join(process.cwd(), 'src/content/blog')

export async function getPostBySlug(slug: string): Promise<Post> {
  // MDX ファイルを最初に確認
  let fullPath = path.join(postsDirectory, `${slug}.mdx`)
  // MDX ファイルが存在しない場合、MD ファイルを確認
  if (!fs.existsSync(fullPath)) {
    fullPath = path.join(postsDirectory, `${slug}.md`)
  }
  // どちらのファイルも存在しない場合はエラー
  if (!fs.existsSync(fullPath)) {
    throw new Error(`記事が見つかりません: ${slug}`)
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const mdxSource = await compileMDX({
    source: content,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [
          [
            await import('rehype-pretty-code').then((mod) => mod.default),
            { theme: 'one-dark-pro', keepBackground: true },
          ],
        ],
      },
    },
  })

  // data オブジェクトに必要なプロパティが含まれていることを型チェック
  if (!data.title || !data.description || !data.pubDate || !data.heroImage) {
    throw new Error(`フロントマターに必要なプロパティが不足しています: ${slug}`)
  }

  return {
    meta: {
      slug,
      title: data.title,
      description: data.description,
      pubDate: data.pubDate,
      updatedDate: data.updatedDate,
      heroImage: data.heroImage,
    },
    content: mdxSource.content,
  }
}

export async function getAllPosts(): Promise<Post[]> {
  const files = fs.readdirSync(postsDirectory)
  const posts = await Promise.all(
    files
      .filter((file) => file.endsWith('.mdx') || file.endsWith('.md'))
      .map(async (file) => {
        const slug = file.replace(/\.(mdx|md)$/, '')
        const post = await getPostBySlug(slug)

        return post
      })
  )

  return posts.sort((a, b) => {
    return new Date(b.meta.pubDate).getTime() - new Date(a.meta.pubDate).getTime()
  })
}
