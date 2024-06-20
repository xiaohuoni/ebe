import type {
  IDynamicFormProps,
  Store,
  ValidateErrorEntity,
} from '@lingxiteam/dform';
import DynamicForm from '@lingxiteam/dform';
import { LingxiForwardRef } from '@lingxiteam/types';
import { useDebounceFn } from 'ahooks';
import { merge } from 'lodash';
import React, {
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useCreation, useDeepCompareEffect } from '../utils/ahooks';
import { useDynamicData } from '../utils/dynamicUtils/DynamicContext';
import { DFormContext } from '../utils/form';
import { useListenToggleBoolean } from '../utils/hooks/useToggleBoolean';
import { withTransformProps } from '../utils/withTransformProps';
import useStyle from '../View/useStyle';
import './index.less';
import transformProps from './transformProps';
import { useDForm } from './useDForm';
import { useFormStatus } from './useFormStatus';

export interface MyDFormProps
  extends Omit<IDynamicFormProps, 'onValuesChange'> {
  formWrapperProps: any;
  version: string;
  style: React.CSSProperties;
  visible: boolean;
  isFormList?: boolean;
  formCode?: string;
  onValuesChange?: (value: any, allValues: any) => void;
  hiddenBorder?: '0' | '1';
  BOFramerOnValuesChange: (value: any, values: any) => void;
  src?: string;
  fileCode?: string;
  backgroundType: any;
  relationDataSource?: any;
  className: string;
  readOnly: boolean;
  _innerDynamicDataContainer?: boolean;
}

const DForm = LingxiForwardRef<any, MyDFormProps>((props, ref) => {
  const {
    onFinish,
    onFinishFailed,
    formWrapperProps = {},
    version = '1.0',
    style,
    visible = true,
    allDisabled: temAllDisabled = false,
    relationDataSource,
    formCode,
    hiddenBorder,
    itemHasStar = true,
    src,
    fileCode,
    backgroundType = {},
    className,
    getEngineApis,
    readOnly = false,
    _innerDynamicDataContainer,
    ...restProps
  } = props;
  // 保存值变化回调，
  const valueChangeFnRef = useRef<(changedValues: any, values: any) => void>();

  const dynamicContext = useDynamicData() || {};

  const { getAppFileUrlByFileCode, compatConfig } = getEngineApis();

  // 3.3.1 之后不使用
  const [allDisabled, setAllDisabled] = useListenToggleBoolean(temAllDisabled);

  const { run, addListener, removeListener, status } = useFormStatus({
    disabled: allDisabled,
    readonly: readOnly,
  });

  const lineStyle = useMemo(() => {
    if (hiddenBorder === '1') {
      return {
        display: 'none',
      };
    }
    return {};
  }, [hiddenBorder]);

  const formValuesChange = (values: any, formValues: any) => {
    if (props.onValuesChange) props.onValuesChange(values, formValues || {});
    if (props.BOFramerOnValuesChange) {
      // 业务组件如果存在表单值回调
      props.BOFramerOnValuesChange(values, formValues || {});
    }
    if (valueChangeFnRef.current) {
      valueChangeFnRef.current(values, form.getFieldsValue());
    }
  };
  const { run: DebounceFnRun } = useDebounceFn(
    (values: any, formValues: any) => {
      formValuesChange(values, formValues);
      // 上传一下动态数据里表单数据值改变方法
      if (dynamicContext._innerDynamicDataContainer) {
        const keys = Object.keys(values || {});
        if (keys.length > 0) {
          const name = keys[0];
          dynamicContext.onFormChange(formCode!, name, values[name]);
        }
      }
    },
    {
      wait: 20,
    },
  );
  const {
    form,
    submitTypeRef,
    formListRef,
    resultFunRef,
    formCodeFunRef,
    errorValues,
    formList,
    setErrorValues,
    uploadChildRelation,
    formChildRelation,
  } = useDForm();
  const [imgSrc, setImgSrc] = useState();
  // 暂时去掉，看项目的兼容性
  useDeepCompareEffect(() => {
    // 331之后不再支持绑定属性
    if (!compatConfig.dfromAllDisabled) {
      return;
    }

    if (typeof relationDataSource === 'object') {
      // 以前的旧版本，会监听表单绑定的数据源，理论上不应该，都是由组件内部绑定的时候设置值，导致组件会刷新两次
      if (Object.keys(relationDataSource).length === 0) {
        form.setFieldsValue(relationDataSource);
      } else {
        const currenValues = form.getFieldsValue();
        const merageValue = merge(currenValues, relationDataSource);
        form.setFieldsValue(merageValue);
      }
    }
  }, [relationDataSource, compatConfig.dfromAllDisabled]);

  /**
   * 需要上传给动态数据容器的表单方法
   */
  const formRefHandler = useCreation(
    () => ({
      // 设置禁用状态
      setDisabled: (v: boolean | 'toggle') => {
        run('disabled', v === 'toggle' ? !status.disabled : v);
      },
      // 设置只读状态
      setReadOnly: (v: boolean | 'toggle') => {
        run('readonly', v === 'toggle' ? !status.readonly : v);
      },
      resetFields: () => {
        const values = form.getFieldsValue();
        const obj: any = {};
        Object.keys(values).forEach((key) => {
          obj[key] = undefined;
        });
        form.setFieldsValue(obj);
      },
      setFieldsValue: form.setFieldsValue,

      /**
       * 校验并滚动到某字段
       */
      validateFormAndScroll: () => {
        return form.validateFields().catch((errorInfo: any) => {
          throw errorInfo;
        });
      },
      getFieldsValue: async (
        onSuccess: () => void,
        onFail: () => void,
        isFormList = false,
      ) => {
        if (typeof onSuccess === 'function') {
          resultFunRef.current.onSuccess = onSuccess;
        }
        if (typeof onFail === 'function') {
          resultFunRef.current.onFail = onFail;
        }
        submitTypeRef.current = '0';
        if (formListRef.current && !isFormList) {
          const actions = Object.keys(formListRef.current || {}).map((key) =>
            // @ts-ignore
            formListRef.current[key].childFormGetFieldsValue(),
          );
          const formData = await Promise.all(actions);
          formData.forEach((data: any) => {
            Object.assign(formList, data);
          });
        }
        const values = form.getFieldsValue();
        Object.assign(values, formList);
        resultFunRef.current.onSuccess(values);
        return values;
      },
      form,
    }),
    [status],
  );

  /**
   * 动态数据容器ref上报
   */
  if (dynamicContext._innerDynamicDataContainer) {
    dynamicContext.updateFormChildRef(formCode!, formRefHandler);
  }

  useImperativeHandle(ref, () => ({
    isFormList: props.isFormList,
    version,
    submit: async (
      onSuccess: () => void,
      onFail: () => void,
      isFormList = false,
    ) => {
      if (typeof onSuccess === 'function') {
        resultFunRef.current.onSuccess = onSuccess;
      }
      if (typeof onFail === 'function') {
        resultFunRef.current.onFail = onFail;
      }
      submitTypeRef.current = '0';
      if (formListRef.current && !isFormList) {
        const actions = Object.keys(formListRef.current || {}).map((key) =>
          // @ts-ignore
          formListRef.current[key].childFormSubmit(),
        );
        const formData = await Promise.all(actions);
        formData.forEach((data: any) => {
          Object.assign(formList, data);
        });
      }
      form.submit();
    },
    getChildRelation: () => formChildRelation.current,
    submitByCode: async (
      onSuccess: () => void,
      onFail: () => void,
      isFormList = false,
    ) => {
      formCodeFunRef.current.onSuccess = onSuccess;
      formCodeFunRef.current.onFail = onFail;
      submitTypeRef.current = '1';
      if (formListRef.current && !isFormList) {
        const actions = Object.keys(formListRef.current || {}).map((key) =>
          // @ts-ignore
          formListRef.current[key].childFormSubmit(),
        );
        const formData = await Promise.all(actions);
        formData.forEach((data: any) => {
          Object.assign(formList, data);
        });
      }
      form.submit();
    },
    getFieldsValueByCode: async (
      onSuccess: () => void,
      onFail: () => void,
      isFormList = false,
    ) => {
      if (typeof onSuccess === 'function') {
        formCodeFunRef.current.onSuccess = onSuccess;
      }
      if (typeof onFail === 'function') {
        formCodeFunRef.current.onFail = onFail;
      }
      submitTypeRef.current = '1';
      if (formListRef.current && !isFormList) {
        const actions = Object.keys(formListRef.current || {}).map((key) =>
          // @ts-ignore
          formListRef.current[key].childFormGetFieldsValue(),
        );
        const formData = await Promise.all(actions);
        formData.forEach((data: any) => {
          Object.assign(formList, data);
        });
      }
      const values = form.getFieldsValue();
      Object.assign(values, formList);
      onFormCodeFinish(values);
    },
    ...formRefHandler,

    /**
     * 监听值变化回调，目前只有零代码使用
     * @param fn
     */
    listenerOnValueChange: (fn: (changedValues: any, values: any) => void) => {
      // 主要用来做BOFramer业务组件值变化回调，如果修改数据，请记得
      valueChangeFnRef.current = fn;
    },
    formCode: props.formCode,
    getStatus: () => status.disabled ?? false,
    // 设置禁用状态
    setDisabled: (v: boolean | 'toggle') => {
      if (compatConfig.dfromAllDisabled) {
        setAllDisabled(v === 'toggle' ? !status.disabled : v);
      } else {
        run('disabled', v === 'toggle' ? !status.disabled : v);
      }
      // setTimeout(() => {
      //   run('disabled', v === 'toggle' ? !status.disabled : v);
      // }, 100);
    },
    get disabled() {
      return status.disabled ?? false;
    },
    get readOnly() {
      return status.readonly ?? false;
    },

    /**
     * 是否在动态数据容器内
     */
    get _innerDynamicDataContainer() {
      return dynamicContext._innerDynamicDataContainer;
    },
  }));

  /**
   * 通过 onFinishFailed 的方法
   */
  const getAllError = (errorInfo: any) => {
    const { errorFields = [] } = errorInfo;
    const errorObj: any = {};
    errorFields.forEach((item: { name: string[]; errors: any[] }) => {
      const [key] = item.name;
      const [err] = item.errors;
      errorObj[key] = err;
    });
    return errorObj;
  };

  /**
   * 重置错误信息提示
   */
  const resetErrorField = (errorValue: {}, values: {}) => {
    const errorObj: any = { ...errorValue };
    const key = Object.keys(values)[0];
    if (errorObj[key]) {
      errorObj[key] = undefined;
      return { success: true, errorObj };
    }
    return { success: false };
  };

  const onFormCodeFinish = (values: {}) => {
    let codeValues = values || {};
    if (props.formCode) {
      codeValues = {
        [props.formCode]: values,
      };
    }
    formCodeFunRef.current.onSuccess(codeValues);
  };

  const onFormFinish = (values: Store) => {
    Object.assign(values, formList);
    if (submitTypeRef.current === '1') {
      onFormCodeFinish(values);
    } else {
      resultFunRef.current.onSuccess(values);
    }
    if (onFinish) {
      onFinish(values);
    }
  };

  const onFormFinishFailed = (errs: ValidateErrorEntity<any>) => {
    setErrorValues(getAllError(errs));
    resultFunRef.current.onFail(errs);
    formCodeFunRef.current.onFail(errs);
    if (onFinishFailed) {
      onFinishFailed(errs);
    }
  };
  useEffect(() => {
    if (backgroundType.image || fileCode) {
      // @ts-ignore
      setImgSrc(getAppFileUrlByFileCode(backgroundType.image || fileCode));
    }
  }, [backgroundType, src, fileCode]);

  const viewRef = useRef<HTMLDivElement>();
  const restStyle = useStyle(
    {
      ...props,
      src: imgSrc,
    },
    viewRef,
  );
  const MyDForm = DynamicForm as any;
  return visible ? (
    <DFormContext.Provider
      value={{
        isForm: true,
        error: errorValues,
        // @ts-ignore
        form,
        formListRef,
        allDisabled,
        // allDisabled: disabled,
        visible,
        uploadChildRelation,
        statusMonitor: {
          removeListener,
          addListener,
        },
      }}
    >
      <div
        style={{ ...restStyle, ...style }}
        {...formWrapperProps}
        className={`dynamic-form-wrapper ${className}`}
      >
        <MyDForm
          {...restProps}
          itemHasStar={itemHasStar}
          lineStyle={lineStyle}
          onValuesChange={(values: any) => {
            const { success = false, errorObj } = resetErrorField(
              errorValues,
              values,
            );
            if (success) setErrorValues(errorObj);
            DebounceFnRun(values, form.getFieldsValue());
          }}
          onFinish={onFormFinish}
          onFinishFailed={onFormFinishFailed}
          form={form}
        />
      </div>
    </DFormContext.Provider>
  ) : null;
});

DForm.displayName = 'DForm';

export default withTransformProps(DForm, transformProps);
