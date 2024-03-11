"use client";

import BlogPostCard from "@/components/blog/blogPostCard";
import { formatDate } from "@/lib/posts";
import { useMemo, useState } from "react";

interface EnumServiceItem {
  slug: string;
  entry: {
    title: string;
    publishedAt: string;
    coverImage: string;
    description: string;
    category: string;
  };
}

interface FilterCate {
  category: string;
}

interface blogPostCardProps {
  datas?: Array<EnumServiceItem>;
  filteredCategory?: Array<FilterCate>;
}

export default function ListBlog({
  datas = [],
  filteredCategory = [],
}: blogPostCardProps) {
  const [filter, setFiter] = useState("");

  const isFilter = useMemo(
    () =>
      datas?.filter((val) => (!filter ? val : val?.entry?.category == filter)),
    [datas, filter],
  );
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold">
          Diving into My Blogging Journey
        </h1>
        <p className="text-sm font-normal">
          From classroom insights to software engineering. Join my journey
          exploring theory to practice in this evolving field.
        </p>
        <div className="flex items-center gap-5 text-sm font-medium">
          <p>Filter</p>
          <div className="flex gap-2 text-background">
            {filteredCategory.map((item, id) => {
              const actived = filter == item?.category;
              return (
                <button
                  key={id}
                  onClick={() => setFiter(!actived ? item?.category : "")}
                  className={`py-[2px] capitalize px-1 rounded hover:bg-primary transition-colors text-muted-foreground ${
                    actived
                      ? "bg-primary text-secondary-foreground"
                      : "bg-secondary"
                  }`}
                >
                  {item?.category}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 ">
        {isFilter.map(({ slug, entry }) => {
          return (
            <BlogPostCard
              key={slug}
              href={slug}
              title={entry?.title}
              cover={entry?.coverImage}
              description={entry?.description}
              date={formatDate(entry?.publishedAt)}
              views={100}
            />
          );
        })}
      </div>
    </div>
  );
}
