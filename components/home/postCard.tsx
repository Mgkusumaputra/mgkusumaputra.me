import React from "react";
import Link from "next/link";

import ArrowUpRight from "@/icons/arrowUpRight";
import Clock from "@/icons/Clock";
import Eye from "@/icons/Eye";

export default function PostCard() {
  return (
    <Link
      href={""}
      className="w-full flex items-center justify-between px-2 py-3 bg-secondary rounded-md"
    >
      <div className="flex flex-col gap-3">
        <h2 className="text-base font-bold">Hello World!</h2>
        <div className="flex flex-row gap-2 text-text-secondary">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <p className="text-xs font-normal">23 Jul, 2023</p>
          </div>
          <div className="flex items-center">
            <Eye className="w-4 h-4 mr-1" />
            <p className="text-xs font-normal">23 Jul, 2023</p>
          </div>
        </div>
      </div>
      <ArrowUpRight className="text-text-secondary w-6 h-6" />
    </Link>
  );
}
