import Image from "next/image";
import Link from "next/link";

import Links from "@/components/icons/Links";

export default function ProjectCard() {
  return (
    <Link className="group w-full sm:w-auto flex flex-col justify-between gap-3 px-3" href="/portfolio/404">
      <Image
        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1115&q=80"
        alt={""}
        width={200}
        height={125}
        className="rounded-md"
      />
      <div>
        <h1 className="text-base font-semibold">Project Title</h1>
        <p className="text-sm font-normal">Project Description, Lorem Ipsum</p>
      </div>
      <div className="flex gap-2 items-center text-text-primary group-hover:text-primary transition-colors">
        <Links className="w-4 h-4" />
        <p className="text-sm font-semibold">app.mgkusumaputra.me</p>
      </div>
    </Link>
  );
}
