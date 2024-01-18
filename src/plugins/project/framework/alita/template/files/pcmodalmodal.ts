import { ResultFile } from '../../../../../../core';
import { createResultFile } from '../../../../../../core/utils/resultHelper';

export default function getFile(): [string[], ResultFile] {
  const file = createResultFile(
    'Modal',
    'tsx',
    `import Pageview, { RootProps } from '@/components/Pageview';
    import { Modal } from '@lingxiteam/engine-pc/es/components/EnhanceAntdComp';
    import { Spin } from 'antd';
    import classnames from 'classnames';
    import React, { forwardRef, useEffect, useRef, useState } from 'react';
    
    const DM = forwardRef((props: any) => {
      const {
        pageId,
        modalInstId,
        setStatue,
        managerRef,
        onCancel,
        onOk,
        params,
        sceneCode,
        className,
        lcdpParentRenderId,
        title,
        getLocale,
        ...restProp
      } = props;
      const [mProps, setMDProps] = useState<any>({ title: '' });
      const [modalLoading, setModalLoading] = useState<boolean>(false);
      const mRef = useRef<any>();
      // 设置弹窗抽屉属性
      useEffect(() => {
        const pageInst = RootProps[pageId || ''];
        const mdProps: any = {
          title: pageInst.modalTitle || pageInst.pageName,
          width:
            pageInst.width === 'custom'
              ? pageInst.customWidth || 624
              : pageInst.width,
          height:
            pageInst.width === 'custom'
              ? pageInst.customHeight || 'auto'
              : pageInst.height,
          okText: pageInst.okText || getLocale('confirm', '确定'),
          cancelText: pageInst.cancelText || getLocale('cancelText', '取消'),
          placement: pageInst.placement || 'right',
          maskClosable: pageInst.closeOnClickOverlay !== false,
        };
        if (pageInst.footer === 0) {
          mdProps.footer = null;
        }
        setMDProps(mdProps);
      }, [pageId]);
      return (
        <>
          <Modal
            {...mProps}
            {...restProp}
            maskClosable={modalLoading ? false : mProps?.maskClosable}
            style={modalLoading ? { display: 'none' } : {}}
            destroyOnClose
            className={classnames(
              className,
              'ued-modal-wrap',
              \`dynamic_modal_\${pageId || ''}\`,
            )}
            onOk={() => {
              console.log('里面会回调 props.onOK')
              console.log(mRef)
              if (mRef.current && typeof mRef.current.onOk === 'function') {
                mRef.current.onOk(); // 这里面会回调 props.onOK
              }
            }}
            onCancel={() => {
              let cancelResult;
              if (mRef.current && typeof mRef.current.onCancel === 'function') {
                // 返回false阻止默认窗口关闭动作
                cancelResult = mRef.current.onCancel();
              }
    
              // onCancel为内置取消处理函数，用于关闭弹窗
              if (cancelResult !== false && onCancel) {
                onCancel();
              }
            }}
          >
            <Spin spinning={modalLoading}>
              <div
                style={
                  mProps.height
                    ? { height: mProps.height, overflow: 'auto' }
                    : { overflowX: 'auto' }
                }
              >
                <Pageview pageSrc={pageId} state={params} ref={mRef} />
              </div>
            </Spin>
          </Modal>
          {/* 弹窗等到页面信息读取后再加载 */}
          {modalLoading && <Spin spinning className="modal-spinning-mask" />}
        </>
      );
    });
    
    DM.defaultProps = {
      getLocale: (k?: string, p?: string) => p ?? '',
    };
    
    export default DM;
    `,
  );

  return [['src', 'utils', 'Modal'], file];
}
