export default function countdown(start: number): number[] {
  if (start <= 0) {
    return [];
  }
  return Array.from({ length: start }, (_, i) => start - i);
}
