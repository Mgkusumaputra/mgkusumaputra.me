import BlogPostCard from "@/components/blog/blogPostCard";
import { reader } from "@/keystatic/reader";
import { formatDate, sortPosts } from "@/lib/posts";

export default async function Page() {
  const posts = sortPosts(await reader.collections.blog.all()).filter((post) =>
    process.env.NODE_ENV === "production" ? !post.entry.isDraft : true
  );

  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold">Things I’ve Explored</h1>
        <p className="text-sm font-normal">
          Discover my world of exploration and creativity. This portfolio is a
          celebration of my passions, adventures, and the joy of discovery.
        </p>
        <div className="flex items-center gap-5 text-sm font-medium">
          <p>Filter</p>
          <div className="flex gap-2 text-background">
            {posts.map(({ entry }) => (
              // eslint-disable-next-line react/jsx-key
              <button className="py-[2px] px-1 bg-secondary rounded hover:bg-primary">
                {entry.category.charAt(0).toUpperCase() +
                  entry.category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 ">
        {posts.map(({ slug, entry }) => (
          // eslint-disable-next-line react/jsx-key
          <BlogPostCard
            href={slug}
            title={entry.title}
            cover={entry.coverImage}
            description={entry.description}
            date={formatDate(entry.publishedAt)}
            views={100}
          />
        ))}
      </div>
    </div>
  );
}
