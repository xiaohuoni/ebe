import { ReactLoadFish } from '@lingxiteam/load-framework';
import { LingXiFC } from '@lingxiteam/types';
import { ErrorBlock } from 'antd-mobile-5';
import { IconFailComp } from '../assets';

export interface FishRenderProps {
  url: string;
  customProps: any;
  engineType: 'editor' | 'engine';
}

const FishRender: LingXiFC<FishRenderProps> = (props) => {
  const { customProps, getEngineApis, engineType, ...restProps } = props;
  const engineApis = getEngineApis?.();
  return (
    <ReactLoadFish
      {...restProps}
      lxApi={{ getEngineApis, engineType }}
      moduleProps={customProps}
      onError={console.log}
      fallback={(item) => (
        <ErrorBlock
          title={
            engineApis?.getLocale?.('RemoteComponent.fail') ??
            '自定义组件加载失败'
          }
          description={item.error.message}
          status="empty"
          image={<IconFailComp />}
        />
      )}
      loading={() => (
        <div>
          {engineApis?.getLocale?.('loadingText', '加载中…') ?? '加载中...'}
        </div>
      )}
    />
  );
};

export default FishRender;
