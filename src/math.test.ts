import { sqrt } from './math';

describe('sqrt', () => {
  it('should return 2 for sqrt(4)', () => {
    expect(sqrt(4)).toBe(2);
  });

  it('should return 3 for sqrt(9)', () => {
    expect(sqrt(9)).toBe(3);
  });

  it('should return 4 for sqrt(16)', () => {
    expect(sqrt(16)).toBe(4);
  });
});