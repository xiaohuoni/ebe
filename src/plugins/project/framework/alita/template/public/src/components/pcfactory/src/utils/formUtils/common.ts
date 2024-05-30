
export type mode = 'grid' | 'pixel' | 'percentage' | '';

/**
 * 获取布局模式
 * @param col
 * @returns
 */
export const getMode = (col: string | number): mode => {
  if (!Number.isNaN(Number(col))) {
    return 'grid';
  }
  if (typeof col === 'string' && col.includes('px')) {
    return 'pixel';
  }
  if (typeof col === 'string' && col.includes('%')) {
    return 'percentage';
  }
  return '';
};

/**
 * 表单项错误滚动使用的className
 * @param fieldName
 * @returns
 */
export const getFormItemClassName = (fieldName: string) => {
  return `formItem-error-${fieldName}`;
};
