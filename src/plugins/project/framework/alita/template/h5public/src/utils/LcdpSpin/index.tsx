import { DotLoading, type DotLoadingProps } from 'antd-mobile-5';
import React from 'react';
import './index.less';

const LcdpSpin: React.FC<DotLoadingProps> = (props) => (
  <DotLoading {...props} className="lcdp-dynamicPage-spinning-mask" />
);

export default LcdpSpin;
