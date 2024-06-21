import { LXChart } from '@lingxiteam/charts-common';
import { LingXiFC } from '@lingxiteam/types';
import { useHiddenStyle } from '../utils';
import { useFuncExpExecute } from '../utils/hooks/useFuncExpExecute';
import { useLocale } from '../utils/hooks/useLocale';
import ChartLineProps from './PropsType';

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
  const { sandBoxSafeRun } = engineApis || {};

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
