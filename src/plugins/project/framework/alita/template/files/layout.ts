import { ResultFile, LXProjectOptions } from '../../../../../../core';
import { createResultFile } from '../../../../../../core/utils/resultHelper';

export default function getFile(
  config?: LXProjectOptions,
): [string[], ResultFile] {
  const isMobile = config?.platform === 'h5';

  const file = createResultFile(
    'index',
    'tsx',
    `import ModalView from '@/utils/Modal';
    import { Context, RefsManager } from '@/utils/Context/context';
    import React, { useRef } from 'react';
    import { APPID } from '@/constants';
${
  isMobile
    ? ''
    : `import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';`
}
    const Layout = (props) => {
      const ModalManagerRef = useRef<any>(); // 页面弹窗的所有实例
      const refs = new RefsManager();
      const getLocale = (_: string, t: string) => t || _;
    
      return (
        ${isMobile ? '' : `<ConfigProvider locale={zhCN}>`}
        <Context.Provider value={{ ModalManagerRef, refs, appId: APPID}}>
          {props.children}
          <ModalView
            getLocale={getLocale as any}
            appId={APPID}
            ref={ModalManagerRef}
          />
        </Context.Provider>
        ${isMobile ? '' : `</ConfigProvider>`}
      );
    };
    
    export default Layout;`,
  );

  return [['src', 'layouts'], file];
}
