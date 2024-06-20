interface Props {
  basicStatus: number;
  fieldName: string;
  name: string;
  options: any[];
  value: any;
  [key: string]: any;
}

export default function transformProps(props: Props) {
  const { basicStatus, fieldName, name, options, value, ...restProps } = props;
  const newProps: Record<string, any> = {
    ...(restProps as any),
    fieldProps: fieldName,
    title: name,
    data: options,
    defaultValue: value,
    status: `${basicStatus}`,
  };
  return newProps;
}
