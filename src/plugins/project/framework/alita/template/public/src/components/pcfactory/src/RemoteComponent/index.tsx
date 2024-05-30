import React, { useState, useImperativeHandle } from 'react';
import { createUseRemoteComponent } from '@paciolan/remote-component/dist/hooks/useRemoteComponent';
import { createRequires } from '@paciolan/remote-component/dist/createRequires';
import { LingxiForwardRef } from '@lingxiteam/types';
import { useListenProps } from '../utils';
import { useDeepCompareEffect } from '../utils/ahooks';
import { RemoteComponentMap } from './constant';


export const getUseRemoteComponent = (config: any) => {
  const requires = createRequires(() => config.resolve);
  return createUseRemoteComponent({ requires });
};
export interface MyRemoteComponentProps {
  url?: string;
  fileCode?: string;
  customProps: any;
  useRemoteComponent?: any; // 自定义组件调用依赖的模块，可由调用方传入
  associatedType: any; // 关联组件
  visible: boolean;
  type?: 'React' | 'Vue' | 'Fish';
}

const RemoteComponent = LingxiForwardRef<any, MyRemoteComponentProps>((props, ref) => {
  const {
    url,
    customProps: myProps,
    fileCode,
    associatedType = 'file',
    getEngineApis,
    visible = true,
    type = 'React',
    ...restProps
  } = props;

  const engineApis = getEngineApis?.() || {};

  const [remoteUrl, setRemoteUrl] = useState<string>(url || '');

  const [customProps, setProps] = useListenProps<any>(myProps);


  useImperativeHandle(ref, () => ({
    setCompProps: (params: any) => {
      setProps({ ...customProps, ...params });
    },
    setSrc: (src: string) => {
      if (src.startsWith('http')) {
        setRemoteUrl(src);
      } else {
        // 怀疑是文件id
        setRemoteUrl(engineApis?.getAppFileUrlByFileCode(src));
      }
    },
  }));
  useDeepCompareEffect(() => {
    // 如果是远程服务组件
    if (fileCode && associatedType === 'file') {
      setRemoteUrl(engineApis?.getAppFileUrlByFileCode(fileCode));
    } else if (url && associatedType === 'url') {
      setRemoteUrl(url);
    }
  }, [url, fileCode]);

  if (!visible) {
    return <></>;
  }

  const Component = RemoteComponentMap[type];

  return <Component engineType="engine" {...restProps} customProps={customProps} url={remoteUrl} getEngineApis={getEngineApis} />;
});

export default RemoteComponent;
