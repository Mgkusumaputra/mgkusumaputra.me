import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Card({
  title,
  description,
  href,
  icon = false,
  size = "default",
}: {
  title: string;
  description?: string;
  href: string;
  icon?: boolean;
  size?: "small" | "default";
}) {
  if (href === "") {
    return (
      <div className="group">
        <div
          className={cn(
            "flex flex-row justify-between items-center w-full rounded-md group-hover:bg-foreground transition-colors duration-400",
            size === "default" ? "px-3 py-4.5" : "px-3 py-3"
          )}
        >
          <div className="flex flex-col gap-1.5">
            <h3 className="font-display font-medium text-sm">{title}</h3>
            <p className="text-sm text-secondary max-w-prose">{description}</p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <Link href={href || ""} className="group">
      <div
        className={cn(
          "flex flex-row justify-between items-center w-full rounded-md group-hover:bg-foreground transition-colors duration-400",
          size === "default" ? "px-3 py-4.5" : "px-3 py-3"
        )}
      >
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

