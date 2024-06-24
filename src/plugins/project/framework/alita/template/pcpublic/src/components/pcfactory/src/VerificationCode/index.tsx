import { Input } from 'antd';
import React, { forwardRef, useEffect, useRef, useState } from 'react';
import {
  FormFields,
  getFieldsProps,
  useCommonImperativeHandle,
  useForm,
} from '../utils';
import { useLocale } from '../utils/hooks/useLocale';
import IconPlaceholder from './assets/placeholder.png';

export interface MyVerificationCodeProps {
  defaultValue?: any;
  value?: string;
  titleShow?: boolean;
  title?: string;
  placeholderText?: string;
  titlePosition?: string;
  displayStyle?: string;
  imageURL?: string;
  countdownTime?: number;
  style?: any;
  onChange?: any;
  onClick?: any;
  onValueRelease?: any;
  fieldName?: any;
  startCountdown?: any;
  resetCountdown?: any;
  showWrapperContainer: boolean;
  wrapperContainer: any;
  wrapperCol?: any;
  selfSpan?: any;
  colSpan?: any;
  hidden?: any;
  visible?: boolean;
  regexp?: any;
  rules?: any[];
  name?: string;
  required?: any;
  message?: any;
  compId?: any;
  colon?: boolean;
  digit?: number;
  isFormChild?: boolean;
  tipSize?: string; // 文字提示
  tipWidth?: string; // 提示自定义的宽度
  tipHeight?: string; // 提示自定义的高度
  tipIcon?: any;
  tipLocation?: any;
  tipContent?: any;
  tipPlacement?: any;
  titleTip?: any;
  label?: any;
  getEngineApis?: any;
}

const prefixCls = 'verificationCodePC';

const countDownTextFn = (getLocale?: any) => ({
  refresh: getLocale('VerificationCode.refresh'),
  send: getLocale('VerificationCode.text'),
});

const InnerView = (p: any) => {
  const { renderView, ...restProps } = p;
  return <div className={prefixCls}>{p.renderView(restProps)}</div>;
};

const VerificationCode: React.FC<MyVerificationCodeProps> = forwardRef(
  (props, ref) => {
    const {
      placeholderText,
      displayStyle,
      countdownTime,
      style,
      regexp,
      digit,
      getEngineApis,
      onChange,
      onClick,
      imageURL: myImageURL,
    } = props;

    const engineApis = getEngineApis?.() || {};

    const { getLocale } = useLocale(engineApis);

    const countDownTextMap: any = countDownTextFn(getLocale);
    const {
      color,
      margin: customMargin,
      display: customDisplay,
      visibility: customVisibility,
      ...otherStyle
    } = style;

    const { inForm } = useForm();

    const [startCountdown, setStartCountdown] = useState<Date>();
    const [resetCountdown, setResetCountdown] = useState<Date>();
    const [imageURL, setImageURL] = useState('');
    const [imgSrc, setImgSrc] = useState(IconPlaceholder);
    const [countdownText, setCountdownText] = useState('send');
    const [readingTime, updateTime] = useState();
    const [errorInfo, setErrorInfo] = useState(null);
    const [reading, setReading] = useState(false);
    const time = useRef<any>();
    const timer = useRef<any>();

    useEffect(() => {
      setImageURL(myImageURL || '');
    }, [myImageURL]);

    const getPicVerifyCode = () => {
      const newTimestamp = new Date().getTime();
      if (digit && newTimestamp) {
        (async () => {
          try {
            const params = {
              validateCodeCount: `${digit}`,
              t: `${newTimestamp}`,
            };
            const url = await engineApis?.getValidateCodePicture(params);
            setImgSrc(url);
          } catch (e) {
            console.log(e);
          }
        })();
      }
    };

    const { disabled, required, readOnly, formFieldsRef, finalRules } =
      useCommonImperativeHandle(ref, props, {
        refreshPictureVeriryCode: () => {
          getPicVerifyCode();
        },
        setVerificationCodeImageUrl: (url: string) => {
          setImageURL(url);
        },
        startVerificationCodeCountdown: (start: Date) => {
          setStartCountdown(start);
        },
        resetVerificationCodeCountdown: (reset: Date) => {
          setResetCountdown(reset);
        },
      });

    const countdownReading = () => {
      timer.current = setInterval(() => {
        let readingTime = time.current ? time.current : countdownTime;
        readingTime -= 1;
        time.current = readingTime;
        if (readingTime < 1) {
          setReading(false);
          setCountdownText('send');
          clearInterval(timer?.current);
          updateTime(undefined);
        } else {
          setCountdownText('refresh');
          updateTime(readingTime);
          // setCountdownText(`${getLocale?.('VerificationCode.refresh')} ${readingTime}s`);
        }
      }, 1000);
    };

    const onMyChange = (e: any) => {
      if (onChange) {
        onChange(e.target.value);
      }
    };

    const onMyBlur = (e: any) => {
      setErrorInfo(null);
      if (!inForm && regexp && e.target.value.length > 0) {
        regexp.forEach((item: any) => {
          const { pattern, message: msg } = item;
          if (pattern && !pattern.test(e.target.value)) {
            setErrorInfo(msg);
          }
        });
      }
    };

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

    const renderView = (p: any) => {
      return (
        <div className={`${prefixCls}-inputContent`} style={otherStyle}>
          <div className="normalArea">
            <Input
              placeholder={placeholderText}
              value={p.value}
              onBlur={p.onBlur}
              onChange={p.onChange}
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
                  countdownText === 'send'
                    ? 'sendButtonActive'
                    : 'sendButtonDisable'
                }
                style={countdownText === 'send' ? { color } : {}}
                onClick={onClick}
              >
                {`${countDownTextMap[countdownText]}${
                  countdownText === 'refresh' ? ` ${readingTime}s` : ''
                }`}
              </div>
            )}
            {renderPicVerifyCode()}
          </div>
          {errorInfo && (
            <span className={`${prefixCls}-errorNotice`}>{errorInfo}</span>
          )}
        </div>
      );
    };

    // 开始倒计时
    useEffect(() => {
      if (startCountdown && displayStyle === 'countdownStyle') {
        if (reading) return;
        setReading(true);
        countdownReading();
      }
    }, [startCountdown]);

    // 重置倒计时
    useEffect(() => {
      if (resetCountdown && displayStyle === 'countdownStyle') {
        setReading(false);
        setCountdownText(getLocale?.('VerificationCode.text'));
        clearInterval(timer?.current);
        time.current = null;
      }
    }, [resetCountdown]);

    useEffect(() => {
      if (displayStyle === 'random') {
        // 随机数的情况下自动刷新
        getPicVerifyCode();
      }
    }, [displayStyle, digit]);

    return (
      <FormFields
        {...getFieldsProps(props)}
        ref={formFieldsRef}
        trigger="onChange"
        required={required}
        disabled={disabled as any}
        readOnly={readOnly}
        validateTrigger="onBlur"
        rules={finalRules}
      >
        <InnerView
          renderView={renderView}
          onChange={onMyChange}
          onBlur={onMyBlur}
        />
      </FormFields>
    );
  },
);

export default VerificationCode;
