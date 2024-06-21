import React, { forwardRef, useEffect, useMemo } from 'react';
import { useDummyFormContext } from './DummyFormContext';
import renderReadOnly from './renderReadOnly';

export interface SyncValueProps {
  onValueRelease?: (value: any) => void;
  value?: any;
  compId?: string;
  getCompPropMapState?: (value: any, str: string) => any;
  onSelectedDataRelease?: (value: []) => any;
  className?: string;
  onChange?: React.FormEventHandler;
  onBlur?: React.FocusEventHandler;
  children: React.ReactElement;
  readOnly?: boolean;
  render?: (data: any) => any;
  isMask?: any;
  dataMaskUtil?: any;
  // dataMaskInit?: Function;
  ignoreReadOnlyFlag?: boolean;
}

// 该方法移出SyncValue，避免实际运行时创建过多闭包
const equalsObj = (oldData: any, newData: any) => {
  // 如果其中一边的运算数是undefined，那么不要去跑原型处理等后续方法，可能提高些许性能
  if (oldData === undefined || newData === undefined)
    return oldData === newData;
  // 类型为基本类型时,如果相同,则返回true
  if (oldData === newData) return true;
  if (
    Object.prototype.toString.call(oldData) === '[object Object]' &&
    Object.prototype.toString.call(newData) === '[object Object]' &&
    Object.entries(oldData).toString() === Object.entries(newData).toString()
  ) {
    return false;
  }
  if (
    Object.prototype.toString.call(oldData) === '[object Array]' &&
    Object.prototype.toString.call(newData) === '[object Array]' &&
    oldData.length === newData.length
  ) {
    // 类型为数组并且数组长度相同
    for (let i = 0, { length } = oldData; i < length; i += 1) {
      if (!equalsObj(oldData[i], newData[i])) {
        // 如果数组元素中具有不相同元素,返回false
        return false;
      }
    }
  } else {
    // 其它类型,均返回false
    return false;
  }
  return true;
};

const SyncValue = forwardRef((props: SyncValueProps) => {
  const {
    onValueRelease,
    value = undefined,
    compId,
    getCompPropMapState,
    onSelectedDataRelease,
    className,
    readOnly,
    render,
    isMask,
    dataMaskUtil,
  } = props;

  const form = useDummyFormContext();
  const fieldName = useMemo(() => {
    if (!form?.fieldCompIdMap) return '';
    return (Object.values(form?.fieldCompIdMap || {}) as any).find(
      (o: any) => o.compId === compId,
    )?.fieldName;
  }, [compId]);
  const defaultValue = useMemo(() => {
    if (!form?.defaultArr) return '';
    return (form?.defaultArr || ([] as any)).find(
      (o: any) => o.compId === compId,
    )?.value;
  }, [compId]);

  useEffect(() => {
    if (form?.enableValidateField && fieldName) {
      form?.enableValidateField(fieldName);
    }
    return () => {
      // 组件被隐藏时WithSyncValue会被卸载，移除他的校验定义
      if (form?.removeValidateField && fieldName) {
        form?.removeValidateField(fieldName);
      }
    };
  }, []);
  let finalvalue = form?.nowFormData ? form?.nowFormData[fieldName] : value;
  if (
    form?.nowFormData &&
    form.nowFormData[fieldName] === undefined &&
    fieldName &&
    defaultValue &&
    !form.defaultInited[fieldName]
  ) {
    // 在这里触发默认值行为，原则上这个操作只应该发生一次
    form.defaultInited[fieldName] = true;
    form.setFieldsValue({
      [fieldName]: defaultValue,
    });
  }
  const finalMask = form?.dataMaskInst?.[fieldName] ?? isMask?.current;
  if (finalMask && dataMaskUtil) {
    // 脱敏值
    finalvalue = dataMaskUtil.processDataMaskValue(finalvalue, finalMask);
  }
  // 把null值在此处拦截，下放到组件的值不能有null。因为null可能导致部分组件误动作，如Select会把null视为有效值，出现空选项。
  if (finalvalue === null) {
    finalvalue = undefined;
  }
  useEffect(() => {
    // useEffect 无法正确判断数组与对象是否有变化，故造成死循环
    // 判断now_value 值与当前传入值是否相同，同则不触发onValueRelease
    const _value = finalvalue;
    if (
      Object.prototype.toString.call(getCompPropMapState) ===
      '[object Function]'
    ) {
      if (
        !equalsObj(getCompPropMapState!(compId, 'now_value'), _value) &&
        onValueRelease
      ) {
        if (_value === '') {
          onValueRelease(undefined);
        } else {
          onValueRelease(_value);
        }
      }
      if (
        !equalsObj(getCompPropMapState!(compId, 'now_selectedData'), _value) &&
        onSelectedDataRelease
      ) {
        if (_value === '' || _value === undefined) {
          onSelectedDataRelease([]);
        }
      }
    }
  }, [finalvalue]);
  const collectAction: React.AllHTMLAttributes<Element> = {
    value: finalvalue,
  };

  collectAction.onChange = React.useMemo(() => {
    if (!props.onChange) {
      return undefined;
    }
    return (...e) => {
      props.onChange!(...e);
      if (props.children.props.onChange) {
        props.children.props.onChange(...e);
      }
    };
  }, [props.onChange]);

  collectAction.onBlur = React.useMemo(() => {
    if (!props.onBlur) {
      return undefined;
    }
    return (...e) => {
      props.onBlur!(...e);
      if (props.children.props.onBlur) {
        props.children.props.onBlur(...e);
      }
    };
  }, [props.onBlur]);

  if (!collectAction.onChange) {
    delete collectAction.onChange;
  }

  if (!collectAction.onBlur) {
    delete collectAction.onBlur;
  }

  if (className) {
    collectAction.className = `${className} ${
      props?.children?.props.className || ''
    }`;
  }

  if (!props.ignoreReadOnlyFlag) {
    // 控件只读模式改造
    if (readOnly && !render) {
      return renderReadOnly(finalvalue || '--');
    }
    if (readOnly && typeof render === 'function') {
      return render(finalvalue);
    }
  }

  // 兼容Rate控件值修改
  if (
    props.compId?.includes('Rate') &&
    Array.isArray(props.children.props.children)
  ) {
    let propsChange: any = null;
    for (let i = 0; i < props.children.props.children.length; i += 1) {
      const item = props.children.props.children[i];
      if (item.props?.onChange) {
        propsChange = item;
        break;
      }
    }
    return propsChange ? React.cloneElement(propsChange, collectAction) : null;
  }
  return props.children
    ? React.cloneElement(props.children, collectAction)
    : null;
});

export default SyncValue;
