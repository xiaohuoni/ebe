import { DountProps } from '@lingxiteam/charts/es/Donut';
import { $$componentItem } from '../interfaces/types';

export interface DountDataProps {
  x?: string;
  y?: string;
  data?: any;
  sumText?: string;
}

export interface MyDonutProps extends Omit<DountProps, 'tableHeader'> {
  colors: string;
  tableHeader: string;
  proColor?: any;
  strokeColor?: any;
  customRenderCode?: any;
  proSize?: number;
  visible?: boolean;
  $$componentItem: $$componentItem;
  customProgressCode?: any;
  className: string;
  refData?: DountDataProps;
  style: any;
}
