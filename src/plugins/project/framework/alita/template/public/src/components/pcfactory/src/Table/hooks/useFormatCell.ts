import { message } from 'antd';
import {
  PAGE_JUMP,
  DOWNLOAD_FILE,
  PREVIEW_FILE,
  CUSTOM,
  ROUTE_PUSH,
  ROUTE_REPLACE,
  OPEN_MODAL,
} from '../constant';
import type { ContentClick, FuncCode } from '../types/contentStyle';
import type { FuncExpExeCuteType } from '../../utils/hooks/useFuncExpExecute';

interface useFormatCellProps extends ContentClick {
  appId: string;
  pageId: string;
  modalHeight?: number;
  modalWidth?: number;
  funcExpExecute?: FuncExpExeCuteType;
  engineApis: any;
}

const useFormatCell = (props: useFormatCellProps) => {
  const {
    funcExpExecute,
    engineApis,
    appId,
    pageId,
    content,
    clickType,
    page,
    modal,
    openType,
    fileIds,
    filename,
    previewType,
    downloadUrl,
    modalHeight,
    modalWidth,
  } = props;

  const realAppId = appId;
  const realPageId = pageId;

  const handleCellContent = (row: any, rowIndex: number) => {
    if ((content as FuncCode)?.code && funcExpExecute) {
      return funcExpExecute((content as FuncCode).code, [
        {
          key: 'row',
          value: row,
        },
        {
          key: 'index',
          value: rowIndex,
        },
      ]);
    }

    return content;
  };

  const handlePageJump = async (row: any, rowId: string | number, rowIndex: number) => {
    if (page) {
      const {
        pagePath,
        searchParams = {},
      } = page;
      const newSearchParams: any = {};
  
      Object.keys(searchParams).forEach(key => {
        if (typeof searchParams[key] === 'string') {
          const exp = searchParams[key];
          searchParams[key] = (row: any, rowId: string | number, index: number) => engineApis?.sandBoxSafeRun(
            exp,
            {
              row,
              rowId,
              index,
            }
          );
        }

        if (typeof searchParams[key] === 'function') {
          try {
            newSearchParams[key] = searchParams[key](row, rowId, rowIndex);
          } catch (e) {
            console.error(e);
          }
        }
      });

      let newPath = pagePath || '';
      Object.keys(newSearchParams).forEach(key => {
        if (!newPath.includes(`${key}=`)) {
          newPath += `${newPath.includes('?') ? '&' : '?'}${key}=${newSearchParams[key]}`;
        }
      });

      switch (openType) {
        case ROUTE_PUSH:
          if (typeof engineApis?.historyPush === 'function') {
            engineApis.historyPush(newPath);
          }
          break;
        case ROUTE_REPLACE:
          if (typeof engineApis?.historyReplace === 'function') {
            engineApis.historyReplace(newPath);
          }
          break;
        default:
          break;
      }
    }
  };

  const handleOpenModal = async (row: any, rowId: string | number, rowIndex: number) => {
    if (modal) {
      const {
        pageId,
        compStates = {},
      } = modal;

      const newCompStates: any = {};
      Object.keys(compStates).forEach(key => {
        if (typeof compStates[key] === 'string') {
          const exp = compStates[key];
          compStates[key] = (row: any, rowId: string | number, index: number) => engineApis?.sandBoxSafeRun(
            exp,
            {
              row,
              rowId,
              index,
            }
          );
        }

        if (typeof compStates[key] === 'function') {
          try {
            newCompStates[key] = compStates[key](row, rowId, rowIndex);
          } catch (e) {
            console.error(e);
          }
        }
      });

      if (engineApis?.openModal) {
        engineApis.openModal({
          pageId,
          params: newCompStates,
        });
      }
    }
  };

  const handleDownloadFile = async (row: any, rowIndex: number) => {
    if (typeof engineApis?.batchDownloadFileByIds === 'function') {
      try {
        let realFilename = filename;
        let realFileIds = fileIds;


        if ((filename as FuncCode)?.code && funcExpExecute) {
          realFilename = funcExpExecute((filename as FuncCode).code, [
            {
              key: 'row',
              value: row,
            },
            {
              key: 'index',
              value: rowIndex,
            },
          ]);
        }

        if ((fileIds as FuncCode)?.code && funcExpExecute) {
          realFileIds = funcExpExecute((fileIds as FuncCode).code, [
            {
              key: 'row',
              value: row,
            },
            {
              key: 'index',
              value: rowIndex,
            },
          ]);
        }
        
        realFileIds = Array.isArray(realFileIds) ? realFileIds[0] : realFileIds;

        engineApis.batchDownloadFileByIds({
          fileIds: realFileIds,
          newFileName: realFilename,
          onError: (errorMessage: string) => {
            message.error(errorMessage);
          },
        });
      } catch (e) {
        console.error(e);
      }
    }
  };

  const handlePreviewFile = async (row: any, rowIndex: number) => {
    let realFileIds: any = fileIds;

    if ((fileIds as FuncCode)?.code && funcExpExecute) {
      realFileIds = funcExpExecute((fileIds as FuncCode).code, [
        {
          key: 'row',
          value: row,
        },
        {
          key: 'index',
          value: rowIndex,
        },
      ]);
    }
    
    if (typeof engineApis?.BannerModal?.open === 'function') {
      // 弹窗预览
      realFileIds = typeof realFileIds === 'string' ? [realFileIds] : realFileIds;
      const fileList = realFileIds.map((fileId: string | number) => {
        return {
          fileId,
          file: {
            fileId,
          },
        };
      });
      engineApis.BannerModal.open({
        fileIndex: 0,
        fileList,
        viewMode: previewType,
        modalHeight,
        pageId: realPageId,
        appId: realAppId,
        modalWidth,
      });
    } else if (
      previewType !== undefined &&
      typeof engineApis?.previewFile === 'function'
    ) {
      // 新窗口预览
      realFileIds = Array.isArray(realFileIds) ? realFileIds[0] : realFileIds;
      try {
        engineApis.previewFile({ fileId: realFileIds, appId: realAppId, pageId: realPageId });
      } catch (e) {
        console.error(e);
      }
    }
  };
  
  const onCellClick = async (row: any, rowId: string | number, rowIndex: number) => {
    switch (clickType) {
      case PAGE_JUMP:
        handlePageJump(row, rowId, rowIndex);
        break;
      case OPEN_MODAL:
        handleOpenModal(row, rowId, rowIndex);
        break;
      case DOWNLOAD_FILE:
        handleDownloadFile(row, rowIndex);
        break;
      case PREVIEW_FILE:
        handlePreviewFile(row, rowIndex);
        break;
      case CUSTOM: {
        let realDownloadUrl: any = downloadUrl;

        if ((downloadUrl as FuncCode)?.code && funcExpExecute) {
          realDownloadUrl = funcExpExecute((downloadUrl as FuncCode).code, [
            {
              key: 'row',
              value: row,
            },
            {
              key: 'index',
              value: rowIndex,
            },
          ]);
        }

        window.open(realDownloadUrl, openType);
        break; }
      default:
        break;
    }
  };
  
  return {
    onCellClick,
    handleCellContent,
  };
};

export default useFormatCell;
