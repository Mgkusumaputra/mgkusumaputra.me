import Image from "next/image";
import Link from "next/link";

import Links from "@/components/icons/Links";

interface projectCardProps {
  redirect: string;
  image: string;
  title: string;
  description: string;
  projectURL: string;
}

export default function ProjectCard({ redirect, image, title, description, projectURL }: projectCardProps) {
  return (
    <Link className="group w-full sm:w-auto flex flex-col justify-between gap-3 px-3" href={redirect} target="_blank">
      <Image
        src={image}
        alt={""}
        width={200}
        height={125}
        className="rounded-md"
      />
      <div className="flex flex-col gap-2">
        <h1 className="text-base font-semibold">{title}</h1>
        <p className="text-sm font-normal">{description}</p>
      </div>
      <div className="flex gap-2 items-center text-text-primary group-hover:text-primary transition-colors">
        <Links className="w-4 h-4" />
        <p className="text-sm font-semibold">{projectURL}</p>
      </div>
    </Link>
  );
}
