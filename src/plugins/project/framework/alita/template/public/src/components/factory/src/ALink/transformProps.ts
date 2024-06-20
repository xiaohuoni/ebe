interface Props {
  linkValue: string;
  [key: string]: any;
}

export default function transformProps(props: Props) {
  const { linkValue, ...restProps } = props;
  const newProps: Record<string, any> = {
    ...(restProps as any),
    content: linkValue,
  };
  return newProps;
}
