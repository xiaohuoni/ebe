interface Props {
  basicStatus: number;
  fieldName: string;
  name: string;
  options: any[];
  [key: string]: any;
}

export default function transformProps(props: Props) {
  const { basicStatus, fieldName, name, value, options, ...restProps } = props;
  const newProps: Record<string, any> = {
    ...(restProps as any),
    fieldProps: fieldName,
    title: name,
    options,
    data: options,
    defaultValue: value,
    status: `${basicStatus}`,
  };
  return newProps;
}
