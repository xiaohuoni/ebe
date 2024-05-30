import React, { useImperativeHandle, useEffect, useLayoutEffect, useRef } from 'react';
import * as echarts from 'echarts/core';
import { bind, clear } from 'size-sensor';
import {
  LineChart,
  BarChart,
  PieChart,
  RadarChart,
} from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  // 数据集组件
  DatasetComponent,
  // 内置数据转换器组件 (filter, sort)
  TransformComponent,
} from 'echarts/components';
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import { useRadarChartHook } from './RadarChartHook';
import type { MyRadarEChartsEDProps } from './RadarChartType';
import { useHiddenStyle } from '../utils';
import { LingXiFC } from '@lingxiteam/types';

// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  LegendComponent,
  TransformComponent,
  BarChart,
  LineChart,
  PieChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
  RadarChart,
]);

const RadarEChartsED: LingXiFC<MyRadarEChartsEDProps> = (props) => {
  const { style = {}, visible = true, className = '' } = props;
  const runningProps = { ...props, isRunningState: true };
  const { chartOption, chartNode, configMessage } = useRadarChartHook(runningProps);
  const finalStyle = useHiddenStyle(visible, style);
  const chartRef = useRef<HTMLDivElement>(null);
  const chartNodeRef = useRef<echarts.EChartsType>();
  useImperativeHandle<any, any>(chartNode, () => ({
    getEchartsInstance() {
      return chartNodeRef.current;
    },
  }));

  useEffect(() => {
    if (chartOption && chartNodeRef && chartNodeRef.current) {
      chartNodeRef.current.setOption(chartOption);
    }
  }, [chartOption]);

  
  useLayoutEffect(() => {
    if (chartRef && chartRef.current) {
      chartNodeRef.current = echarts.init(chartRef.current);
      bind(chartRef.current, () => {
        chartNodeRef.current?.resize();
      });
    }
    return () => {
      if (chartRef.current) {
        echarts.dispose(chartRef.current);
        clear(chartRef.current);
      }
    };
  }, []);
  if (configMessage) {
    return <div>{configMessage}</div>;
  }
  return (
    <div data-compid={(props as any)?.['data-compid']} style={finalStyle} className={className} ref={chartRef} />
  );
};

export default RadarEChartsED;
