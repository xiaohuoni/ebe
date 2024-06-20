import { LXChart } from '@lingxiteam/charts-common';
import { LingXiFC } from '@lingxiteam/types';
import useHiddenStyle from '../utils/hooks/useHiddenStyle';
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
      isMobile
      chartType="Pie"
    />
  );
};

export default LXPieChart;
