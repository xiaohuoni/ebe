import { LingxiForwardRef } from '@lingxiteam/types';
import { useThrottleFn } from 'ahooks';
import { useEffect, useRef, useState } from 'react';
import useHiddenStyle from '../utils/hooks/useHiddenStyle';
import { withTransformProps } from '../utils/withTransformProps';
import transformProps from './transformProps';
import type { AppViewProps } from './useStyle';
import useStyle from './useStyle';

const AppView = LingxiForwardRef<any, AppViewProps>((props, ref) => {
  const {
    backgroundType = {},
    fileCode,
    src,
    $$componentItem,
    visible,
    getEngineApis,
    onClick,
    visibility = false,
    ...restProps
  } = props;
  const [imgSrc, setImgSrc] = useState<string>();
  // @ts-ignore
  const finalStyle = useHiddenStyle(visible, undefined, visibility);
  const isDid = useRef(false);
  const { getAppFileUrlByFileCode } = getEngineApis() || {};
  useEffect(() => {
    if (backgroundType.image || fileCode) {
      setImgSrc(
        getAppFileUrlByFileCode(backgroundType.image || fileCode, {
          appId: $$componentItem.appId,
        }),
      );
    }
  }, [backgroundType, src, fileCode]);
  const viewRef = useRef<any>();
  const style = useStyle(
    {
      ...props,
      src: imgSrc,
    },
    viewRef,
  );
  const { run } = useThrottleFn(
    (e) => {
      onClick && onClick(e);
    },
    {
      wait: 200,
      trailing: false,
    },
  );
  if (visible === false && isDid.current === false) {
    return null;
  }
  // 如果已经渲染过的，就使用display none
  isDid.current = true;
  return (
    <div
      id={$$componentItem.id}
      ref={viewRef}
      {...restProps}
      style={{ ...style, ...finalStyle }}
      onClick={run}
    />
  );
});

export default withTransformProps(AppView, transformProps);
