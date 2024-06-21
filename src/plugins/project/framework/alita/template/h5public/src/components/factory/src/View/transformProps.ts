interface Props {
  content: string;
  [key: string]: any;
}

export default function transformProps(props: Props) {
  const { content, style, ...restProps } = props;
  const newStyle = style;
  // 零代码左右布局更改为上下布局
  if (props._compname === 'HorizontalView') {
    newStyle.flexDirection = 'column';
    newStyle.backgroundColor = '#fff';
  }
  // 标签页默认样式更改
  if (props._compname === 'TabPane') {
    newStyle.backgroundColor = '#fff';
    newStyle.padding = '12px';
  }
  // 零代码编辑态左右布局改上下
  if (props._component?.compName === 'HorizontalView') {
    newStyle.flexDirection = 'column';
  }
  // 零代码编辑态修改展示高度
  if (props._component?.compName === 'TabPane') {
    newStyle.minHeight = '84px';
  }

  const newProps: Record<string, any> = {
    ...(restProps as any),
    style: newStyle,
  };
  return newProps;
}
