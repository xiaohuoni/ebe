import type { LineProps } from '@lingxiteam/charts/es/Line/PropsType';

export interface MyLineProps extends LineProps {
  visible: boolean;
  data: any;
  y: any;
  style?: any;
  className: string;
  refData?: { data: any; x: any; y: any };
}
