// import { renderToHtml, type Highlighter } from "shiki";
// export function Code({
//   children,
//   highlighter,
//   language,
// }: {
//   children: string;
//   highlighter: Highlighter;
//   language?: string;
// }) {
//   let codeBlock = children;
//   try {
//     const tokens = highlighter.codeToThemedTokens(children, language);
//     codeBlock = renderToHtml(tokens, {
//       elements: {
//         pre({ children }) {
//           return `<pre>${children}</pre>`;
//         },
//       },
//     });
//   } catch (_error) {
//     throw new Error(
//       `Failed to highlight code block with language "${language}"`
//     );
//   }

//   return (
//     <div
//       className="block overflow-x-scroll"
//       dangerouslySetInnerHTML={{ __html: codeBlock }}
//     />
//   );
// }
"use client";

import { Highlight, themes } from "prism-react-renderer";

export function Code({
  children,
  language,
}: {
  children: string;
  language?: string;
}) {
  return (
    <Highlight theme={themes.nightOwl} code={children} language={`${language}`}>
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <pre className="rounded-md" style={style}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}
