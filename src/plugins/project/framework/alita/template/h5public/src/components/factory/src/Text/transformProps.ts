interface Props {
  content: string;
  [key: string]: any;
}

export default function transformProps(props: Props) {
  const { content, ...restProps } = props;
  const newProps: Record<string, any> = {
    ...(restProps as any),
    children: content,
  };
  return newProps;
}
