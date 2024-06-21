import { LingxiForwardRef } from '@lingxiteam/types';
import React, { useMemo, useRef } from 'react';
import useHiddenStyle from '../utils/hooks/useHiddenStyle';
import useStyle from '../View/useStyle';
import useLayout from './useLayout';

export interface LayoutProps {
  layoutOptions: any;
  style?: React.CSSProperties;
  src?: string;
  visible: boolean;
  fileCode?: string;
  backgroundType: any;
  onClick?: (e: any) => void;
}

const prefixCls = 'lcdp-factory-Layout';
const Layout = LingxiForwardRef<unknown, LayoutProps>((props) => {
  const {
    backgroundType = {},
    fileCode,
    src,
    $$componentItem,
    visible,
    getEngineApis,
  } = props;

  const { getAppFileUrlByFileCode } = getEngineApis();

  const finalStyle = useHiddenStyle(visible);

  const children = useLayout({
    children: props.children,
    layoutOptions: props.layoutOptions,
  });

  const imgSrc = useMemo(() => {
    if (backgroundType?.image || fileCode) {
      return getAppFileUrlByFileCode(backgroundType?.image || fileCode, {
        appId: $$componentItem.appId,
      });
    }
    return undefined;
  }, [backgroundType, src, fileCode]);

  const viewRef = useRef<HTMLDivElement>(null);
  const style = useStyle(
    {
      ...props,
      src: imgSrc,
    },
    viewRef,
  );

  return (
    <div
      ref={viewRef}
      className={prefixCls}
      style={{ ...style, ...finalStyle }}
    >
      {children}
    </div>
  );
});

export default Layout;
