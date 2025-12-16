export function FormatDate(date: string): string {
    const [month, day, year] = date.split("-").map(Number)

    if (!month || !day || !year) {
        throw new Error("Invalid date format. Expected MM-DD-YYYY")
    }

    const dateObj = new Date(year, month - 1, day)

    return dateObj.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    })
}