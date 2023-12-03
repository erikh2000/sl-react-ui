import { scaleDimensionsToFit, scaleDimensionsToCover } from "../scaleUtil";

describe('scaleUtil', () => {
  describe('scaleDimensionsToFit()', () => {
    it('should scale to fit when ratio is same but source rect is smaller than rect to fit inside', () => {
      expect(scaleDimensionsToFit(200, 100, 400, 200)).toEqual([400, 200]);
    });

    it('should scale to fit when ratio is same but source rect is larger than rect to fit inside', () => {
      expect(scaleDimensionsToFit(800, 400, 400, 200)).toEqual([400, 200]);
    });
    
    it('should scale to fit when smaller rect is constrained by height', () => {
      expect(scaleDimensionsToFit(100, 200, 400, 400)).toEqual([200, 400]);
    });

    it('should scale to fit when larger rect is constrained by height', () => {
      expect(scaleDimensionsToFit(1000, 2000, 400, 400)).toEqual([200, 400]);
    });

    it('should scale to fit when smaller rect is constrained by width', () => {
      expect(scaleDimensionsToFit(200, 100, 400, 400)).toEqual([400, 200]);
    });
    
    it('should scale to fit when larger rect is constrained by width', () => {
      expect(scaleDimensionsToFit(2000, 1000, 400, 400)).toEqual([400, 200]);
    });
  });
  
  describe('scaleDimensionsToCover()', () => {
    it('should scale to cover when ratio is same but source rect is smaller than rect to fit inside', () => {
      expect(scaleDimensionsToCover(200, 100, 400, 200)).toEqual([400, 200]);
    });

    it('should scale to cover when ratio is same but source rect is larger than rect to fit inside', () => {
      expect(scaleDimensionsToCover(800, 400, 400, 200)).toEqual([400, 200]);
    });
    
    it('should scale to cover when smaller rect is constrained by width', () => {
      expect(scaleDimensionsToCover(100, 200, 400, 400)).toEqual([400, 800]);
    });

    
    it('should scale to cover when larger rect is constrained by width', () => {
      expect(scaleDimensionsToCover(1000, 2000, 400, 400)).toEqual([400, 800]);
    });

    it('should scale to cover when smaller rect is constrained by height', () => {
      expect(scaleDimensionsToCover(200, 100, 400, 400)).toEqual([800, 400]);
    });
    
    it('should scale to cover when larger rect is constrained by height', () => {
      expect(scaleDimensionsToCover(2000, 1000, 400, 400)).toEqual([800, 400]);
    });
  });
});