export interface MyGroupColumnProps {
  colors?: string;
  visible: boolean;
  style?: any;
  legendParams: Array<any>;
  data: Array<any>;
  x: string;
  refData?: { data?: any[]; legendParams?: any[]; x?: string };
}
