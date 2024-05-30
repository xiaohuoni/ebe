import React from 'react';
import { useHiddenStyle } from '../utils';

export interface HorizontalViewProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  visible?: boolean;
}

const HorizontalView: React.FC<HorizontalViewProps> = props => {
  const { children, style, className, visible = true } = props;

  const finalStyle = useHiddenStyle(visible, style);

  // if (visible === false) {
  //   return null;
  // }
  return (
    // @ts-ignore
    <div style={finalStyle} className={className} data-compid={props?.['data-compid']}>
      {children}
    </div>
  );
};

export default HorizontalView;
