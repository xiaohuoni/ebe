import { useEffect, useRef, useState } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Chart, Geometry, Legend, px2hd } from '@alitajs/f2';
import Axis from '@lingxiteam/charts/es/components/Axis';
import { LingXiFC } from '@lingxiteam/types';
import useHiddenStyle from '../utils/hooks/useHiddenStyle';
import { useJsonToParse } from '../utils/hooks/useJsonToParse';
import { ColumnProps } from './PropsType';

const LineColumn: LingXiFC<ColumnProps> = (props, ref) => {
  const {
    style,
    data: myData = [],
    x,
    lineY,
    columnY,
    nameColumnY,
    nameLineY,
    areaColor = '',
    colors = '',
    className,
    visible = true,
    getEngineApis,
    $$componentItem,
    refData,
    ...restProps
  } = props;
  const { getLocale } = getEngineApis?.() || {};
  const { xColor, xFontSize, yColor, yFontSize } = style as any;
  const colorsArray = colors.split(',');
  const parseData = useJsonToParse(myData);
  const finalStyle = useHiddenStyle(visible, style);
  const dataSource = parseData.map((i: any) => {
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
  });
  const [data, setData] = useState(dataSource);

  // useImperativeHandle(ref, () => ({
  //   setChartData: (obj: any) => {
  //     const { data } = obj;
  //     data && setData(data);
  //   },
  // }));
  useEffect(() => {
    if (refData) {
      setData(refData);
    }
  }, [refData]);

  const chartRef = useRef<any>();
  // 柱状配置
  const mGeometryPropsInterval: any = {
    type: 'interval',
    position: `${x}*${columnY}`,
    color: colorsArray[1] || '#FACC14',
    size: px2hd(44),
  };
  // 点配置
  const mGeometryPropsPoint: any = {
    type: 'point',
    position: `${x}*${lineY}`,
    size: px2hd(6),
    style: {
      fill: colorsArray[0] || '#5687FB',
      stroke: '#fff',
      lineWidth: px2hd(4),
      shadowColor: 'rgba(59,105,212,0.44)',
      shadowBlur: 5,
    },
  };
  // 面配置
  const mGeometryPropsArea: any = {
    type: 'area',
    color: areaColor,
    position: `${x}*${lineY}`,
  };

  const YAxisConfig = {
    position: 'right',
    label: {
      fontSize: px2hd(yFontSize * 2),
      fill: yColor,
    },
    labelOffset: px2hd(30),
  };
  const XAxisConfig = {
    position: 'bottom',
    label: {
      fontSize: px2hd(xFontSize * 2),
      fill: xColor,
    },
    labelOffset: px2hd(30),
  };

  const legendItems = [
    {
      name: nameLineY,
      marker: {
        symbol: 'square',
        fill: colorsArray[1] || '#FACC14',
        radius: px2hd(8),
      },
    },
    {
      name: nameColumnY,
      marker: {
        symbol: 'circle',
        fill: colorsArray[0] || '#5687FB',
        radius: px2hd(8),
      },
    },
  ];

  const LegendProps = {
    custom: true,
    align: 'right',
    items: legendItems,
  };
  if (!data) {
    return (
      <p style={finalStyle}>{getLocale('Chart.configData', '请配置数据源')}</p>
    );
  }
  return (
    <div className={className}>
      <Chart
        height={500}
        pixelRatio={window.devicePixelRatio}
        ref={chartRef}
        style={finalStyle}
        data={data}
        padding={[px2hd(120), px2hd(74), px2hd(60), px2hd(50)]}
        // @ts-ignore
        margin={[px2hd(120), px2hd(120), px2hd(60), px2hd(50)]}
        {...restProps}
      >
        {/** @ts-ignore */}
        <Legend
          wordSpace={px2hd(10)}
          nameStyle={{
            fill: '#999999', // 文本的颜色
            fontSize: px2hd(22), // 文本大小
            textBaseline: 'middle', // 文本基准线，可取 top middle bottom，默认为middle
            lineHeight: px2hd(34),
          }}
          valueStyle={{
            fill: '#fff', // 文本的颜色
            fontSize: px2hd(22), // 文本大小
            textBaseline: 'middle', // 文本基准线，可取 top middle bottom，默认为middle
            lineHeight: px2hd(34),
          }}
          itemWidth={px2hd(160)}
          offsetX={px2hd(-20)}
          offsetY={px2hd(20)}
          {...LegendProps}
        />
        {/** @ts-ignore */}
        <Axis field={lineY} {...YAxisConfig} />
        {/** @ts-ignore */}
        <Axis field={columnY} {...YAxisConfig} />
        {/** @ts-ignore */}
        <Axis field={x} {...XAxisConfig} />

        <Geometry {...mGeometryPropsInterval} />
        <Geometry {...mGeometryPropsPoint} />
        <Geometry {...mGeometryPropsArea} />
      </Chart>
    </div>
  );
};

export default LineColumn;
