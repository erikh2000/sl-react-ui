import { clamp } from '../numberUtil';

describe('numberUtil.ts', () => {
  describe('clamp()', () => {
    it('should return min value when value is less than min', () => {
      expect(clamp(0, 1, 10)).toBe(1);
    });
    it('should return max value when value is greater than max', () => {
      expect(clamp(11, 1, 10)).toBe(10);
    });
    it('should return value when value is between min and max', () => {
      expect(clamp(5, 1, 10)).toBe(5);
    });
  });
});