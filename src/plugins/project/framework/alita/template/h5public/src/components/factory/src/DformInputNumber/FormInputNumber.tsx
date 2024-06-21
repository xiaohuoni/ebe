import { DformInput, INomarInputProps } from '@lingxiteam/dform';
import { LingxiForwardRef } from '@lingxiteam/types';
import { useEffect, useMemo, useState } from 'react';
import { DFormWrapper } from '../BasicComponents';
import { useFormItem } from '../utils/hooks/useFormItem';

export interface FormInputNumberProps
  extends Omit<INomarInputProps, 'onChange'> {
  regexp?: any[];
  // onInputValue: (v: string) => void;
  postfix?: any;
  theme?: string;
  isIconFont?: boolean;
  fontAddress?: any;
  postfixIconPosition?: string;
  iconColor?: string;
  addonAfter?: string;
  formatting?: any;
  formatterFunc?: any;
  parserFunc?: any;
  onChange?: any;
  onBlur?: any;
  max?: number;
  min?: number;
  inputPrefix?: any;
}

const FormInputNumber = LingxiForwardRef<any, FormInputNumberProps>(
  (props: any, ref) => {
    const {
      defaultValue,
      addonAfter,
      formatting,
      formatterFunc,
      parserFunc,
      onChange,
      onBlur,
      max,
      min,
      inputPrefix = null,
      getEngineApis,
      ...restProps
    } = props;
    const { getLocale } = getEngineApis?.() || {};
    const {
      visible,
      disabled,
      val,
      getRules,
      onInputChange,
      required,
      readOnly,
    } = useFormItem(ref, props);
    const [digitText, setDigitText] = useState<string>('');
    const [myMaxLength, setMyMaxLength] = useState(10000);
    const [myUnit, setMyUnit] = useState<any>(null);
    const [myClear, setMyClear] = useState(true);

    const digits = [
      '',
      '',
      '',
      getLocale?.('hundred'),
      getLocale?.('k'),
      getLocale?.('w'),
      getLocale?.('10w'),
      getLocale?.('100w'),
      getLocale?.('1000w'),
      getLocale?.('100m'),
      getLocale?.('b'),
      getLocale?.('10b'),
      getLocale?.('100b'),
      getLocale?.('t'),
      getLocale?.('10t'),
      '',
    ];

    const formatter = (va: any) => {
      let value = `${va}`;
      if (!Number.isNaN(value)) {
        if (min && value < min) {
          value = `${min}`;
        }
        if (max && value > max) {
          value = `${max}`;
        }
      }
      try {
        if (value && value.length > 14) {
          value = value.substring(0, 14);
        }
        if (value.indexOf('.') > -1 && !Number.isNaN(+value)) {
          setDigitText(digits[value.indexOf('.')]);
        } else if (!Number.isNaN(+value)) {
          setDigitText(digits[value.length]);
        }

        if (formatting === 'percent') {
          if (value.length > 10) {
            value = value.substring(0, 10);
          }
          // const p = value.length - value.indexOf('.');
          // return `${(parseInt(`${value * 10 ** p}`, 10) * 100) / 10 ** p}%`;
          return `${value}`;
        }

        if (formatting === 'word') {
          return value;
        }

        const withComma = (str: string) =>
          str
            .split('')
            .reverse()
            .join('')
            .replace(/(\d{1,3})/g, ',$1')
            .split('')
            .reverse()
            .join('')
            .replace(/,$/, '');

        // 只有小数点前的部分需要千位分隔符
        if (formatting === 'comma' && value.indexOf('.') > -1) {
          return (
            withComma(value.substring(0, value.indexOf('.'))) +
            value.substring(value.indexOf('.'))
          );
        }
        if (formatting === 'comma') {
          return withComma(`${value}`);
        }
        if (formatting === 'custom' && formatterFunc && parserFunc) {
          // eslint-disable-next-line no-eval
          return eval(formatterFunc);
        }
      } catch (error) {
        console.error(error);
      }
      return value;
    };

    const parser = (val: any) => {
      let value: any = val ? `${val}` : '';
      if (formatting === 'custom') {
        // 去掉所有除了小数点负数号和数字的字符
        value = value.replace(/[^-\d.]/g, '');
      } else {
        // 去掉所有除了小数点和数字的字符
        value = value.replace(/[^\d.]/g, '');
      }
      // 保证值里面只有一个小数点
      value = value.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.');
      try {
        // if (formatting === 'percent') {
        //   let v = Number(value);
        //   if (isNaN(value)) {
        //     v = 0;
        //   }
        //   return v;
        // }
        if (formatting === 'custom' && formatterFunc && parserFunc) {
          // eslint-disable-next-line no-eval
          return eval(parserFunc);
        }
      } catch (error) {
        console.error(error);
      }
      // if (value && value.length > 0) {
      //   return Number(value);
      // }
      return value;
    };

    const onInputValueChange = (v: any) => {
      // shouFormat.current = true;
      // onInputChange(formatter(v), true);

      // 保留小数位时保证值里面只有一个小数点
      const newValue = props.precision
        ? v.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.')
        : v;

      if (newValue === '') {
        onInputChange('');
      } else if (v === '.') {
        // 输入 "." 时特殊处理
        onInputChange('.');
      } else {
        onInputChange(Number(newValue));
      }
    };

    const renderFooter = () => {
      const fatherStyle: any = {
        display: 'flex',
        flexDirection: 'row' as 'row',
        justifyContent: 'flex-start',
        fontSize: '8px',
      };
      const sonStyle = {
        background: 'rgba(0, 0, 0, 0.45)',
        padding: '1px 2px',
        color: '#ffffff',
      };
      if (formatting === 'word' && digitText) {
        return (
          <div style={fatherStyle}>
            <span style={sonStyle}>{digitText}</span>
          </div>
        );
      }
      return null;
    };

    const inputNumberProps = useMemo(() => {
      const targetProps = { ...restProps };
      if (formatting && formatting !== '') {
        targetProps.formatter = formatter;
        targetProps.parser = parser;
        delete targetProps.precision;
      }
      return targetProps;
    }, [formatting]);

    useEffect(() => {
      const style: any = {
        display: 'flex',
        alignItems: 'center',
        flexShrink: 0,
      };
      if (formatting === 'percent') {
        setMyUnit(
          <div style={style}>
            <span>%</span>
            <span style={addonAfter ? { marginLeft: '8px' } : {}}>
              {addonAfter}
            </span>
          </div>,
        );
      } else {
        if (addonAfter) {
          style.marginLeft = '8px';
        }
        setMyUnit(<span style={style}>{addonAfter}</span>);
      }
    }, [addonAfter, formatting]);

    useEffect(() => {
      setMyClear(props?.clear);
      switch (formatting) {
        case 'word':
          setMyMaxLength(14);
          break;
        case 'comma':
          setMyMaxLength(18);
          break;
        case 'percent': {
          setMyMaxLength(13);
          setMyClear(false);
          break;
        }
        default:
          break;
      }
    }, [formatting]);
    return (
      <DFormWrapper visible={visible} getEngineApis={getEngineApis}>
        <DformInput
          {...inputNumberProps}
          maxLength={myMaxLength}
          inputType={formatting ? inputNumberProps.inputType : 'number'}
          max={max}
          min={min}
          clear={myClear}
          extra={myUnit}
          defaultValue={val}
          required={required}
          disabled={disabled}
          rules={getRules()}
          prefix={inputPrefix}
          renderFooter={renderFooter()}
          onChange={onInputValueChange}
          readonly={readOnly}
          validateTrigger="onBlur"
          getLocale={(
            t: string,
            tempValue: Record<string, any> | undefined,
          ) => {
            return getLocale(`DformInputNumber.${t}`, '', tempValue);
          }}
        />
      </DFormWrapper>
    );
  },
);

FormInputNumber.displayName = 'dformInputNumber';

export default FormInputNumber;
