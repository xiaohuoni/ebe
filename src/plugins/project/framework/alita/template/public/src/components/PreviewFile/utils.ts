
export const PREVIEW_MODE = {
  PPT: 'IMG_PPT',
  IMG: 'IMG',
  PDF: 'PDF',
  ZIP: 'ZIP',
  VIDEO: 'VIDEO',
  TXT: 'TXT',
  IFRAME: 'IFRAME',
  HTML: 'HTML',
};
// 是否可以放大缩小
export const CAN_SCALE = [PREVIEW_MODE.PPT, PREVIEW_MODE.IMG, PREVIEW_MODE.PDF, PREVIEW_MODE.ZIP];
// 先判断是否可以进行本地预览，若不可以则调用后端接口判断
// 部分格式后端可能不支持预览，或者本地可以直接预览的，不调用查询接口，直接转换预览
export const LOCAL_PREVIEW = [
  {
    previewMode: PREVIEW_MODE.VIDEO,
    mimeTypeReg: /^video\/(mp4|webm|ogg|x-ms-wmv|quicktime)$/i,
    suffix: /\.(mp4|mov)$/i,
    // 平台定制预览是否支持跨域地址
    cors: true,
  },
  {
    previewMode: PREVIEW_MODE.IMG,
    mimeTypeReg: /^image\/(bmp|gif|jpeg|jpg|png|svg\+xml|tiff|webp|x-icon)$/i,
    suffix: /\.(jpg|jpeg|png|svg|heic|ico|bmp|tiff|tif)$/i,
    cors: true,
  },
  {
    previewMode: PREVIEW_MODE.PDF,
    mimeTypeReg: /^application\/pdf$/i,
    suffix: /\.pdf$/i,
  },
  {
    previewMode: PREVIEW_MODE.TXT,
    mimeTypeReg: /^(application|text)\/(json|javascript|x-javascript|plain|x-sh)$/i,
    suffix: /\.(less|scss|lock|ts|txt|js|jsx)$/i,
  },
  {
    previewMode: PREVIEW_MODE.ZIP,
    mimeTypeReg: /^(application\/zip)$/i,
    suffix: /\.zip$/i,
    cors: true,
  },
];

export const parseFileInfo = (fileInfo: {
  fileId?: string;
  [key:string]: any;
}, serverFileInfo: {
  previewMode: string;
  fileId?: string;
  [key:string]: any;
}) => {
  if (!fileInfo) return fileInfo;
  const { previewMode } = serverFileInfo || {};
  const newFileInfo = { ...(serverFileInfo || {}), ...fileInfo };
  switch (previewMode) {
    case PREVIEW_MODE.PPT: {
      if (newFileInfo?.previewMode === PREVIEW_MODE.PPT && newFileInfo?.fileIdList.length > 0) {
        newFileInfo.totalPage = newFileInfo?.fileIdList.length;
      }
      break;
    }
    default: {
      // 部分类型如doc，docx，服务端处理后会返回转换后的文件ID
      if (!serverFileInfo?.serverFileId && serverFileInfo?.fileId) {
        newFileInfo.serverFileId = serverFileInfo?.fileId;
      }
      break;
    }
  }
  return newFileInfo;
};

// 判断是否是网络地址，是的话不调用后端接口预览
export const isUrlFormat = (id: string) => /^https?:\/\/[^\s/$.?#].[^\s]*$/i.test(id);
