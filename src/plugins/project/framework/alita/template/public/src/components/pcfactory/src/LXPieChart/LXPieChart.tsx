import React from 'react';
import LXPieChartPorps from './PropsType';
import { LXChart } from '@lingxiteam/charts-common';
import { LingXiFC } from '@lingxiteam/types';
import { useHiddenStyle } from '../utils';
import './index.less';

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
