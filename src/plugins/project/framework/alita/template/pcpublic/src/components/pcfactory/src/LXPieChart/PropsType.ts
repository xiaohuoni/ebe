/* eslint-disable semi */
import { PieChartPorps } from '@lingxiteam/charts-common';
import type { EngineApisType } from '@lingxiteam/types';

export default interface LXPieChartPorps extends PieChartPorps {
  visible?: boolean;
  className?: string;
  style?: React.CSSProperties; // 样式
  getEngineApis?: () => EngineApisType;
  // eslint-disable-next-line no-extra-semi
}
