export interface MyRadarEChartsEDProps {
  style?: React.CSSProperties;
  className?: any;
  // relateDataType:
  //   | '1' // 数据源
  //   | '2' // 服务
  //   | '3'; // 手动添加
  defaultDataSource: Record<string, any>[]; // 内置业务数据
  radarDataSource: Record<string, any>[]; // 数据源 - 业务数据
  legendKey: string; // 图例取值的字段名
  levelTypeName: string; // 级别提示的中文

  indicatorDataSource: Record<string, any>[];
  defaultIndicatorDataSource: Record<string, any>[];
  indicatorName: string;
  indicatorKey: string;
  indicatorMax: string;
  indicatorMin: string;

  showTotal: boolean; // 是否显示总数
  showHint: boolean; // 是否显示级别提示

  defaultHint: Record<string, any>;
  hint: Record<string, any>;
  hintName: string;
  hintWidth: string;
  visible: boolean;
  defaultRadarLevelHint: Record<string, any>[];
  radarLevelHint: Record<string, any>[];
  radarMax: string;
  radarMin: string;
  radarDescription: string;
}

export type ReactChartHookType = MyRadarEChartsEDProps & {
  // 是否是运行态
  isRunningState?: boolean;
  getEngineApis?: any;
};
