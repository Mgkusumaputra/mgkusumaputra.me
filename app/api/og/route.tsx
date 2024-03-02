import { Source_Code_Pro } from "next/font/google";
import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

import { OG } from "@/constant/seo";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const postTitle = searchParams.get("title");

  const font = fetch(
    new URL("../../../public/fonts/SourceCodePro-Bold.ttf", import.meta.url),
  ).then((res) => res.arrayBuffer());
  const fontData = await font;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundImage: `url(${OG.dynamic})`,
        }}
      >
        <div
          style={{
            marginLeft: 120,
            marginRight: 120,
            display: "flex",
            fontSize: 130,
            fontFamily: "Source Code Pro",
            letterSpacing: "-0.05em",
            fontStyle: "normal",
            color: "white",
            lineHeight: "120px",
            whiteSpace: "pre-wrap",
          }}
        >
          {postTitle}
        </div>
      </div>
    ),
    {
      width: 1920,
      height: 1080,
      fonts: [
        {
          name: "Source Code Pro",
          data: fontData,
          style: "normal",
        },
      ],
    },
  );
}
