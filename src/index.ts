export function hello() { return "Hello, World!"; }

export function modulo(a: number, b: number): number {
  if (b === 0) throw new Error("Cannot take modulo by zero");
  return a % b;
}

export { power } from './math';
