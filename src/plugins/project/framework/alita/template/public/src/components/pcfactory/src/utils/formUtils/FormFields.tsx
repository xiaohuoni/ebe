import { EngineBaseProps } from '@lingxiteam/types';
import { Form } from 'antd';
import { FormItemProps, Rule } from 'antd/es/form';
import classNames from 'classnames';
import React, {
  CSSProperties,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import TooltipView from '../../TooltipView';
import { antPrefix } from '../../variables';
import { useUpdateEffect } from '../ahooks';
import renderReadOnly from '../renderReadOnly';
import { getFormItemClassName, getMode, mode } from './common';
import { useForm } from './FormContext';
import WrapperContainer from './WrapperContainer';

const FULL_COL = 24;

export interface BaseFormFieldsProps {
  isFormRootChild: boolean;
}

export interface FormFieldsProps extends BaseFormFieldsProps {
  /**
   * 字段编码
   */
  fieldName: string;

  /**
   * 标题占比
   */
  labelCol?: string | number;

  /**
   * 内容占比
   */
  wrapperCol?: string | number;

  /**
   * 控件名称
   */
  name?: string;

  /**
   * 是否必填
   */
  required: boolean;

  /**
   * 是否禁用
   */
  disabled: boolean;

  /**
   * 是否只读
   */
  readOnly: boolean;

  /**
   *  是否显示
   */
  visible: boolean;

  /**
   * 控件自身列占比
   */
  selfSpan?: number;

  /**
   * 校验规则
   */
  rules: Rule[];

  /**
   * 默认值
   */
  defaultValue: any;

  /**
   * 控件值
   */
  value: any;

  /**
   * 表单值主动触发变化调用
   * @param value
   * @returns
   */
  handleFormValue?: (value: any) => any;

  /**
   * 触发回调 trigger
   */
  trigger?: string;

  /**
   * 表单子节点的值的属性
   */
  valuePropName?: string;

  /**
   * 样式
   */
  style: CSSProperties;

  /**
   * 是否隐藏
   */
  hidden?: boolean;

  /**
   * 控件只读模式下根据原始值自定义格式化数据
   * @param val
   * @returns
   */
  render?: (val: any) => any;

  /**
   * 忽略只读模式
   */
  ignoreReadOnlyFlag?: boolean;

  /**
   * 控件值主动触发回调
   * @param value
   * @returns
   */
  onValueChange?: (value: any) => void;

  /**
   * 值回调变化前格式化onChange数据
   * @param value
   * @returns
   */
  beforeValueChange?: (value: any) => any;

  /**
   * 表单触发校验Trigger
   */
  validateTrigger?: string[] | string;
  children?: any;

  /**
   * 隐藏时占位, 当visible是false时候，visibility是true 隐藏时候占位(注意，属性配置的级别最高)
   * @default false
   */
  visibility?: boolean;

  /**
   * 附加到控件classNames上
   */
  wrapperClassName?: string;
  label?: any;
  titleTip?: any;
  tipIcon?: any;
  tipLocation?: any;
  tipContent?: any;
  tipPlacement?: any;
  tipSize?: any;
  tipWidth?: any;
  tipHeight?: any;
  getEngineApis?: EngineBaseProps['getEngineApis'];

  /**
   * 当前的calssName
   */
  className: string;

  uid: string;

  /**
   * 当改变的值为undefine时默认给的值
   */
  clearValue?: any;

  maskData?: {
    isMask: boolean;
    defaultMaskValue: any;
    maskValue: any;
    getMaskData(value: any): any;
    init: boolean;
  };
}

export const getFieldsProps = (props: any): FormFieldsProps => {
  return {
    isFormRootChild: props.isFormRootChild,
    fieldName: props.fieldName,
    labelCol: props.labelCol,
    wrapperCol: props.wrapperCol,
    name: props.name,
    required: props.required,
    disabled: props.disabled,
    readOnly: props.readOnly,
    selfSpan: props.selfSpan,
    rules: props.rules,
    visible: props.visible,
    defaultValue: props.defaultValue,
    value: props.value,
    style: props.style,
    hidden: props.hidden,
    label: props.label,
    titleTip: props.titleTip,
    tipIcon: props.tipIcon,
    tipLocation: props.tipLocation,
    tipContent: props.tipContent,
    tipPlacement: props.tipPlacement,
    tipSize: props.tipSize,
    tipWidth: props.tipWidth,
    tipHeight: props.tipHeight,
    getEngineApis: props.getEngineApis,
    uid: props.$$componentItem?.uid,
    className: props.className,
    visibility: props.visibility,
  };
};

interface WrapperInputProps {
  // eslint-disable-next-line react/no-unused-prop-types
  formFieldValueChange: () => void;
  // eslint-disable-next-line react/no-unused-prop-types
  value?: any;
  // eslint-disable-next-line react/no-unused-prop-types
  trigger?: string;
  readOnly: boolean;
  wrapperClassName?: string;
  disabled: boolean;
  maskData?: FormFieldsProps['maskData'];
  [key: string]: any;
}

const WrapperInput = React.forwardRef<any, WrapperInputProps>((props, ref) => {
  const {
    trigger = 'onChange',
    valuePropName = 'value',
    formFieldValueChange,
    clearValue,
  } = props;
  const value = props[valuePropName];

  const formatArgs = (...args: any) => {
    try {
      const _args = [...args];
      if (_args.length > 0) {
        const defaultClearValue = clearValue !== undefined ? clearValue : '';
        if (_args[0] === undefined) {
          _args[0] = defaultClearValue;
        } else if (
          _args[0].target?.hasOwnProperty(valuePropName) &&
          _args[0].target?.[valuePropName] === undefined
        ) {
          _args[0].target[valuePropName] = defaultClearValue;
        }
      }
      return _args;
    } catch (error) {
      return args;
    }
  };

  useImperativeHandle(ref, () => ({
    onChange: (...args: any) => {
      // @ts-ignore
      // props.children?.props?.[trigger]?.(...args);
      if (props?.[trigger]) {
        props[trigger](...formatArgs(...args));
      }
    },
    onSyncChange: (...args: any) => {
      formFieldValueChange();
      // @ts-ignore
      // props.children?.props?.[trigger]?.(...args);
      if (props?.[trigger]) {
        props[trigger](...formatArgs(...args));
      }
    },
  }));

  if (!props.ignoreReadOnlyFlag) {
    // 控件只读模式改造
    if (props.readOnly && !props.render) {
      return renderReadOnly(value || '--');
    }
    if (props.readOnly && typeof props.render === 'function') {
      return props.render(value);
    }
  }

  return React.cloneElement(props.children as any, {
    onBlur: (...args: any) => {
      props?.onBlur?.(...args);
      // @ts-ignore
      if (props.children?.props.onBlur) {
        // @ts-ignore
        props.children?.props?.onBlur?.(...args);
      }
    },
    [valuePropName]: props.maskData?.isMask ? props.maskData.maskValue : value,
    // @ts-ignore
    className: `${props.wrapperClassName} ${
      props.children.props.className || ''
    }`,
    disabled: props.disabled,
    [trigger]: (...args: any) => {
      const _args = formatArgs(...args);
      formFieldValueChange();
      if (props?.[trigger]) {
        props?.[trigger]?.(..._args);
      }
      // @ts-ignore
      props.children?.props?.[trigger]?.(..._args);
      // 主动触发onChange
      props.onValueChange?.(..._args);
    },
  });
});

export interface FormFieldsHooks {
  changeValidateStatus(
    validateStatus: FormItemProps['validateStatus'],
    help?: string,
  ): void;
  onChange(...args: any): void;
}

export const FormFields = React.forwardRef<FormFieldsHooks, FormFieldsProps>(
  (props, ref) => {
    const {
      isFormRootChild,
      fieldName,
      name,
      labelCol,
      wrapperCol,
      selfSpan,
      trigger = 'onChange',
      style = {},
      valuePropName = 'value',
      getEngineApis,
      uid,
      className,
      visibility = false,
    } = props;
    const { useTopContainerHidden } = getEngineApis?.() || {};
    // 获取上层容器是否被隐藏
    const topHidden = useTopContainerHidden?.() || false;
    // Form.Item 主动触发渲染属性
    const [formItemValidateStatus, setFormItemValidateStatus] = useState<{
      validateStatus: FormItemProps['validateStatus'];
      help?: string;
    }>({ validateStatus: undefined });

    // 表单上下文
    const formContext = useForm();

    // 控件样式上如果被隐藏需要同步设置给Col 保证表单项隐藏
    const { display: customDisplay, visibility: customVisibility } = style;

    const { inForm } = formContext;

    useEffect(() => {
      if (
        !inForm ||
        !uid ||
        !fieldName ||
        typeof formContext.uploadChildRelation !== 'function'
      ) {
        return;
      }
      formContext.uploadChildRelation(uid, fieldName);
    }, [uid, fieldName]);

    // 当前控件输入状态
    const inputting = useRef<boolean>(false);

    // 输入控件包裹ref
    const widgetRef = useRef<any>();

    const rules = useMemo(() => {
      return props.visible ? props.rules : [];
    }, [props.rules, props.visible]);

    const formFieldValueChange = useCallback(() => {
      inputting.current = true;
    }, []);

    /**
     * 属性处理
     */
    const childProps = useMemo<{
      mode: mode;
      showWrapperContainer: boolean;
      colon: boolean;
      labelCol: any;
      wrapperCol: any;
      colSpan: number;
      wrapperStyle: CSSProperties;
    }>(() => {
      if (inForm) {
        const mode = getMode((labelCol || formContext.labelCol.span) as any);
        return {
          // 表单项排版模式
          mode,
          showWrapperContainer:
            isFormRootChild &&
            mode !== 'grid' &&
            formContext.layout === 'horizontal',
          colon: !!name && formContext.colon,
          labelCol:
            formContext.layout === 'horizontal'
              ? labelCol || formContext.labelCol.span
              : FULL_COL,
          wrapperCol:
            formContext.layout === 'horizontal'
              ? wrapperCol || formContext.wrapperCol.span
              : FULL_COL,
          colSpan: selfSpan || formContext.colSpan,
          wrapperStyle:
            wrapperCol !== 'auto' ? { width: wrapperCol } : { flex: 1 },
        };
      }
      return {} as any;
    }, []);

    const [changeColStyle, hiddenClassName] = useMemo(() => {
      const colStyle: React.CSSProperties = {};
      let hiddenClassName;
      if (customVisibility) {
        colStyle.visibility = customVisibility;
      }
      if ((customDisplay && customDisplay === 'none') || !props.visible) {
        if (visibility) {
          colStyle.visibility = 'hidden';
          // 这个ClassName是给当表单下有布局容器，布局容器下有表单组件的时候
          hiddenClassName = 'pcfactory-form-item-visibility';
          colStyle.transform = 'opacity 0.3s ease';
          colStyle.opacity = 0;
        } else {
          colStyle.display = 'none';
          // 这个ClassName是给当表单下有布局容器，布局容器下有表单组件的时候
          hiddenClassName = 'pcfactory-form-item-hidden';
        }
      }
      return [colStyle, hiddenClassName];
    }, [props.visible, customDisplay, customVisibility, visibility]);

    const initialValue = useMemo(() => {
      if (props.defaultValue !== undefined && props.value === undefined) {
        return props.defaultValue;
      }
      return props.value;
    }, []);

    const formItemLabel = useMemo(() => {
      return isFormRootChild ? (
        <TooltipView
          label={props.name}
          tipContent={props.tipContent}
          tipIcon={props.tipIcon}
          titleTip={props.titleTip}
          tipLocation={props.tipLocation}
          tipPlacement={props.tipPlacement}
          tipSize={props.tipSize}
          tipWidth={props.tipWidth}
          tipHeight={props.tipHeight}
        />
      ) : undefined;
    }, []);

    /**
     * 暴露给外部调用的钩子
     */
    useImperativeHandle<any, FormFieldsHooks>(ref, () => ({
      /**
       * 变更控件状态
       * @param validateStatus 校验控件状态
       * @param help 显示文案
       */
      changeValidateStatus(validateStatus, help) {
        setFormItemValidateStatus({
          validateStatus,
          help,
        });
      },
      onChange(...args: any) {
        if (widgetRef.current?.onSyncChange) {
          widgetRef.current?.onSyncChange(...args);
        }
      },
    }));

    useEffect(() => {
      const { onlySyncValue } = getEngineApis?.() || {};
      // 组件加载完成 默认值主动上报 只执行一次
      // 当默认值是false的时候
      if (props.defaultValue === false && props.value === undefined) {
        onlySyncValue?.(props.defaultValue);
        // 当默认值不是false其它的时候
      } else if (!!props.defaultValue && props.value === undefined) {
        // 同步值到hoc层value hoc层value变化后会触发以下逻辑上报给form表单
        onlySyncValue?.(props.defaultValue);
      }
    }, []);

    useUpdateEffect(() => {
      const { compatConfig } = getEngineApis?.() || {};

      const finalValue = props.handleFormValue
        ? props.handleFormValue(props.value)
        : props.value;
      // 控件在表单内需要更新值到form中
      if (formContext.inForm && formContext.form) {
        if (compatConfig?.isFormCompat && finalValue === undefined) {
          // 兼容模式下 finalValue为undefined时 不设置表单值
          return;
        }
        formContext.form.setFieldsValue({
          [fieldName]: finalValue,
        });
      }
      // 输入中无需调用onChange
      if (inputting.current) {
        inputting.current = false;
      } else if (widgetRef.current?.onChange) {
        if (compatConfig?.setValueTriggerOnValuesChange === true) {
          widgetRef.current?.onChange(finalValue);
        }
      }
    }, [props.value]);

    if (!inForm) {
      const valueObj = {
        [valuePropName]: props.value,
      };
      return props.visible ? (
        <WrapperInput
          trigger={trigger}
          valuePropName={valuePropName}
          formFieldValueChange={formFieldValueChange}
          ref={widgetRef}
          readOnly={props.readOnly}
          render={props.render}
          ignoreReadOnlyFlag={props.ignoreReadOnlyFlag}
          onValueChange={props.onValueChange}
          value={props.value}
          wrapperClassName={props.wrapperClassName}
          disabled={props.disabled}
          clearValue={props.clearValue}
          maskData={props.maskData}
          {...valueObj}
        >
          {props.children}
        </WrapperInput>
      ) : null;
    }

    // 表单项错误滚动使用的className
    const colClassName = getFormItemClassName(fieldName);

    // Form.Item 不同布局下差异属性
    const formItemProps: FormItemProps = childProps.showWrapperContainer
      ? {
          // 自定义label模式
          wrapperCol: { span: FULL_COL },
        }
      : {
          // 增加onStyle之后，不再校验。 这里不能设置为true，
          // noStyle: !isFormRootChild,
          labelAlign: formContext.labelAlign,
          label: formItemLabel,
          labelCol: { span: childProps.labelCol },
          wrapperCol: { span: childProps.wrapperCol },
          colon: childProps.colon,
        };
    return (
      <WrapperContainer
        name={name}
        labelAlign={formContext.labelAlign}
        colon={childProps.colon}
        labelCol={childProps.labelCol}
        wrapperStyle={childProps.wrapperStyle}
        required={props.required}
        label={formItemLabel}
        showWrapperContainer={childProps.showWrapperContainer}
        isFormRootChild={isFormRootChild}
        colProps={{
          span: childProps.colSpan,
          style: changeColStyle,
          className: colClassName,
        }}
        fieldName={fieldName}
        disabled={props.disabled}
      >
        <Form.Item
          name={fieldName}
          onReset={() => {
            const { onlySyncValue, compatConfig } = getEngineApis?.() || {};
            // 小于3.3.1 重置表单不进行更新
            if (!compatConfig?.isFormCompat) {
              onlySyncValue && onlySyncValue?.(undefined);
            }
          }}
          // 如果顶层容器隐藏，不进行校验
          rules={topHidden === true ? [] : rules}
          trigger={trigger}
          className={classNames('pcFactory-from-component', `${className}`, {
            // 用于当表单内是布局容器，布局容器内表单控件的隐藏
            [`${hiddenClassName}`]: !!hiddenClassName,
            // 当无label时，应填充整个父容器长度，不应限制在col-16
            [`${antPrefix}-form-item-noLabel`]: !formItemLabel,
          })} // 用于主题自定义样式去查找对应的元素，固定pcFactory-from-component
          valuePropName={valuePropName}
          initialValue={initialValue}
          required={props.required}
          {...formItemProps}
          validateStatus={formItemValidateStatus.validateStatus}
          help={formItemValidateStatus.help}
          validateTrigger={props.validateTrigger || 'onChange'}
        >
          <WrapperInput
            trigger={trigger}
            formFieldValueChange={formFieldValueChange}
            ref={widgetRef}
            readOnly={props.readOnly}
            render={props.render}
            ignoreReadOnlyFlag={props.ignoreReadOnlyFlag}
            onValueChange={props.onValueChange}
            wrapperClassName={props.wrapperClassName}
            disabled={props.disabled}
            valuePropName={valuePropName}
            clearValue={props.clearValue}
            maskData={props.maskData}
          >
            {props.children}
          </WrapperInput>
        </Form.Item>
      </WrapperContainer>
    );
  },
);

export default FormFields;
