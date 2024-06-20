import { FilterItems, FilterProps } from '@lingxiteam/antd-mobile-plus';
import { AppForwardRef } from '../BasicComponents';

interface FilterItemsProps extends FilterProps {
  className?: string;
}

const MyFilterItems = AppForwardRef<FilterItemsProps>((props, ref) => {
  return (
    <div className={`use-app-filteritems ${props.className}`}>
      <FilterItems {...props} />
    </div>
  );
});

export default MyFilterItems as any;
