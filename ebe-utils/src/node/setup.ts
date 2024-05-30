import { readFileSync, writeFileSync } from 'fs-extra';
import { join } from 'path';
import { copyStatic } from './copyStatic';

export interface SetupConfig {
  cwd?: string;
}

export async function setup({ cwd }: SetupConfig): Promise<any> {
  const root = cwd || process.cwd();

  const pkgPath = join(root, 'package.json');
  // change package json
  const json = readFileSync(pkgPath, 'utf-8');
  if (!json) {
    throw new Error('命令执行路径错误，请在根目录执行');
  }

  // copyStatic
  copyStatic(join(__dirname, '../public'), root);

  const pkg = JSON.parse(json);
  // 把 postinstall 删了，只需要执行一次就行
  // TODO: 可以加检测机制，判断以上逻辑都执行完成，再删除
  pkg.scripts.postinstall = '';
  writeFileSync(pkgPath, JSON.stringify(pkg), 'utf-8');
}
