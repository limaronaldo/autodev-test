/**
 * Add two numbers
 */
export function add(a: number, b: number): number {
  return a + b;
}

/**
 * Subtract two numbers.
 */
export function subtract(a: number, b: number): number {
  return a - b;
}

/**
 * Multiply two numbers.
 */
export function multiply(a: number, b: number): number {
  return a * b;
}

/**
 * Divide two numbers.
 */
export function divide(a: number, b: number): number {
  return a / b;
}

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

/**
 * Modulo two numbers.
 */
export function modulo(a: number, b: number): number {
  return a % b;
}

/**
 * Raise base to the power of exponent.
 */
export function power(base: number, exponent: number): number {
  return base ** exponent;
}

/**
 * Multiply a number by four.
 */
export function quadruple(n: number): number {
  return n * 4;
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
