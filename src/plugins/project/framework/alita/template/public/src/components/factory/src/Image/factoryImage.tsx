import { LingxiForwardRef } from '@lingxiteam/types';
import { useMemo } from 'react';
import { withTransformProps } from '../utils/withTransformProps';
import IconError from './assets/error.png';
import IconPlaceholder from './assets/placeholder.png';
import Image from './BasicImage';
import File from './File';
import './index.less';
import transformProps from './transformProps';

export interface MyImageProps {
  disabled: boolean;
  visible?: boolean;
  accept?: string;
  value?: string;
  srcType?: 'fileCode' | 'src';
  src?: string;
  fileCode?: string;
  defaultSrc?: string;
  errorSrc: string;
  onClick: (e: HTMLElement) => void;
}

const prefixCls = 'lcdp-image';
const MyImage = LingxiForwardRef<any, MyImageProps>((props, ref) => {
  const {
    disabled = false,
    accept = 'image/*,image/heic',
    value,
    srcType,
    src,
    fileCode,
    children,
    defaultSrc = IconPlaceholder,
    onClick,
    getEngineApis,
    ...restProps
  } = props;
  const { getAppFileUrlByFileCode, getAppFileUrlById } = getEngineApis() || {};
  // const [imgSrc, setImgSrc] = React.useState<string>();
  // const [errorSrc, setErrorSrc] = React.useState<string>();
  const transValue = (temValue: any) => {
    if (typeof temValue === 'string' && temValue.startsWith('http')) {
      return temValue;
    }
    if (typeof temValue === 'object') {
      if (temValue.fileId) {
        return getAppFileUrlById(temValue.fileId);
      }
    }
    return undefined;
  };

  const imgSrc = useMemo(() => {
    let mySrcType = srcType;
    if (!mySrcType) {
      // 存量数据判断，建议三个月以上的时间之后再进行删除
      if (fileCode) {
        mySrcType = 'fileCode';
      } else {
        mySrcType = 'src';
      }
    }
    if (value) {
      const realvalue = transValue(value);
      return realvalue;
    }
    if (mySrcType === 'fileCode' && fileCode) {
      return getAppFileUrlByFileCode(fileCode);
    }
    if (mySrcType === 'src' && src) {
      return src;
    }
    return undefined;
  }, [fileCode, src, value, srcType]);

  const errorSrc = useMemo(() => {
    let tempSrc: string = IconError;
    if (props.errorSrc) {
      tempSrc = getAppFileUrlByFileCode(props.errorSrc);
    }
    return tempSrc;
  }, [props.errorSrc]);

  // 图片点击事件优先级最高
  if (onClick || disabled) {
    return (
      <Image
        {...restProps}
        onClick={onClick}
        getEngineApis={getEngineApis}
        ref={ref}
        className={prefixCls}
        src={imgSrc}
        errorSrc={errorSrc}
        defaultSrc={defaultSrc}
      />
    );
  }
  if (!disabled) {
    return (
      <File
        ref={ref}
        value={imgSrc}
        accept={accept}
        {...restProps}
        getEngineApis={getEngineApis}
      />
    );
  }
  return null;
});

export default withTransformProps(MyImage, transformProps);
