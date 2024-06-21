interface Props {
  style: CSSStyleDeclaration;
  [key: string]: any;
}

export default function transformProps(props: Props) {
  const { style, height, objectFit, ...restProps } = props;
  const newProps: Record<string, any> = {
    ...(restProps as any),
    disabled: true,
    style: {
      ...style,
      width: '100%',
      height,
      objectFit,
    },
  };
  return newProps;
}
