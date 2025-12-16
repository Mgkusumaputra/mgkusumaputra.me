import { ReactNode } from "react";

export const current = {
  ul: ({ children }: { children: ReactNode }) => (
    <ul className="space-y-1 text-secondary text-base">{children}</ul>
  ),

  li: ({ children }: { children: ReactNode }) => (
    <li className="flex items-start  gap-2">
      <span className="text-secondary">•</span>
      <span className="leading-relaxed">{children}</span>
    </li>
  ),

  a: ({ href, children }: { href?: string; children: ReactNode }) => (
    <a
      href={href}
      aria-label={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 font-bold underline"
    >
      {children}
      <span className="text-base">↗</span>
    </a>
  ),
};

