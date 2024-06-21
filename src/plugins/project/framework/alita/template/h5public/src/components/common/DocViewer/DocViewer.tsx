import jspreviewExcel from '@js-preview/excel';
import '@js-preview/excel/lib/index.css';
import { SpinLoading } from 'antd-mobile-5';
import { renderAsync as docxRenderAsync } from 'docx-preview';
import React, { useEffect, useRef, useState } from 'react';
import './index.less';

const prefixCls = 'lcdp-docviewer';

interface ViewerProps {
  docData?: Blob;
  docUrl?: string;
  type?: string;
}

const Viewer: React.FC<ViewerProps> = (props) => {
  const { docData, docUrl, type } = props;
  const viewRef = useRef(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (docData) {
      switch (type) {
        case 'WORD':
          if (docData?.name) {
            setLoading(true);
            const xhr = new XMLHttpRequest();
            xhr.open('GET', docData.name, true);
            xhr.responseType = 'arraybuffer';
            xhr.onload = () => {
              setLoading(false);
              if (xhr.status === 200) {
                docxRenderAsync(
                  xhr.response,
                  viewRef.current as any,
                  undefined,
                  { inWrapper: false },
                );
              }
            };
            xhr.onerror = () => {
              setLoading(false);
              // eslint-disable-next-line
              console.log('文件预览失败：', xhr.status);
            };
            xhr.send();
          } else {
            docxRenderAsync(docData, viewRef.current as any, undefined, {
              inWrapper: false,
            });
          }
          break;

        case 'EXCEL':
          {
            const previewData = docData?.name ? docUrl : docData;
            setLoading(true);
            jspreviewExcel
              .init(viewRef.current as any)
              .preview(previewData || '')
              .then(() => {
                setLoading(false);
              })
              .catch((e) => {
                setLoading(false);
                // eslint-disable-next-line
                console.log('文件预览失败：', e);
              });
          }
          break;
        case 'MARKDOWN':
          break;
        default:
          break;
      }
    }
  }, [docData]);

  return (
    <div className={prefixCls} ref={viewRef}>
      {loading && (
        <SpinLoading style={{ '--size': '48px' }} className="spin-loading" />
      )}
    </div>
  );
};

export default Viewer;
