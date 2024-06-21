import { LingxiForwardRef } from '@lingxiteam/types';
import DformCustom from '../DformCustom';
import InnerDatePicker from './InnerDatePicker';

const DatePicker = LingxiForwardRef<any, any>((props, ref) => {
  return (
    <DformCustom.Item showError={false}>
      <InnerDatePicker {...props} ref={ref} />
    </DformCustom.Item>
  );
});

export default DatePicker;
