import {
  LXProjectOptions,
  PostProcessor,
  ResultDir,
  ResultFile,
} from '../types';
import { addDirectory, addFile, createResultDir } from './resultHelper';

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
  postProcessors: PostProcessor[],
  root: ResultDir,
  fun: FuncFileGenerator,
  config?: LXProjectOptions,
) {
  try {
    const result = fun(config);
    const [path, file] = result;
    let { content, ext: type, name, ...other } = file;

    if (postProcessors.length > 0) {
      postProcessors.forEach((processer) => {
        try {
          // 尝试使用格式化
          content = processer(content, type, name);
        } catch (error) {
          console.log('尝试使用格式化失败',error);
        }
      });
    }
    insertFile(root, path, { content, ext: type, name, ...other });
  } catch (error) {
    throw new Error(`Error: ${typeof fun}`);
  }
}
