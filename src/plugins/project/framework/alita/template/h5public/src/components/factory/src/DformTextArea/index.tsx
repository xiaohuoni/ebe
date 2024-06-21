import { DformTextArea } from '@lingxiteam/dform';
import { LingxiForwardRef } from '@lingxiteam/types';
import { DFormWrapper, FormItem } from '../BasicComponents';
import { useFormItem, UseFormItemProps } from '../utils/hooks/useFormItem';
import { withTransformProps } from '../utils/withTransformProps';
import transformProps from './transformProps';

export interface MyDformTextAreaProps extends UseFormItemProps {
  title: string;
  maxLength: number;
}

const MyDformTextArea = LingxiForwardRef<any, MyDformTextAreaProps>(
  (props, ref) => {
    const { defaultValue, maxLength, onChange, getEngineApis, ...restProps } =
      props;
    const changeVal = (v: any) => {
      if (typeof v === 'string') {
        return v;
      }
      if (typeof v === 'number') {
        return `${v}`;
      }
      return '';
    };

    const {
      visible,
      disabled,
      val,
      getRules,
      onInputChange,
      required,
      readOnly,
    } = useFormItem(ref, { ...props, defaultValue: changeVal(defaultValue) });

    const { getLocale } = getEngineApis?.() || {};
    return (
      <FormItem>
        <DFormWrapper visible={visible} getEngineApis={getEngineApis}>
          <DformTextArea
            {...restProps}
            defaultValue={val}
            value={val}
            required={required}
            rules={getRules()}
            disabled={disabled}
            onChange={(v: any) => onInputChange(v)}
            readonly={readOnly}
            maxLength={maxLength}
            getLocale={(
              t: string,
              tempValue: Record<string, any> | undefined,
            ) => {
              return getLocale(`DformTextArea.${t}`, '', tempValue);
            }}
            validateTrigger="inputOnBlur"
          />
        </DFormWrapper>
      </FormItem>
    );
  },
);

MyDformTextArea.displayName = 'dformTextArea';

export default withTransformProps(MyDformTextArea, transformProps);
