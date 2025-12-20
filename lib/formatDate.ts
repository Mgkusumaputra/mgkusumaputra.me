export function FormatDate(date?: string): string {
    if (!date) return ""

    const [day, month, year] = date.split("-").map(Number)

    return new Date(year, month - 1, day).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    })
}
