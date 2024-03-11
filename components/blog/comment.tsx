"use client";

import Giscus from "@giscus/react";
import { useTheme } from "next-themes";

export default function Comment() {
  const { theme } = useTheme();

  return (
    <Giscus
      repo="mgkusumaputra/mgkusumaputra.me"
      repoId="R_kgDOKI25rw"
      category="Comments"
      categoryId="DIC_kwDOKI25r84CZsdb"
      mapping="pathname"
      theme={theme === "dark" ? "dark_protanopia" : "light_protanopia"}
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      lang="en"
      loading="lazy"
    />
  );
}
