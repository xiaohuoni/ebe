import React from 'react';
import { LingXiFC } from '@lingxiteam/types';
import { useFuncExpExecute } from '../utils/hooks/useFuncExpExecute';
import ChartLineProps from './PropsType';
import { LXChart } from '@lingxiteam/charts-common';
import { useHiddenStyle } from '../utils';
import { useLocale } from '../utils/hooks/useLocale';


const ChartLine: LingXiFC<ChartLineProps> = (props, ref) => {
  const {
    style,
    className,
    getEngineApis,
    exampleData,
    dataSource,
    dataSourceTop,
    visible = true,
    $$componentItem,
    ...restProps
  } = props;

  const finalStyle = useHiddenStyle(visible, style);
  const engineApis = getEngineApis?.();
  const { getLocale } = useLocale(engineApis);
  const {
    sandBoxSafeRun,
  } = engineApis || {};

  const funcExpExecute = useFuncExpExecute(sandBoxSafeRun as any, getLocale);

  const configProps = {
    ...restProps,
    funcExpExecute,
    dataSource: dataSource || exampleData?.xAxisData || [],
    dataSourceTop: dataSourceTop || exampleData?.xAxisDataTop || [],
  };

  return (
    <LXChart
      style={finalStyle}
      className={className}
      configProps={configProps}
      isEditMode={false}
      isMobile={false}
      chartType="Line"
      funcExpExecute={funcExpExecute}
    />
  );
};

export default ChartLine;
