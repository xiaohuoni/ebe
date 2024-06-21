import { LingxiForwardRef } from '@lingxiteam/types';
import {
  addEventListenerMessage,
  postMessageToContentWindow,
  removeEventListenerMessage,
} from 'lcdp-message';
import React, { useEffect, useImperativeHandle, useRef, useState } from 'react';

export interface WebviewProps {
  visible?: boolean;
  __compId?: string;
  getWebviewApis?: (
    e: WebviewProps['__compId'],
    opts: Record<string, any>,
  ) => void;
  onMessage?: React.FC<any>;
  title?: string;
  src?: string;
  onUnload?: () => void;
}

const Webview = LingxiForwardRef<any, WebviewProps>((props, ref) => {
  const {
    __compId,
    onMessage = () => {},
    title,
    visible = true,
    src: mySrc,
    $$componentItem,
    getEngineApis,
    onUnload,
    ...restProps
  } = props;
  const webViewRef = useRef<HTMLIFrameElement | null>(null);
  const [src, setSrc] = useState(mySrc);
  const [update, setUpdate] = useState(() => String(Date.now()));

  const getContentWindow = () => webViewRef?.current?.contentWindow;

  const postMessage = (data: unknown) => {
    if (webViewRef.current) {
      const contentWindow = getContentWindow();
      postMessageToContentWindow(contentWindow, data, src);
    }
  };
  useEffect(() => {
    setSrc(mySrc);
  }, [mySrc]);

  const receiveMessage = (d: any) => {
    // eslint-disable-next-line no-unused-expressions
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    onMessage && onMessage(d);
  };

  useEffect(() => {
    const fn = addEventListenerMessage(receiveMessage);

    const contentWindow = webViewRef.current?.contentWindow;
    const unload = () => {
      onUnload?.();
    };
    contentWindow?.addEventListener('unload', unload);
    return () => {
      contentWindow?.removeEventListener?.('unload', unload);
      removeEventListenerMessage(fn);
    };
  }, []);

  useImperativeHandle(ref, () => ({
    setSrc,
    get contentWindow() {
      return webViewRef.current?.contentWindow;
    },
    postMessage,
    refreshContainer: () => {
      setUpdate(String(Date.now()));
    },
  }));
  if (!visible) {
    return <></>;
  }
  return (
    <iframe
      ref={webViewRef}
      title={title}
      src={src}
      {...restProps}
      key={update}
    />
  );
});

export default Webview;
