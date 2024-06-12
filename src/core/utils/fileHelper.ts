import { ResultFile } from '../types';

/**
 * 是否是图片文件资源
 * @param file
 */
export const isImageFile = (file: ResultFile) => {
  return file.options?.base64 === true;
};
