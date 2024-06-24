export interface TableBaseEventTypes {
  /**
   * 点击表格头排序图标时触发
   * @param ascendCol
   * @param descendCol
   * @returns
   */
  onSortChange?: (ascendCol?: string, descendCol?: string) => void;

  /**
   * 选中行变化时触发
   * @param key
   * @param row
   * @returns
   */
  onSelectChange?: (key: string, row: any) => void;

  /**
   * 头部按钮点击事件
   */
  onHeadClickBtn1?: (e: any) => void;
  onHeadClickBtn2?: (e: any) => void;
  onHeadClickBtn3?: (e: any) => void;
  onHeadClickBtn4?: (e: any) => void;
  onHeadClickBtn5?: (e: any) => void;

  /**
   * 以下都是废弃的吧？
   * @deprecated
   */
  getEditVisible?: (e: any) => void | any;
  getDeleteVisible?: (e: any) => void | any;
  getDetailVisible?: (e: any) => void | any;
}

export interface TableRowExpandEventTypes {
  /**
   * 点击展开/收缩时触发
   * @param expanded
   * @param record
   * @returns
   */
  onExpand?: (expanded: boolean, record: any) => void;

  /**
   * 展开行变换回调
   * @param expandedRowKeys
   * @returns
   */
  onExpandedRowsChange?: (expandedRowKeys: any[]) => void;
}

export interface TableEditEventTypes {
  /**
   * 点击内置的编辑按钮时触发
   * @param key
   * @param row
   * @param index
   * @returns
   */
  onRowEdit?: (key: string, row: any, index: number | null) => void;

  /**
   * 点击内置的详情按钮时触发
   * @param key
   * @param row
   * @param index
   * @returns
   */
  onRowDetail?: (key: string, row: any, index: number | null) => void;

  /**
   * 点击内置的删除按钮时触发
   * @param key
   * @param row
   * @param index
   * @returns
   */
  onRowDelete?: (key: string, row: any, index: number | null) => void;

  /**
   * 点击行时触发
   * @param key
   * @param row
   * @param index
   * @returns
   */
  onRowClick?: (key: any, row: any, index: any) => void;

  /**
   * 双击行时触发
   * @param key
   * @param row
   * @param index
   * @returns
   */
  onRowDoubleClick?: (key: string, row: any, index: number) => void;

  /**
   * 开始行内编辑
   * @param e
   * @returns
   */
  onBeforeInlineEdit?: (e: any) => void;

  /**
   * 保存行内编辑时触发
   * @param data
   * @param id
   * @param index
   * @returns
   */
  onBeforeInlineSave?: (data: any, id: any, index: number | null) => void;
}

export interface TablePaginationEventTypes {
  /**
   * 页码改变回调时触发
   * @param page
   * @param size
   * @returns
   */
  onPageChange?: (page: React.SetStateAction<number>, size: number) => void;
}

export type MyTableEventTypes = TableBaseEventTypes &
  TableRowExpandEventTypes &
  TableEditEventTypes &
  TablePaginationEventTypes;
