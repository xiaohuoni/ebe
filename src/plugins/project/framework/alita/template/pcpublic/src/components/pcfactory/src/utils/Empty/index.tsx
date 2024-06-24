import { LocaleFunction } from '@lingxiteam/types';
import { Empty } from 'antd';
import classnames from 'classnames';
import { useMemo } from 'react';
import useCompState from '../hooks/useCompState';
import EmptySvg from './empty';

interface EmptyProps {
  dataState: any; // 数据状态
  clsName?: string;
  getLocale: LocaleFunction;
}

const EmptyComp = (props: EmptyProps) => {
  const { dataState, clsName, getLocale } = props;
  const { stateIcon, stateTip } = useCompState({ dataState, type: 'empty' });

  const emptyProps = useMemo(() => {
    const _spinProps: any = {};
    if (stateIcon) {
      _spinProps.image = stateIcon;
    }
    return _spinProps;
  }, [stateIcon]);

  return (
    <Empty
      className={classnames('pcfactory-empty-normal', clsName)}
      image={<EmptySvg />}
      description={stateTip ?? getLocale?.('noData', '暂无数据')}
      {...emptyProps}
    />
  );
};

export default EmptyComp;
