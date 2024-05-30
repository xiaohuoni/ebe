import React, {
  FC,
  useRef,
  useState,
  useCallback,
  FunctionComponent,
  ForwardRefExoticComponent,
  forwardRef,
} from 'react';
// TODO: 替换成自定义hooks 待处理
import { useDeepCompareEffect } from 'ahooks';
import { get, isEqualWith, set } from 'lodash';

// 通道容器，解决父子组件之间值的传递和获取。

export interface PanelContentProps {
  children: React.ReactElement;
  extendProps: Record<string, any>;
  uploadChannelProps: (props: Record<string, any>, key: string) => void;
}

export interface ChannelContainerOptions {
  uploadChannelProps: (props: Record<string, any>, key: string) => void;
  getProps: (c: React.ReactElement) => any;
}

export interface ChannelContainerProps {
  children: (options: ChannelContainerOptions) => React.ReactElement;
}

/**
 * 容器组件 收集子组件的值
 * @param props
 * @returns
 */
const Container: FC<ChannelContainerProps> = (props) => {
  const { children } = props;
  const childrenProps = useRef<Record<string, any>>({}).current;
  const [, forceUpdate] = useState({});
  const uploadChannelProps = useCallback((props: Record<string, any>, key: string) => {
    childrenProps[key] = props;
    if (!isEqualWith(props, childrenProps[key], (v1, v2) => {
      if (typeof v1 === 'function' && typeof v2 === 'function') {
        return true;
      }
      return undefined;
    })) {
      forceUpdate({});
    }
  }, []);
  // @ts-ignore
  const getProps = useCallback((c) => childrenProps[c.key] || {}, []);

  return children({ uploadChannelProps, getProps });
};

Container.displayName = 'ChannelContainer';

/**
 * 包裹子组件，可以给子组件传递额外的数据，也可以监听属性值变化
 * @param props
 * @returns
 */
const Item: FC<PanelContentProps> = (props) => {
  const { children, extendProps, uploadChannelProps } = props;
  return React.cloneElement(children, {
    extendProps: {
      ...extendProps,
      uploadChannelProps: (childProps: Record<string, any>) => {
        uploadChannelProps(childProps, `${children.key}`);
      },
    },
  });
};

Item.defaultProps = {
  extendProps: {},
};

Item.displayName = 'ChannelContainerItem';

export interface useRuntimePropsType {
  (props: Record<string, any>, keyPath: string[], uploadChannelProps: (props: Record<string, any>) => void): void;
}

/**
 * 实时上报数据给父节点 配合RuntimeContainer使用
 * 可自定义配置属性，可自定义props内容。
 * 自动根据keyPath取props的值，并上报keyPath到RuntimeContainer，
 * 不可与withRuntimeItem同时使用
 * @param props 字段对应的数据值
 * @param depthKey 需要上报的字段
 */
const useChannelProps: useRuntimePropsType = (props, depthKey = [], uploadChannelProps) => {
  const target = {};
  depthKey.forEach((key) => set(target, key.split('.'), get(props, key.split('.'))));
  useDeepCompareEffect(() => {
    if (uploadChannelProps) {
      uploadChannelProps(target);
    }
  }, [target]);
};

/**
 * 实时上报数据给父节点 配合RuntimeContainer使用
 * 针对上报静态属性，可以通过高阶函数的方式包裹子组件，并配置需要上报的属性
 * 自动根据keyPath取props的值，并上报keyPath到RuntimeContainer
 * 不可与withRuntimeItem同时使用
 * @param Component 子组件
 * @param options
 * @returns
 */
function withChannelItem<T extends Record<string, any>>(
  Component: FunctionComponent<any> | ForwardRefExoticComponent<any>,
  options: { keyPath: string[] },
) {
  const { keyPath } = options;
  return forwardRef((props: T, ref) => {
    const { uploadChannelProps, ...restProps } = props;
    useChannelProps(props, keyPath, uploadChannelProps);
    return <Component {...restProps} ref={ref} />;
  });
}

(Container as any).Item = React.memo(Item);
(Container as any).useChannelProps = useChannelProps;
(Container as any).withChannelItem = withChannelItem;

const ChannelContainer = Container as typeof Container & {
  Item: typeof Item;
  useChannelProps: typeof useChannelProps;
  withChannelItem: typeof withChannelItem;
};

export default ChannelContainer;
