import classNames from 'classnames';
import { useEffect, useState } from 'react';

const TABLE_ZEBRA_STRIPE_TYPE_CODE = 'zebra';
const TABLE_BORDER_TYPE_CODE = 'border';

const useCommon = (props: any) => {
  const {
    rowKeyType,
    rowKey,
    bordered,
  } = props;

  const state = props.pageState;
  const isBordered = typeof bordered === 'boolean' ? bordered : bordered === TABLE_BORDER_TYPE_CODE; // 是否为边框线类型，且兼容带borderd的存量数据
  const isZebraStripe = typeof bordered === 'boolean' ? bordered : bordered === TABLE_ZEBRA_STRIPE_TYPE_CODE; // 是否为斑马纹类型
  const [currentRowKey, setCurrentRowKey] = useState<any>(rowKey);
  
  const innerClassName = classNames('ued-table', { 'ued-table-zebra-stripe': isZebraStripe });

  useEffect(() => {
    // 行主键自动生成时，替换行主键
    setCurrentRowKey(rowKeyType === 'auto' ? '__RowId__' : rowKey);
  }, [rowKeyType, rowKey]);

  return {
    currentRowKey,
    isBordered,
    isZebraStripe,
    state,
    innerClassName,
  };
};

export default useCommon;
