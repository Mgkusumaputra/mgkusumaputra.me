"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy, File } from "lucide-react";
import { cn } from "@/lib/utils";

type CodeBlockProps = React.HTMLAttributes<HTMLElement> & {
  "data-rehype-pretty-code-figure"?: string;
  "data-code-title"?: string;
};

export default function CodeBlock(props: CodeBlockProps) {
  const figureRef = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!figureRef.current) {
      console.log("No figure ref");
      return;
    }

    const pre = figureRef.current.querySelector("pre");

    if (!pre) {
      console.log("No pre found");
      return;
    }

    const code = pre.querySelector("code");

    if (!code) {
      console.log("No code found");
      return;
    }

    const lines = Array.from(code.querySelectorAll("[data-line]"));

    let text = "";

    if (lines.length > 0) {
      text = lines
        .map((line) => {
          const textContent = line.textContent || "";
          return textContent;
        })
        .join("\n");
    } else {
      text = code.textContent || "";
    }

    if (!text.trim()) {
      console.log("No text to copy");
      return;
    }

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
    } catch (err) {
      console.error("Failed to copy:", err);

      try {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        setCopied(true);
      } catch (fallbackErr) {
        console.error("Fallback copy also failed:", fallbackErr);
      }
    }
  };

  useEffect(() => {
    if (!copied) return;
    const timeout = setTimeout(() => setCopied(false), 1200);
    return () => clearTimeout(timeout);
  }, [copied]);

  const title = props["data-code-title"];

  const {
    "data-rehype-pretty-code-figure": _figure,
    "data-code-title": _title,
    ...restProps
  } = props;

  return (
    <div className="group relative my-6 overflow-hidden rounded-md border border-foreground">
      {title && (
        <div className="flex items-center gap-2 border-b text-primary border-foreground bg-foreground px-4 py-2.5">
          <File className="h-3.5 w-3.5" />
          <span className="text-sm font-medium ">{title}</span>
        </div>
      )}
      <figure
        ref={figureRef}
        {...restProps}
        className="relative bg-transparent "
      >
        <button
          type="button"
          onClick={handleCopy}
          aria-label="Copy code to clipboard"
          className={cn(
            "absolute right-3 top-3 z-10 rounded-md bg-foreground p-2 opacity-0 backdrop-blur-sm cursor-pointer",
            "text-xs font-medium text-secondary",
            "transition-all hover:bg-foreground group-hover:opacity-100 focus:opacity-100"
          )}
        >
          {copied ? (
            <span className="flex items-center gap-1">
              <Check className="h-3.5 w-3.5" />
            </span>
          ) : (
            <span className="flex items-center gap-1">
              <Copy className="h-3.5 w-3.5" />
            </span>
          )}
        </button>

        <div className="overflow-x-auto ">{props.children}</div>
      </figure>
    </div>
  );
}

