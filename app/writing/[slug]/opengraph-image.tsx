import { ImageResponse } from "next/og";
import writings from "@/public/writings.json";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

type WritingMetadata = {
  slug: string;
  title: string;
};

const SITE_ORIGIN = process.env.NEXT_PUBLIC_SITE_URL
  ? new URL(process.env.NEXT_PUBLIC_SITE_URL).origin
  : "https://mgkusumaputra.me";

function getWritingBySlug(slug: string) {
  return (writings as WritingMetadata[]).find((writing) => writing.slug === slug);
}

async function getPlusJakartaSansFont() {
  const response = await fetch(`${SITE_ORIGIN}/fonts/PlusJakartaSans-Medium.ttf`, { cache: "force-cache" });

  if (!response.ok) {
    throw new Error(`Failed to load OG font. Status: ${response.status}`);
  }

  return response.arrayBuffer();
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const writing = getWritingBySlug(slug);

  if (!writing) {
    return new Response("Not Found", { status: 404 });
  }

  const plusJakartaSansData = await getPlusJakartaSansFont();
  const backgroundImage = process.env.OG_BACKGROUND_URL;

  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        ...(backgroundImage
          ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover" }
          : { backgroundColor: "#F4F4F5" }),
      }}
    >
      <div
        style={{
          width: 760,
          marginLeft: 80,
          display: "flex",
          fontSize: 64,
          color: "#0E0E0D",
          fontFamily: "Plus Jakarta Sans",
          lineHeight: "80px",
          letterSpacing: "0px",
          whiteSpace: "pre-wrap",
        }}
      >
        {writing.title}
      </div>
    </div>,
    {
      ...size,
      fonts: [
        {
          name: "Plus Jakarta Sans",
          data: plusJakartaSansData,
          style: "normal",
        },
      ],
    },
  );
}
