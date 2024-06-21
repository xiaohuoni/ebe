interface Props {
  basicStatus: number;
  fieldName: string;
  name: string;
  numberLimit?: number;
  singleFileMaxSize?: number; // 单位 mb
  [key: string]: any;
}

export default function transformProps(props: Props) {
  const {
    basicStatus,
    fieldName,
    name,
    numberLimit = 5,
    singleFileMaxSize = 50,
    value,
    ...restProps
  } = props;
  const newProps: Record<string, any> = {
    ...(restProps as any),
    fieldProps: fieldName,
    title: name,
    maxLength: numberLimit,
    limitSize: singleFileMaxSize * 1024 * 1024, // 单位 bytes
    status: `${basicStatus}`,
    defaultValue: value,
  };
  return newProps;
}
