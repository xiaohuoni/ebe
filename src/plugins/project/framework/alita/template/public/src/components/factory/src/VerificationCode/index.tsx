import DynamicForm from '@lingxiteam/dform';
import Field from '@lingxiteam/dform/es/components/Field';
import { LingxiForwardRef } from '@lingxiteam/types';
import {
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import useAsyncState from '../utils/hooks/useAsyncState';
import { useFormItem } from '../utils/hooks/useFormItem';
import IconPlaceholder from './assets/placeholder.png';
import './index.less';

const { Context } = DynamicForm;
export interface MyVerificationCodeProps {
  defaultValue: any;
  titleShow?: boolean;
  title: string;
  placeholderText?: string;
  titlePosition?: string;
  displayStyle?: string;
  imageURL?: string;
  countdownTime?: number;
  style?: any;
  onChange?: any;
  onClick?: any;
  fieldProps?: any;
  startCountdown?: any;
  resetCountdown?: any;
  visible: boolean;
  digit?: number;
  formItemInstance: ReturnType<typeof useFormItem>;
  onBlur: (e: any) => void;
  readOnly: boolean;
  required: boolean;
}

const prefixCls = 'verificationCode';

const VerificationCode = LingxiForwardRef<any, MyVerificationCodeProps>(
  (props, ref) => {
    const {
      titleShow,
      title,
      titlePosition,
      placeholderText,
      displayStyle,
      countdownTime,
      style,
      fieldProps,
      onClick,
      digit,
      visible = true,
      getEngineApis,
      formItemInstance,
      onBlur,
      required,
    } = props;
    const { onInputChange, val } = formItemInstance;
    const { getValidateCodePicture, getLocale } = getEngineApis?.() || {};
    const { color, ...otherStyle } = style;
    const [countdownText, setCountdownText] = useState(
      getLocale('VerificationCode.text') || '发送验证码',
    );
    // const [errorInfo, setErrorInfo] = useState(null);
    const readingRef = useRef(false);
    const time = useRef<any>();
    const timer = useRef<any>();
    const [{ imageURL }, setState] = useAsyncState({
      imageURL: props.imageURL,
    });
    const [imgSrc, setImgSrc] = useState(IconPlaceholder);
    const countdownReading = () => {
      timer.current = setInterval(() => {
        let readingTime = time.current ? time.current : countdownTime;
        readingTime -= 1;
        time.current = readingTime;
        if (readingTime < 1) {
          readingRef.current = false;
          setCountdownText(getLocale('VerificationCode.text') || '发送验证码');
          clearInterval(timer?.current);
        } else {
          setCountdownText(
            `${
              getLocale('VerificationCode.refresh') || '重新获取'
            } ${readingTime}s`,
          );
        }
      }, 1000);
    };

    const { errorValue } = useContext(Context);

    useImperativeHandle(ref, () => ({
      refreshPictureVeriryCode: () => {
        getPicVerifyCode();
      },
      startCountdown: (date: Date) => {
        if (displayStyle === 'countdownStyle') {
          if (readingRef.current) return;
          readingRef.current = true;
          countdownReading();
        }
      },
      resetCountdown: () => {
        if (displayStyle === 'countdownStyle') {
          readingRef.current = false;
          setCountdownText(getLocale('VerificationCode.text') || '发送验证码');
          clearInterval(timer?.current);
          time.current = null;
        }
      },
      setImageURL: (src: string) => {
        setState({
          imageURL: src,
        });
      },
    }));

    const errorInfo = errorValue?.[fieldProps];

    const onMyChange = (e: any) => {
      // setErrorInfo(null);
      onInputChange(e.currentTarget.value, true);
      // if (isForm) {
      //   form?.setFieldsValue({ [fieldProps]: e.currentTarget.value });
      // }
    };

    useEffect(() => {
      return () => {
        clearInterval(timer?.current);
      };
    }, []);

    const getPicVerifyCode = () => {
      const newTimestamp = new Date().getTime();
      if (digit) {
        const params = {
          validateCodeCount: `${digit}`,
          t: `${newTimestamp}`,
        };
        setImgSrc(getValidateCodePicture(params));
      }
    };
    useEffect(() => {
      if (displayStyle === 'random') {
        // 随机数的情况下自动刷新
        getPicVerifyCode();
      }
    }, [displayStyle, digit]);

    /**
     * 获取验证码
     * @returns
     */
    const renderPicVerifyCode = () => {
      if (displayStyle === 'random') {
        return (
          <img
            src={imgSrc}
            alt=""
            className="imageActive"
            onClick={(e) => {
              if (onClick) {
                onClick(e);
              } else {
                getPicVerifyCode();
              }
            }}
          />
        );
      }
      return null;
    };
    const renderView = () => {
      if (titleShow) {
        if (titlePosition === 'top') {
          return (
            <div className={`${prefixCls}-titleTop`} style={otherStyle}>
              <span className="topText">
                {title}
                {required && <div className="redStar">*</div>}
              </span>
              <div className={`${prefixCls}-inputContent`}>
                <div className="normalArea">
                  <input
                    placeholder={placeholderText}
                    onBlur={onBlur}
                    value={val}
                    onChange={onMyChange}
                  />
                  {displayStyle === 'imageStyle' && (
                    <img
                      className="imageActive"
                      src={imageURL}
                      alt=""
                      onClick={onClick}
                    />
                  )}
                  {displayStyle === 'countdownStyle' && (
                    <div
                      className={
                        readingRef.current === false
                          ? 'sendButtonActive'
                          : 'sendButtonDisable'
                      }
                      style={readingRef.current === false ? { color } : {}}
                      onClick={onClick}
                    >
                      {countdownText}
                    </div>
                  )}
                  {renderPicVerifyCode()}
                </div>
              </div>
              {errorInfo && <span className="errorNotice">{errorInfo}</span>}
            </div>
          );
        }
        return (
          <div className={`${prefixCls}-inputContent`} style={otherStyle}>
            <div className="normalArea">
              <span className="titleText">
                {title}
                {required && <div className="redStar">*</div>}
              </span>
              <input
                placeholder={placeholderText}
                onBlur={onBlur}
                value={val}
                onChange={onMyChange}
              />
              {displayStyle === 'imageStyle' && (
                <img
                  className="imageActive"
                  src={imageURL}
                  alt=""
                  onClick={onClick}
                />
              )}
              {displayStyle === 'countdownStyle' && (
                <div
                  className={
                    readingRef.current === false
                      ? 'sendButtonActive'
                      : 'sendButtonDisable'
                  }
                  style={readingRef.current === false ? { color } : {}}
                  onClick={onClick}
                >
                  {countdownText}
                </div>
              )}
              {renderPicVerifyCode()}
            </div>
            {errorInfo && <span className="errorNotice">{errorInfo}</span>}
          </div>
        );
      }
      return (
        <div className={`${prefixCls}-inputContent`} style={otherStyle}>
          <div className="normalArea">
            <input
              placeholder={placeholderText}
              value={val}
              onBlur={onBlur}
              onChange={onMyChange}
            />
            {displayStyle === 'imageStyle' && (
              <img
                className="imageActive"
                src={imageURL}
                alt=""
                onClick={onClick}
              />
            )}
            {displayStyle === 'countdownStyle' && (
              <div
                className={
                  readingRef.current === false
                    ? 'sendButtonActive'
                    : 'sendButtonDisable'
                }
                style={readingRef.current === false ? { color } : {}}
                onClick={onClick}
              >
                {countdownText}
              </div>
            )}
            {renderPicVerifyCode()}
          </div>
          {errorInfo && <span className="errorNotice">{errorInfo}</span>}
        </div>
      );
    };

    return (
      <div className={prefixCls} style={visible ? {} : { display: 'none' }}>
        {renderView()}
      </div>
    );
  },
);

export default LingxiForwardRef<unknown, MyVerificationCodeProps>(
  (props, ref) => {
    const extraRef = useRef({});
    const { visible } = props;
    const formItemInstance = useFormItem(ref, props, extraRef.current);

    if (!formItemInstance.isForm) {
      return (
        <VerificationCode
          {...props}
          formItemInstance={formItemInstance}
          ref={extraRef}
        />
      );
    }

    return (
      <Field
        initialValue={props.defaultValue}
        name={props?.fieldProps}
        rules={visible ? formItemInstance.getRules() : []}
        validateTrigger="onBlur"
      >
        <VerificationCode
          {...props}
          onBlur={() => {}}
          ref={extraRef}
          formItemInstance={formItemInstance}
        />
      </Field>
    );
  },
);
