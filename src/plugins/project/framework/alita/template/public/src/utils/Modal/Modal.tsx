import react from 'react';
import Pageview, { RootProps } from '@/components/Pageview';
import { Modal } from 'antd';
import classnames from 'classnames';
import React, { forwardRef, useEffect, useRef, useState } from 'react';

const DM = forwardRef((props: any) => {
  const {
    pagePath,
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
    ...restProp
  } = props;
  const [mProps, setMDProps] = useState<any>({ title: '' });
  const mRef = useRef<any>();
  // 设置弹窗抽屉属性
  useEffect(() => {
    const pageInst = RootProps[pagePath || ''];
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
      okText: pageInst.okText,
      cancelText: pageInst.cancelText,
      placement: pageInst.placement || 'right',
      maskClosable: pageInst.closeOnClickOverlay !== false,
    };
    if (pageInst.footer === 0) {
      mdProps.footer = null;
    }
    setMDProps(mdProps);
  }, [pagePath]);
  return (
    <>
      <Modal
        {...mProps}
        {...restProp}
        maskClosable={mProps?.maskClosable}
        destroyOnClose
        className={classnames(
          className,
          'ued-modal-wrap',
          `dynamic_modal_${pagePath || ''}`,
        )}
        onOk={() => {
          console.log('里面会回调 props.onOK');
          console.log(mRef);
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
        <div
          style={
            mProps.height
              ? { height: mProps.height, overflow: 'auto' }
              : { overflowX: 'auto' }
          }
        >
          <Pageview
            pageSrc={pagePath}
            state={params}
            ref={mRef}
            parentEngineId={lcdpParentRenderId}
          />
        </div>
      </Modal>
    </>
  );
});

export default DM;
