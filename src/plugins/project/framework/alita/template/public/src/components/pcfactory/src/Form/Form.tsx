import React, {
  useImperativeHandle,
  Children,
  cloneElement,
  useRef,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Form as AntdForm, Row, Col } from 'antd';
import { LingxiForwardRef } from '@lingxiteam/types';
import {
  FormProvider,
  FormContextProps,
  getFormItemClassName,
  usePrintMode,
  PrintContainer,
  useDynamicData,
} from '../utils';
import type { FormLayout } from 'antd/lib/form/Form';
import WrapperForm from './WrapperForm';
import useBackgroundStyle from '../View/useBackgroundStyle';
import { useFormStatus } from './useFormStatus';
import { isEqual } from 'lodash';
import { useCreation } from '../utils/ahooks';

const EMPTY_COL = { span: 'none' }; // 避免每次都创建对象造成无用渲染
const FULL_COL = { span: 24 };

export interface FormProps {
  disabled: boolean;
  layout: FormLayout;
  colSpan: FormContextProps['colSpan'];
  labelCol: number;
  wrapperCol: number;
  colon: boolean;
  labelAlign: FormContextProps['labelAlign'];
  extendProps?: Record<string, any>;
  backgroundType?: any;
  style: React.CSSProperties;
  rowSpace: FormContextProps['rowSpace'];
  colSpace: FormContextProps['colSpace'];
  onValuesChange: (name: string, value: unknown) => void;
  formCode?: string;
  readOnly?: boolean;
  visible?: boolean;
  className?: string;
  _innerDynamicDataContainer?: boolean;
}

const useInit = (cb: () => () => void) => {
  const initialRef = useRef(true);
  const unmountRef = useRef(() => { });

  if (initialRef.current) {
    initialRef.current = false;
    unmountRef.current = cb();
  }

  useEffect(() => () => {
    if (typeof unmountRef.current === 'function') {
      unmountRef.current();
    }
  }, [unmountRef.current]);
};

export const ViewFormItem = (props: any) => {
  const {
    schemaProps,
    selfSpan,
    colSpan,
    getVisible,
    style,
    stateListener,
    isBlank,
    i,
    uid,
    child,
  } = props;

  const [, setUpdate] = useState(0);

  // FIX 直接子容器初始状态直接设置隐藏，导致监听不到变化。在组件初始化就开启监听
  useInit(() => {
    // 监听当前控件显隐状态
    const remove = stateListener(uid, 'visible', (val: any) => {
      setUpdate(Date.now());
    });
    return () => {
      remove();
    };
  });

  // useEffect(() => {
  //   // 监听当前控件显隐状态
  //   const remove = stateListener(uid, 'visible', (val: any) => {
  //     setUpdate(Date.now());
  //   });
  //   return () => {
  //     remove?.();
  //   };
  // }, []);

  const finalStyle = useMemo(() => {
    const _style = { ...style };
    if (getVisible?.(uid) === false) {
      _style.display = 'none';
    }
    return _style;
  }, [getVisible?.(uid)]);

  if (isBlank) {
    return <Col key={`blank-${i}`} span={colSpan} style={finalStyle} />;
  }
  return (
    <Col key={schemaProps['data-compid']} span={selfSpan || colSpan} style={finalStyle}>
      <AntdForm.Item wrapperCol={FULL_COL}>{child}</AntdForm.Item>
    </Col>
  );
};

type FormChildrenType = Pick<FormProps, 'colSpan' | 'rowSpace' | 'layout' | 'colSpace'> & {
  children?: React.ReactNode;
  formRef?: any;
  engineApis?: any;
}
export const FormChildren = (props: FormChildrenType) => {
  const { children, colSpan, formRef, rowSpace, layout, colSpace, engineApis } = props;

  // 兼容存量数据中，表单没有列间距的情况
  const compatColSpace = (() => {
    if (layout !== 'horizontal') {
      return (colSpace as number) ?? 16;
    }
    return colSpace as number;
  })();

  /**
   * 布局子组件
   */
  const layoutChildren = () => {
    const { getVisible, stateListener } = engineApis;
    const components: (React.ReactChild | React.ReactFragment | React.ReactPortal)[] = [];
    Children.forEach(Children.toArray(children), (child, index) => {
      if (!React.isValidElement(child)) {
        components.push(child);
        return;
      }
  
      const { schema } = child.props;
      const { compType, props: schemaProps } = schema || {};
  
      if (compType !== undefined && compType !== 2) {
        const { formItemIndex, hidden, style: childStyle, selfSpan } = schemaProps;
        const { display: customDisplay, visibility: customVisibility } = childStyle || {};
  
        const changeColStyle = () => {
          const colStyle: React.CSSProperties = {};
  
          if (hidden || (customDisplay && customDisplay === 'none')) {
            colStyle.display = 'none';
          }
  
          if (customVisibility) {
            colStyle.visibility = customVisibility;
          }
  
          return colStyle;
        };
  
        // 中间间隔组件的个数
        const gap = formItemIndex - index || 0;
        new Array(gap).fill(0).forEach((_, i) => {
          components.push(
            <ViewFormItem
              i={i}
              key={`blank-${i}`}
              style={changeColStyle()}
              colSpan={colSpan}
              getVisible={getVisible}
              stateListener={stateListener}
              isBlank
              // child.props.$$componentItem.uid 兼容高代码模式下
              uid={child.props.uid || child.props.$$componentItem.uid}
            />,
          );
        });
  
        components.push(
          <ViewFormItem
            style={changeColStyle()}
            schemaProps={schemaProps}
            selfSpan={selfSpan}
            colSpan={colSpan}
            getVisible={getVisible}
            stateListener={stateListener}
            // child.props.$$componentItem.uid 兼容高代码模式下
            uid={child.props.uid || child.props.$$componentItem.uid}
            child={child}
            key={child.key}
          />,
        );
        return;
      }
  
      components.push(cloneElement(child, { extendProps: { isFormRootChild: true } } as any));
    });
  
    return components;
  };

  return (
    <Row
      ref={formRef}
      className={Number(rowSpace) < 14 ? 'form-tips' : undefined}
      gutter={[compatColSpace, rowSpace as number]}
    >
      {layoutChildren()}
    </Row>
  );
};

const Form = LingxiForwardRef<any, FormProps>((props, ref) => {
  const {
    layout,
    colSpan,
    colon,
    labelAlign,
    extendProps,
    backgroundType,
    getEngineApis,
    rowSpace,
    colSpace,
    formCode,
    onValuesChange,
    $$componentItem,
    visible = true,
    className,
  } = props;

  const formChildRelation = useRef({});
  const patchSetFormsValueFn = useRef<Record<string, any>>({}).current;

  const [form] = AntdForm.useForm();
  const engineApis = getEngineApis();
  const formRef = useRef<HTMLDivElement>(null);
  const dynamicContext = useDynamicData() || {};

  const { showPrintContainer, loadPrint, selectorKey } = usePrintMode(props.$$componentItem.uid);

  // 保存值变化回调，
  const valueChangeFnRef = useRef<(changedValues: any, values: any) => void>();

  const { backgroundStyle } = useBackgroundStyle({ engineApis, backgroundType, mode: 'engine' });

  const { run, addListener, removeListener, status } = useFormStatus({
    disabled: props.disabled,
    readonly: props.readOnly,
  });


  // 由于需要考虑loop等组件，可能存在多个相同的字段名，自行研发
  const scrollToError = (errorInfo: any) => {
    try {
      const { errorFields = [] } = errorInfo ?? {};
      if (errorFields?.length > 0) {
        const errorFieldsName = errorFields[0].name;
        // 表单项错误滚动使用的className
        const className = getFormItemClassName(errorFieldsName);
        const rowDOM = formRef.current;
        const dom = rowDOM?.querySelector(`.${className}`);
        dom?.scrollIntoView({ behavior: 'smooth' });
      }
    } catch (error) {
      //
    }
  };

  const uploadChildRelation = (id: string, fileProps: string) => {
    if (id && fileProps) {
      // @ts-ignore
      formChildRelation.current[fileProps] = id;
    }
  };

  /**
   * 保存表单值预处理表单值的方法
   */
  const preproccessSetFormValues = (fileProps: string, fn: (value: any) => any) => {
    if (fileProps) {
      patchSetFormsValueFn[fileProps] = fn;
    }
  };

  /**
   * 需要上传给动态数据容器的表单方法
   */

  const formRefHandler = useCreation(() => ({

    /**
     * 校验并滚动到某字段
     */
    validateFormAndScroll: (errScroll: boolean = true) => {
      return form.validateFields().catch(errorInfo => {
        if (errScroll) {
          scrollToError(errorInfo);
        }
        throw errorInfo;
      });
    },

    /**
     * 滚动到错误的位置
     */
    scrollToErrorField: (errorInfo: any) => {
      scrollToError(errorInfo);
    },

    /**
     * 获取表单值
     */
    getFieldsValue: () => {
      return form.getFieldsValue();
    },

    /**
     * 设置表单值
     * @param values
     * @param refs 低代码平台引擎内所有的refs，其他平台不要使用
     */
    setFieldsValue(values: any, refs: Record<string, any>) {
      const target: any = {};
      const relation: any = formChildRelation.current;
      Object.keys(values).forEach(key => {
        target[key] = values[key];
        if (typeof patchSetFormsValueFn[key] === 'function') {
          target[key] = patchSetFormsValueFn[key](target[key]);
        }
        if (refs && relation) {
          const relation = formChildRelation.current;
          // @ts-ignore
          const comId = relation?.[key];
          if (comId) {
            refs?.[comId]?.onlySyncValue(target[key]);
          }
        }
        if (!isEqual(form.getFieldValue(key), target[key]) && typeof onValuesChange === 'function') {
          if (engineApis?.compatConfig.cmd.setFieldsValueToOnValuesChange === true) {
            onValuesChange(key, target[key]);
          }
        }
      });
      
      form.setFieldsValue(target);
    },

    /**
     * 重置表单值
     */
    resetFields() {
      form.resetFields();
    },

    // 设置禁用状态
    setDisabled: (v: boolean | 'toggle') => {
      run('disabled', v === 'toggle' ? !status.disabled : v);
    },
    // 设置只读状态
    setReadOnly: (v: boolean | 'toggle') => {
      run('readonly', v === 'toggle' ? !status.readonly : v);
    },
    scrollToError,
    // 作为ref标志，表示form已经被渲染了
    has: true,
    form,
  }), [status]);

  /**
   * 动态数据容器ref上报
   */
  if (dynamicContext._innerDynamicDataContainer) {
    dynamicContext.updateFormChildRef(formCode!, formRefHandler);
  }

  useImperativeHandle(ref, () => ({
    formCode: formCode || $$componentItem?.id,
    ...formRefHandler,
    get disabled() {
      return status.disabled ?? false;
    },
    get readOnly() {
      return status.readonly ?? false;
    },
    // 监听值变化回调
    listenerOnValueChange: (fn: (changedValues: any, values: any) => void) => {
      // 主要用来做BOFramer业务组件值变化回调，如果修改数据，请记得
      valueChangeFnRef.current = fn;
    },

    /**
     * 获取子组件的字段和表单项id的映射关系
     * @returns
     */
    getChildRelation: () => formChildRelation.current,
    
    /**
     * 打印模式钩子
     */
    loadPrint,

    /**
     * 是否在动态数据容器内
     */
    get _innerDynamicDataContainer() {
      return dynamicContext._innerDynamicDataContainer;
    },
  }));

  // 转化成antd接收的数据
  const labelCol = useMemo(() => ({ span: props.labelCol }), [props.labelCol]);
  const wrapperCol = useMemo(() => ({ span: props.wrapperCol }), [props.wrapperCol]);

  const providerValue: FormContextProps = useMemo(
    () => ({
      form,
      inForm: true,
      layout,
      colSpan,
      labelCol,
      wrapperCol,
      colon,
      labelAlign,
      rowSpace,
      statusMonitor: {
        addListener,
        removeListener,
      },
      uploadChildRelation,
      preproccessSetFormValues,
      colSpace,
    }),
    [form, layout, colSpan, labelCol, wrapperCol, colon, labelAlign, addListener, removeListener],
  );

  const formStyle: React.CSSProperties = {
    ...backgroundStyle,
    ...props.style,
  };

  if (!visible) {
    formStyle.display = 'none';
  }

  return (
    <>
      <FormProvider value={providerValue}>
        <WrapperForm>
          <AntdForm
            className={className}
            form={form}
            layout={layout}
            labelCol={layout === 'horizontal' ? labelCol : EMPTY_COL}
            wrapperCol={layout === 'horizontal' ? wrapperCol : EMPTY_COL}
            style={formStyle}
            onValuesChange={(changedValues, values) => {
              const keys = Object.keys(changedValues || {});
              if (typeof onValuesChange === 'function') {
                if (keys.length > 0) {
                  const name = keys[0];
                  onValuesChange(name, changedValues[name]);
                }
              }
              if (valueChangeFnRef.current) {
                valueChangeFnRef.current(changedValues, values);
              }
              if (dynamicContext._innerDynamicDataContainer) {
                if (keys.length > 0) {
                  const name = keys[0];
                  dynamicContext.onFormChange(formCode!, name, changedValues[name]);
                }
              }
            }}
            {...extendProps}
            // @ts-ignore
            data-compid={props['data-compid']}
            name={formCode}
          >
            <FormChildren formRef={formRef} {...props} engineApis={engineApis}>
              {props.children}
            </FormChildren>
          </AntdForm>
        </WrapperForm>
      </FormProvider>
      {showPrintContainer && (
        <PrintContainer containerProps={{ ...selectorKey }}>
          <FormProvider
            value={
              {
                ...providerValue,
                layout,
                colSpan,
                labelCol,
                wrapperCol,
                colon,
                labelAlign,
                printMode: true,
                inForm: true,
              } as any
            }
          >
            <WrapperForm>
              <AntdForm
                className={className}
                form={form}
                layout={layout}
                labelCol={layout === 'horizontal' ? labelCol : EMPTY_COL}
                wrapperCol={layout === 'horizontal' ? wrapperCol : EMPTY_COL}
                style={formStyle}
                {...extendProps}
              >
                <FormChildren formRef={formRef} {...props} engineApis={engineApis}>
                  {props.children}
                </FormChildren>
              </AntdForm>
            </WrapperForm>
          </FormProvider>
        </PrintContainer>
      )}
    </>
  );
});

Form.defaultProps = {
  extendProps: {},
  style: {},
  rowSpace: 16,
};

export default Form;
