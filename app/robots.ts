import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
            },
        ],
        sitemap: "https://mgkusumaputra.me/sitemap.xml",
        host: "https://mgkusumaputra.me",
    };
}