import { abs } from './math';

describe('math', () => {
  describe('abs', () => {
    it('should return absolute value for negative number', () => {
      expect(abs(-5)).toBe(5);
    });
    it('should return absolute value for positive number', () => {
      expect(abs(5)).toBe(5);
    });
    it('should return absolute value for zero', () => {
      expect(abs(0)).toBe(0);
    });
  });
});