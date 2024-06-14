import { parseExpr } from '../../../src/utils/schema/parseExpr';

describe('parseExpr', () => {
  it('should parse the expression correctly', () => {
    const code = '1 + 2';
    const context = {};
    const result = parseExpr(code, context);
    expect(result).toEqual(3);
  });

  it('should handle errors and return undefined', () => {
    const code = '1 +';
    const context = {};
    const result = parseExpr(code, context);
    expect(result).toBeUndefined();
  });
});
