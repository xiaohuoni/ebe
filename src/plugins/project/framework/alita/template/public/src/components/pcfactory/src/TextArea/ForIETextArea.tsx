import { debounce } from 'lodash';
import React, { useEffect, useState } from 'react';
import { antPrefix } from '../variables';

const isIE = !!((window as any).ActiveXObject || 'ActiveXObject' in window);

const ForIETextArea = (props: any) => {
  // 由于不是很明白的原因，TextArea在经过React cloneELement劫持事件后，会导致在IE浏览器下的特定中文输入法异常
  // 异常形式是，只要在JSX层面上传onChange/onInput事件进去，IE那边就会导致输入法输入乱飞
  // 改用原生的事件代替
  const { value, className, onChange, onInput, allowClear, ...restProps } =
    props;
  const tRef = React.useRef<any>();
  const subRef = React.useRef<any>({ now_value: '' });
  const [compValue, setCompValue] = useState<any>();

  const dSet = React.useCallback(
    debounce((_value) => {
      setCompValue(_value);
    }, 100),
    [],
  );

  useEffect(() => {
    if (value !== undefined) {
      if (!subRef.current.imeFlag) {
        dSet(value);
      }
    }
  }, [value]);

  useEffect(() => {
    // TODO 还原Antd的“清理按钮”
    if (allowClear) {
      // x
    }
  }, [compValue]);

  useEffect(() => {
    if (!tRef.current) {
      return undefined;
    }
    const tdom = tRef.current;
    const inputF = (e: any) => {
      // IE下，当textarea有placeholder时，在页面加载完毕后会莫名其妙地主动触发一次input，用这种方法过滤这个“第一次”事件
      if (isIE && restProps.placeholder && !subRef.current.firstTime) {
        subRef.current.firstTime = true;
        return;
      }
      setCompValue(e.target.value);
      subRef.current.last_value = e.target.value;
      if (!subRef.current.imeFlag) {
        subRef.current.last_value = '';
        if (onChange) {
          onChange(e);
        }
      }
      if (onInput) {
        onInput(e);
      }
    };
    tdom.addEventListener('input', inputF);
    tdom.addEventListener('compositionstart', () => {
      subRef.current.imeFlag = true;
    });
    tdom.addEventListener('compositionend', () => {
      if (subRef.current.imeFlag && subRef.current.last_value) {
        if (onChange) {
          onChange({
            target: { value: subRef.current.last_value },
          });
        }
      }
      subRef.current.last_value = '';
      subRef.current.imeFlag = false;
    });

    return () => {
      if (tRef?.current) {
        tdom.removeEventListener('input', inputF);
      }
    };
  }, []);
  // eslint-disable-next-line react/no-unknown-property
  return (
    <textarea
      resize="vertical"
      className={`${antPrefix}-input ${className}`}
      value={compValue}
      ref={tRef}
      {...restProps}
    />
  );
};

export default ForIETextArea;
