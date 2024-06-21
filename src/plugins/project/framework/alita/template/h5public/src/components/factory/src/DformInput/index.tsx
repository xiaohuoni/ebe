import { DformInput } from '@lingxiteam/dform';
import { LingxiForwardRef } from '@lingxiteam/types';
import { DFormWrapper, FormItem } from '../BasicComponents';
import { useFormItem, UseFormItemProps } from '../utils/hooks/useFormItem';
import { withTransformProps } from '../utils/withTransformProps';
import transformProps from './transformProps';

export interface MyDformInputProps extends UseFormItemProps {
  postfix?: any;
  type?: string;
  theme?: string;
  isIconFont?: boolean;
  fontAddress?: any;
  postfixIconPosition?: string;
  iconColor?: string;
}

const MyDformInput = LingxiForwardRef<any, MyDformInputProps>((props, ref) => {
  const { getEngineApis, $$componentItem, ...restProps } = props;
  const {
    visible,
    val,
    disabled,
    getRules,
    onInputChange,
    required,
    readOnly,
  } = useFormItem(ref, props);
  const { getLocale } = getEngineApis?.() || {};
  return (
    <FormItem>
      <DFormWrapper visible={visible} getEngineApis={getEngineApis}>
        <DformInput
          {...restProps}
          defaultValue={val}
          autoComplete="off"
          disabled={disabled}
          rules={getRules()}
          // @ts-ignore
          onChange={(v: string) => onInputChange(v)}
          required={required}
          readonly={readOnly}
          validateTrigger="onBlur"
          getLocale={(
            t: string,
            tempValue: Record<string, any> | undefined,
          ) => {
            return getLocale(`DformInput.${t}`, '', tempValue);
          }}
        />
      </DFormWrapper>
    </FormItem>
  );
});

MyDformInput.displayName = 'dformInput';

export default withTransformProps(MyDformInput, transformProps);
