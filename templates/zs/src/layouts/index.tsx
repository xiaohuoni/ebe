import ModalView from '@/utils/Modal';
import { Context, RefsManager } from '@/utils/Context/context';
import React, { useRef } from 'react';
import { APPID } from '@/constants';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
const Layout = (props) => {
  const ModalManagerRef = useRef<any>(); // 页面弹窗的所有实例
  const refs = new RefsManager();
  const getLocale = (_: string, t: string) => t || _;

  return (
    <ConfigProvider locale={zhCN}>
      <Context.Provider value={{ ModalManagerRef, refs, appId: APPID }}>
        {props.children}
        <ModalView
          getLocale={getLocale as any}
          appId={APPID}
          ref={ModalManagerRef}
        />
      </Context.Provider>
    </ConfigProvider>
  );
};

export default Layout;
