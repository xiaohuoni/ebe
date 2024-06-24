import { DotLoading, type DotLoadingProps } from 'antd-mobile-5';
import React from 'react';
import './index.less';

interface LcdpSpinProps extends DotLoadingProps {
  spinning: boolean;
}

const LcdpSpin: React.FC<LcdpSpinProps> = (props) => {
  const { spinning = true, ...restProps } = props;

  if (!spinning) {
    return null;
  }

  return (
    <DotLoading {...restProps} className="lcdp-dynamicPage-spinning-mask" />
  );
};

export default LcdpSpin;
