import { createContext, useContext, useRef, useState } from 'react';
import { useUpdate } from './ahooks';

export interface ChildRenderContextProps {
  collectChildData?: (id: string, data: any) => void;
  collectChildren?: (id: string, children: any) => void;
  update?: () => void;
  getCurrentData?: (id: string) => { currentIndex: number; props: any };
  parentProps?: any;
}

const childRenderContext = createContext<ChildRenderContextProps>({});

export const ChildRenderProvider = childRenderContext.Provider;

export const useChildRenderContext = () => {
  return useContext(childRenderContext);
};

// 给上下文提供通用方法
export const useChildRender = () => {
  // 完成收集子元素
  const [collectComplete, setColletComplete] = useState<boolean>(false);
  const update = useUpdate();

  const childRef = useRef<{
    list: string[];
    data: Map<string, any>;
    renderChild: Map<string, { current: any }>;
    props: Map<string, any>;
    parentProps: any;
  }>({
    list: [],
    data: new Map(),
    renderChild: new Map(),
    props: new Map(),
    parentProps: {},
  });

  const getIndex = (_id: string) => {
    return childRef.current.list
      .filter((id) => {
        return childRef.current.data.get(id)?.visible ?? true;
      })
      .findIndex((id) => id === _id);
  };

  // 渲染子组件
  const renderChildren = () => {
    const { renderChild: childData, list } = childRef.current;
    if (collectComplete) {
      return list.map((key) => {
        return childData.get(key)?.current ?? null;
      });
    }
    return null;
  };

  return {
    childRef,
    collectComplete,
    // 更新子控件列表
    resetList: (list: string[]) => {
      childRef.current.list = list;
    },
    // 渲染子组件
    renderChildren,
    addChildProps: (id: string, data: any) => {
      childRef.current.props.set(id, data);
    },
    addParentProps: (_props: any) => {
      childRef.current.parentProps = _props;
    },
    // 提供给childRenderContext上下文使用
    context: {
      collectChildData: (id: string, data: any) => {
        childRef.current.data.set(id, data);
      },
      // 根据id获取当前数据
      getCurrentData: (id: string) => {
        const result = {
          currentIndex: getIndex(id),
          props: childRef.current.props.get(id) || {},
        };
        return result;
      },
      collectChildren: (id: string, child: { current: any }) => {
        childRef.current.renderChild.set(id, child);
        if (
          childRef.current.renderChild.size === childRef.current.list.length
        ) {
          setColletComplete(true);
        }
      },
      update() {
        update();
      },
      get parentProps() {
        return childRef.current.parentProps;
      },
    },
  };
};
