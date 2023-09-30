import React from "react";
import PostCard from "@/components/home/postCard";
import Newsletter from "@/components/Newsletter";
import { formatDate, sortPosts } from "@/lib/posts";
import { reader } from "@/keystatic/reader";

export default async function FeaturedPost() {
  const posts = sortPosts(await reader.collections.blog.all()).filter((post) =>
    process.env.NODE_ENV === "production" ? !post.entry.isDraft : true
  );

  const newestPost = posts.slice(0, 3);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-y-4 mb-9">
        <h1 className="text-lg font-semibold">Featured Post</h1>
        {newestPost.map(({ slug, entry }) => (
          <PostCard
            key={slug}
            href={slug}
            title={entry.title}
            date={formatDate(entry.publishedAt)}
            views={0}
          />
        ))}
      </div>
      <Newsletter />
    </div>
  );
}
