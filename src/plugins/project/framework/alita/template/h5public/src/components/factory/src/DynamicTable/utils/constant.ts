export const SET_ROW_ALL_CELL_BACKGROUND_COLOR = 1; // 设置整行单元格颜色(背景+字体)
export const SET_ROW_SPECIAL_CELL_BACKGROUND_COLOR = 2; // 设置符合条件行的指定单元格颜色(背景+字体)
export const SET_ROW_ALL_CELL_CONTENT_STYLE = 3; // 设置整行单元格内容样式
export const SET_ROW_SPECIAL_CELL_CONTENT_STYLE = 4; // 设置符合条件行的指定单元格内容样式

export const ROW_CELL_FORMAT_STYLE_MAP = {
  [SET_ROW_ALL_CELL_BACKGROUND_COLOR]: '设置整行单元格颜色',
  [SET_ROW_SPECIAL_CELL_BACKGROUND_COLOR]: '设置符合条件行的指定单元格颜色',
  [SET_ROW_ALL_CELL_CONTENT_STYLE]: '设置整行单元格内容样式',
  [SET_ROW_SPECIAL_CELL_CONTENT_STYLE]: '设置符合条件行的指定单元格内容样式',
};

export const PURE_COLOUR_FILL = 'pureColourFill';
export const POINT_TAG = 'pointTag';
export const GHOST_TAG = 'ghostTag';
export const FADE_COLOUR_TAG = 'fadeColourTag';
export const PURE_COLOUR_TAG = 'pureColourTag';
export const HYPER_LINK = 'hyperlink';
export const PROGRESS_BAR = 'progressBar';

export const ROW_CELL_CONTENT_STYLE_MAP = {
  [PURE_COLOUR_FILL]: '纯色填充',
  [POINT_TAG]: '圆点样式',
  [GHOST_TAG]: '描边标签',
  [FADE_COLOUR_TAG]: '方角标签',
  [PURE_COLOUR_TAG]: '纯色标签',
  [HYPER_LINK]: '超链接',
};

export const RELATION_OR = 'or';
export const RELATION_AND = 'add'; // 历史因素，存量数据里都是 add，估计输错了
export const OPERATOR_EQUAL = '=';
export const OPERATOR_NOT_EQUAL = '!=';
export const OPERATOR_GREATER_THAN = '>';
export const OPERATOR_LESS_THAN = '<';
export const OPERATOR_INCLUDE = 'include';
export const OPERATOR_NOT_INCLUDE = 'notInclude';
export const OPERATOR_STARTS_WITH = 'startsWith';
export const OPERATOR_ENDS_WITH = 'endsWith';
export const OPERATOR_NULL = 'null';
export const OPERATOR_NOT_NULL = 'notNull';

export const RELATION_MAP = {
  [RELATION_OR]: '或',
  [RELATION_AND]: '且',
};

export const OPERATOR_MAP = {
  [OPERATOR_EQUAL]: '等于',
  [OPERATOR_NOT_EQUAL]: '不等于',
  [OPERATOR_GREATER_THAN]: '大于',
  [OPERATOR_LESS_THAN]: '小于',
  [OPERATOR_INCLUDE]: '包含',
  [OPERATOR_NOT_INCLUDE]: '不包含',
  [OPERATOR_STARTS_WITH]: '开头为',
  [OPERATOR_ENDS_WITH]: '结尾为',
  [OPERATOR_NULL]: '为空',
  [OPERATOR_NOT_NULL]: '非空',
};

export const BODY_CELL_MODE_ED = 'editor';

export const PAGE_JUMP = 'pageJump';
export const OPEN_MODAL = 'openModal';
export const DOWNLOAD_FILE = 'downloadFile';
export const PREVIEW_FILE = 'previewFile';
export const CUSTOM = 'custom';
export const PREVIEW_POP_UP = 'popUp';
export const PREVIEW_NEW_TAB = 'newTab';
export const ROUTE_PUSH = 'push';
export const ROUTE_REPLACE = 'replace';

export const EDIT_COMPONENT_STOP_PROPAGATION_CLS =
  'table-edit-component-stop-propagation';
