import React from 'react';
import { LingXiFC } from '@lingxiteam/types';
import { ReactLoadVue } from '@lingxiteam/load-framework';
import { Empty, Spin } from 'antd';

export interface VueRenderProps {
  url: string;
  customProps: any;
  engineType: 'editor' | 'engine'
}

const VueRender:LingXiFC<VueRenderProps> = props => {
  const { url, customProps, engineType, getEngineApis, ...restProps } = props;
  const { getLocale = () => 'Fish远程组件加载失败' } = getEngineApis?.() || {};
  return <ReactLoadVue
    {...restProps}
    url={url}
    lxApi={{ getEngineApis, engineType }}
    moduleProps={customProps}
    onError={console.log}
    loading={() => <Spin />}
    fallback={() => <Empty description={getLocale?.('RemoteComponent.fail')} image={Empty.PRESENTED_IMAGE_SIMPLE} />}
  />;
};

export default VueRender;
