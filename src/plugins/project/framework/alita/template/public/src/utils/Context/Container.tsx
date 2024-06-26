import { createContext, FC, useContext } from 'react';

/* start 所有容器类组件封装 */
const VisibleContext = createContext<boolean>(true);

const useVisible = (show: boolean = true) => {
  const visible = useContext(VisibleContext);
  return visible && show;
};

/**
 * 上层容器是否有隐藏
 */
export const useTopContainerHidden = () => {
  const visible = useContext(VisibleContext);
  return !visible;
};

// const ContainerContext: FC<{ visible: boolean }> = (props) => {
//   const { children, visible } = props;
//   return (
//     <VisibleContext.Provider value={{ visible }}>
//       {children}
//     </VisibleContext.Provider>
//   );
// };

/**
 * 容器类组件的外层容器
 * @param props
 * @returns
 */
const Container: FC<{ visible: boolean; children: any }> = (props) => {
  const { children } = props;
  const visible = useVisible(props.visible);
  return (
    <VisibleContext.Provider value={visible}>
      {children}
    </VisibleContext.Provider>
  );
};

Container.displayName = 'Container';

export { Container };

export const PageContext = createContext<{
  registerRefs: (ref: any, id: string) => void;
  renderId: string;
  runAwaitQueue: (comId: string) => void;
}>({
  renderId: '',
  registerRefs() {
    console.warn(`上下文丢失`);
  },
  runAwaitQueue: () => {
    console.warn(`上下文丢失`);
  },
});

export const PageProvider = PageContext.Provider;

export const usePageProvider = () => {
  return useContext(PageContext);
};
