import { DotLoading } from 'antd-mobile-5';
import { FC, useMemo } from 'react';
// import { LocaleFunction } from '@lingxiteam/types';
import useCompState from '../../utils/hooks/useCompState';

interface SpinProps {
  dataState: any;
  // getLocale?: LocaleFunction;
}

/**
 * 根据数据状态dataState设置返回
 */
const Spin: FC<SpinProps> = (props) => {
  const { dataState } = props;
  const { stateIcon, stateTip } = useCompState({ dataState, type: 'loading' });

  const renderLoadingIcon = useMemo(() => {
    if (stateIcon) {
      return stateIcon;
    }
    return <DotLoading color="primary" />;
  }, [stateIcon]);

  return (
    <span>
      {renderLoadingIcon}
      {/* <span>{stateTip || getLocale('loadingText', '加载中')}</span> */}
      <span>{stateTip}</span>
    </span>
  );
};

export default Spin;
