import { ResultFile } from '../../../../../../core';
import { createResultFile } from '../../../../../../core/utils/resultHelper';

export default function getFile(): [string[], ResultFile] {
  const file = createResultFile(
    'index',
    'tsx',
    `import React, { FC, useEffect, useMemo, useState } from 'react';
    // @ts-ignore
    // TODO：水印注释
    // import { useGetApp, getAppInst } from '@lingxiteam/engine-platform';
    import { antPrefix as clsPrefix } from '@lingxiteam/pcfactory/es/variables';
    import { ConfigProvider } from 'antd';
    import * as ReactDOM from 'react-dom';
    import Loadable from 'react-loadable';
    import pageIcon from '@/assets/pageicon';
    import { LoadingComponennt } from '@/components/LoaderHelper';
    import Watermark from '@/components/WaterMark';
    import './index.less';
    import { LocaleFunction } from '@lingxiteam/types';
    
    interface BannerModalProps {
      visible?: boolean;
      onClose?: () => void;
      onComplete?: () => void;
      isEnableWaterMark?: boolean;
      fileObj?: any;
      fileList?: any[];
      fileIndex?: number;
      // appId?: any;
      // pageId?: any;
      viewMode: 'newTab' | 'popUp' | 'window';
      modalWidth?: number | string;
      modalHeight?: number | string;
      localPreviewUrl?: string;
      getLocale: LocaleFunction;
      language: string;
    }
    
    interface BMFC<T> extends FC<T> {
      open: (props: Omit<T, 'visible'>) => void;
    }
    
    const prefixCls = 'lcdp-bannermodal';
    const PreviewFile = Loadable({
      loader: async () => {
        const factoryCom = await import(/* webpackChunkName: "PreviewFile" */ '../PreviewFile/index');
        const com : any = factoryCom?.default ?? factoryCom;
        return com;
      },
      loading: LoadingComponennt,
    });
    
    const BannerModal: BMFC<BannerModalProps> = (props) => {
      const { fileList, onClose, fileIndex = 0, getLocale, language } = props;
      const [exist, setExist] = useState(false);
      // const { appId } = props;
      const [fileData, setFileData] = useState<any[]>([]);
      const [current, setCurrent] = useState(-1);
      // const { appInst } = useGetApp({ appId });
      // 应用水印配置
      // const { watermarkInfo } = appInst || {};
    
      const initFileList = async () => {
        if (fileList && fileList.length > 0) {
          const { fileId, file } = fileList[fileIndex];
          let list = fileList || [];
          let matchSinglePreviewFile;
          list = list.filter((f) => {
            if (
              f?.fileId ||
              f?.file?.fileId ||
              f?.previewUrl ||
              f?.file?.previewUrl
            ) {
              // 过滤掉未上传成功的文件
              if ((f?.fileId || f?.file?.fileId) === (fileId || file?.fileId)) {
                // 若当前文件不支持在线预览，单独打开浏览器预览
                matchSinglePreviewFile = f;
              }
              return true;
            }
            return false;
          });
          const curIndex = list.findIndex(
            (f) => (f?.fileId || f?.file?.fileId) === (fileId || file?.fileId)
          );
          if (curIndex === -1 && matchSinglePreviewFile) {
            onClose?.();
          } else {
            setExist(true);
          }
          setFileData(list);
          setCurrent(curIndex);
        }
      };
      useEffect(() => {
        if (fileList && fileList.length > 0) {
          initFileList();
        }
      }, [fileList, fileIndex]);
    
      // const isEnableWaterMark = useMemo(
      //   () => watermarkInfo?.isEnable === 'T',
      //   [watermarkInfo]
      // );
    
      return (
        <ConfigProvider prefixCls={\`\${clsPrefix}\`}>
          {/* {isEnableWaterMark && <Watermark config={watermarkInfo} appId={appId} />} */}
          <div
            className={exist ? \`\${prefixCls}-mask\` : ''}
            onClick={(e) => {
              e.stopPropagation();
              if (onClose) {
                onClose();
              }
            }}
          >
            {exist && (
              <div className={prefixCls}>
                <div className={\`\${prefixCls}-content\`}>
                  {onClose && (
                  <div
                    className={\`\${prefixCls}-content-closeIcon\`}
                    onClick={onClose}
                  >
                    <img src={pageIcon.closeIcon} alt="" />
                  </div>
                  )}
                  {fileData?.length > 1 && (
                    // 多文件时用于切换文件
                    <div className="content-direction">
                      {current > 0 && (
                        <div
                          className="direction-control left"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (current > 0) setCurrent((pre) => pre - 1);
                          }}
                        >
                          <img src={pageIcon.leftIcon} alt="" />
                        </div>
                      )}
                      {current < fileData?.length - 1 && (
                        <div
                          className="direction-control right"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (current < fileData?.length - 1) { setCurrent((pre) => pre + 1); }
                          }}
                        >
                          <img src={pageIcon.rightIcon} alt="" />
                        </div>
                      )}
                    </div>
                  )}
                  {fileData?.length > 0 && current > -1 && fileData[current] && (
                    <PreviewFile
                      // appId={appId}
                      {...fileData[current]}
                      windowWidth={window.innerWidth}
                      // pageId={pageId}
                      fileIdOrUrl={
                        fileData[current]?.fileId ||
                        fileData[current]?.file?.previewUrl
                      }
                      deleteClick={(file: any) => {
                        const { deleteClick } = fileData[current];
                        if (typeof deleteClick === 'function') {
                          setFileData((pre) => {
                            const newFileList = (pre || []).filter(
                              (c) => c?.fileId !== file?.fileId
                            );
                            if (newFileList?.length === 0) {
                              // 文件被删除，则关闭当前蒙层
                              onClose?.();
                            }
                            return newFileList;
                          });
                          // 当前文件被删除后，预览前一个
                          setCurrent((pre) => Math.max(pre - 1, 0));
                          deleteClick(file);
                        }
                      }}
                      getLocale={getLocale}
                      onClose={onClose}
                      language={language}
                    />
                  )}
                </div>
              </div>
            )}
          </div>
        </ConfigProvider>
      );
    };
    
    BannerModal.open = (props) => {
      const {
        fileList = [],
        fileIndex = 0,
        modalWidth: width,
        modalHeight: height,
        // appId,
        // pageId,
        localPreviewUrl,
        getLocale,
        language,
      } = props;
      let closed = false;
    
      // const appInst = getAppInst({ appId });
      // const viewMode = appInst?.lcdpApi?.data?.appConfig?.viewMode || props.viewMode || 'popUp';
      const viewMode = props.viewMode || 'popUp';
      const div = document.createElement('div');
    
      function close() {
        ReactDOM.unmountComponentAtNode(div);
        if (div && div.parentNode) {
          div.parentNode.removeChild(div);
        }
      }
    
      const isNotEmpty = (val: any) => val !== undefined && val !== null && val !== '';
    
      // 新标签页'newTab' | 页面弹窗'popUp' | 新窗口'window'
      const openNewWindows = (params: any) => {
        // const { pageId, appId } = params;
        let { localPreviewUrl = '#/_preview' } = params || {};
        let features = 'noopener';
        if ((isNotEmpty(width) || isNotEmpty(height)) && viewMode === 'window') {
          const w = Number.isNaN(+(width || '')) ? '' : +width!;
          features += \`,width=\${w || ''},left=\${screen.width / 2 - (w || 0) / 2}\`;
          const h = Number.isNaN(+(height || '')) ? '' : +height!;
          features += \`,height=\${h || ''},top=\${screen.height / 2 - (h || 0) / 2}\`;
        } else if (viewMode === 'window') {
          features += \`,height=\${screen.height},width=\${screen.width}\`;
        }
        if (fileList?.length) {
          let fileIds = '';
          fileList.forEach((f: any) => {
            if (f?.fileId || f?.file?.previewUrl) {
              // 过滤掉未上传成功的文件
              fileIds += \`\${fileIds ? ',' : ''}\${f?.fileId || f?.file?.previewUrl}\`;
            }
          });
          localPreviewUrl += \`\${
            localPreviewUrl.includes('?') ? '' : '?'
          }fileIds=\${fileIds}&fileIndex=\${fileIndex}\`;
        }
        window.open(localPreviewUrl, viewMode, features);
      };
    
      // 没传fileId的不进行预览
      if (fileList.length > 0 && fileList[fileIndex]) {
        const { fileId, file } = fileList[fileIndex];
        if (fileId || file?.fileId || file?.previewUrl) {
          if (viewMode === 'popUp') {
            document.body.appendChild(div);
            ReactDOM.render(
              (() => {
                return (
                  <BannerModal
                    {...props}
                    onClose={() => {
                      if (closed) {
                        return;
                      }
                      closed = true;
                      close();
                      if (props.onClose) {
                        props.onClose();
                      }
                    }}
                    getLocale={getLocale}
                    language={language}
                  />
                );
              })(),
              div
            );
          } else {
            openNewWindows({ 
              // appId, 
              // pageId, 
              localPreviewUrl
            });
          }
        }
      }
    };
    
    BannerModal.defaultProps = {
      getLocale: (k, t) => t ?? '',
    };
    
    export default BannerModal;
    
`,
  );

  return [['src', 'components', 'BannerModal'], file];
}
