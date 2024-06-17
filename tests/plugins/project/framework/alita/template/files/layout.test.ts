import getFile from '../../../../../../../src/plugins/project/framework/alita/template/files/layout';
import { expectValue } from '../../../../../../utils';

describe('template files layout', () => {
  test('should return the correct file layout', () => {
    const config: any = {
      platform: 'pc',
      frontendHookMap: {
        routerChange: null,
      },
    };
    const expectedFileContent = `import ModalView from '@/utils/ModalManager';
    import { Context, RefsManager } from '@/utils/Context/context';
    import React, { useEffect, useRef, useState } from 'react';
    import { api } from '@/services/api';
    
    import { Spin } from '@/utils/messageApi';
    import WaterMark from '@/components/WaterMark';
    import { attrSpecPage, handleAttrDataMap } from '@/utils/attrSpecPage';
    import { useKeepOutlets } from 'alita';
    import { ConfigProvider } from 'antd';
    import zhCN from 'antd/es/locale/zh_CN';
    
    const Layout = (props: any) => {
      const ModalManagerRef = useRef<any>(); // 页面弹窗的所有实例
      const refs = new RefsManager();
      const element = useKeepOutlets();
      const [isLoding, setIsLoding] = useState(true);
      const attrDataMap = useRef<Record<string, any>>({}).current;
      const getLocale = (_: string, t: string) => t || _;
    
      useEffect(() => {
        const reqNbrKeys = attrSpecPage;
        const params = {
          attrCodes: reqNbrKeys,
        };
        api
          .batchGetAppStaticAttr(params)
          .then((res: any) => {
            if (res) {
              reqNbrKeys?.forEach((key: string) => {
                const list = res?.[key];
                attrDataMap[key] = handleAttrDataMap(list);
              });
            }
          })
          .finally(() => {
            setIsLoding(false);
          });
      }, []);
      if (isLoding === true) {
        return <Spin spinning />;
      }
      return (
        <ConfigProvider locale={zhCN}>
          <Context.Provider
            value={{ ModalManagerRef, refs, attrDataMap }}
          >
            {element}
            
            <ModalView
              getLocale={getLocale as any}
              ref={ModalManagerRef}
            />
          </Context.Provider>
        </ConfigProvider>
      );
    };
    
    export default Layout;
    `;

    const [directories, file] = getFile(config);

    expect(directories).toEqual(['src', 'layouts']);
    expect(file.name).toEqual('index');
    expect(file.ext).toEqual('tsx');
    expectValue(file.content, expectedFileContent);
  });
});
