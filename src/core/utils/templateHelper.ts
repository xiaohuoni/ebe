import { ResultDir, ResultFile, LXProjectOptions } from '../types';
import { createResultDir, addDirectory, addFile } from './resultHelper';

type FuncFileGenerator = (config?: LXProjectOptions) => [string[], ResultFile];

export function insertFile(root: ResultDir, path: string[], file: ResultFile) {
  let current: ResultDir = root;
  path.forEach((pathNode) => {
    const dir = current.dirs.find((d) => d.name === pathNode);
    if (dir) {
      current = dir;
    } else {
      const newDir = createResultDir(pathNode);
      addDirectory(current, newDir);
      current = newDir;
    }
  });

  addFile(current, file);
}

export function runFileGenerator(
  root: ResultDir,
  fun: FuncFileGenerator,
  config?: LXProjectOptions,
) {
  try {
    const result = fun(config);
    const [path, file] = result;
    insertFile(root, path, file);
  } catch (error) {
    throw new Error(`Error: ${typeof fun}`);
  }
}
