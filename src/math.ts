/**
 * Safely divides two numbers.
 *
 * @throws {Error} When attempting to divide by zero.
 */
export function safeDivide(a: number, b: number): number {
    if (b === 0) {
        throw new Error("Division by zero");
    }

    return a / b;
/**
 * Safely divide two numbers.
 *
 * @throws {Error} When `b` is 0.
 */
export function safeDivide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Division by zero");
  }

  return a / b;
}
}