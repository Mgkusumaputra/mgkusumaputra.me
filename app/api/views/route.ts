import { NextResponse } from "next/server"
import { headers } from "next/headers"
import { redis } from "@/lib/redis"
import { isBot } from "@/lib/isBot"


export async function POST(req: Request) {
    const body = await req.json()
    const slug = body?.slug

    if (!slug) {
        return NextResponse.json(
            { error: "Missing slug" },
            { status: 400 }
        )
    }

    const ua = (await headers()).get("user-agent")

    if (isBot(ua)) {
        return NextResponse.json({ ignored: true })
    }

    const key = `views:writings:${slug}`

    const views = await redis.incr(key)

    return NextResponse.json({ views })
}
