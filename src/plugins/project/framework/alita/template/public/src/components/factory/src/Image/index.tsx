import { LingxiForwardRef } from '@lingxiteam/types';
import DformCustom from '../DformCustom';
import MyImage, { MyImageProps } from './factoryImage';

const Image = LingxiForwardRef<any, MyImageProps>((props, ref) => {
  return (
    <DformCustom.Item showError getEngineApis={props.getEngineApis}>
      <MyImage {...props} ref={ref} />
    </DformCustom.Item>
  );
});

export default Image;
