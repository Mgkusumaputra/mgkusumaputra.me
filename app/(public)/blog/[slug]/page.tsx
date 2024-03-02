import Newsletter from "@/components/Newsletter";
import Comment from "@/components/blog/comment";
import { DocumentRenderer } from "@/keystatic/document-renderer";
import { reader } from "@/keystatic/reader";
import { formatDate } from "@/lib/posts";
import { BarChart4, CalendarIcon, ClockIcon } from "lucide-react";
import { Metadata } from "next";

import Image from "next/image";
import { redirect } from "next/navigation";

type PageParam = {
  params: {
    slug: string;
  };
};

type Meta = Metadata & {
  templateTitle?: string;
  canonical: string;
};

export const dynamicParams = true;

export async function generateMetadata(context: PageParam) {
  const getPosts = (await reader.collections.blog.all()).filter(
    (post) => post.slug === context.params.slug,
  );

  let posts = Array.from(
    new Set(
      getPosts.map(({ slug, entry }) => ({
        slug,
        entry: {
          title: entry?.title,
          description: entry?.description,
          publishedAt: entry?.publishedAt,
        },
      })),
    ),
  );

  const postData = posts[0];

  if (!getPosts) {
    return;
  }

  let ogImage = `https://mgkusumaputra.me/api/og?title=${postData.entry.title}`;
  let title = postData.entry.title;
  let description = postData.entry.description;
  let publishedTime = postData.entry.publishedAt;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `https://mgkusumaputra.me/blog/${postData.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export async function generateStaticParams() {
  const postSlugs = await reader.collections.blog.list();

  return postSlugs.map((post) => ({ slug: post }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const postData = await reader.collections.blog.read(slug);

  if (!postData) {
    redirect("/404");
  }

  return (
    <>
      <article className="divide-y-[1px] divide-text-secondary mb-6">
        <header className="flex flex-col gap-9 items-center w-full">
          <div className="relative aspect-[16/9]">
            <Image
              src={postData.coverImage}
              width={600}
              height={300}
              alt={""}
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-6 w-full">
            <h1 className="text-xl font-semibold text-center">
              {postData.title}
            </h1>
            <div className="flex flex-col gap-1 items-center">
              <div className="flex gap-1">
                <div className="flex items-center">
                  <CalendarIcon className="w-3 h-3 mr-1" />
                  <p className="text-sm font-normal">
                    {formatDate(postData.publishedAt)}
                  </p>
                </div>
                <span>—</span>
                <div className="flex items-center">
                  <ClockIcon className="w-3 h-3 mr-1" />
                  <p className="text-sm font-normal">{`10+ Minutes Read`}</p>
                </div>
              </div>
              <div className="flex items-center">
                <BarChart4 className="w-3 h-3 mr-1" />
                <p className="text-sm font-normal">{100}</p>
              </div>
            </div>
          </div>
          <hr className="border-text-secondary rounded-sm w-full" />
        </header>
        <div className="mt-8 prose">
          <div>
            <div className="prose">
              <DocumentRenderer document={await postData.content()} />
            </div>
          </div>
        </div>
      </article>
      <Newsletter />
      <div className="mt-4">
        <Comment />
      </div>
    </>
  );
}
