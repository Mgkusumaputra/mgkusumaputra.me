import Image from "next/image";
import Link from "next/link";

import Eye from "@/icons/Eye";
import Calendar from "../icons/Calendar";

interface blogPostCardProps {
  href: string
  title: string;
  cover: string;
  description?: string;
  date: string;
  views: number;
}

export default function BlogPostCard({href, title, cover, description, date, views}: blogPostCardProps) {
  return (
    <Link className="flex flex-row gap-6 w-full px-3 py-2" href={`/blog/${href}`}>
      <Image
        src={cover}
        alt={""}
        width={200}
        height={125}
        className="rounded"
      />
      <div className="flex flex-col justify-between w-full">
        <div className="flex flex-col gap-2">
          <h1 className="text-lg font-semibold">{title}</h1>
          <p className="text-sm font-normal">{description}</p>
        </div>
        <div className="flex flex-row gap-2 text-text-secondary">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            <p className="text-xs font-normal">{date}</p>
          </div>
          <div className="flex items-center">
            <Eye className="w-4 h-4 mr-1" />
            <p className="text-xs font-normal">{views}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
