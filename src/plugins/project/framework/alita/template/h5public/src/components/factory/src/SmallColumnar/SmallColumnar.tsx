import ZeroColumn from '@lingxiteam/charts/es/SmallColumnar/ZeroColumn';
import { LingXiFC } from '@lingxiteam/types';
import { useEffect, useMemo } from 'react';
import useAsyncState from '../utils/hooks/useAsyncState';
import useHiddenStyle from '../utils/hooks/useHiddenStyle';
import { useJsonToParse } from '../utils/hooks/useJsonToParse';
import { MySmallColumnarProps } from './PropsType';

const SmallColumnar: LingXiFC<MySmallColumnarProps> = (props, ref) => {
  // number=5 为了兼容旧数据
  const {
    visible = true,
    showScrollBar,
    number = 5,
    $$componentItem,
    getEngineApis,
    style,
    refData,
    ...restProps
  } = props;
  const finalStyle = useHiddenStyle(visible, style);
  const [{ data: myData = [], x, y }, setState] = useAsyncState({
    data: props.data,
    x: props.x,
    y: props.y,
  });

  const { xFontSize, xColor, guideTextFontSize, guideTextColor } = props?.style;
  const data = useJsonToParse(myData);
  const guideTextStyle = useMemo(() => {
    return { fontSize: guideTextFontSize, fill: guideTextColor };
  }, [guideTextFontSize, guideTextColor]);

  const xStyle = useMemo(() => {
    return { fontSize: xFontSize, fill: xColor };
  }, [xFontSize, xColor]);

  const max = useMemo(() => {
    // eslint-disable-next-line radix
    return parseInt(number) - 1;
  }, [number]);

  useEffect(() => {
    if (refData) {
      setState(refData as any);
    }
  }, [refData]);

  return (
    <ZeroColumn
      {...restProps}
      style={finalStyle}
      x={x}
      y={y}
      data={data}
      xStyle={xStyle}
      guideTextStyle={guideTextStyle}
      showGuide
      showToolTips
      scrollBarConfig={{
        // @ts-ignore
        visible: showScrollBar,
      }}
      colDefs={{
        index: {
          tickInterval: 1,
          min: -0.2,
          max,
          range: [0, 0.98],
        },
      }}
    />
  );
};

export default SmallColumnar;
