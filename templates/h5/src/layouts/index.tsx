import ModalView from '@/utils//Modal';
import { Context } from '@/utils/Context/context';
import React, { useRef } from 'react';

const Layout = (props) => {
  const appId = '1024143353417228288';
  const ModalManagerRef = useRef<any>(); // 页面弹窗的所有实例
  const refs = useRef<any>({});
  const getLocale = (_: string, t: string) => t || _;

  return (
    <Context.Provider value={{ ModalManagerRef, refs }}>
      {props.children}
      <ModalView
        getLocale={getLocale as any}
        appId={appId}
        ref={ModalManagerRef}
      />
    </Context.Provider>
  );
};

export default Layout;
