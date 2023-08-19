import Image from "next/image";
import Link from "next/link";

import Clock from "@/icons/Clock";
import Eye from "@/icons/Eye";

export default function BlogPostCard() {
  return (
    <Link className="flex flex-row gap-6 w-full px-3 py-2" href="">
      <Image
        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1115&q=80"
        alt={""}
        width={200}
        height={125}
        className="rounded"
      />
      <div className="flex flex-col justify-between w-full">
        <div className="flex flex-col gap-2">
          <h1 className="text-lg font-semibold">Post Title</h1>
          <p className="text-sm font-normal">Post Description, lorem ipsum</p>
        </div>
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
    </Link>
  );
}
