/**
 * A small mutable calculator that supports fluent method chaining.
 *
 * Example:
 *   const value = new Calculator()
 *     .add(10)
 *     .subtract(4)
 *     .multiply(3)
 *     .divide(2)
 *     .getValue(); // 9
 */
export class Calculator {
  private state: number;

  public constructor() {
    this.state = 0;
  }

  public add(value: number): this {
    this.state += value;
    return this;
  }

  public subtract(value: number): this {
    this.state -= value;
    return this;
  }

  public multiply(value: number): this {
    this.state *= value;
    return this;
  }

  public divide(divisor: number): this {
    if (divisor === 0 || Object.is(divisor, -0)) {
      throw new Error("Cannot divide by zero (divisor cannot be 0 or -0)."
      );
    }

    this.state /= divisor;
    return this;
  }

  public getValue(): number {
    return this.state;
  }

  public reset(): this {
    this.state = 0;
    return this;
  }
}