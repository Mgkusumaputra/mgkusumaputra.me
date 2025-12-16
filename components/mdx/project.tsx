import Image from "next/image";
import Card from "@/components/card";
import CLink from "@/components/cLink";

export type ProjectProps = {
  title: string;
  description?: string;
  icon?: string | React.ReactNode;
  link: string;
  variant?: "description" | "card";
  children?: React.ReactNode;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function Project(_props: ProjectProps) {
  return null;
}

export function ProjectDescription({
  title,
  icon,
  link,
  children,
}: {
  title: string;
  icon?: string;
  link?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3 px-3 py-4.5">
      <span className="flex items-center gap-1.5">
        {typeof icon === "string" ? (
          <Image
            alt={title}
            src={icon}
            width={28}
            height={28}
            className="w-7 h-7"
          />
        ) : (
          icon
        )}

        {link ? (
          <CLink
            className="font-display font-semibold text-xl text-primary no-underline"
            href={link}
            value={title}
          />
        ) : (
          <h2 className="font-display font-semibold text-xl text-primary">
            {title}
          </h2>
        )}
      </span>
      <div className="prose prose-sm text-base text-secondary max-w-prose ">
        {children}
      </div>
    </div>
  );
}

export function ProjectCard({
  title,
  description,
  link,
}: {
  title: string;
  description?: string;
  link?: string;
}) {
  return (
    <Card title={title} description={description} href={link || ""} icon />
  );
}

