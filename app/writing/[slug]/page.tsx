import CLink from "@/components/cLink";
import MDXRenderer from "@/components/writing/mdxRenderer";
import { getAllWritings } from "@/lib/writing";
import { notFound } from "next/navigation";

export default async function WritingPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const writings = getAllWritings();
  const writing = writings.find((p) => p.slug === slug);

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
            <p>12.980 views</p>
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

