import type { FuncExpExeCuteType } from '../../utils/hooks/useFuncExpExecute';
import type { ContentClick, FuncCode } from '../types/contentStyle';
import {
  CUSTOM,
  DOWNLOAD_FILE,
  OPEN_MODAL,
  PAGE_JUMP,
  PREVIEW_FILE,
  ROUTE_PUSH,
  ROUTE_REPLACE,
} from '../utils/constant';

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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    previewType,
    downloadUrl,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    modalHeight,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
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

  const handlePageJump = async (
    row: any,
    rowId: string | number,
    rowIndex: number,
  ) => {
    if (page) {
      const { pagePath, searchParams = {} } = page;
      const newSearchParams: any = {};
      Object.keys(searchParams).forEach((key) => {
        if (typeof searchParams[key] === 'string') {
          let exp = searchParams[key];
          exp = exp.replace(/(^%)|(%$)/g, '');
          searchParams[key] = (
            row: any,
            rowId: string | number,
            index: number,
          ) =>
            engineApis?.sandBoxSafeRun(exp, {
              row,
              rowId,
              index,
            });
          newSearchParams[key] = exp;
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
      Object.keys(newSearchParams).forEach((key) => {
        if (!newPath.includes(`${key}=`)) {
          newPath += `${newPath.includes('?') ? '&' : '?'}${key}=${
            newSearchParams[key]
          }`;
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

  const handleOpenModal = async (
    row: any,
    rowId: string | number,
    rowIndex: number,
  ) => {
    if (modal) {
      const { pageId, compStates = {} } = modal;

      Object.keys(compStates).forEach((key) => {
        if (typeof compStates[key] === 'string') {
          let exp = compStates[key];
          exp = exp.replace(/(^%)|(%$)/g, '');
          compStates[key] = (row: any, rowId: string | number, index: number) =>
            engineApis?.sandBoxSafeRun(exp, {
              row,
              rowId,
              index,
            });
        }

        if (typeof compStates[key] === 'function') {
          try {
            compStates[key] = compStates[key](row, rowId, rowIndex);
          } catch (e) {
            console.error(e);
          }
        }
      });

      if (engineApis?.openModal) {
        engineApis.openModal({
          pageId,
          params: compStates,
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
            // message.error(errorMessage);
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
      realFileIds =
        typeof realFileIds === 'string' ? [realFileIds] : realFileIds;
      engineApis.BannerModal.open({
        fileId: realFileIds,
        // viewMode: previewType,
        // modalHeight,
        pageId: realPageId,
        appId: realAppId,
        // modalWidth,
      });
    }
  };

  const onCellClick = async (
    row: any,
    rowId: string | number,
    rowIndex: number,
  ) => {
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
      case CUSTOM:
        // eslint-disable-next-line no-case-declarations
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
        break;
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
