/* eslint-disable consistent-return */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable @typescript-eslint/no-for-in-array */
/* eslint-disable no-underscore-dangle */
import { LingXiFC } from '@lingxiteam/types';
import { BarChart, LineChart, PieChart, RadarChart } from 'echarts/charts';
import {
  // 数据集组件
  DatasetComponent,
  GridComponent,
  LegendComponent,
  TitleComponent,
  TooltipComponent,
  // 内置数据转换器组件 (filter, sort)
  TransformComponent,
} from 'echarts/components';
import * as echarts from 'echarts/core';
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import React, { useEffect, useLayoutEffect, useMemo, useRef } from 'react';
import { bind, clear } from 'size-sensor';
import { useHiddenStyle, useListenProps } from '../utils';
import { MyReactEChartsProps } from './PropsType';

// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  BarChart,
  LineChart,
  LegendComponent,
  PieChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
  RadarChart,
]);

/**
 * @description: 遗留常用配置  grid / yAxis / tooltip 等，待追加
 * 配 api参考echarts官网： https://echarts.apache.org/examples/zh/index.html
 */

function arrayToJSON(arr: any[], val: any, obj: any) {
  const result = { ...obj };
  let temp = result;
  for (const key in arr) {
    let len = 0;
    if (
      arr.some(
        (i) =>
          ['LineChart', 'BarChart', 'PieChart', 'RadarChart'].indexOf(i) > -1,
      )
    ) {
      if (Number.isNaN(Number(arr[1]))) {
        len = 1;
      } else {
        len = 2;
      }
    }
    if (Number(key) > len && Number(key) < arr.length - 1) {
      temp[arr[key]] = temp[arr[key]] || {};
      temp = temp[arr[key]];
    } else if (String(key) === String(arr.length - 1)) {
      temp[arr[key]] = val;
    }
  }
  return result;
}

export interface ColorStopMap {
  type: string;
  x: number;
  y: number;
  x2: number;
  y2: number;
  colorStops: any[];
}
export interface SeriesMap {
  data?: any[];
  type?: string;
  areaStyle?: {
    showColor?: boolean;
    color0?: string;
    color1?: string;
    color?: ColorStopMap;
  };
  label?: { formatter: any };
  lineStyle?: { color: string };
  itemStyle?: { color: string };
  radius?: any;
  center?: any;
}

const ReactECharts: LingXiFC<MyReactEChartsProps> = (props, ref) => {
  const {
    type,
    relateDataType = '3',
    data,
    style,
    className,
    isDataMap,
    dataMapColumns,
    visible = true,
    yAxisNum,
    chartDataSource,
    chartColor,
    getEngineApis,
    refDataReload,
  } = props;

  const engineApis = getEngineApis?.() || {};
  const { sandBoxSafeRun } = engineApis;

  const [dataSource, setDataSource] = useListenProps(props.dataSource);

  const seriesAttr = Object.keys(props).filter((i) => i.indexOf('series') > -1);
  const pieSeriesAttr = Object.keys(props).filter(
    (i) => i.indexOf('pieSeries') > -1,
  );
  const titleAttr = Object.keys(props).filter(
    (i) => i.indexOf('chartTitle') > -1,
  );
  const legendAttr = Object.keys(props).filter(
    (i) => i.indexOf('chartsLegend') > -1,
  );
  const xAxisAttr = Object.keys(props).filter(
    (i) => i.indexOf('chartXAxis') > -1,
  );
  const yAxisAttr = Object.keys(props).filter(
    (i) => i.indexOf('chartYAxis') > -1,
  );
  const gridAttr = Object.keys(props).filter(
    (i) => i.indexOf('chartGrid') > -1,
  );
  const tooltipAttr = Object.keys(props).filter(
    (i) => i.indexOf('chartTooltip') > -1,
  );
  const finalStyle = useHiddenStyle(visible, style);
  const chartRef = useRef<HTMLDivElement>(null);
  const chartNode = useRef<echarts.EChartsType>();

  // useImperativeHandle(ref, () => ({
  //   setTableData: (tableData: { dataSource: any[]; total: any; current: any }) => {
  //     setDataSource(tableData?.dataSource || [])
  //   }
  // }))

  const {
    datasource = [],
    xAxislen = 1,
    yAxislen = 1,
  } = useMemo(() => {
    let [xAxislength, yAxislength] = [1, 1];
    let chartData;
    if (relateDataType === '1') {
      chartData = chartDataSource || dataSource;
    } else if (relateDataType === '2') {
      chartData = dataSource;
    } else if (relateDataType === '3') {
      chartData = type === 'pie' ? data : data.data;
    }
    if (['bar', 'line'].includes(type)) {
      if (isDataMap) {
        xAxislength = dataMapColumns
          .map((i) => i.keyVal)
          ?.filter((j) => j.indexOf('x') > -1)?.length;
        yAxislength = dataMapColumns
          .map((i) => i.keyVal)
          ?.filter((j) => j !== 'key' && j.indexOf('y') > -1)?.length;
      } else {
        xAxislength = Array.isArray(chartData)
          ? Object.keys(chartData[0] || {})?.filter((i) => i.indexOf('x') > -1)
              ?.length
          : 1;
        yAxislength = Array.isArray(chartData)
          ? Object.keys(chartData[0] || {})?.filter(
              (i) => i !== 'key' && i.indexOf('y') > -1,
            )?.length
          : 1;
      }
      return {
        datasource: Array.isArray(chartData) ? chartData : [],
        xAxislen: xAxislength || 1,
        yAxislen: yAxislength || 1,
      };
    }
    return { datasource: chartData, xAxislen: 1, yAxislen: 1 };
  }, [
    data,
    dataSource,
    chartDataSource,
    relateDataType,
    type,
    dataMapColumns,
    isDataMap,
  ]);

  const transferDataMap: { name?: any; value?: any; x?: any } = useMemo(() => {
    let obj = {};
    if (isDataMap) {
      dataMapColumns.forEach((item) => {
        obj = {
          ...obj,
          [item.keyVal]: item.attrVal,
        };
      });
    }
    return obj;
  }, [isDataMap, dataMapColumns]);

  const getNestObj = (attrs: any[]) => {
    let obj = {};
    for (let i = 0; i < attrs.length; i += 1) {
      const arr = attrs[i].split('_');
      obj = arrayToJSON(arr, (props as any)[attrs[i]], obj);
    }
    return obj;
  };

  const chartTitle = useMemo(() => {
    return getNestObj(titleAttr);
  }, [titleAttr]);

  /**
   * @description: 根据xAxis和其他配置项得到最终的x轴配置
   * 最终数据格式：
   * xAxis : [
      {
        show: true,
        type : 'category',
        boundaryGap : false,
        data : ['周一','周二','周三','周四','周五','周六','周日']，
        ...
      }
    ]
   */
  // @ts-ignore
  const chartXAxis = useMemo(() => {
    if (['bar', 'line'].includes(type)) {
      const xAxis = [];
      // const xItem0=getNestObj(xAxisAttr.filter((attr) => attr.indexOf(`chartXAxis0`) > -1));
      // const len=xItem0.type === 'value'?yAxislen:xAxislen;
      for (let i = 0; i < yAxisNum; i += 1) {
        const xAxisItem = xAxisAttr.filter(
          (attr) => attr.indexOf(`chartXAxis${i}`) > -1,
        );
        let obj: { type?: string; data?: any[] } = {
          type: 'category',
          ...getNestObj(xAxisItem),
        };
        if (obj.type === 'value' && +i === +yAxislen) {
          break;
        } else {
          if (+i === +xAxislen) {
            break;
          }
          if (isDataMap) {
            obj = {
              ...obj,
              data:
                datasource?.map((j: Record<string, any>) =>
                  i < 1
                    ? j[transferDataMap.x || 'x']
                    : j[(transferDataMap as any)[`x${i}`] || `x${i}`],
                ) || [],
            };
          } else {
            obj = {
              ...obj,
              data:
                datasource?.map((j: Record<string, any>) =>
                  i < 1 ? j.x : j[`x${i}`],
                ) || [],
            };
          }
        }
        xAxis.push(obj);
      }
      return xAxis;
    }
  }, [xAxisAttr, datasource, transferDataMap, isDataMap]);

  // @ts-ignore
  const chartYAxis = useMemo(() => {
    if (['bar', 'line'].includes(type)) {
      const yAxis = [];
      // const yItem0=getNestObj(yAxisAttr.filter((attr) => attr.indexOf(`chartYAxis0`) > -1));
      // const len=yItem0.type === 'category'?xAxislen:yAxislen;
      for (let i = 0; i < yAxisNum; i += 1) {
        const yAxisItem = yAxisAttr.filter(
          (attr) => attr.indexOf(`chartYAxis${i}`) > -1,
        );
        let obj: {
          type?: string;
          axisLabel?: { formatter?: string };
          data?: any[];
        } = {
          type: 'value',
          ...getNestObj(yAxisItem),
        };
        if (obj.axisLabel?.formatter) {
          obj.axisLabel.formatter = `{value}${obj.axisLabel?.formatter}`;
        } else {
          obj = {
            ...obj,
            axisLabel: {
              ...obj.axisLabel,
              formatter: undefined,
            },
          };
        }
        if (obj.type === 'category') {
          if (+i === +xAxislen) {
            break;
          }
          if (isDataMap) {
            obj = {
              ...obj,
              data:
                datasource?.map((j: Record<string, any>) =>
                  i < 1
                    ? j[transferDataMap.x || 'x']
                    : j[(transferDataMap as any)[`x${i}`] || `x${i}`],
                ) || [],
            };
          } else {
            obj = {
              ...obj,
              data:
                datasource?.map((j: { x: any }) =>
                  i < 1 ? j.x : (j as any)[`x${i}`],
                ) || [],
            };
          }
        } else if (+i === +yAxislen) {
          break;
        }
        yAxis.push(obj);
      }
      return yAxis;
    }
  }, [yAxisAttr, transferDataMap, isDataMap]);

  const chartTooltip = useMemo(() => {
    const obj: {
      position?: any;
      formatter?: any;
      padding?: any;
      trigger?: string;
    } = getNestObj(tooltipAttr);
    if (obj.position) {
      obj.position = Array.isArray(obj.position)
        ? obj.position
        : obj.position?.split(',') || undefined;
    } else {
      obj.position = undefined;
    }
    if (!obj.trigger) {
      obj.trigger = type === 'pie' ? 'item' : 'axis';
    }
    if (obj.formatter) {
      return {
        ...obj,
        padding: obj.padding ? sandBoxSafeRun(`(${obj.padding})`) : undefined,
        formatter: (params: any) => {
          const newdata = [...datasource];
          let formatter: any = '';
          let item = {};
          if (type === 'pie') {
            const xval = isDataMap ? transferDataMap.name : 'name';
            item = newdata.find((i) => i[xval] === params?.name);
          } else {
            const xval = isDataMap ? transferDataMap.x : 'x';
            item = newdata.find((i) => i[xval] === params?.name);
          }
          formatter = sandBoxSafeRun(`(${obj.formatter})`);
          if (typeof formatter === 'function') {
            /**
             * formatter字符串支持以下格式
             * function main({ name, value }) {
                  return `${name}：${value}%`;
                }
                或者
                ({ name, value }) => `${name}：${value}%`
             */
            formatter = formatter(item);
          }
          return formatter;
        },
      };
    }
    return {
      ...obj,
      padding: obj.padding ? sandBoxSafeRun(`(${obj.padding})`) : undefined,
      formatter: undefined,
    };
  }, [tooltipAttr, datasource]);

  const chartGrid = useMemo(() => {
    if (['bar', 'line'].includes(type)) {
      return getNestObj(gridAttr);
    }
    return null;
  }, [gridAttr]);

  const chartLegend = useMemo(() => {
    return getNestObj(legendAttr);
  }, [legendAttr]);

  /**
   * @description: 根据传入的数据源及其他配置项得到最终的图表数据
   * 最终数据格式：
   *  LineChart / BarChart
   *  series: [
        {
          name: '邮件营销',
          type: 'line',
          stack: true, // 设置后会和其他数据叠加显示
          areaStyle: { normal: {} }, // 是否覆盖下面区域
          data: [120, 132, 101, 134, 90, 230, 210],
          ...
        },
      ]

      PieChart
      series: [{
        type: 'pie',
        radius: ['70%', '100%'],
        center: ['50%', '50%'],
        color: ['#597EF7', '#54D89A', '#FA8C16'],
        data: [
          { value: 335, name: '直接访问' },
          { value: 310, name: '邮件营销' },
          { value: 234, name: '联盟广告' },
          { value: 135, name: '视频广告' },
          { value: 1548, name: '搜索引擎' },
        ],
        hoverAnimation: true,
        ...
      }],
   */

  // @ts-ignore
  const chartSeries = useMemo(() => {
    if (datasource) {
      if (['bar', 'line'].includes(type)) {
        const series = [];
        for (let i = 0; i < yAxislen; i += 1) {
          const seriesItem = seriesAttr.filter(
            (attr) => attr.indexOf(`series${i}`) > -1,
          );
          let obj: SeriesMap = getNestObj(seriesItem);
          obj = {
            type,
            ...obj,
            data: datasource?.map((j: Record<string, any>) => j[`y${i}`]) || [],
          };
          if (isDataMap) {
            obj.data =
              datasource?.map(
                (j: Record<string, any>) =>
                  j[(transferDataMap as any)[`y${i}`] || `y${i}`],
              ) || [];
          }
          if (
            obj.areaStyle?.showColor &&
            obj.areaStyle?.color0 &&
            obj.areaStyle?.color1
          ) {
            obj = {
              ...obj,
              areaStyle: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: obj.areaStyle?.color0, // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: obj.areaStyle?.color1, // 100% 处的颜色
                    },
                  ],
                },
                color0: undefined,
                color1: undefined,
              },
            };
          } else {
            obj = {
              ...obj,
              areaStyle: undefined,
            };
          }
          if (obj.label?.formatter === 'value') {
            obj.label.formatter = function (param: { value: any }) {
              return param.value;
            };
          } else if (obj.label?.formatter === 'lab') {
            obj.label.formatter = '{b}';
          } else if (obj.label?.formatter === 'percent') {
            const newdata = [...datasource];
            let item: any = {};
            const xval = isDataMap ? transferDataMap.x : 'x';
            obj.label.formatter = function (params: {
              name: string;
              value: string;
            }) {
              item = newdata.find((i) => i[xval] === params.name);
              return item[`percent${i}`]
                ? `${item[`percent${i}`]}%`
                : `${params.value}%`;
            };
          } else if (obj.label?.formatter === 'labvalue') {
            obj.label.formatter = function (param: {
              name: string;
              value: string;
            }) {
              return `${param.name}：${param.value}`;
            };
          }
          if (obj.type === 'bar' && obj.lineStyle && obj.lineStyle.color) {
            obj = { ...obj, itemStyle: { color: obj.lineStyle.color } };
          }
          // @ts-ignore
          series.push(obj);
        }
        return series;
      }
      if (type === 'pie') {
        let obj: SeriesMap = { type: 'pie' };
        let newDataSource = [...datasource];
        if (isDataMap) {
          newDataSource = newDataSource.map((item) => ({
            name: item[transferDataMap.name || 'name'],
            value: item[transferDataMap.value || 'value'],
          }));
        }
        obj = {
          ...obj,
          ...getNestObj(pieSeriesAttr),
          data: newDataSource || [],
        };
        obj.radius = Array.isArray(obj.radius)
          ? obj.radius
          : obj.radius?.split(',') || [0, '75%'];
        obj.center = Array.isArray(obj.center)
          ? obj.center
          : obj.center?.split(',') || ['50%', '50%'];
        if (obj.label?.formatter === 'value') {
          obj.label.formatter = function (param: { value: any }) {
            return param.value;
          };
        } else if (obj.label?.formatter === 'lab') {
          obj.label.formatter = '{b}';
        } else if (obj.label?.formatter === 'percent') {
          obj.label.formatter = '{d}%';
        } else if (obj.label?.formatter === 'labvalue') {
          obj.label.formatter = function (param: {
            name: string;
            value: string;
          }) {
            return `${param.name} ${param.value}`;
          };
        } else if (obj.label?.formatter === 'labpercent') {
          obj.label.formatter = '{b}: {d}%';
        }
        return [obj];
      }
      return [{ type: 'pie', data: datasource, radius: '50%' }];
    }
  }, [datasource, seriesAttr, pieSeriesAttr]);

  /**
   * @description: 组合各个配置项形成最终的图表配置
   */
  const chartOption = useMemo(() => {
    let finalOption: {} = {
      title: chartTitle,
      legend: chartLegend,
      series: chartSeries,
      xAxis: chartXAxis,
      grid: chartGrid,
      yAxis: chartYAxis,
      tooltip: {
        ...chartTooltip,
      },
    };
    if (chartColor) {
      finalOption = {
        ...finalOption,
        color: Array.isArray(chartColor) ? chartColor : chartColor.split(','),
      };
    } else {
      finalOption = {
        ...finalOption,
        color: [
          '#5470c6',
          '#91cc75',
          '#fac858',
          '#ee6666',
          '#73c0de',
          '#3ba272',
          '#fc8452',
          '#9a60b4',
          '#ea7ccc',
        ],
      };
    }
    return finalOption;
  }, [chartTitle, chartLegend, chartYAxis, chartXAxis, chartSeries, chartGrid]);

  useEffect(() => {
    if (refDataReload) {
      setDataSource(refDataReload);
    }
  }, [refDataReload]);

  useEffect(() => {
    if (chartNode && chartNode.current) {
      const chartInst = chartNode.current;
      chartInst.off('click');
      chartInst.on('click', (params: any) => {
        if (props.onChartClick) {
          props.onChartClick(params);
        }
      });
    }
  }, [chartOption, props.onChartClick]);
  useEffect(() => {
    if (chartOption && chartNode && chartNode.current) {
      // 第二个参数notMerge表示不与之前设置的option合并，设置true防止减少数据仍保持最多数据的展示效果
      chartNode.current.setOption(chartOption, true);
    }
  }, [chartOption]);
  useLayoutEffect(() => {
    if (chartRef && chartRef.current) {
      chartNode.current = echarts.init(chartRef.current);
      chartNode.current.setOption(chartOption);
      bind(chartRef.current, () => {
        chartNode.current?.resize();
      });
    }
    return () => {
      if (chartRef.current) {
        echarts.dispose(chartRef.current);
        clear(chartRef.current);
      }
    };
  }, []);

  return (
    <div
      data-compid={(props as any)?.['data-compid']}
      ref={chartRef}
      style={finalStyle}
      className={className}
    />
  );
};

export default ReactECharts;
