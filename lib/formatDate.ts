export function FormatDate(date?: string): string {
  if (!date) return "";

  const [day, month, year] = date.split("-").map(Number);

  return new Date(year, month - 1, day).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function ParseDate(date: string): number {
  const parts = date.split("-").map(Number);

  if (parts.length !== 3 || parts.some(isNaN)) {
    throw new Error(`Invalid date format: ${date}`);
  }

  const [day, month, year] = parts;

  return Date.UTC(year, month - 1, day);
}
