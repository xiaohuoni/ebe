import { LingxiForwardRef } from '@lingxiteam/types';
import classnames from 'classnames';
import React, {
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { getRules, ruesEcute } from '../../utils';
import './index.less';

interface BasicInputProps
  extends Omit<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    'onChange'
  > {
  onChange?: (val: any) => void;
  onBlur?: (val?: any) => void;
  onKeyDown?: (val?: any) => void;
  visible?: boolean;
  rules?: any; // 如果在表单行容器中，会传入
  regexp?: any[];
}

const prefixCls = 'lcdp-input';

const BasicInput = LingxiForwardRef<any, BasicInputProps>((props, ref) => {
  // eslint-disable-next-line max-len
  const {
    value,
    onChange,
    style,
    rules,
    disabled,
    type,
    onKeyDown,
    onBlur,
    maxLength,
    regexp,
    title,
    readOnly,
    required,
    visible,
    placeholder,
    className,
  } = props;
  const [errMessage, setErrMessage] = useState('');
  const curRef = useRef(null);
  const getAppRules = useCallback(() => {
    const finalRules = getRules({
      required,
      message: placeholder,
      regexp,
    });
    if (Array.isArray(rules)) {
      finalRules.push(...rules);
    }
    return finalRules as any;
  }, [regexp, required, title, rules]);
  const useErrorMessage = () => {
    if (readOnly || disabled) return;
    const errMessage = ruesEcute(getAppRules(), value);
    setErrMessage(errMessage);
  };
  useImperativeHandle(ref, () => ({
    clearValue() {
      onChange && onChange('');
    },
    focus() {
      if (curRef) {
        (curRef as any)?.current.focus();
      }
    },
    blur() {
      if (curRef) {
        (curRef as any)?.current.blur();
      }
    },
  }));
  if (!visible) {
    return <></>;
  }

  return (
    <>
      <input
        title={title}
        required={required}
        placeholder={placeholder}
        autoComplete="off"
        maxLength={maxLength}
        readOnly={readOnly}
        disabled={disabled}
        ref={curRef}
        value={readOnly && !value ? '--' : value || ''}
        className={classnames(prefixCls, className)}
        style={style}
        // number类型自己手动处理
        // eslint-disable-next-line react/jsx-props-no-multi-spaces
        type={type === 'number' && props.rules ? undefined : type}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            if (onKeyDown) {
              onKeyDown(e.currentTarget.value);
            }
            const inputDOM: HTMLInputElement = curRef.current!;
            if (inputDOM) {
              inputDOM.blur();
            }
            useErrorMessage();
          }
        }}
        onBlur={(e) => {
          const v = e.currentTarget.value;
          if (onBlur) {
            onBlur(v);
          }
          useErrorMessage();
        }}
        onInput={(e) => {
          if (type === 'number') {
            e.currentTarget.value = e.currentTarget.value.replace(/[^\d]/g, '');
          }
        }}
        onChange={(e) => {
          const v = e.currentTarget.value;
          if (onChange) {
            onChange(v);
          }
        }}
      />
      {errMessage && (
        <div style={style} className={`${prefixCls}-error-text`}>
          {errMessage}
        </div>
      )}
    </>
  );
});

export default BasicInput;
