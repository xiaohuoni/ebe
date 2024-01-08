import { ResultFile, LXProjectOptions } from '../../../../../../core';
import { createResultFile } from '../../../../../../core/utils/resultHelper';

export default function getFile(
  config?: LXProjectOptions,
): [string[], ResultFile] {
  const file = createResultFile(
    'index',
    'tsx',
    `import ModalView from '@/utils//Modal';
    import { Context } from '@/utils/Context/context';
    import React, { useRef } from 'react';
    
    const Layout = (props) => {
      const appId = '${config?.appId}';
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
    
    export default Layout;`,
  );

  return [['src', 'layouts'], file];
}
