interface Props {
  basicStatus: number;
  fieldName: string;
  name: string;
  format?: string;
  isCurrent?: boolean;
  timeMode?: string;
  visible?: boolean;
  [key: string]: any;
}

// pc 的 timeMode 映射到 app 的 modeType
const timeModeMap: any = {
  time: 'datetime',
};

export default function transformProps(props: Props) {
  const {
    basicStatus,
    fieldName,
    name,
    format,
    value,
    isCurrent,
    timeMode = 'time',
    ...restProps
  } = props;
  const newProps: Record<string, any> = {
    ...(restProps as any),
    status: `${basicStatus}`,
    fieldProps: fieldName,
    title: name,
    modeType: timeModeMap[timeMode] || timeMode,
    formatter: format,
    defaultCurrent: isCurrent,
    defaultValue: value,
  };
  return newProps;
}
