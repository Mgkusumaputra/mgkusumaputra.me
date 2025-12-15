import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Card({
  title,
  description,
  icon = false,
}: {
  title: string;
  description: string;
  icon?: boolean;
}) {
  return (
    <Link href="" className="group">
      <div className="flex flex-row justify-between items-center px-3 py-4.5 w-full rounded-md group-hover:bg-foreground transition-colors duration-400">
        <div className="flex flex-col gap-1.5">
          <h3 className="font-display font-medium text-sm">{title}</h3>
          <p className="text-sm text-secondary max-w-prose">{description}</p>
        </div>
        {icon && (
          <ArrowRight className="text-secondary group-hover:-rotate-45 transition-transform duration-400" />
        )}
      </div>
    </Link>
  );
}

