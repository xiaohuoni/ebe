import GroupColumn from '@lingxiteam/charts/es/GroupColumn';
import { LingXiFC } from '@lingxiteam/types';
import { useEffect, useMemo } from 'react';
import useAsyncState from '../utils/hooks/useAsyncState';
import useHiddenStyle from '../utils/hooks/useHiddenStyle';
import { useJsonToParse } from '../utils/hooks/useJsonToParse';
import { MyGroupColumnProps } from './PropsType';

const MyGroupColumn: LingXiFC<MyGroupColumnProps> = (props, ref) => {
  const {
    colors: iColors = '',
    visible = true,
    $$componentItem,
    getEngineApis,
    style,
    refData,
    ...restProps
  } = props;
  const {
    xFontSize,
    xColor,
    guideTextFontSize,
    guideTextColor,
    yFontSize,
    yColor,
  } = props?.style;
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
  // 通过字符串截取 获得真正的Color
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
  const guideTextStyle = useMemo(() => {
    return { fontSize: guideTextFontSize, fill: guideTextColor };
  }, [guideTextFontSize, guideTextColor]);

  // useImperativeHandle(ref, () => ({
  //   setData: setState
  // }))
  useEffect(() => {
    if (refData) {
      setState(refData as any);
    }
  }, [refData]);

  return (
    <GroupColumn
      {...restProps}
      style={finalStyle}
      color={colors}
      xStyle={xStyle}
      yStyle={yStyle}
      guideTextStyle={guideTextStyle}
      legendParams={legendParams}
      data={dataSource}
      x={x}
    />
  );
};

export default MyGroupColumn;
