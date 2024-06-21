interface Props {
  basicStatus: number;
  fieldName: string;
  name: string;
  options?: any[];
  [key: string]: any;
}

export default function transformProps(props: Props) {
  const { basicStatus, fieldName, value, name, options, ...restProps } = props;
  const newProps: Record<string, any> = {
    ...(restProps as any),
    fieldProps: fieldName,
    title: name,
    options,
    status: `${basicStatus}`,
    defaultValue: value,
  };
  return newProps;
}
