export function hello() { return "Hello, World!"; }

export function power(base: number, exponent: number): number {
  if (base === 0 && exponent === 0) return 1;
  return base ** exponent;
}