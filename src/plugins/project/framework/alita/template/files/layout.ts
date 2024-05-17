import { LXProjectOptions, ResultFile } from '../../../../../../core';
import { createResultFile } from '../../../../../../core/utils/resultHelper';

export default function getFile(
  config?: LXProjectOptions,
): [string[], ResultFile] {
  const isMobile = config?.platform === 'h5';
  const { routerChange } = config?.frontendHookMap;
  const file = createResultFile(
    'index',
    'tsx',
    `import ModalView from '@/components/Modal';
    import { Context, RefsManager } from '@/utils/Context/context';
    import React, { useEffect, useRef } from 'react';
    import { APPID } from '@/constants';
    ${routerChange ? `import { useLocation } from 'alita';` : ''}
${
  isMobile
    ? ''
    : `import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';`
}
${routerChange ? `let prePathname = '';` : ''}
    const Layout = (props) => {
      const ModalManagerRef = useRef<any>(); // 页面弹窗的所有实例
      const refs = new RefsManager();
      const getLocale = (_: string, t: string) => t || _;
      ${
        routerChange
          ? `
      const location = useLocation();
      ${routerChange}
      /** 页面切换的时候触发 */
      useEffect(() => {
        routerChange?.(prePathname, location.pathname);
        setTimeout(() => {
          prePathname = location.pathname;
        }, 100);
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [location.pathname, location.pathname?.search]);
      `
          : ''
      }
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
