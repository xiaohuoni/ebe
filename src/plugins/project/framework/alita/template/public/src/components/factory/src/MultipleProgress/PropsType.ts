export interface ProgressProps {
  /**
   * @description 进度条颜色
   */
  color: string;

  /**
   * @description label文字
   */
  label: string;

  /**
   * @description 数量
   */
  count: number | string;
}

export interface MyMultipleProgressProps {
  /**
   * @description 进度条颜色
   */
  data: ProgressProps[];

  /**
   * @description 进度条高度
   * @default 8
   */
  height?: number;

  /**
   * @description 样式
   */
  style?: React.CSSProperties;
  visible: boolean;
  className: string;
  refData: { data: any };
}
