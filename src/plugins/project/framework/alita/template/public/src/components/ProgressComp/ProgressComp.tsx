import React, { useState, forwardRef, FC, useEffect } from 'react';
import { ConfigProvider, Progress } from 'antd';

import './ProgressComp.less';

const prefix = 'ProgressComp';

const ProgressComp: FC<any> = forwardRef((props, ref) => {
  const { percent: propsPercent, className, ...restProps } = props;

  const [percent, setPercent] = useState(0);

  useEffect(() => {
    if (typeof propsPercent === 'number') {
      setPercent(propsPercent);
    }
  }, [propsPercent]);

  return (
    <ConfigProvider prefixCls="pcfactory">
      <span className={`${prefix}-progress`}>
        <Progress size="small" percent={percent} width={20} className={className} {...restProps} />
      </span>
    </ConfigProvider>
  );
});

export default ProgressComp;
