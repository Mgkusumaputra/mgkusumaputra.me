import { reader } from "@/keystatic/reader";
import { sortPosts } from "@/lib/posts";
import ListBlog from "./_component/listBlog";

export default async function Page() {
  const posts = sortPosts( await reader.collections.blog.all()).filter((post) =>
    process.env.NODE_ENV === "production" ? !post.entry.isDraft : true
  );

  const filteredCategory = Array.from(
    new Set(posts.map(({ entry }) => ({
      category:entry?.category,
      title:entry?.title,
      coverImage:entry?.coverImage,
      description:entry?.description,
      publishedAt:entry?.publishedAt,
    })))
  );

  let datas = Array.from(
    new Set(posts.map(({ slug,entry }) => ({
      slug,
      entry: {
        category:entry?.category,
        title:entry?.title,
        coverImage:entry?.coverImage,
        description:entry?.description,
        publishedAt:entry?.publishedAt,
      }
    })))
  );

  return (
    <div className="flex flex-col gap-12">
      <ListBlog datas={datas} filteredCategory={filteredCategory}/>
    </div>
  );
}