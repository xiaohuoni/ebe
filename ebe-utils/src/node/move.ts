import {
  existsSync,
  mkdirpSync,
  readFileSync,
  readJSONSync,
  writeFileSync,
  writeJSONSync,
} from 'fs-extra';
import { dirname, isAbsolute, join, relative } from 'path';
import { getAllImportFiles } from './babel/getAllImportFiles';
export interface MoveConfig {
  target: string;
  outDir: string;
  cwd?: string;
}
const copyFileSyncAlias = (cwd: string, from: string, to: string) => {
  // copyFileSync(file, absTarget);
  let context = readFileSync(from, 'utf-8');
  const importList =
    context.match(/from '@\/([^']+)'/g)?.map((match) => match.slice(8, -1)) ||
    [];
  importList.forEach((source) => {
    const absolute = join(cwd, 'src', source);
    const filePath = relative(dirname(from), absolute);
    context = context.replace(`@/${source}`, filePath);
  });
  writeFileSync(to, context, 'utf-8');
};
export async function move(moveConfig: MoveConfig): Promise<any> {
  const { target, outDir, cwd = process.cwd() } = moveConfig;
  const resolvedTarget = isAbsolute(target) ? target : join(cwd, target);
  if (!existsSync(resolvedTarget)) {
    throw new Error(`指定的入口文件不存在: ${resolvedTarget}`);
  }
  const allImportFiles = getAllImportFiles(cwd, resolvedTarget);
  // 拷贝入口文件
  allImportFiles[resolvedTarget] = true;
  const keys = Object.keys(allImportFiles);
  let count = keys.length;
  keys.forEach((file) => {
    if (!existsSync(file)) {
      console.log(`拷贝文件不存在: ${file}`);
      count -= 1;
      return;
    }
    const filePath = relative(cwd, file);
    const absTarget = isAbsolute(outDir)
      ? join(outDir, filePath)
      : join(cwd, outDir, filePath);
    // console.log(`[COPY] 拷贝 ${absTarget}`);
    mkdirpSync(dirname(absTarget));
    copyFileSyncAlias(cwd, file, absTarget);
  });
  console.log(`[COPY] 共拷贝文件数 ${count}`);
  const pkg = join(cwd, 'package.json');
  if (existsSync(pkg)) {
    // package 存在，则写一个记录
    let context = readJSONSync(pkg, 'utf-8');
    writeJSONSync(
      join(outDir, 'package.json'),
      {
        name: context.name,
        version: context.version,
      },
      'utf-8',
    );
  }
}
