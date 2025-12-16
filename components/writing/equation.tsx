"use client";

import { useEffect, useRef } from "react";
import renderMathInElement from "katex/contrib/auto-render";
import "katex/dist/katex.min.css";

type EquationProps = React.HTMLAttributes<HTMLDivElement> & {
  text: string;
};

export default function Equation({ text, ...delegated }: EquationProps) {
  const katexTextRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!katexTextRef.current) return;

    renderMathInElement(katexTextRef.current, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false },
      ],
    });
  }, [text]);

  return (
    <div ref={katexTextRef} className="my-4 overflow-x-auto" {...delegated}>
      {text}
    </div>
  );
}

