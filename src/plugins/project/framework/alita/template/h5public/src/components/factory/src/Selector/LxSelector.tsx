import ErrorTip from '@lingxiteam/dform/es/baseComponents/ErrorTip';
import Field from '@lingxiteam/dform/es/components/Field';
import { LingxiForwardRef } from '@lingxiteam/types';
import { Selector, Toast } from 'antd-mobile-5';
import { Rule } from 'rc-field-form/es/interface';
import { useEffect, useMemo, useRef, useState } from 'react';
import { DFormWrapper } from '../BasicComponents';
import { useFormItem } from '../utils/hooks/useFormItem';
import useStyle from '../View/useStyle';

export interface SelectorProps {
  options: any;
  style: any;
  showCheckMark?: boolean;
  defaultValue?: any;
  multiple?: boolean;
  className?: string;
  columns?: string;
  customize?: number; // 自定义列数
  src?: string;
  fileCode?: string;
  backgroundType: any;
  status?: string;
  onChange?: any;
  min?: number | undefined;
  max?: number | undefined;
  value?: any;
  fieldProps: string;
  name?: string;
}
const LxSelector = LingxiForwardRef<any, SelectorProps>((props, ref) => {
  const {
    options,
    showCheckMark,
    style,
    defaultValue,
    multiple,
    className,
    columns,
    customize,
    src,
    fileCode,
    backgroundType = {},
    onChange,
    min,
    max,
    fieldProps,
    status,
    name,
    value,
    getEngineApis,
    ...restProps
  } = props;
  const { getLocale } = getEngineApis?.() || {};
  const imperativeHandle = {
    // eslint-disable-next-line consistent-return
    getSelectedData: () => {
      const targetValue = isForm ? form?.getFieldValue(fieldProps) : curValue;
      let length = 1; // 在配置态默认是以多个字符串隔开,在表单当中val,是根据default，兼容错误数据
      if (Array.isArray(targetValue)) {
        // eslint-disable-next-line prefer-destructuring
        length = targetValue.length;
      }
      if (!visible) {
        // 隐藏的情况下，则不校验
        return targetValue;
      }
      if (min && length < min) {
        Toast.show({
          content: getLocale('minRule', `低于最小选项限制[最少选${min}个]`, {
            min: `${min}`,
          }),
        });
      } else if (max && length > max) {
        Toast.show({
          content: getLocale('maxRule', `超过最大选项限制[最多选${max}个]`, {
            max: `${max}`,
          }),
        });
      } else {
        return targetValue;
      }
    },
    setSelectorOptions: (params: {
      dataSource: any[];
      labelKey?: string;
      valueKey?: string;
      descriptionKey?: string;
      disabledKey?: string;
    }) => {
      const {
        labelKey = '',
        valueKey = '',
        descriptionKey,
        disabledKey,
        dataSource,
      } = params;
      if (dataSource && Array.isArray(dataSource)) {
        const temDataSoure = (dataSource || [])?.map((item) => {
          if (labelKey && valueKey) {
            if (item[labelKey]) {
              return {
                label: item[labelKey],
                value: item[valueKey],
                description: descriptionKey ? item[descriptionKey] : '',
                disabled: disabledKey ? item[disabledKey] : false,
              };
            }
          }
          return item;
        });
        setCurOptions(temDataSoure);
      }
    },
    setSelectorDisabelItems: (params: { disabledKeys: any }) => {
      const { disabledKeys = [] } = params;
      if (disabledKeys && Array.isArray(disabledKeys)) {
        const newOptions: any = curOptions?.map((item: any) => {
          if (item?.value && disabledKeys.includes(item.value)) {
            return { ...item, disabled: true };
          }
          return item;
        });
        setCurOptions(newOptions);
      }
    },
  };

  const { getAppFileUrlByFileCode } = getEngineApis();

  const { isForm, form, disabled, onInputChange, visible, getRules } =
    useFormItem(ref, props as any, imperativeHandle);
  const [imgSrc, setImgSrc] = useState<string>();
  const [curValue, setCurValue] = useState<any>([]);
  const [curOptions, setCurOptions] = useState<any[]>([]);
  const myColumns: any = () => {
    switch (columns) {
      case 'customize':
        return customize;
      case '2':
        return 2;
      case '3':
        return 3;
      case '4':
        return 4;
      default:
        return undefined;
    }
  };
  const viewRef = useRef();
  const resultStyle = useStyle(
    {
      ...props,
      src: imgSrc,
    },
    viewRef,
  );
  useEffect(() => {
    if (options && Array.isArray(options)) {
      setCurOptions(options);
    }
  }, [JSON.stringify(options)]);
  useEffect(() => {
    if (backgroundType.image || fileCode) {
      setImgSrc(getAppFileUrlByFileCode(backgroundType.image || fileCode));
    }
  }, [backgroundType, src, fileCode]);
  const myStyle = () => {
    const {
      defaultBg,
      defaultColor,
      defaultBorder,
      checkedBColor,
      checkedColor,
      checkedBorder,
      itemBorderRadius,
      itemGap,
      ...restProps
    } = style;
    let itemBorder = null;
    let cBorder = null;
    if (defaultBorder && defaultBorder.includes('border ')) {
      itemBorder = defaultBorder.split('border ')[1];
    }
    if (checkedBorder && checkedBorder.includes('border ')) {
      cBorder = checkedBorder.split('border ')[1];
    }
    let horizontal = '8px';
    let vertical = '16px';
    if (itemGap && itemGap.includes(' ')) {
      const gapLimit = itemGap.split(' ');
      horizontal = gapLimit[0];
      vertical = gapLimit[1];
    }
    return {
      '--color': defaultBg,
      '--text-color': defaultColor,
      '--border': itemBorder,
      '--checked-color': checkedBColor,
      '--checked-text-color': checkedColor,
      '--checked-border': cBorder,
      '--border-radius': itemBorderRadius,
      '--gap-horizontal': horizontal,
      '--gap-vertical': vertical,
      ...restProps,
    };
  };
  const myDefaultValue = useMemo(() => {
    if (defaultValue && typeof defaultValue === 'string') {
      const initValues = defaultValue.split(',');
      setCurValue(initValues);
      return initValues;
    }
    if (Array.isArray(defaultValue) && defaultValue.length > 0) {
      setCurValue(defaultValue);
      return defaultValue;
    }
    return [];
  }, [defaultValue]);

  const newRules: Rule[] = useMemo(() => {
    if (!min && !max) {
      return [];
    }
    const minMsg: Rule[] = [];
    const maxMsg: Rule[] = [];
    if (min) {
      minMsg.push({
        type: 'array',
        min,
        message: getLocale('minRule', `低于最小选项限制[最少选${min}个]`, {
          min: `${min}`,
        }),
      });
    }
    if (max) {
      maxMsg.push({
        type: 'array',
        max,
        message: getLocale('maxRule', `超过最大选项限制[最多选${max}个]`, {
          max: `${max}`,
        }),
      });
    }
    return [...minMsg, ...maxMsg];
  }, [min, max]);
  return (
    <Field
      required={false}
      title={name}
      name={fieldProps}
      rules={[...getRules(), ...newRules]}
      initialValue={myDefaultValue}
      params={{ formFlag: true, hidden: !visible }}
    >
      <DFormWrapper visible={visible} getEngineApis={getEngineApis}>
        <Selector
          {...restProps}
          style={{ ...resultStyle, ...myStyle() }}
          options={curOptions}
          showCheckMark={showCheckMark}
          defaultValue={myDefaultValue}
          multiple={multiple}
          className={className}
          columns={myColumns()}
          disabled={disabled}
          value={curValue}
          onChange={(value) => {
            let _curValue = value;
            if (max && value.length > max) {
              // 超过最大值则取后面选的
              const tartgetVal = value.slice(-max);
              _curValue = tartgetVal;
            }
            onInputChange([..._curValue], true);
            setCurValue([..._curValue]);
          }}
        />
        <ErrorTip show fieldProps={fieldProps} />
      </DFormWrapper>
    </Field>
  );
});

export default LxSelector;
