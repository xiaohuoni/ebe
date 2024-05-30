import { CSSProperties } from 'react';

export interface IconCfg {
  type?: string;
  isIconFont?: boolean;
  fontAddress?: string;
  svgContent?: string;
  theme?: string;
  iconFileInfo?: any;
  iconFile?: any;
  isAction?: boolean; // 用于识别是否为图标的设置动作
  [key: string]: any;
}
export interface PrefixIconIconEDProps {
  prefixIconType?: string;
  prefixIconIsIconFont?: boolean;
  prefixIconFontAddress?: string;
  prefixIconSvgContent?: string;
  prefixIconTheme?: string;
  prefixIconIconFileInfo?: any;
  prefixIconiconFile?: any;
}

export type PrefixIconIconProps = PrefixIconIconEDProps;

export interface IconEDProps {
  icon?: IconCfg;
  rotate?: number;
  onClick?: any;
  // 树控件配置图标采用主题色时使用
  isUsePrimary?: boolean;
  appId?: string;
  iconItems?: any;
  mode?: string;
  color?: string;
  type?: string;
  isIconFont?: boolean;
  fontAddress?: string;
  svgContent?: string;
  theme?: string;
  iconFileInfo?: any;
  iconFile?: any;
  className?: string;
  style?: CSSProperties;
  placeholder?: any; // 占位 icon
}

export interface IconProps extends IconEDProps{
  visible?: boolean;
  engineApis?: any;
  getEngineApis?: any;
}

export interface UseIconProps extends IconProps {
  getFileIconUrl: () => any;
  getDesignPlatormIconUrl: (materialId: string, fileName: string) => any;
}
