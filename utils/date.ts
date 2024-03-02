export const formatDateToISO = (date: string | Date) =>
  new Date(date).toISOString();
