import React from "react";
import PostCard from "@/components/home/postCard";
import Newsletter from "@/components/Newsletter";

export default function FeaturedPost() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-y-4 mb-9">
        <h1 className="text-lg font-semibold">Featured Post</h1>
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
      <Newsletter />
    </div>
  );
}
