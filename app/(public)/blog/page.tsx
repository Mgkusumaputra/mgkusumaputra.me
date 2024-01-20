import { reader } from "@/keystatic/reader";
import { sortPosts } from "@/lib/posts";
import ListBlog from "@/components/blog/listBlog";

export default async function Page() {
  const posts = sortPosts(await reader.collections.blog.all()).filter((post) =>
    process.env.NODE_ENV === "production" ? !post.entry.isDraft : true
  );

  const filteredCategory = posts
    .map(({ entry }) => ({
      category: entry?.category,
      title: entry?.title,
      coverImage: entry?.coverImage,
      description: entry?.description,
      publishedAt: entry?.publishedAt,
    }))
    .filter((value, index, self) => {
      return (
        self.findIndex((item) => item?.category === value.category) === index
      );
    });

  let datas = Array.from(
    new Set(
      posts.map(({ slug, entry }) => ({
        slug,
        entry: {
          category: entry?.category,
          title: entry?.title,
          coverImage: entry?.coverImage,
          description: entry?.description,
          publishedAt: entry?.publishedAt,
        },
      }))
    )
  );

  return (
    <div className="flex flex-col gap-12">
      <ListBlog datas={datas} filteredCategory={filteredCategory} />
    </div>
  );
}
