import { APPID } from '@/constants';
import { Context } from '@/utils/Context/context';
import ModalView from '@/utils/Modal';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import React, { useRef } from 'react';
const Layout = (props) => {
  const ModalManagerRef = useRef<any>(); // 页面弹窗的所有实例
  const refs = useRef<any>({});
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
