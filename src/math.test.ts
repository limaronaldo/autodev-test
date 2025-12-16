import { max, square } from './math';

describe('max', () => {
  it('returns 5 for max(5, 3)', () => {
    expect(max(5, 3)).toBe(5);
  });

  it('returns 10 for max(10, 10)', () => {
    expect(max(10, 10)).toBe(10);
  });

  it('returns 0 for max(0, 0)', () => {
    expect(max(0, 0)).toBe(0);
  });
});

describe('square', () => {
  it('returns 4 for square(2)', () => {
    expect(square(2)).toBe(4);
  });

  it('returns 25 for square(5)', () => {
    expect(square(5)).toBe(25);
  });

  it('returns 0 for square(0)', () => {
    expect(square(0)).toBe(0);
  });

  it('returns 9 for square(-3)', () => {
    expect(square(-3)).toBe(9);
  });
});