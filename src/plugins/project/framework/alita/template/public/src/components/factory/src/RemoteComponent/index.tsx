import { LingxiForwardRef } from '@lingxiteam/types';
import { useEffect, useImperativeHandle, useState } from 'react';
import { useDeepCompareEffect } from '../utils/ahooks';
import { RemoteComponentMap } from './constant';

export interface MyRemoteComponentProps {
  url: string;
  visible: boolean;
  fileCode?: string;
  customProps: any;
  useRemoteComponent?: any; // 自定义组件调用依赖的模块，可由调用方传入
  associatedType: any; // 关联组件
  type?: 'React' | 'Vue' | 'Fish';
}

const RemoteComponent = LingxiForwardRef<any, MyRemoteComponentProps>(
  (props, ref) => {
    const {
      url,
      customProps: myProps,
      visible = true,
      fileCode,
      associatedType = 'file',
      getEngineApis,
      type = 'React',
      ...restProps
    } = props;
    const [remoteUrl, setRemoteUrl] = useState<string>(url || '');
    const engineApis = getEngineApis();
    const [customProps, setProps] = useState<any>(myProps);
    useDeepCompareEffect(() => {
      setProps(myProps);
    }, [myProps]);
    useEffect(() => {
      // 如果是远程服务组件
      if (fileCode && associatedType === 'file') {
        setRemoteUrl(engineApis?.getAppFileUrlByFileCode(fileCode));
      } else if (url) {
        setRemoteUrl(url);
      }
    }, [url, fileCode]);

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

    if (!visible) {
      return <></>;
    }

    const Component = RemoteComponentMap[type];
    return (
      <Component
        engineType="engine"
        {...restProps}
        customProps={customProps}
        url={remoteUrl}
        getEngineApis={getEngineApis}
      />
    );
  },
);

export default RemoteComponent;
