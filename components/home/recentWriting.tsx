import { cn } from "@/lib/utils";
import { getAllWritings } from "@/lib/writing";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default async function RecentWriting() {
  const writings = (await getAllWritings())
    .filter((post) => post.published)
    .sort((a, b) => {
      const [dayA, monthA, yearA] = a.date.split("-").map(Number);
      const [dayB, monthB, yearB] = b.date.split("-").map(Number);

      const dateA = new Date(yearA, monthA - 1, dayA).getTime();
      const dateB = new Date(yearB, monthB - 1, dayB).getTime();

      return dateB - dateA;
    });

  return writings.map((writing, index) => (
    <Link key={index} href={`/writing/${writing.slug}`} className="group">
      <div
        className={cn(
          "flex flex-row justify-between items-center w-full rounded-md group-hover:bg-foreground transition-colors duration-400",
          "px-3 py-3"
        )}
      >
        <div className="flex flex-col gap-4.5">
          <div className="flex flex-col gap-3">
            <p className="text-secondary text-xs">{writing.date}</p>
            <div className="flex flex-col gap-1.5">
              <h3 className="font-display font-medium text-sm">
                {writing.title}
              </h3>
              <p className="text-sm text-secondary max-w-prose">
                {writing.description}
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-1.5 text-xs text-secondary">
            <p>{writing.readingTime.text}</p>
            <span>·</span>
            <p>{writing.views.toLocaleString()} views</p>
          </div>
        </div>
        <ArrowRight className="text-secondary group-hover:-rotate-45 transition-transform duration-400" />
      </div>
    </Link>
  ));
}

