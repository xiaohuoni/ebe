import { CMDGeneratorPrames } from '../core/types';
import { parse2Var } from '../core/utils/compositeType';
export function previewFile(generateParams: CMDGeneratorPrames): string {
  const { value, platform } = generateParams;
  const { fileId: myFileId, viewMode, modalWidth, modalHeight } = value.options;
  const fileId = parse2Var(myFileId);
  if (platform === 'h5') {
    return `// 文件预览 
    BannerModal.open({
      // appId,
      // pageId,
      fileId:${fileId}
    })`;
  } else {
    return `// 文件预览 
    if (typeof BannerModal?.open === 'function') {
      BannerModal.open({
        fileIndex: 0,
        fileList: [{
          fileId:${fileId},
          file: {
            fileId:${fileId},
          },
        }],
        viewMode:${parse2Var(viewMode)},
        modalHeight:${parse2Var(modalHeight)},
        modalWidth:${parse2Var(modalWidth)},
        // appId,
        // pageId: (window as any).pageId,
      });
    } else {
      previewFile({
        fileId:${fileId},
      });
    }`;
  }
}
