import { EngineBaseProps } from '@lingxiteam/types';

export interface TabsItemProps {
  label: string;
  key: string;
  pagePath?: string;
  badge?: string | number;
  badgeRendering?: any;
  isShow?: boolean | string;
  disabled?: boolean;
}

export interface DynamicTabsProps {
  _component: any;
  tabItems: [TabsItemProps];
  lcdpParentRenderId?: string;
  activeTabKey?: string;
  defaultActiveKey?: string;
  selectCurrentContainer: () => void;
  tabBarGutter?: number;
  type: 'line' | 'card' | 'editable-card';
  tabPosition: 'left' | 'right' | 'top' | 'bottom';
  size: 'large' | 'middle' | 'small';
  style?: React.CSSProperties | any;
  animated: boolean;
  $$componentItem: EngineBaseProps['$$componentItem'];
  getEngineApis: EngineBaseProps['getEngineApis'];
  visible?: boolean;
  onTabChange?: (key: string, data: any) => void;
  onTabDeleteChange?: (key: string) => void;
}
