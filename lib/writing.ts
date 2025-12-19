import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { FormatDate } from './formatDate'
import { getViews } from './getViews'

const WRITINGS_PATH = path.join(process.cwd(), 'content/writings')

export function getAllWritingStatics() {
    const files = fs.readdirSync(WRITINGS_PATH)

    return files.map(filename => {
        const slug = filename.replace(/\.mdx$/, '')
        const filePath = path.join(WRITINGS_PATH, filename)
        const file = fs.readFileSync(filePath, 'utf8')

        const { data, content } = matter(file)


        return {
            slug,
            title: data.title,
            description: data.description,
            date: FormatDate(data.date),
            published: data.published ?? true,
            readingTime: readingTime(content),
            content,
        }
    })
}

export async function getAllWritings() {
    const writings = getAllWritingStatics()

    const withViews = await Promise.all(
        writings.map(async post => ({
            ...post,
            views: await getViews(post.slug)
        }))
    )

    return withViews
}