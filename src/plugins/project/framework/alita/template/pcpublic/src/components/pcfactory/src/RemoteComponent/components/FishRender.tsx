import { ReactLoadFish } from '@lingxiteam/load-framework';
import { LingXiFC } from '@lingxiteam/types';
import { Empty, Spin } from 'antd';

export interface FishRenderProps {
  url: string;
  customProps: any;
  engineType: 'editor' | 'engine';
}

const FishRender: LingXiFC<FishRenderProps> = (props) => {
  const { customProps, getEngineApis, engineType, ...restProps } = props;
  const { getLocale = () => 'Fish远程组件加载失败' } = getEngineApis?.() || {};
  return (
    <ReactLoadFish
      {...restProps}
      lxApi={{ getEngineApis, engineType }}
      moduleProps={customProps}
      onError={console.log}
      loading={() => <Spin />}
      fallback={() => (
        <Empty
          description={getLocale?.('RemoteComponent.fail')}
          image={Empty.PRESENTED_IMAGE_SIMPLE}
        />
      )}
    />
  );
};

export default FishRender;
