import SingleProgress from '@lingxiteam/charts/es/SingleProgress';
import React from 'react';
import { AppForwardRef } from '../BasicComponents';

export interface MySingleProgressPros {
  /**
   * @description 总的数量
   */
  total: number;

  /**
   * @description 当前数量
   */
  count: number | string;

  /**
   * @description 要展示的进度条颜色
   * @default #3563F5
   */
  color?: string;

  /**
   * @description 进度条上部分的内容
   *
   */
  topNode?: React.ReactNode;

  /**
   * @description 进度条右边的内容
   */
  rightNode?: React.ReactNode;

  /**
   * @description 背后进度条的颜色
   * @default #EDF0F5
   */
  bgColor?: string;
  visible?: boolean;
  value?: MySingleProgressPros;
}

const MySingleProgress = AppForwardRef<MySingleProgressPros>((props, ref) => {
  const { visible } = props;
  return visible ? <SingleProgress {...props} /> : <></>;
});

MySingleProgress.displayName = 'SingleProgress';

export default MySingleProgress;
