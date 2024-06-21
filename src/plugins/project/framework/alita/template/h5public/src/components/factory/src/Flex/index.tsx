import { Flex } from '@lingxiteam/antd-mobile-plus';
import { AppForwardRef } from '../BasicComponents';

export interface MyFlexProps {}

const MyFlex = AppForwardRef<MyFlexProps>((props, ref) => {
  const { ...restProps } = props;
  return <Flex {...restProps} />;
});

export default MyFlex;
