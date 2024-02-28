import { ArrowUpRightIcon, Clock1, EyeIcon } from "lucide-react";
import React from "react";

import Link from "next/link";

import Clock from "@/icons/Clock";
import Eye from "@/icons/Eye";
import ArrowUpRight from "@/icons/arrowUpRight";

interface postCardProps {
  href: string;
  title: string;
  description?: string;
  date: string;
  views: number;
}

export default function PostCard({
  href,
  title,
  description,
  date,
  views,
}: postCardProps) {
  return (
    <Link
      href={`/blog/${href}`}
      className="w-full flex items-center justify-between px-3 py-4 bg-secondary hover:bg-primary rounded-md transition-color hover:ease-out duration-300  group"
    >
      <div className="flex flex-col gap-5 group-hover:text-secondary dark:group-hover:text-secondary-foreground">
        <h2 className="text-base font-bold">{title}</h2>
        <div className="flex flex-row gap-3 text-muted-foreground group-hover:text-muted dark:group-hover:text-secondary-foreground">
          <div className="flex items-center">
            <Clock1 className="w-3 h-3 mr-1" />
            <p className="text-xs font-normal">{date}</p>
          </div>
          <div className="flex items-center">
            <EyeIcon className="w-3 h-3 mr-1" />
            <p className="text-xs font-normal">{views}</p>
          </div>
        </div>
      </div>
      <ArrowUpRightIcon className="group-hover:text-secondary w-6 h-6 dark:group-hover:text-secondary-foreground" />
    </Link>
  );
}
