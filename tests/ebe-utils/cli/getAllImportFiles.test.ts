import { getAllImportFiles } from '../../../ebe-utils/src/node/babel/getAllImportFiles';

describe('getAllImportFiles', () => {
  it('should handle import or export name, export default, and export all', () => {
    const target = './tests/fixtures/move/index.ts';
    const imports = getAllImportFiles(target);
    expect(Object.keys(imports).length).toBe(10);
  });
});
