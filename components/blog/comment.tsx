"use client";

import Giscus from "@giscus/react";

export default function Comment() {
  return (
    <Giscus
      repo="mgkusumaputra/mgkusumaputra.me"
      repoId="R_kgDOKI25rw"
      category="Comments"
      categoryId="DIC_kwDOKI25r84CZsdb"
      mapping="pathname"
      theme="light"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      lang="en"
      loading="lazy"
    />
  );
}
