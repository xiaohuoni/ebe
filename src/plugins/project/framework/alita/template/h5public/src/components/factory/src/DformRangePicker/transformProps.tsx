interface Props {
  basicStatus: number;
  fieldName: string;
  name: string;
  format?: string;
  timeMode?: string;
  visible?: boolean;
  [key: string]: any;
}

export default function transformProps(props: Props) {
  const {
    basicStatus,
    fieldName,
    name,
    format,
    value,
    timeMode,
    ...restProps
  } = props;
  const newProps: Record<string, any> = {
    ...(restProps as any),
    fieldProps: fieldName,
    title: name,
    modeType: timeMode,
    formatter: format,
    status: `${basicStatus}`,
    defaultValue: value,
  };
  return newProps;
}
