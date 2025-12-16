"use client";

import { writingComponents } from "../mdx/writing";
import { JSX, useEffect, useState } from "react";
import type { MDXProps } from "mdx/types";

interface MDXRendererProps {
  slug: string;
}

type MDXComponent = (props: MDXProps) => JSX.Element;

export default function MDXRenderer({ slug }: MDXRendererProps) {
  const [MDXContent, setMDXContent] = useState<MDXComponent | null>(null);

  useEffect(() => {
    async function loadMDX() {
      try {
        const mdxModule = await import(`@/content/writings/${slug}.mdx`);
        setMDXContent(() => mdxModule.default);
      } catch (error) {
        console.error("Failed to load MDX:", error);
      }
    }

    loadMDX();
  }, [slug]);

  if (!MDXContent) {
    return (
      <div className="flex items-center justify-center py-8">
        <div className="text-neutral-500"></div>
      </div>
    );
  }

  return <MDXContent components={writingComponents} />;
}

