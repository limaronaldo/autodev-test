
/**
 * Subtract two numbers.
 */
export function subtract(a: number, b: number): number {
  return a - b;
}

/**
 * Calculate the n-th Fibonacci number.
 *
 * Uses an iterative approach (no recursion).
 *
 * @throws Error when n is negative.
 */
export function fibonacci(n: number): number {
  if (n < 0) {
    throw new Error("Fibonacci is not defined for negative numbers");
  }

  if (n === 0) return 0;
  if (n === 1) return 1;

  let prev = 0;
  let curr = 1;

  for (let i = 2; i <= n; i++) {
    const next = prev + curr;
    prev = curr;
    curr = next;
  }

  return curr;
}
