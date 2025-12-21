/* eslint-disable @typescript-eslint/no-explicit-any */
import createMDX from '@next/mdx'
import type { NextConfig } from "next";

interface Node {
  children: Array<{ type: string; value: string }>;
  properties: {
    className?: string[];
    [key: string]: any;
  };
}

const options = {
  theme: {
    dark: 'github-dark-dimmed',
    light: 'min-light'
  },
  keepBackground: false,
  parseMeta: true,

  onVisitLine(node: Node) {
    node.properties = node.properties || {};

    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }

    const getText = (n: any): string => {
      if (!n) return "";
      if (typeof n.value === "string") return n.value;
      if (Array.isArray(n.children)) return n.children.map(getText).join("");
      return "";
    };

    const text = getText(node).trimStart();

    if (text.startsWith("+")) {
      node.properties["data-diff"] = "add";
      node.properties.className = [
        ...(node.properties.className ?? []),
        "diff-add",
      ];
    } else if (text.startsWith("-")) {
      node.properties["data-diff"] = "remove";
      node.properties.className = [
        ...(node.properties.className ?? []),
        "diff-remove",
      ];
    }
  },

  onVisitHighlightedLine(node: Node) {
    node.properties["data-highlighted-line"] = "";
  },

  onVisitHighlightedWord(node: Node) {
    node.properties["data-highlighted-chars"] = "";
  },

  // onVisitDiffLine(node: Node) {
  //   if (node.properties["data-diff"] === "add") {
  //     node.properties.className = [
  //       ...(node.properties.className ?? []),
  //       "diff-add",
  //     ];
  //   }
  //   if (node.properties["data-diff"] === "remove") {
  //     node.properties.className = [
  //       ...(node.properties.className ?? []),
  //       "diff-remove",
  //     ];
  //   }
  // },
};

const nextConfig: NextConfig = {
  experimental: {
    viewTransition: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/dspkhqhkv/**',
      },
    ],
  },
  pageExtensions: ['mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      "remark-frontmatter",
      "remark-mdx-frontmatter",
      "remark-math"
    ],
    rehypePlugins: [
      ["rehype-pretty-code", options],
      "rehype-katex"
    ]
  }
});


export default withMDX(nextConfig);