import StackColumn from '@lingxiteam/charts/es/StackColumn';
import { LingXiFC } from '@lingxiteam/types';
import { useEffect, useMemo } from 'react';
import useAsyncState from '../utils/hooks/useAsyncState';
import useHiddenStyle from '../utils/hooks/useHiddenStyle';
import { useJsonToParse } from '../utils/hooks/useJsonToParse';
import { MyStackColumnProps } from './PropsType';

const MyStackColumn: LingXiFC<MyStackColumnProps> = (props, ref) => {
  const {
    colors: iColors,
    visible,
    $$componentItem,
    getEngineApis,
    style,
    className,
    refData,
    ...restProps
  } = props;
  const finalStyle = useHiddenStyle(visible, style);
  const [
    { data: myData = [], legendParams: myLegendParams = [], x },
    setState,
  ] = useAsyncState({
    data: props.data,
    legendParams: props.legendParams,
    x: props.x,
  });

  const legendParams = useJsonToParse(myLegendParams);
  const data = useJsonToParse(myData);

  const dataSource = useMemo(
    () =>
      data.map((i: any) => {
        if (i.constructor === Object) {
          const newObj = {} as any;
          Object.keys(i).forEach((key) => {
            newObj[key] = i[key];
            if (!isNaN(parseInt(i[key], 10))) {
              newObj[key] = parseInt(i[key], 10);
            }
          });
          return newObj;
        }
        return i;
      }),
    [JSON.stringify(data)],
  );

  const { xFontSize, xColor, yFontSize, yColor } = props?.style;
  const colors = useMemo(() => {
    if (iColors) {
      return iColors.split(',');
    }
    return undefined;
  }, [iColors]);
  const xStyle = useMemo(() => {
    return { fontSize: xFontSize, fill: xColor };
  }, [xFontSize, xColor]);
  const yStyle = useMemo(() => {
    return { fontSize: yFontSize, fill: yColor };
  }, [yFontSize, yColor]);

  useEffect(() => {
    if (refData) {
      setState(refData as any);
    }
  }, [refData]);

  return (
    <div className={className}>
      <StackColumn
        {...restProps}
        style={finalStyle}
        color={colors}
        xStyle={xStyle}
        yStyle={yStyle}
        data={dataSource}
        legendParams={legendParams}
        x={x}
      />
    </div>
  );
};

MyStackColumn.displayName = 'StackColumn';

export default MyStackColumn;
