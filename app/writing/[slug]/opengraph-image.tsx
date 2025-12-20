import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

async function getWritingBySlug(slug: string) {
  const writings = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/writings.json`,
    { cache: "force-cache" }
  ).then((res) => res.json());

  const writing = await writings.find((w: { slug: string }) => w.slug === slug);

  return writing;
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const writing = await getWritingBySlug(slug);

  if (!writing) {
    return new Response("Not Found", { status: 404 });
  }

  const font = fetch(
    new URL("../../../public/fonts/PlusJakartaSans-Medium.ttf", import.meta.url)
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
          backgroundImage: `url(${process.env.OG_BACKGROUND_URL})`,
        }}
      >
        <div
          style={{
            width: 760,
            marginLeft: 80,
            display: "flex",
            fontSize: 64,
            color: "#0E0E0D",
            lineHeight: "80px",
            letterSpacing: "0px",
            whiteSpace: "pre-wrap",
          }}
        >
          {writing.title}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Plus Jakarta Sans",
          data: fontData,
          style: "normal",
        },
      ],
    }
  );
}

