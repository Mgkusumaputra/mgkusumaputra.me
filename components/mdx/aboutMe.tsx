import Image from "next/image";
import { ReactNode } from "react";

export const aboutMe = {
  p: ({ children }: { children: ReactNode }) => (
    <p className="text-secondary text-base px-8">{children}</p>
  ),

  ImageGrid: ({ children }: { children: ReactNode }) => (
    <div className="grid grid-cols-2 gap-6 my-4.5">{children}</div>
  ),

  GridImage: ({ src, alt }: { src: string; alt: string }) => (
    <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-200">
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  ),
};

