import { getAllWritingStatics } from '@/lib/writing';
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const all_writings = getAllWritingStatics().map((writing) => ({
        url: `https://mgkusumaputra.me/writing/${writing.slug}`,
        lastModified: new Date(writing.date).toISOString().split("T")[0],
    }))

    const all_routes = [
        "",
        "/projects",
        "/writing",
        "/about-me",
    ].map((route) => ({
        url: `https://mgkusumaputra.me${route}`,
        lastModified: new Date().toISOString().split("T")[0],
    }));

    return [...all_routes, ...all_writings];
}