import { copyFileSync, existsSync, mkdirpSync } from 'fs-extra';
import { dirname, isAbsolute, join, relative } from 'path';
import { getAllImportFiles } from './babel/getAllImportFiles';
export interface MoveConfig {
  target: string;
  outDir: string;
}
export async function move(moveConfig: MoveConfig): Promise<any> {
  const { target, outDir } = moveConfig;
  const cwd = process.cwd();
  const resolvedTarget = isAbsolute(target) ? target : join(cwd, target);
  if (!existsSync(resolvedTarget)) {
    throw new Error(`指定的文件不存在: ${resolvedTarget}`);
  }
  const allImportFiles = getAllImportFiles(target);
  // 拷贝入口文件
  allImportFiles[target] = true;
  const keys = Object.keys(allImportFiles);
  let count = keys.length;
  keys.forEach((file) => {
    if (!existsSync(file)) {
      console.log(`拷贝文件不存在: ${file}`);
      count -= 1;
      return;
    }
    const filePath = relative(cwd, file);
    const absTarget = join(cwd, outDir, filePath);
    // console.log(`[COPY] 拷贝 ${absTarget}`);
    mkdirpSync(dirname(absTarget));
    copyFileSync(file, absTarget);
  });
  console.log(`[COPY] 共拷贝文件数 ${count}`);
}
