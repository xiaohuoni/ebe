import { CMDGeneratorPrames } from '../core/types';
import { parse2Var } from '../core/utils/compositeType';
export function downloadByFileId({ value }: CMDGeneratorPrames): string {
  const {
    data,
    fileName: myFileName,
    fileResourceType: myFileResourceType = 'server',
    fileCode: myFileCode,
  } = value.options;

  let fileId = parse2Var(data);
  const fileName = parse2Var(myFileName);
  const fileResourceType = parse2Var(myFileResourceType);
  const fileCode = parse2Var(myFileCode);
  // 文件资源资源,根据fileCode下载
  if (fileResourceType == '"file"' && fileCode) {
    return `// 文件下载
    downloadByFileCode({
      fileCode:${fileCode},
      newFileName: ${fileName},
      getLocale:()=>{},
      // appId,
      // pageId,
    })`;
  }
  // 服务器资源(server),根据fileId下载
  if (fileResourceType == '"server"' && fileId) {
    if (Array.isArray(fileId)) {
      fileId = fileId.join(',');
    }

    return `// 文件下载
    batchDownloadFileByIds({
      fileIds: ${fileId},
      newFileName: ${fileName},
      zip: ${!!value.options.zip},
      getLocale:()=>{},
    })
    `;
  }
}
