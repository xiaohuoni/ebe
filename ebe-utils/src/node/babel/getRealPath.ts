import { existsSync } from 'fs';
import { extname } from 'path';

export const FILE_EXT_NAMES = ['.tsx', '.ts', '.jsx', '.mjs', '.js', '.d.ts'];
export const LESS_EXT_NAMES = ['.less'];

export const isJsFile = (file: string) =>
  FILE_EXT_NAMES.includes(extname(file));

export const isLessFile = (file: string) =>
  LESS_EXT_NAMES.includes(extname(file));

export function getRealPath(target: string) {
  if (isJsFile(target) || isLessFile(target)) {
    return target;
  } else {
    for (const fileExtName of FILE_EXT_NAMES) {
      const targetWithExtName = `${target}${fileExtName}`;
      // 省略 index 的写法
      const targetIndexWithExtName = `${target}/index${fileExtName}`;
      if (existsSync(targetWithExtName)) {
        return targetWithExtName;
      }
      if (existsSync(targetIndexWithExtName)) {
        return targetIndexWithExtName;
      }
    }
    return target;
  }
}
