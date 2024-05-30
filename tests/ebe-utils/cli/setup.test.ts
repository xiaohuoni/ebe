import { readFileSync } from 'fs';
import { join } from 'path';
import { copyStatic } from '../../../ebe-utils/src/node/copyStatic';
import { setup } from '../../../ebe-utils/src/node/setup';

test('ebe setup', async () => {
  const outDir = './node_modules/.cache/setup';
  // reset test fixtures
  copyStatic('./tests/fixtures/setup', outDir);
  await setup({
    cwd: outDir,
  });

  const pkg = JSON.parse(readFileSync(join(outDir, 'package.json'), 'utf-8'));
  expect(pkg.scripts.postinstall).toBe('');
});
