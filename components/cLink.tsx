import { cn } from "@/lib/utils";
import Link from "next/link";
import { ReactNode } from "react";

export default function CLink({
  href,
  value,
  className,
  inPage = false,
  ariaLabel,
}: {
  href: string;
  value: string | ReactNode;
  className?: string;
  inPage?: boolean;
  ariaLabel?: string;
}) {
  if (inPage) {
    return (
      <Link
        className={cn("underline cursor-pointer", className)}
        href={href}
        aria-label={ariaLabel}
      >
        {value}
      </Link>
    );
  }
  return (
    <a
      className={cn("underline cursor-pointer", className)}
      href={href}
      aria-label={ariaLabel}
      target="_blank"
      rel="noopener noreferrer"
    >
      {value}
    </a>
  );
}

