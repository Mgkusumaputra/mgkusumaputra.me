import { cn } from "@/lib/utils";
import { getAllWritings } from "@/lib/writing";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Writing() {
  const writings = getAllWritings()
    .filter((post) => post.published)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));

  return (
    <main className="flex flex-col px-8 py-15 gap-6">
      <h1 className="font-hand font-medium text-3xl">My Project Lists</h1>

      <div className="flex flex-col gap-3">
        {writings.map((post, index) => (
          <Link key={index} href={`/writing/${post.slug}`} className="group">
            <div
              className={cn(
                "flex flex-row justify-between items-center w-full rounded-md group-hover:bg-foreground transition-colors duration-400",
                "px-3 py-3"
              )}
            >
              <div className="flex flex-col gap-4.5">
                <div className="flex flex-col gap-3">
                  <p className="text-secondary text-xs">{post.date}</p>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-display font-medium text-sm">
                      {post.title}
                    </h3>
                    <p className="text-sm text-secondary max-w-prose">
                      {post.description}
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-1.5 text-xs text-secondary">
                  <p>{post.readingTime.text}</p>
                  <span>·</span>
                  <p>12.890 views</p>
                </div>
              </div>
              <ArrowRight className="text-secondary group-hover:-rotate-45 transition-transform duration-400" />
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

