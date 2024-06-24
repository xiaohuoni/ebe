import { Spin } from 'antd';
import { useMemo } from 'react';
import useCompState from '../hooks/useCompState';

interface SpinProps {
  dataState: any; // 数据状态
  tip?: string;
}

const SpinComp = (props: SpinProps) => {
  const { dataState, tip } = props;
  const { stateIcon, stateTip } = useCompState({
    dataState,
    tip,
    type: 'loading',
  });

  const spinProps = useMemo(() => {
    const _spinProps: any = {};
    if (stateIcon) {
      _spinProps.indicator = stateIcon;
    }
    return _spinProps;
  }, [stateIcon]);

  return <Spin {...spinProps} tip={stateTip} />;
};

export default SpinComp;
