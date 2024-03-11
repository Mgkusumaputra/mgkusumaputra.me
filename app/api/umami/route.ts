import { error } from "console";

import { NextRequest, NextResponse } from "next/server";

import { getViews } from "./utils";

export async function GET(req: NextRequest) {
  const slug = req.nextUrl.searchParams.get("slug");

  if (!slug) {
    return NextResponse.json(
      { slug, count: 0, error: `${slug} is not found` },
      { status: 400 },
    );
  }
  const [views, error] = await getViews(slug);

  if (error) {
    return NextResponse.json(
      { error: "Cannot GET post views", count: 0, slug },
      { status: 500 },
    );
  }

  return NextResponse.json(
    { slug, count: views, message: "GET post views successfully" },
    { status: 200 },
  );
}
