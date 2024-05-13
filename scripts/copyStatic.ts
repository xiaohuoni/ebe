import fs from 'fs';
import path from 'path';

/**
 * 将 target 中所有的文件，按照原有的文件夹结构拷贝到 output 目录下，如果不存在对应文件夹则新建，如果存在对应文件则覆盖
 * @param {*} target 拷贝目录
 * @param {*} output 目标路径
 */
export const copyStatic = (target: string, output: string) => {
  const copyRecursive = (source: string, destination: string) => {
    if (fs.lstatSync(source).isDirectory()) {
      if (!fs.existsSync(destination)) {
        fs.mkdirSync(destination);
      }
      fs.readdirSync(source).forEach((file: string) => {
        const sourcePath = path.join(source, file);
        const destinationPath = path.join(destination, file);
        copyRecursive(sourcePath, destinationPath);
      });
    } else {
      fs.copyFileSync(source, destination);
    }
  };

  copyRecursive(target, output);
};
