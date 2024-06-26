import { Table, TableProps } from 'antd';
import useSummaryCol, { SummaryProps } from '../hooks/useSummaryCol';
import { SummaryConfig } from '../types/prop';

const { Row, Cell } = Table.Summary;
export interface SummaryRowProps<T> {
  dataSource?: SummaryProps<T>['dataSource'];
  columns?: SummaryProps<T>['columns'];

  /**
   * 合计行属性
   */
  summaryConfig?: SummaryConfig;

  /**
   * 默认总结行
   */
  summary?: TableProps<T>['summary'];

  /**
   * 选择模式
   */
  selectionType?: Required<TableProps<T>>['rowSelection']['type'];
}
const TableSummaryRow = <T,>(props: SummaryRowProps<T>) => {
  const { dataSource, columns, summaryConfig, summary, selectionType } = props;
  const { background } = summaryConfig || {};
  const { summaryColList } = useSummaryCol({
    dataSource,
    columns,
    summaryConfig,
  });

  return summaryColList?.length > 0 ? (
    <Row
      style={{
        background,
      }}
    >
      {/* 开启选择模式时，预置一个占位单元格 */}
      {selectionType !== undefined && <Cell index={0} />}
      {summaryColList.map(({ colSpan, title, align }, i) => (
        <Cell index={i} colSpan={colSpan || 1} align={align}>
          {title}
        </Cell>
      ))}
    </Row>
  ) : (
    ((summary?.(dataSource as any[]) || null) as any)
  );
};

export default TableSummaryRow;
