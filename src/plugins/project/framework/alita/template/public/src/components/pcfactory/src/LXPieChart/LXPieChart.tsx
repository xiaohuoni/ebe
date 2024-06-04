import { LXChart } from '@lingxiteam/charts-common';
import { LingXiFC } from '@lingxiteam/types';
import { useHiddenStyle } from '../utils';
import './index.less';
import LXPieChartPorps from './PropsType';

const LXPieChart: LingXiFC<LXPieChartPorps> = (props, ref) => {
  const { style, visible = true, className } = props;
  const finalStyle = useHiddenStyle(visible, style);

  return (
    <LXChart
      style={finalStyle}
      className={className}
      configProps={props}
      isEditMode={false}
      isMobile={false}
      chartType="Pie"
    />
  );
};

export default LXPieChart;
