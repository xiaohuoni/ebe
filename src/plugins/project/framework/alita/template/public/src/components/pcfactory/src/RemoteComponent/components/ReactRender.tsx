import { LingXiFC } from '@lingxiteam/types';
import { createRequires } from '@paciolan/remote-component/dist/createRequires';
import { createUseRemoteComponent } from '@paciolan/remote-component/dist/hooks/useRemoteComponent';
import { Empty, Spin } from 'antd';
import React from 'react';
import { useDynamicData } from '../../utils';
import RemoteCompConfig from '../remote-component.config';

export const getUseRemoteComponent = (config: any) => {
  const requires = createRequires(() => config.resolve);
  return createUseRemoteComponent({ requires });
};
const useRemoteComponent = getUseRemoteComponent(RemoteCompConfig);
export interface MyRemoteComponentProps {
  url?: string;
  customProps: any;
  useRemoteComponent?: any; // 自定义组件调用依赖的模块，可由调用方传入
}

// const prefixCls = 'remoteComponent';
const RemoteComponent: LingXiFC<MyRemoteComponentProps> = (props) => {
  const { url, customProps, getEngineApis, ...restProps } = props;

  const engineApis = getEngineApis?.() || {};

  const useRemoteComponentInst = props.useRemoteComponent || useRemoteComponent;

  const dynamicDataContext = useDynamicData();

  const [loading, err, Component] = useRemoteComponentInst(url);

  if (loading) {
    return <Spin />;
  }

  if (!Component || err) {
    if (err) {
      console.warn('自定义组件报错:', err);
    }
    return (
      <Empty
        description={engineApis?.getLocale?.('RemoteComponent.fail')}
        image={Empty.PRESENTED_IMAGE_SIMPLE}
      />
    );
  }
  return (
    <Component
      {...restProps}
      {...customProps}
      $lxApi={{ form: dynamicDataContext.form }}
    />
  );
};

export default RemoteComponent;
