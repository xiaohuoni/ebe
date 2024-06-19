import { LXProjectOptions, ResultFile } from '../../../../../../core';
import { createResultFile } from '../../../../../../core/utils/resultHelper';

export default function getFile(
  config?: LXProjectOptions,
): [string[], ResultFile] {
  const isMobile = config?.platform === 'h5';
  const transformHasAppId = config?.transformHasAppId;
  const { routerChange } = config?.frontendHookMap;

  const file = createResultFile(
    'index',
    'tsx',
    `import ModalView from '@/utils/ModalManager';
    import { Context, RefsManager } from '@/utils/Context/context';
    import React, { useEffect, useRef, useState } from 'react';
    import { api } from '@/services/api';
    ${transformHasAppId ? `import { APPID } from '@/constants';` : ''}
    import { Spin } from '@/utils/messageApi';
    import WaterMark, { AppWaterMarkCfgType } from '@/components/WaterMark';
    import { getWaterMarkByAppId } from '@/services/api/getWaterMarkByAppId';
    import { attrSpecPage, handleAttrDataMap } from '@/utils/attrSpecPage';
  ${
    routerChange
      ? `import { useLocation, useKeepOutlets } from 'alita';`
      : `import { useKeepOutlets } from 'alita';`
  }
${
  isMobile
    ? ''
    : `import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';`
}

${routerChange ? `let prePathname = '';` : ''}
    const Layout = (props: any) => {
      const ModalManagerRef = useRef<any>(); // 页面弹窗的所有实例
      const refs = new RefsManager();
      const element = useKeepOutlets();
      const [isLoding, setIsLoding] = useState(true);
      const attrDataMap = useRef<Record<string, any>>({}).current;
      const getLocale = (_: string, t: string) => t || _;
      const [waterMark, setWaterMark] = useState<AppWaterMarkCfgType>();
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

      useEffect(() => {
        const reqNbrKeys = attrSpecPage;
        const params = {
          attrCodes: reqNbrKeys,
          ${transformHasAppId ? `appId: APPID,` : ''}
        };
       api.batchGetAppStaticAttr(params).then((res: any) => {
        if (res) {
          reqNbrKeys?.forEach((key : string) => {
            const list = res?.[key];
            attrDataMap[key] = handleAttrDataMap(list);
          })
    
        }
       }).finally(() => {
        setIsLoding(false);
       });
        getWaterMarkByAppId(APPID).then(setWaterMark).catch(console.log);
      }, []);
      if (isLoding === true) {
        return <Spin spinning/>;
      }
      return (
        ${isMobile ? '' : `<ConfigProvider locale={zhCN}>`}
        <Context.Provider value={{ ModalManagerRef, refs, ${
          transformHasAppId ? `appId: APPID,` : ''
        } attrDataMap}}>
          {element}
          {waterMark?.waterMarkInfoResultValue && waterMark?.isEnable === 'T' && <WaterMark config={waterMark} />}
          <ModalView
            getLocale={getLocale as any}
            ${transformHasAppId ? `appId={APPID}` : ''}
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
