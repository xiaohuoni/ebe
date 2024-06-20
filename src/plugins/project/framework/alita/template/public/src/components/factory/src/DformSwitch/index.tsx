import { DformSwitch } from '@lingxiteam/dform';
import { LingxiForwardRef } from '@lingxiteam/types';
import { DFormWrapper, FormItem } from '../BasicComponents';
import Icon from '../Icon';
import { useFormItem, UseFormItemProps } from '../utils/hooks/useFormItem';
import { withTransformProps } from '../utils/withTransformProps';
import transformProps from './transformProps';

export interface MyDformSwitchProps extends UseFormItemProps {
  style?: any;
  openIcon: any;
  closeIcon: any;
}
const MyDformSwitch = LingxiForwardRef<any, MyDformSwitchProps>(
  (props, ref) => {
    const {
      defaultValue,
      onChange,
      openIcon,
      closeIcon,
      style = {},
      getEngineApis,
      ...restProps
    } = props;
    const {
      disabled,
      val,
      getRules,
      onInputChange,
      required,
      visible,
      readOnly,
    } = useFormItem(ref, props);

    const otherProps = {
      ...restProps,
      style,
    };

    return (
      <FormItem>
        <DFormWrapper visible={visible} getEngineApis={getEngineApis}>
          <DformSwitch
            {...otherProps}
            required={required}
            defaultValue={val}
            rules={getRules()}
            disabled={disabled}
            // @ts-ignore
            openIcon={
              <Icon
                icon={openIcon}
                style={{ fontSize: '12px', width: '12px', height: '12px' }}
                getEngineApis={getEngineApis}
              />
            }
            // @ts-ignore
            closeIcon={
              <Icon
                icon={closeIcon}
                style={{ fontSize: '12px', width: '12px', height: '12px' }}
                getEngineApis={getEngineApis}
              />
            }
            onChange={(v: boolean) => onInputChange(v)}
            readonly={readOnly}
          />
        </DFormWrapper>
      </FormItem>
    );
  },
);

MyDformSwitch.displayName = 'dformSwitch';
export default withTransformProps(MyDformSwitch, transformProps);
