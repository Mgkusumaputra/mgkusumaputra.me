import {
  DocumentRenderer as KeystaticDocumentRenderer,
  type DocumentRendererProps,
} from "@keystatic/core/renderer";

import { getDocumentRenderers } from "./renderers";
import { highlighter } from "@/lib/highlighter";

export async function DocumentRenderer(props: DocumentRendererProps) {
  const {
    renderers = getDocumentRenderers(await highlighter),
    ...consumerProps
  } = props;

  return <KeystaticDocumentRenderer renderers={renderers} {...consumerProps} />;
}
