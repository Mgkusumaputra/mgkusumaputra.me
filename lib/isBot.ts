export function isBot(userAgent: string | null) {
    if (!userAgent) return true

    const ua = userAgent.toLowerCase()

    const botPatterns = [
        "bot",
        "crawler",
        "spider",
        "crawling",
        "headless",
        "phantom",
        "lighthouse",
        "chrome-lighthouse",
        "pagespeed",
        "node",
        "curl",
        "wget",
        "python",
        "axios",
        "fetch"
    ]

    return botPatterns.some(pattern => ua.includes(pattern))
}
