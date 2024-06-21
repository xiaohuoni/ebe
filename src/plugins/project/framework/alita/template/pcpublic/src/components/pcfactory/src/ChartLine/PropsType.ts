/* eslint-disable semi */
export default interface ChartLineProps {
  visible?: boolean;
  exampleData?: any; // 示例数据
  style?: React.CSSProperties;
  className?: string;
  chartType: string; // 图表类型
  title?: string; // 标题
  subTitle?: string; // 副标题
  titlePosition?: 'left' | 'center' | 'right'; // 标题位置
  xAxisTitle?: string; // 横轴标题
  xAxisData?: any[]; // 横轴内容
  dataSource?: any[]; // 横轴数据源
  legendField?: string; // 横轴图例字段
  xAxisTitleTop?: string; // 顶部横轴-标题
  xAxisDataTop?: any[];
  dataSourceTop?: any[];
  legendFieldTop?: string;
  yAxisTitle?: string; // 纵轴标题
  yAxisInterval?: number; // 纵轴间隔
  yAxisMin?: number; // 刻度起始值
  yAxisMax?: number; // 刻度终点值
  yAxisFormatter?: string; // 刻度后缀
  yAxisIndexMap?: any; // 纵轴映射
  yAxisTitleRight?: string; // 右侧纵轴-标题
  yAxisIntervalRight?: number;
  yAxisMinRight?: number;
  yAxisMaxRight?: number;
  yAxisFormatterRight?: string;
  color: any[]; // 颜色
  layout:
    | 'top'
    | 'left'
    | 'leftTop'
    | 'rightTop'
    | 'bottom'
    | 'right'
    | 'rightBottom'
    | 'leftBottom'
    | 'horizontal'; // 图标布局
  smooth?: boolean; // 平滑曲线
  lineType: 'solid' | 'dashed' | 'dotted'; // 线类型
  stacked?: any; // 堆叠
  area?: 'area' | 'none'; // 面积填充
  lineBarMap?: any; // 线柱映射
  legend?: any; // 图例支持扩展
  showLegend?: boolean; // 图例显隐
  legendOrient?: 'horizontal' | 'vertical'; // 图例布局
  tooltip?: any; // 提示框支持扩展
  showTooltip?: boolean; // 提示框显隐
  tooltipFormatter?: string; // 提示内容值后缀
  label?: any; // 标签支持扩展
  showLable?: boolean; // 数字标签显隐
  symbol:
    | 'circle'
    | 'rect'
    | 'roundRect'
    | 'triangle'
    | 'diamond'
    | 'pin'
    | 'arrow'
    | 'none'; // 标记图形 - 只有折线图存在symbol
  symbolSize: number; // 标记大小
  markPoint?: any; // 标签支持扩展
  showMarkPoint?: boolean; // 标注显隐
  markPointSymbol?:
    | 'circle'
    | 'rect'
    | 'roundRect'
    | 'triangle'
    | 'diamond'
    | 'pin'
    | 'arrow'
    | 'none'; // 标注图形
  markPointType: 'min' | 'max' | 'average'; // 标注纬度
  markLine?: any; // 标线支持扩展
  showMarkLine?: boolean; // 标线显隐
  markLineType: 'min' | 'max' | 'average'; // 标线纬度
  emphasis?: any; // 高亮效果支持扩展
  showEmphasis?: boolean; // 开启高亮效果显隐
  axisExchange?: boolean; // 横纵轴调换
  backgroundStyleColor?: string; // 柱条背景色
  barMaxWidth?: string; // 最大柱宽
  barGap?: number; // 组内间距
  getEngineApis?: any; // 运行态api
  funcExpExecute?: any;
  // eslint-disable-next-line no-extra-semi
}
