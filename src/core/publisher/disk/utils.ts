import * as systemFs from 'fs';
import { join } from 'path';
import { isImageFile } from '../../../core/utils/fileHelper';
import { ResultDir, ResultFile } from '../../types';

export interface IFileSystem {
  existsSync: typeof systemFs.existsSync;
  mkdir: typeof systemFs.mkdir;
  writeFile: typeof systemFs.writeFile;
}

export const writeFolder = async (
  folder: ResultDir,
  currentPath: string,
  createProjectFolder = true,
  fs: IFileSystem = systemFs,
): Promise<void> => {
  const { name, files, dirs } = folder;

  const folderPath = createProjectFolder
    ? join(currentPath, name)
    : currentPath;

  if (!fs.existsSync(folderPath)) {
    await createDirectory(folderPath, fs);
  }

  const promises = [
    writeFilesToFolder(folderPath, files, fs),
    writeSubFoldersToFolder(folderPath, dirs, fs),
  ];

  await Promise.all(promises);
};

/**
 * 把图片写入到指定的路径
 * @param filePath
 * @param file
 * @param fs
 */
export const writeImageToFile = (
  filePath: string,
  file: ResultFile,
  fs: IFileSystem,
): Promise<void> => {
  const isBase64 = file.options?.base64;
  if (!isBase64) return Promise.reject(new Error('暂不支持的图片类型'));

  // 文件内容不存在直接返回，无需生成文件
  if (typeof file.content !== 'string' || !file.content)
    return Promise.resolve();

  const content = file.content.replace(/^data:image\/png;base64,/, '');
  const binaryData = Buffer.from(content, 'base64');
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, binaryData, {}, (err) => {
      err ? reject(err) : resolve();
    });
  });
};

const writeFilesToFolder = async (
  folderPath: string,
  files: ResultFile[],
  fs: IFileSystem,
): Promise<void> => {
  const promises = files.map((file) => {
    const fileName = file.ext ? `${file.name}.${file.ext}` : file.name;
    const filePath = join(folderPath, fileName);

    if (isImageFile(file)) {
      return writeImageToFile(filePath, file, fs);
    }

    return writeContentToFile(filePath, file.content, 'utf8', fs);
  });

  await Promise.all(promises);
};

const writeSubFoldersToFolder = async (
  folderPath: string,
  subFolders: ResultDir[],
  fs: IFileSystem,
): Promise<void> => {
  const promises = subFolders.map((subFolder) => {
    return writeFolder(subFolder, folderPath, true, fs);
  });

  await Promise.all(promises);
};

const createDirectory = (pathToDir: string, fs: IFileSystem): Promise<void> => {
  return new Promise((resolve, reject) => {
    fs.mkdir(pathToDir, { recursive: true }, (err) => {
      err ? reject(err) : resolve();
    });
  });
};

const writeContentToFile = (
  filePath: string,
  fileContent: NodeJS.ArrayBufferView | string,
  encoding = 'utf8',
  fs: IFileSystem,
): Promise<void> => {
  return new Promise((resolve, reject) => {
    fs.writeFile(
      filePath,
      fileContent,
      { encoding: encoding as BufferEncoding },
      (err) => {
        err ? reject(err) : resolve();
      },
    );
  });
};
