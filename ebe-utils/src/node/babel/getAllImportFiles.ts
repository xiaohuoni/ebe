import traverse from '@babel/traverse';
import { existsSync, readFileSync } from 'fs';
import { dirname, resolve } from 'path';
import { getRealPath, isJsFile, isLessFile } from './getRealPath';
import { parse } from './parse';

export const getAllImportFiles = (
  cwd: string,
  target: string,
  allImportFiles: any = {},
) => {
  if (!existsSync(target)) {
    return allImportFiles;
  }
  // 如果不是 js 或 less 文件 ，只拷贝了它自己。
  if (!isJsFile(target) && !isLessFile(target)) {
    allImportFiles[target] = true;
    return allImportFiles;
  }

  const content = readFileSync(target, 'utf-8').toString();
  const getNextImport = (importName: string) => {
    const isAlias = importName.startsWith('@/');
    const isRelative = importName.startsWith('.');
    if (isAlias || isRelative) {
      // 绝对路径是三方包
      // @/ 是别名到 ${cwd}/src
      let nextPath = resolve(dirname(target), importName);
      if (isAlias) {
        nextPath = importName.replace('@/', `${cwd}/src/`);
      }
      let nextTarget = getRealPath(nextPath);
      if (!allImportFiles[nextTarget]) {
        allImportFiles[nextTarget] = true;
        getAllImportFiles(cwd, nextTarget, allImportFiles);
      }
    }
  };
  // 手动解析 less 文件
  if (isLessFile(target)) {
    // 注释中的 less 文件也会被拷贝，方便开启和关闭
    const importList =
      content
        .match(/@import '([^']+)'/g)
        ?.map((match) => match.slice(9, -1))
        .filter((i) => i.startsWith('.')) || [];
    importList.forEach((i) => {
      getNextImport(i);
    });
    return allImportFiles;
  }
  let ast = parse(content);
  const visitor = {
    Import(path: any) {
      const source = path.parentPath;
      const args = source.get('arguments');
      if (args[0].node) {
        const importName = args[0].node.value;
        getNextImport(importName);
      }
    },
    ImportDeclaration(path: any) {
      const source = path.get('source');
      const importName = source.node.value;
      getNextImport(importName);
    },
    ExportAllDeclaration(path: any) {
      const source = path.get('source');
      const importName = source.node.value;
      getNextImport(importName);
    },
    ExportNamedDeclaration(path: any) {
      const source = path.get('source');
      // export 不一定是 from 来源，可能是上下文变量
      if (source.node) {
        const importName = source.node.value;
        getNextImport(importName);
      }
    },
  };

  traverse(ast, visitor);
  return allImportFiles;
};
