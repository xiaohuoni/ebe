import type { EngineApisType } from '@lingxiteam/types';

export interface TooltiProps extends React.HTMLProps<HTMLDivElement> {
  wrapperClassName?: string;
  iconClassName?: string;
  titleTip?: any;
  tipIcon?: any;
  tipLocation?: any;
  tipContent?: any;
  tipPlacement?: any;
  label?: any;
  tipSize?: string;
  tipWidth?: string;
  tipHeight?:string;
  engineApis?: EngineApisType;
  getEngineApis?: any;
  $$componentItem?: any;
}

export interface UseTooltipProps extends TooltiProps {
  mode?: 'editor' | 'engine';
}
