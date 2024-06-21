interface Props {
  basicStatus: number;
  fieldName: string;
  name: string;
  [key: string]: any;
}

export default function transformProps(props: Props) {
  const { basicStatus, fieldName, name, value, ...restProps } = props;
  const newProps: Record<string, any> = {
    ...(restProps as any),
    status: `${basicStatus}`,
    fieldProps: fieldName,
    title: name,
    defaultValue: value,
  };
  return newProps;
}
