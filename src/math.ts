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
}