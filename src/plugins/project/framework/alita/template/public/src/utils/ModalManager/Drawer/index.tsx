import { PageComent, RootProps } from '@/components/Pageview';
import { Button, Drawer } from 'antd';
import classnames from 'classnames';
import React, { forwardRef, useEffect, useRef } from 'react';
import { useSetState } from '../../hooks';
import './index.less';

const DM = forwardRef((props: any, ref) => {
  const {
    pagePath,
    modalInstId,
    setStatue,
    managerRef,
    params,
    onCancel,
    className = '',
    lcdpParentRenderId,
    getLocale,
    ...restProp
  } = props;
  const [mProps, setMDProps] = useSetState<any>({ title: '' });
  const mRef = useRef<any>();
  const handleOk = () => {
    if (mRef.current && typeof mRef.current.onMDOK === 'function') {
      mRef.current.onMDOK();
    }
  };
  const handleClose = () => {
    let cancelResult;
    if (mRef.current && typeof mRef.current.onMDCancel === 'function') {
      // 返回false阻止默认推拉门关闭动作
      cancelResult = mRef.current.onMDCancel();
    }

    // onCancel为内置取消处理函数，用于关闭推拉门
    if (cancelResult !== false && onCancel) {
      onCancel();
    }
  };

  const renderFooter = () => {
    if (mProps.footer !== null || mProps.footer === 1) {
      return (
        <div className="ant-drawer-footer-button">
          <Button onClick={handleClose}>
            {mProps.cancelText || getLocale('cancelText', '取消')}
          </Button>
          <Button onClick={handleOk} type="primary">
            {mProps.okText || getLocale('confirm', '确定')}
          </Button>
        </div>
      );
    }
    return mProps.footer;
  };
  // 设置弹窗抽屉属性
  useEffect(() => {
    const pageInst = RootProps[pagePath || ''] || {};
    const mdProps: any = {
      title: pageInst.drawerTitle || pageInst.pageName,
      width:
        pageInst.width === 'custom'
          ? pageInst.customWidth || 624
          : pageInst.width,
      height:
        pageInst.width === 'custom'
          ? pageInst.customHeight || 'auto'
          : pageInst.height,
      okText: pageInst.okText || '确定',
      cancelText: pageInst.cancelText || '取消',
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
      <Drawer
        {...mProps}
        {...restProp}
        destroyOnClose
        className={classnames(className, 'ued-drawer-wrap')}
        key={modalInstId}
        footer={renderFooter()}
        onOk={handleOk}
        onClose={handleClose}
      >
        <PageComent
          pageSrc={pagePath}
          state={params}
          ref={mRef}
          lcdpParentRenderId={lcdpParentRenderId}
        />
      </Drawer>
    </>
  );
});

DM.defaultProps = {
  getLocale: (k?: string, p?: string) => p ?? '',
};

export default DM;
