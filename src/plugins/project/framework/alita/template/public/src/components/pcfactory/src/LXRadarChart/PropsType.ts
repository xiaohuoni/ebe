/* eslint-disable semi */
/* eslint-disable no-extra-semi */
import { RadarChartPorps } from '@lingxiteam/charts-common';

export default interface LXRadarChartPorps extends RadarChartPorps {
  visible?: boolean;
  className?: string;
  style?: React.CSSProperties; // 样式
};
