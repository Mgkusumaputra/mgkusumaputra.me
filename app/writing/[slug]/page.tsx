import CLink from "@/components/cLink";
import MDXRenderer from "@/components/writing/mdxRenderer";
import { ViewCounter } from "@/components/writing/viewCounter";
import { getViews } from "@/lib/getViews";
import { getAllWritings } from "@/lib/writing";
import { notFound } from "next/navigation";

export default async function WritingPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const writings = await getAllWritings();
  const writing = writings.find((p) => p.slug === slug);

  const views = await getViews(slug);

  if (!writing) notFound();

  return (
    <main className="flex flex-col px-8 py-15 gap-7.5">
      <div className="flex flex-col gap-4.5">
        <h1 className="font-hand font-medium text-4xl">{writing.title}</h1>
        <div className="flex flex-wrap justify-between items-center gap-1.5 text-sm text-secondary">
          <div className="flex flex-row gap-1.5">
            <CLink href="" value="@mgkusumaputra" className="no-underline" />
            <span>|</span>
            <p>{writing.date}</p>
          </div>
          <div className="flex flex-row gap-1.5">
            <ViewCounter slug={slug} initialViews={views} />
            <span>·</span>
            <p>{writing.readingTime.text}</p>
          </div>
        </div>
      </div>
      <article>
        <MDXRenderer slug={slug} />
      </article>
    </main>
  );
}

