import React from "react";

import ArrowUpRight from "@/icons/arrowUpRight";
import Clock from "@/icons/Clock";
import Eye from "@/icons/Eye";
import Link from "next/link";

interface postCardProps {
  href: string
  title: string;
  description?: string;
  date: string;
  views: number;
}

export default function PostCard({href, title, description, date, views}: postCardProps) {
  return (
    <Link
      href={`/blog/${href}`}
      className="w-full flex items-center justify-between px-2 py-3 bg-secondary hover:bg-primary rounded-md transition-colors group"
    >
      <div className="flex flex-col gap-3 group-hover:text-background">
        <h2 className="text-base font-bold">{title}</h2>
        <div className="flex flex-row gap-2">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <p className="text-xs font-normal">{date}</p>
          </div>
          <div className="flex items-center">
            <Eye className="w-4 h-4 mr-1" />
            <p className="text-xs font-normal">{views}</p>
          </div>
        </div>
      </div>
      <ArrowUpRight className="text-text-secondary group-hover:text-background w-6 h-6" />
    </Link>
  );
}
