import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'src/data/posts')

export async function getPostContent(filename: string) {
  // マークダウンファイルの読み込み
  const fullPath = path.join(postsDirectory, `${filename}.md`)
  const fileContent = fs.readFileSync(fullPath, 'utf8')

  // メタデータと本文の分離
  const { data: metadata, content } = matter(fileContent)

  // マークダウンを HTML に変換
  const result = await remark().use(html).process(content)

  return {
    metadata,
    content: result.toString(),
  }
}
