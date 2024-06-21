import React, { useCallback, useRef, useState } from 'react';
import { getRules, ruesEcute } from '../../utils';
import './index.less';

interface BasicTextAreaProps
  extends Omit<
    React.DetailedHTMLProps<
      React.TextareaHTMLAttributes<HTMLTextAreaElement>,
      HTMLTextAreaElement
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

const prefixCls = 'lcdp-textarea';
const BasicTextArea = React.forwardRef<any, BasicTextAreaProps>(
  (props, ref) => {
    const {
      value,
      onChange,
      style,
      disabled,
      rules,
      onKeyDown,
      onBlur,
      maxLength,
      regexp,
      title,
      readOnly,
      required,
      visible,
      placeholder,
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
    React.useImperativeHandle(ref, () => ({
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
        <textarea
          readOnly={readOnly}
          placeholder={placeholder}
          maxLength={maxLength}
          autoComplete="off"
          style={style}
          disabled={disabled}
          // 回车事件
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
          onChange={(e) => {
            const v = e.currentTarget.value;
            if (onChange) {
              onChange(v);
            }
          }}
          className={prefixCls}
          value={readOnly && !value ? '--' : value || ''}
          ref={curRef}
        />
        {errMessage && (
          <div style={style} className={`${prefixCls}-error-text`}>
            {errMessage}
          </div>
        )}
      </>
    );
  },
);

export default BasicTextArea;
