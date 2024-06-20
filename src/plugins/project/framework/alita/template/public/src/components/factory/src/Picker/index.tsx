import { LingxiForwardRef } from '@lingxiteam/types';
import DformCustom from '../DformCustom';
import InnerPicker, { PickerProps } from './InnerPicker';

const Picker = LingxiForwardRef<any, PickerProps>((props, ref) => {
  return (
    <DformCustom.Item showError={false}>
      <InnerPicker {...props} ref={ref} />
    </DformCustom.Item>
  );
});

export default Picker;
