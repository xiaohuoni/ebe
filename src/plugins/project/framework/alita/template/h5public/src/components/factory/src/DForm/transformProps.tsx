type Props = Record<string, any>;

export default function transformProps(props: Props) {
  const newProps: Record<string, any> = {
    ...props,
  };
  return newProps;
}
