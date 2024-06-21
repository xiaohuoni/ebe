export interface MyStackColumnProps {
  colors?: string;
  visible: boolean;
  legendParams: Array<any>;
  data: Array<any>;
  style?: any;
  x: string;
  className: string;
  refData?: { data?: any[]; legendParams: any[]; x?: string };
}
