import { LinkIcon } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

interface projectCardProps {
  redirect: string;
  image: string;
  title: string;
  description: string;
  projectURL: string;
}

export default function ProjectCard({
  redirect,
  image,
  title,
  description,
  projectURL,
}: projectCardProps) {
  return (
    <Link
      className="group w-full sm:w-auto flex flex-col gap-3 px-3 py-6 rounded-md transition-colors hover:bg-secondary"
      href={redirect}
      target="_blank"
      data-umami-event={projectURL}
    >
      <Image
        src={image}
        alt={""}
        width={200}
        height={125}
        className="rounded-md"
      />
      <div className="flex flex-col h-full justify-between">
        <div className="flex flex-col">
          <h1 className="text-base font-semibold">{title}</h1>
          <p className="text-sm font-normal dark:text-muted-foreground">
            {description}
          </p>
        </div>
        <div className="flex gap-2 items-center mt-2 text-secondary-foreground group-hover:text-primary transition-colors">
          <LinkIcon className="w-4 h-4" />
          <p className="text-sm font-semibold group-hover:underline">
            {projectURL}
          </p>
        </div>
      </div>
    </Link>
  );
}
