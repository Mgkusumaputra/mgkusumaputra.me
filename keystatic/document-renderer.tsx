import {
  DocumentRenderer as KeystaticDocumentRenderer,
  type DocumentRendererProps,
} from "@keystatic/core/renderer";

import { getDocumentRenderers } from "./renderers";

export async function DocumentRenderer(props: DocumentRendererProps) {
  const {
    renderers = getDocumentRenderers(),
    ...consumerProps
  } = props;

  return <KeystaticDocumentRenderer renderers={renderers} {...consumerProps} />;
}
