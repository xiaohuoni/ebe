import { LocaleFunction } from '@lingxiteam/types';
import { ErrorBlock } from 'antd-mobile-5';
import { FC, useMemo } from 'react';
import useCompState from '../../utils/hooks/useCompState';
import EmptySvg from './empty';
import './index.less';

interface EmptyProps {
  dataState: any;
  getLocale: LocaleFunction;
}

const Empty: FC<EmptyProps> = (props) => {
  const { dataState, getLocale } = props;

  const { stateIcon, stateTip } = useCompState({ dataState, type: 'empty' });

  const emptyProps = useMemo(() => {
    const _spinProps: any = {};
    if (stateIcon) {
      _spinProps.image = stateIcon;
    }
    return _spinProps;
  }, [stateIcon]);

  return (
    <ErrorBlock
      className="lcdp-app-empty"
      status="empty"
      description={stateTip ?? getLocale('noData', '暂无数据')}
      image={<EmptySvg />}
      {...emptyProps}
    />
  );
};

export default Empty;
