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
    import React, { useEffect, useRef, useState } from 'react';
    import { APPID } from '@/constants';
    import { api } from '@/services/api';
    import { Spin } from '@/utils/messageApi';
    import { attrSpecPage } from '@/utils/attrSpecPage';
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
const handleAttrDataMap = (list: any[]) => {
  return  (list || []).map((item: any) => {
    // 记录子级静态数据与编码关系
    const zattrNbrValueMap: Record<any, any[]> = {};
    if (Array.isArray(item.relatedAttrSpecList) && item.relatedAttrSpecList.length) {
      const children = item.relatedAttrSpecList.map((aItem: any) => {
        if (aItem.zrelatedAttrValueList) {
          // 记录子级编码
          const zattrValues = new Set();
          // 这级只做展示不做选择
          const zChildren = aItem.zrelatedAttrValueList.map((zItem: any) => {
            zattrValues.add(zItem.zattrValue);
            return {
              label: zItem.zattrValueName,
              title: zItem.zattrValueName,
              value: zItem.zattrValue,
              isLeaf: false,
            };
          });
          zattrNbrValueMap[aItem.zattrNbr] = [...zattrValues];
          return zChildren;
        }
        return undefined;
      }).filter(Boolean).flat();
      if (children.length) {
        return {
          ...item,
          label: item.attrValueName,
          title: item.attrValueName,
          value: item.attrValue,
          relatedAttrSpecList: item.relatedAttrSpecList,
          children,
          zattrNbrValueMap,
        };
      }
    }
    return {
      ...item,
      label: item.attrValueName,
      title: item.attrValueName,
      value: item.attrValue,
      relatedAttrSpecList: item.relatedAttrSpecList,
    };
  });
  }
${routerChange ? `let prePathname = '';` : ''}
    const Layout = (props) => {
      const ModalManagerRef = useRef<any>(); // 页面弹窗的所有实例
      const refs = new RefsManager();
      const element = useKeepOutlets();
      const [isLoding, setIsLoding] = useState(true);
      const attrDataMap = useRef<Record<string, any>>({}).current;
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

      useEffect(() => {
        const reqNbrKeys = attrSpecPage;
        const params = {
          attrCodes: reqNbrKeys,
          appId: APPID,
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
      }, []);
      if (isLoding === true) {
        return <Spin spinning/>;
      }
      return (
        ${isMobile ? '' : `<ConfigProvider locale={zhCN}>`}
        <Context.Provider value={{ ModalManagerRef, refs, appId: APPID, attrDataMap}}>
          {element}
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
