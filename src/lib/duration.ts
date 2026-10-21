/**
 * Reads a CSS time ("900ms", "0.9s") as milliseconds. A value that is missing or
 * unreadable returns `fallback`, so a caller never waits for NaN milliseconds.
 */
export function durationMs(value: string, fallback: number): number {
  const time = value.trim();
  const amount = Number.parseFloat(time);
  if (Number.isNaN(amount) || amount < 0) return fallback;
  if (time.endsWith('ms')) return amount;
  if (time.endsWith('s')) return amount * 1000;
  return fallback;
}
