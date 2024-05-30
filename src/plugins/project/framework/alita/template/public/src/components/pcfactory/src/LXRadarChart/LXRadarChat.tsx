import React from 'react';
import LXRadarChartPorps from './PropsType';
import { useHiddenStyle } from '../utils';
import { LXChart } from '@lingxiteam/charts-common';
import { LingXiFC } from '@lingxiteam/types';
import './index.less';


// const prefixCls = 'lXRadarChart';

const LXRadarChart: LingXiFC<LXRadarChartPorps> = (props, ref) => {
  const { style, visible = true, className } = props;
  const finalStyle = useHiddenStyle(visible, style);

  return (
    <LXChart
      style={finalStyle}
      className={className}
      configProps={props}
      isEditMode={false}
      isMobile={false}
      chartType="Radar"
    />
  );
};

export default LXRadarChart;
