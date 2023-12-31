import { type DocumentRendererProps } from "@keystatic/core/renderer";
import { type Highlighter } from "shiki";

import { Code } from "./code";
import { Heading } from "./heading";
import { InlineCode } from "./inline-code";
import { Link } from "./link";

export function getDocumentRenderers() {
  return {
    block: {
      code(props) {
        return <Code {...props} />;
      },
      heading(props) {
        return <Heading {...props} isAnchor={props.level !== 1} />;
      },
    },
    inline: {
      code(props) {
        return <InlineCode {...props} />;
      },
      link(props) {
        return <Link {...props} />;
      },
    },
  } satisfies DocumentRendererProps["renderers"];
}
