import { LXChart } from '@lingxiteam/charts-common';
import { LingXiFC } from '@lingxiteam/types';
import * as echarts from 'echarts/core';
import React, { useEffect, useRef, useState } from 'react';
import { useHiddenStyle } from '../utils';
import { useFuncExpExecute } from '../utils/hooks/useFuncExpExecute';
import { useLocale } from '../utils/hooks/useLocale';
import ChartLineProps from './PropsType';

const ChartLine: LingXiFC<ChartLineProps> = (props, ref) => {
  const {
    style,
    className,
    tooltipFormatter,
    getEngineApis,
    exampleData,
    dataSource,
    dataSourceTop,
    visible = true,
    $$componentItem,
    ...restProps
  } = props;

  const chartInstanceRef = useRef<echarts.EChartsType>();
  const finalStyle = useHiddenStyle(visible, style);
  const [chartOption, setChartOption] = useState<any>();
  const engineApis = getEngineApis?.();
  const { getLocale } = useLocale(engineApis);
  const { sandBoxSafeRun } = engineApis || {};

  const funcExpExecute = useFuncExpExecute(sandBoxSafeRun as any, getLocale);

  const configProps = {
    ...restProps,
    funcExpExecute,
    dataSource: dataSource || exampleData?.xAxisData || [],
    dataSourceTop: dataSourceTop || exampleData?.xAxisDataTop || [],
  };

  const getLXChartOption = (option: any) => {
    setChartOption(option);
  };

  const getLXChart = (chart: echarts.EChartsType | any) => {
    chartInstanceRef.current = chart;
  };

  useEffect(() => {
    if (chartInstanceRef?.current && chartOption) {
      chartOption.tooltip.valueFormatter = (value: any) =>
        `${value}${tooltipFormatter ?? ''}`;
      chartInstanceRef.current.setOption(chartOption, true);
    }
  }, [chartOption, tooltipFormatter]);

  return (
    <LXChart
      style={finalStyle}
      className={className}
      configProps={configProps}
      isEditMode={false}
      isMobile={false}
      chartType="Line"
      funcExpExecute={funcExpExecute}
      getLXChartOption={getLXChartOption}
      getLXChart={getLXChart}
    />
  );
};

export default ChartLine;
