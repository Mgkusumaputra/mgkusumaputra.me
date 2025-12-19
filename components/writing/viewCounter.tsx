"use client";

import { useEffect, useRef, useState } from "react";

export function ViewCounter({
  slug,
  initialViews,
}: {
  slug: string;
  initialViews: number;
}) {
  const [views, setViews] = useState(initialViews);
  const ranOnce = useRef(false);

  useEffect(() => {
    if (ranOnce.current) return;
    ranOnce.current = true;

    if (process.env.NODE_ENV === "development") return;

    const key = `viewed:${slug}`;
    const hasViewed = sessionStorage.getItem(key);
    if (hasViewed) return;

    sessionStorage.setItem(key, "true");

    fetch("/api/views", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug }),
    })
      .then((r) => r.json())
      .then((d) => setViews(d.views))
      .catch(() => {});
  }, [slug]);

  return <p>{views.toLocaleString()} views</p>;
}

