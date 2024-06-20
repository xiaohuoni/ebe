import Line from '@lingxiteam/charts/es/Line';
import { LingXiFC } from '@lingxiteam/types';
import { useEffect, useMemo } from 'react';
import useAsyncState from '../utils/hooks/useAsyncState';
import useHiddenStyle from '../utils/hooks/useHiddenStyle';
import { useJsonToParse } from '../utils/hooks/useJsonToParse';
import { MyLineProps } from './PropsType';

const MyLine: LingXiFC<MyLineProps> = (props, ref) => {
  const {
    visible = true,
    getEngineApis,
    $$componentItem,
    className,
    style,
    refData,
    ...restProps
  } = props;
  const finalStyle = useHiddenStyle(visible, style);
  // if (!visible) {
  //   return null;
  // }

  const [state, setState] = useAsyncState({
    data: props.data,
    y: props.y,
    x: props.x,
  });

  const { data: myData } = state;

  const data = useJsonToParse(myData);
  const { xFontSize, xColor, yFontSize, yColor } = props?.style;
  const dataSource = useMemo(
    () =>
      data.map((i: any) => {
        let y = i[state.y];
        // eslint-disable-next-line radix
        if (!isNaN(parseInt(y))) {
          // eslint-disable-next-line radix
          y = parseInt(y);
        }
        return {
          ...i,
          [state.y]: y,
        };
      }),
    [JSON.stringify(data)],
  );

  const xStyle = useMemo(() => {
    return { fontSize: xFontSize, fill: xColor };
  }, [xFontSize, xColor]);
  const yStyle = useMemo(() => {
    return { fontSize: yFontSize, fill: yColor };
  }, [yFontSize, yColor]);

  const { width = '100%', height = '4.8rem' } = props.style;

  useEffect(() => {
    if (refData) {
      setState(refData);
    }
  }, [refData]);

  return (
    <div style={finalStyle} className={className}>
      <Line
        {...restProps}
        x={state.x}
        y={state.y}
        canvasSize={{ width, height }}
        data={dataSource}
        xStyle={xStyle}
        yStyle={yStyle}
      />
    </div>
  );
};

MyLine.displayName = 'Line';

export default MyLine;
