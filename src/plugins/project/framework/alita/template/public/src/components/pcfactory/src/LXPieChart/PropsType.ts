/* eslint-disable semi */
import type { EngineApisType } from '@lingxiteam/types';
import { PieChartPorps } from '@lingxiteam/charts-common';

export default interface LXPieChartPorps extends PieChartPorps {
  visible?: boolean;
  className?: string;
  style?: React.CSSProperties; // 样式
  getEngineApis?: () => EngineApisType;
// eslint-disable-next-line no-extra-semi
};
