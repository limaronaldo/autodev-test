/**
 * Generates a countdown array from a given start number.
 * @param start - The starting number for the countdown.
 * @returns An array of numbers counting down from start to 1.
 */
function countdown(start: number): number[] {
  if (start <= 0) {
    return [];
  }
  return Array.from({ length: start }, (_, i) => start - i);
}

export default countdown;