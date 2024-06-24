import type { EngineApisType } from '@lingxiteam/types';
import type { ResizeCallbackData } from 'react-resizable';

export type HeaderCellProps = React.HTMLAttributes<any> & {
  onResize: (
    e: React.SyntheticEvent<Element>,
    data: ResizeCallbackData,
  ) => void;
  width: number;
  isFlexColumn?: boolean;
};

export interface Code {
  code: any;
  originCode: string;
}

export interface Tip {
  type: string;
  icon: any;
  iconPlacement?: string;
  content: string | Code;
  placement?: string;
}

export interface HeaderCellTitleProps {
  size?: string;
  column: {
    title?: string;
    titleLineNum?: number;
    titleTip?: Tip;
  };
  mode?: 'editor' | 'engine';
  funcExpExecute?: FuncExpExeCuteType;
  sandBoxSafeRun?: any;
  engineApis?: EngineApisType;
}
