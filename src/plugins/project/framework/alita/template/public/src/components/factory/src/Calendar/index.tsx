import { LingxiForwardRef } from '@lingxiteam/types';
import DformCustom from '../DformCustom';
import InnerCalendar, { MyCalendarProps } from './InnerCalendar';

const Calendar = LingxiForwardRef<any, MyCalendarProps>((props, ref) => {
  return (
    <DformCustom.Item showError={false}>
      <InnerCalendar {...props} ref={ref} />
    </DformCustom.Item>
  );
});

export default Calendar;
