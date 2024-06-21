interface Props {
  basicStatus: number;
  fieldName: string;
  name: string;
  defaultChecked: any;
  [key: string]: any;
}

export default function transformProps(props: Props) {
  const { basicStatus, fieldName, name, defaultChecked, ...restProps } = props;
  const newProps: Record<string, any> = {
    ...(restProps as any),
    fieldProps: fieldName,
    title: name,
    defaultValue: defaultChecked,
    status: `${basicStatus}`,
  };
  return newProps;
}
