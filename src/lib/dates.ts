export function formatDateTimeToString(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true, // Use 24-hour format
  };

  return date.toLocaleDateString(undefined, options);
}
