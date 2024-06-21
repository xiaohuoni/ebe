import MultipleProgress from '@lingxiteam/charts/es/MultipleProgress';
import { LingXiFC } from '@lingxiteam/types';
import { useEffect } from 'react';
import useAsyncState from '../utils/hooks/useAsyncState';
import useHiddenStyle from '../utils/hooks/useHiddenStyle';
import { useJsonToParse } from '../utils/hooks/useJsonToParse';
import { MyMultipleProgressProps, ProgressProps } from './PropsType';

const MyMultipleProgress: LingXiFC<MyMultipleProgressProps> = (props, ref) => {
  const {
    style = {},
    $$componentItem,
    visible,
    getEngineApis,
    className,
    refData,
    ...restProps
  } = props;
  const finalStyle = useHiddenStyle(visible, style);
  const [{ data: myData }, setState] = useAsyncState({
    data: props.data,
  });

  const iData: ProgressProps[] = useJsonToParse(myData)?.map((item: any) => ({
    ...item,
    count: Number(item.count),
  }));

  useEffect(() => {
    if (refData) {
      setState(refData);
    }
  }, [refData]);

  return (
    <div style={finalStyle} className={className}>
      <MultipleProgress {...restProps} data={iData} />
    </div>
  );
};

MyMultipleProgress.displayName = 'MultipleProgress';
export default MyMultipleProgress;
