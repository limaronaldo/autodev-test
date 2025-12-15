import { max } from './math';

describe('max', () => {
  it('returns 5 for max(5, 3)', () => {
    expect(max(5, 3)).toBe(5);
  });

  it('returns -1 for max(-1, -5)', () => {
    expect(max(-1, -5)).toBe(-1);
  });

  it('returns 0 for max(0, 0)', () => {
    expect(max(0, 0)).toBe(0);
  });
});