import type { FuncExpExeCuteType } from '../../utils/hooks/useFuncExpExecute';

export interface MyBodyCellProps {
  editable: boolean;
  isExtend: boolean;
  dataIndex: string | number;
  row: any;
  rowId: string | number;
  rowIndex: number;
  children: any;
  colorFormatInfo: any[];
  isCustomRendering: boolean;
  style?: any;
  mode?: string;
  funcExpExecute?: FuncExpExeCuteType;
  engineApis?: any;
  onTableCellClick?: (
    row: Record<string, any>,
    cell: any,
    cellId: string | number,
  ) => void;
}
