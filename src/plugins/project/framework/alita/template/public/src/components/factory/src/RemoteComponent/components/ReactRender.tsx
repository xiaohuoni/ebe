import { LingXiFC } from '@lingxiteam/types';
import { createRequires } from '@paciolan/remote-component/dist/createRequires';
import { createUseRemoteComponent } from '@paciolan/remote-component/dist/hooks/useRemoteComponent';
import { ErrorBlock } from 'antd-mobile-5';
import { useDynamicData } from '../../utils/dynamicUtils/DynamicContext';
import { IconFailComp } from '../assets';
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
    return (
      <div>
        {engineApis?.getLocale?.('loadingText', '加载中…') ?? '加载中...'}
      </div>
    );
  }
  if (err != null) {
    return (
      <ErrorBlock
        title={
          engineApis?.getLocale?.('RemoteComponent.fail') ??
          '自定义组件加载失败'
        }
        description=""
        status="empty"
        image={<IconFailComp />}
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
