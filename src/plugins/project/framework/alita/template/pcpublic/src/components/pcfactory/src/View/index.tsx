import { LingxiForwardRef } from '@lingxiteam/types';
import React, {
  CSSProperties,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useHiddenStyle, useListenProps } from '../utils';
import { useLocale } from '../utils/hooks/useLocale';
import SpinComp from '../utils/Spin';
import useBackgroundStyle from './useBackgroundStyle';

export interface MyViewProps {
  style: React.CSSProperties;
  className: string;
  visible: boolean;
  backgroundType?: any;
  appId?: string;
  loading?: boolean;
  getEngineApis?: any;
  visibility?: boolean;
}

const View = LingxiForwardRef<any, MyViewProps>((props: any, ref) => {
  const {
    children,
    style,
    className,
    visible = true,
    backgroundType,
    getEngineApis,
    visibility = false,
    ...restProps
  } = props;

  const [loading, setLoading] = useListenProps(props.loading);

  const [loadingText, setLoadingText] = useState<string>();

  const engineApis = getEngineApis?.() || {};

  const { dataState } = engineApis;

  const { lang } = useLocale(engineApis);

  const { backgroundStyle } = useBackgroundStyle({
    engineApis,
    backgroundType,
    appId: restProps?.appId,
    mode: 'engine',
  });

  const finalStyle = useHiddenStyle(visible, style, visibility);

  const containerRef = useRef<any>();
  const loadingRef = useRef<any>();

  const [reload, setReload] = useState<number>(0);

  const getLoadingStyle = (isShow: boolean): CSSProperties => {
    const res: CSSProperties = {};
    if (containerRef.current && loadingRef.current) {
      const containerRefProps = window.getComputedStyle(containerRef.current);
      const { offsetWidth, offsetHeight } = containerRef.current;
      const containerOffset = containerRef.current.getBoundingClientRect();
      // 获取loading基于父级的偏移量
      const loadingOffset = loadingRef.current.getBoundingClientRect();

      const offset = {
        x: loadingOffset.left - containerOffset.left,
        y: loadingOffset.top - containerOffset.top,
      };

      res.position = 'absolute';
      res.width = `${offsetWidth}px`;
      res.height = `${offsetHeight}px`;
      res.zIndex = containerRefProps.zIndex;
      res.backgroundColor = 'rgba(255,255,255,0.5)';
      res.display = 'flex';
      res.justifyContent = 'center';
      res.alignItems = 'center';
      res.left = 0;
      res.top = 0;
      if (offset.x > 0 || offset.y > 0) {
        res.transform = `translate(${-offset.x}px, ${-offset.y}px)`;
      }
    }
    if (!isShow) {
      res.display = 'none';
    }
    return res;
  };

  const renderLoadingComp = useMemo(() => {
    if (loading && loadingRef.current) {
      return (
        <div style={getLoadingStyle(true)}>
          <SpinComp dataState={dataState} tip={loadingText} />
        </div>
      );
    }
    return null;
  }, [
    loading,
    loadingRef.current,
    reload,
    lang,
    dataState?.loading,
    loadingText,
  ]);

  useEffect(() => {
    if (loading) {
      setReload(reload + 1);
    }
  }, [loading]);

  useImperativeHandle(ref, () => ({
    setLoading(_loading: boolean) {
      setLoading(_loading);
    },
    setLoadingText(_loadingText: string) {
      setLoadingText(_loadingText);
    },
  }));

  // if (visible === false) {
  //   return null;
  // }

  return (
    <div
      style={{
        ...backgroundStyle,
        ...finalStyle,
      }}
      className={className}
      data-compid={props?.['data-compid']}
      {...restProps}
      ref={containerRef}
    >
      {children}
      {/* loading 定位元素 */}
      {loading && (
        <div
          style={{
            width: 0,
            height: 0,
            position: 'relative',
            backgroundColor: 'transparent',
            visibility: loading ? 'visible' : 'hidden',
          }}
          ref={loadingRef}
        >
          {renderLoadingComp}
        </div>
      )}
    </div>
  );
});

export default View;
