import { reader } from "@/keystatic/reader";
import { formatDateToISO } from "@/utils/date";

async function getBlogPosts() {
  const posts = await reader.collections.blog.all();

  return posts.map(({ slug, entry }) => ({
    slug: slug,
    publishedAt: entry?.publishedAt,
  }));
}

export default async function sitemap() {
  let blog_routes = await (
    await getBlogPosts()
  ).map((post) => ({
    url: `https://mgkusumaputra.me/blog/${post.slug}`,
    lastModified: post.publishedAt,
  }));

  let all_routes = [
    "",
    "/portfolio",
    "/blog",
    "/guestbook",
    "/certificate",
  ].map((route) => ({
    url: `https://mgkusumaputra.me/${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...all_routes, ...blog_routes];
}
