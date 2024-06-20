import { ReactLoadVue } from '@lingxiteam/load-framework';
import { LingXiFC } from '@lingxiteam/types';
import { ErrorBlock } from 'antd-mobile-5';
import { IconFailComp } from '../assets';

export interface VueRenderProps {
  url: string;
  customProps: any;
  engineType: 'editor' | 'engine';
}

const VueRender: LingXiFC<VueRenderProps> = (props) => {
  const { url, customProps, engineType, getEngineApis, ...restProps } = props;
  const engineApis = getEngineApis?.();

  return (
    <ReactLoadVue
      {...restProps}
      url={url}
      lxApi={{ getEngineApis, engineType }}
      moduleProps={customProps}
      onError={console.log}
      loading={() => (
        <div>
          {engineApis?.getLocale?.('loadingText', '加载中…') ?? '加载中...'}
        </div>
      )}
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
    />
  );
};

export default VueRender;
