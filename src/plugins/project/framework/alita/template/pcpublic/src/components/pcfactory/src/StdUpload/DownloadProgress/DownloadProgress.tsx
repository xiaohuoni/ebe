import { Progress } from 'antd';
import { forwardRef, useImperativeHandle, useState } from 'react';

const DownloadProgress = forwardRef((_, ref) => {
  const [percent, setPercent] = useState<number>(0);

  useImperativeHandle(ref, () => ({
    setPercent,
  }));

  return (
    <Progress
      type="circle"
      percent={percent}
      showInfo={false}
      width={14}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        visibility: 'visible',
      }}
    />
  );
});

export default DownloadProgress;
