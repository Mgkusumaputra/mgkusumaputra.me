"use client";

import { useEffect, useRef, useState } from "react";

type CodeBlockProps = React.HTMLAttributes<HTMLElement> & {
  "data-rehype-pretty-code-figure"?: string;
  "data-code-title"?: string;
};

export default function CodeBlock(props: CodeBlockProps) {
  const figureRef = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    console.log("Copy button clicked"); // Debug log

    if (!figureRef.current) {
      console.log("No figure ref");
      return;
    }

    const pre = figureRef.current.querySelector("pre");
    console.log("Pre element:", pre); // Debug log

    if (!pre) {
      console.log("No pre found");
      return;
    }

    const code = pre.querySelector("code");
    console.log("Code element:", code); // Debug log

    if (!code) {
      console.log("No code found");
      return;
    }

    // Method 1: Try getting all data-line elements
    const lines = Array.from(code.querySelectorAll("[data-line]"));
    console.log("Found lines:", lines.length); // Debug log

    let text = "";

    if (lines.length > 0) {
      // Get text from each line
      text = lines
        .map((line) => {
          // Get all text nodes, excluding the line number (::before pseudo-element)
          const textContent = line.textContent || "";
          console.log("Line text:", textContent); // Debug log
          return textContent;
        })
        .join("\n");
    } else {
      // Fallback: just get all text
      text = code.textContent || "";
    }

    console.log("Text to copy:", text); // Debug log

    if (!text.trim()) {
      console.log("No text to copy");
      return;
    }

    try {
      await navigator.clipboard.writeText(text);
      console.log("Copy successful!"); // Debug log
      setCopied(true);
    } catch (err) {
      console.error("Failed to copy:", err);

      // Fallback for older browsers
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
        console.log("Copy successful with fallback!"); // Debug log
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
    <figure
      ref={figureRef}
      {...restProps}
      className="group relative my-6 overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800 bg-[#0d1117] shadow-lg"
    >
      {title && (
        <div className="flex items-center gap-2 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#161b22] px-4 py-2.5">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <div className="h-3 w-3 rounded-full bg-[#28c840]" />
          </div>
          <span className="flex-1 text-center text-xs font-medium text-neutral-600 dark:text-neutral-400">
            {title}
          </span>
          <div className="w-[52px]" />
        </div>
      )}

      <button
        type="button"
        onClick={handleCopy}
        aria-label="Copy code to clipboard"
        className="absolute right-3 top-3 z-10 rounded-md bg-neutral-700/80 px-2.5 py-1.5 text-xs font-medium text-neutral-200 opacity-0 transition-all hover:bg-neutral-600 group-hover:opacity-100 focus:opacity-100 backdrop-blur-sm"
      >
        {copied ? (
          <span className="flex items-center gap-1">
            <svg
              className="h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            Copied!
          </span>
        ) : (
          <span className="flex items-center gap-1">
            <svg
              className="h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
            Copy
          </span>
        )}
      </button>

      <div className="overflow-x-auto">{props.children}</div>
    </figure>
  );
}
