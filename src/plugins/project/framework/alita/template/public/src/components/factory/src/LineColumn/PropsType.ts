import { ChartProps } from '@alitajs/f2/dist/Chart';
import { CSSProperties } from 'react';

export interface ColumnProps {
  /**
   * 图表展示数据
   */
  data: ChartProps['data'];

  /**
   * 对数据进行单属性过滤，比如展示数值加上单位
   */
  colDefs?: ChartProps['colDefs'];

  /**
   * 横坐标替代属性名称
   */
  x?: string;

  /**
   * 纵坐标 线 替代属性名称
   */
  lineY?: string;

  /**
   * 纵坐标 柱 替代属性名称
   */
  columnY?: string;

  /**
   * 自定义图表颜色
   */
  colors?: string;

  /*
   * style
   */
  style?: CSSProperties;
  className: string;

  /*
   * Y轴标识名称
   */
  nameColumnY?: string;
  nameLineY?: string;

  /**
   * 覆盖面颜色
   */
  areaColor?: string;

  /**
   * 是否展示
   */
  visible?: boolean;
  refData?: any[];
}
