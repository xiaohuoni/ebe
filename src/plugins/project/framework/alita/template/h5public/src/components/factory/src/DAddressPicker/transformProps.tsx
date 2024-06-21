interface Props {
  basicStatus: number;
  fieldName: string;
  name: string;
  [key: string]: any;
}

export default function transformProps(props: Props) {
  const { basicStatus, fieldName, value, name, ...restProps } = props;
  const newProps: Record<string, any> = {
    ...(restProps as any),
    fieldProps: fieldName,
    title: name,
    status: `${basicStatus}`,
    defaultValue: value,
  };
  return newProps;
}
