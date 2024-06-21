import { NoticeBarPlus, NoticeBarProps } from '@lingxiteam/antd-mobile-plus';
import { LingxiForwardRef } from '@lingxiteam/types';
import { useEffect, useRef, useState } from 'react';
import useStyle from '../View/useStyle';

export interface MyNoticeBarPlusProps extends NoticeBarProps {
  backgroundType?: any;
  srcType?: 'fileCode' | 'src';
  fileCode?: string;
  errorSrc: string;
  clsasName?: string;
}

const MyNoticeBarPlus = LingxiForwardRef<any, MyNoticeBarPlusProps>(
  (props, ref) => {
    const {
      backgroundType = {},
      srcType,
      src,
      fileCode,
      errorSrc,
      getEngineApis,
      clsasName,
      ...restProps
    } = props;
    const NoticeBarPlusRef = useRef<HTMLDivElement>(null);
    const [imgSrc, setImgSrc] = useState('');
    const [error, setError] = useState('');
    const [icon, setIcon] = useState('');
    const engineApis = getEngineApis();
    const viewRef = useRef<HTMLDivElement>();
    const style = useStyle(
      {
        ...props,
        src: imgSrc,
      } as any,
      viewRef,
    ) as any;
    useEffect(() => {
      if (errorSrc) {
        setError(engineApis.getAppFileUrlByFileCode(errorSrc));
      }
    }, [errorSrc]);

    useEffect(() => {
      if (backgroundType.image) {
        setImgSrc(engineApis.getAppFileUrlByFileCode(backgroundType.image));
      }
    }, [backgroundType]);

    useEffect(() => {
      if (srcType === 'fileCode' && fileCode) {
        setIcon(engineApis.getAppFileUrlByFileCode(fileCode));
      } else if (srcType === 'src' && src) {
        setIcon(src);
      }
    }, [fileCode, src, srcType]);

    return (
      <div
        className={`use-app-noticebarplus ${clsasName}`}
        ref={NoticeBarPlusRef}
      >
        <NoticeBarPlus
          {...restProps}
          style={style}
          src={icon}
          errorSrc={error}
          imgStyle={style.imgStyle}
          extraText={restProps.extraText ?? engineApis.getLocale('more')}
        />
      </div>
    );
  },
);

export default MyNoticeBarPlus;
