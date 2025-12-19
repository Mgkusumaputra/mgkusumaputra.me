import { redis } from "./redis"

export async function getViews(slug: string): Promise<number> {
    const views = await redis.get(`views:writings:${slug}`);
    return Number(views) || 0;
}

