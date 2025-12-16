import type { ComponentPropsWithRef } from "react";

export default function Vercel({ className }: ComponentPropsWithRef<"svg">) {
  return (
    <svg
      height="18"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="#000000"
      className={className}
    >
      <title>{"Vercel"}</title>
      <path d="m12 1.608 12 20.784H0Z" />
    </svg>
  );
}

