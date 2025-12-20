import { getAllWritingStatics } from "@/lib/writing";
import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image({ params }: { params: { slug: string } }) {
  const writings = getAllWritingStatics();
  const writing = writings.find((p) => p.slug === params.slug);

  if (!writing) {
    return new Response("Not Found", { status: 404 });
  }

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
          backgroundImage: `url(${process.env.OG_BACKGROUND_URL})`,
        }}
      >
        <p
          style={{
            width: 760,
            marginLeft: 80,
            display: "flex",
            fontSize: 64,
            fontFamily: "Plus Jakarta Sans",
            fontWeight: "medium",
            color: "0E0E0D",
            lineHeight: "80px",
            letterSpacing: "0px",
            whiteSpace: "pre-wrap",
          }}
        >
          {writing.title}
        </p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}

