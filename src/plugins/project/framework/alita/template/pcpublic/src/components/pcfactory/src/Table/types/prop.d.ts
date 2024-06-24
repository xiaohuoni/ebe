import type { TableProps } from 'antd/lib/table';
import type { MyTableEventTypes } from './event';

export type SummaryConfig = {
  /**
   * 不合计|单列|多列
   */
  type: 'none' | 'single' | 'multi';

  /**
   * 总结行名称
   */
  name?: string;

  /**
   * 单列合并值
   */
  col?: Array<ColItem>;

  /**
   * 多列合并
   */
  group?: Array<ColItem>;

  /**
   * 保留几位小数
   */
  decimal?: number;

  /**
   * 背景色
   */
  background?: string;
};
export interface TableBasePropTypes extends TableProps<any> {
  className?: string;
  style?: React.CSSProperties;

  /**
   * 数据源
   */
  dataSource: [];

  /**
   * 标识是否绑定了数据源
   */
  dataSourceFromDataSourceConfig?: string;

  /**
   * 刷新数据源时，是否开启加载中效果
   */
  dataSourceLoading?: boolean;

  /**
   * 行主键来源类型
   */
  rowKeyType?: 'rowKeyType' | 'auto';

  /**
   * 行主键来源类型为指定字段时，字段名
   */
  rowKey?: string;

  /**
   * 尺寸
   */
  size?: 'default' | 'middle' | 'small';

  /**
   * 边框类型
   */
  borded?: 'segmentation' | 'zebra' | 'border';

  /**
   * 是否显示
   */
  visible?: boolean;

  /**
   * 是否开启可拖拽列宽
   */
  isFlexColumn?: boolean;

  /**
   *
   */
  scroll?: false | { x: number; y: number };

  /**
   * 适应方式
   */
  adjustModel?: 'auto' | 'fill';

  /**
   * 内容列配置
   */
  columns: any[];

  /**
   * 单元格样式配置
   */
  colorFormatInfo?: any[];

  /**
   * 这是啥呢？
   * @deprecated 是否废弃？
   */
  pageState?: any;

  /**
   * 运行时所属应用id
   * @deprecated 将要废弃或已废弃，统一从 $$componentItem 获取
   */
  appId?: string;

  /**
   * 运行时所属页面id
   * @deprecated 将要废弃或已废弃，统一从 $$componentItem 获取
   */
  pageId?: string;

  /**
   * 引擎能力
   */
  getEngineApis?: () => EngineApisType;

  /**
   * 组件运行时引擎透露信息
   */
  $$componentItem: ComponentItemType;

  /**
   * 总结合计行
   */
  summaryTotal?: SummaryConfig;
}

export interface TablePaginationPropTypes {
  /**
   * 是否开启分页
   */
  page?: boolean;

  /**
   * 分页开启后，当前页
   */
  current?: number;

  /**
   * 分页开启后，每页条数
   */
  pageSize?: number;

  /**
   * 分页开启后，是否显示总条数
   */
  showTotal?: boolean;

  /**
   * 分页开启后，总条数值
   */
  total?: number;

  /**
   * 分页开启后，是否显示每页条数选择
   */
  showSizeChanger?: boolean;

  /**
   * 分页开启后，每页条数可选值配置
   */
  pageSizeOptions?: string;

  /**
   * 分页开启后，是否显示快速跳转分页
   */
  showQuickJumper?: boolean;
}

export interface TableEditPropTypes {
  /**
   * 编辑模式
   */
  editMode?: 'single' | 'multiple';

  /**
   * 行编辑是否禁用判断
   */
  rowEditableRule?: any;

  /**
   * 操作列内置按钮的配置
   */
  rowActions?: any[];

  /**
   * 操作列扩展按钮的配置
   */
  extend?: any[];

  /**
   * 操作列展示按钮的最大数量
   */
  extendNum?: number;

  /**
   * 是否固定操作列
   */
  fixedAction?: boolean;

  /**
   * 是否隐藏操作列
   */
  hiddenAction?: boolean;

  /**
   * 操作列固定宽度
   */
  actionWidth?: number;
}

export interface TableRowExpandPropTypes {
  /**
   * 是否可以行展开规则
   */
  rowExpandable?: any;

  /**
   * 是否全部展开所有行
   */
  defaultExpandAllRows?: boolean;

  /**
   * 是否点击行展开
   */
  expandRowByClick?: boolean;

  /**
   * 默认展开行，例如："[\"1\"]"
   */
  defaultExpandedRowKeys?: string;

  /**
   * 展开图标的位置的基准列
   */
  expandIconPositionRef?: { title: string; dataIndex?: string };

  /**
   * 展开图标位于基准列的方向位置
   */
  expandIconPosition?: 'left' | 'right';

  /**
   * 处于展开时，显示的图标配置
   */
  expandCloseIcon?: any;

  /**
   * 处于收缩时，显示的图标配置
   */
  expandOpenIcon?: any;

  /**
   * 行展开的扩展内容（业务组件）配置
   */
  expandComponents?: any[];
}

export interface TableRowSelectPropType {
  /**
   * 选择模式
   */
  rowSelection?:
    | false
    | {
        type: 'radio' | 'checkbox';
      };

  /**
   * 可选表格行选择是否禁用判断
   */
  rowSelectionDisabled?: any;

  /**
   * 父子联动选择
   */
  checkLoosed?: boolean;
}

export type MyTableProps = TableBasePropTypes &
  TablePaginationPropTypes &
  TableEditPropTypes &
  TableRowExpandPropTypes &
  TableRowSelectPropType &
  MyTableEventTypes;

export type LevelItem<T> = {
  __parent__?: LevelItem<T>;
  __key__: string | number;
  __children__?: LevelItem<T>[];
} & T;
