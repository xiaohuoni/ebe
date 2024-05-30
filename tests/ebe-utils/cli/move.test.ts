import { readFileSync } from 'fs';
import { join } from 'path';
import { move } from '../../../ebe-utils/src/node/move';

test('ebe move', async () => {
  const outDir = './node_modules/.cache/outDir';
  await move({
    target: './tests/fixtures/move/index.ts',
    outDir,
  });

  // 文件读到了，说明拷贝成功
  const index = readFileSync(
    join(outDir, './tests/fixtures/move/index.ts'),
    'utf-8',
  );

  // 别名处理
  expect(index).toContain(`export * from '../../../../src/constants';`);
});
