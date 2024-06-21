export type WufengAction = 'PAGE_CONTAINER_BOX';

export type ValueOf<T> = T[keyof T];

const ACTION_PREFIX = 'LCDP_CENTER_';

export const LCDP_ACTIONS = {
  apis: `${ACTION_PREFIX}APIS`, // api
  utils: `${ACTION_PREFIX}UTILS`, // 一些工具类
} as const;

export type ActionType = ValueOf<typeof LCDP_ACTIONS>;

/**
 * 自定义函数入参
 */
export interface ExpressionRenderingParams {
  value?: string;
  code?: string;
  originCode?: string;
}
