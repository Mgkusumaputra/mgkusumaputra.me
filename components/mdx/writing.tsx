/* eslint-disable @typescript-eslint/no-explicit-any */
import type { MDXComponents } from "mdx/types";
import CodeBlock from "../writing/codeBlock";
import Callout from "../writing/callout";
import Quote from "../writing/quote";
import Equation from "../writing/equation";
import { Children, ReactElement } from "react";

export const writingComponents: MDXComponents = {
  h1: (props) => (
    <h1
      className="font-display text-3xl font-semibold text-primary"
      {...props}
    />
  ),

  h2: (props) => (
    <h2
      className="font-display text-2xl font-semibold text-primary"
      {...props}
    />
  ),

  h3: (props) => (
    <h3 className="font-display text-xl font-medium text-primary" {...props} />
  ),

  p: (props) => (
    <p className="my-4 leading-7 font-body text-secondary" {...props} />
  ),

  ul: (props) => (
    <ul className="my-4 list-disc pl-6 space-y-2 text-secondary" {...props} />
  ),

  ol: (props) => (
    <ol
      className="my-4 list-decimal pl-6 space-y-2 text-secondary"
      {...props}
    />
  ),

  hr: () => <hr className="my-10 border-neutral-200 dark:border-neutral-800" />,

  a: (props) => (
    <a
      className="underline cursor-pointer"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),

  Callout,
  Quote,
  Equation,
  figure: (props) => {
    if (
      props &&
      typeof props === "object" &&
      "data-rehype-pretty-code-figure" in props
    ) {
      let title: string | undefined;
      let newChildren = props.children;

      if (props.children) {
        const childArray = Children.toArray(props.children);

        const filteredChildren = childArray.filter((child) => {
          if (
            typeof child === "object" &&
            child !== null &&
            "type" in child &&
            child.type === "figcaption"
          ) {
            const element = child as ReactElement;
            if (
              element.props &&
              typeof element.props === "object" &&
              "data-rehype-pretty-code-title" in element.props
            ) {
              title =
                (element.props as any).children?.toString() ||
                element.props["data-rehype-pretty-code-title"];
              return false;
            }
          }
          return true;
        });

        newChildren =
          filteredChildren.length === 1
            ? filteredChildren[0]
            : filteredChildren;
      }

      return (
        <CodeBlock {...props} data-code-title={title}>
          {newChildren}
        </CodeBlock>
      );
    }

    return <figure {...props} />;
  },
};

