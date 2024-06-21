export interface SideBarTabsProps {
  title: string;
  key: string;
  pagePath?: string;
  badge?: string | number;
  isShow?: boolean;
  disabled?: boolean;
}
export interface SideBarProps {
  tabs: [SideBarTabsProps];
  style: any;
  sideBarItem?: boolean;
  sideBarIndex?: boolean;
  lcdpParentRenderId: string;
  defaultSideBarActiviteKey?: string;
  onChange?: (key: string) => void;
}
