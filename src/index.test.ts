import { subtract } from './index';

describe('subtract', () => {
  it('should subtract two positive numbers', () => {
    expect(subtract(10, 5)).toBe(5);
    expect(subtract(100, 25)).toBe(75);
  });

  it('should subtract with negative numbers', () => {
    expect(subtract(5, -3)).toBe(8);
    expect(subtract(-10, -5)).toBe(-5);
    expect(subtract(-5, 10)).toBe(-15);
  });

  it('should subtract with zero', () => {
    expect(subtract(10, 0)).toBe(10);
    expect(subtract(0, 5)).toBe(-5);
