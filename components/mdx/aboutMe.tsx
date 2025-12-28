import Image from "next/image";
import { ReactNode } from "react";

export const aboutMe = {
  p: ({ children }: { children: ReactNode }) => (
    <p className="text-secondary text-base px-8">{children}</p>
  ),

  ImageGrid: ({ children }: { children: ReactNode }) => (
    <div className="relative block w-full md:left-1/2 md:-translate-x-1/2 md:w-screen md:max-w-275 my-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{children}</div>
    </div>
  ),

  GridImage: ({ src, alt }: { src: string; alt: string }) => (
    <div className="block h-auto w-full rounded-md border-secondary hover:opacity-90 bg-cover">
      <Image
        src={src}
        alt={alt}
        width={1068}
        height={600}
        className="block h-full w-full rounded-md"
      />
    </div>
  ),
};

