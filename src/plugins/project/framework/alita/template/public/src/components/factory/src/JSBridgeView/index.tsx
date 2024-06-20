import React from 'react';
import { AppForwardRef } from '../BasicComponents';

export type MyJSBridgeViewProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const JSBridgeView = AppForwardRef((props, ref) => {
  return <div ref={ref} {...props} />;
});

JSBridgeView.displayName = 'JSBridgeView';
export default JSBridgeView;
