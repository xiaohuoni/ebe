interface Props {
  components: Props; // 选项卡
  tabPosition: 'top' | 'left' | 'right' | 'bottom';
  defaultActiveKey: string;
  [key: string]: any;
}

export default function transformProps(props: Props) {
  const { components, tabPosition, defaultActiveKey, ...restProps } = props;
  let initialPage = '0' as string;
  // 零代码默认值根据key展示，低代码根据下标展示，需要做一层转换.零代码子节点运行态为components，编辑态为props.children
  const tabs =
    (components || props.children)?.map((i: any, index: number) => {
      const { props } = i;
      // eslint-disable-next-line eqeqeq
      if (props.key || i.key == defaultActiveKey) initialPage = String(index);
      return {
        id: props.key || i.key,
        title: props.tab,
      };
    }) || [];

  const newProps: Record<string, any> = {
    ...(restProps as any),
    tabs,
    tabBarPosition: tabPosition,
    initialPage,
  };
  return newProps;
}
