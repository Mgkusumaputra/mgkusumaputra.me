import { CalendarIcon, EyeIcon } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

interface blogPostCardProps {
  href: string;
  title: string;
  cover: string;
  description?: string;
  date: string;
  views: number;
}

export default function BlogPostCard({
  href,
  title,
  cover,
  description,
  date,
  views,
}: blogPostCardProps) {
  return (
    <Link
      className="flex flex-col sm:flex-col md:flex-row gap-6 w-full px-3 py-2 hover:bg-secondary transition hover:ease-in-out duration-300 rounded-md "
      href={`/blog/${href}`}
    >
      <Image
        src={cover}
        alt={""}
        width={200}
        height={125}
        className="rounded"
      />
      <div className="flex flex-col gap-2 w-full sm:justify-normal md:justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-lg font-semibold">{title}</h1>
          <p className="text-sm font-normal">{description}</p>
        </div>
        <div className="flex flex-row gap-2 text-text-secondary">
          <div className="flex items-center">
            <CalendarIcon className="w-3 h-3 mr-1" />
            <p className="text-xs font-normal">{date}</p>
          </div>
          <div className="flex items-center">
            <EyeIcon className="w-3 h-3 mr-1" />
            <p className="text-xs font-normal">{views}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
