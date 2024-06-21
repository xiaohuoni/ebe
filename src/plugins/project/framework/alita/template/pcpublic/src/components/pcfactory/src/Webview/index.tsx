import { LingxiForwardRef } from '@lingxiteam/types';
import {
  addEventListenerMessage,
  postMessageToContentWindow,
  removeEventListenerMessage,
} from 'lcdp-message';
import React, {
  CSSProperties,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { useHiddenStyle, useListenProps } from '../utils';

export interface MyWebviewProps {
  __compId?: string;
  getWebviewApis?: (
    e: MyWebviewProps['__compId'],
    opts: Record<string, any>,
  ) => void;
  onMessage?: React.FC<any>;
  title?: string;
  src?: string;
  visible: boolean;
  style?: CSSProperties;
}

// const prefixCls = 'webview';

const Webview = LingxiForwardRef<any, MyWebviewProps>((props, ref) => {
  const {
    __compId,
    getWebviewApis,
    onMessage = () => {},
    style,
    visible,
    title,
    ...restProps
  } = props;
  const hiddenStyle = useHiddenStyle(visible, style);
  const webViewRef = useRef<HTMLIFrameElement | null>(null);
  const getContentWindow = () => webViewRef?.current?.contentWindow;

  const [update, setUpdate] = useState(() => String(Date.now()));

  const [src, setSrc] = useListenProps(props.src);

  const postMessage = (data: unknown) => {
    if (webViewRef.current) {
      const contentWindow = getContentWindow();
      postMessageToContentWindow(contentWindow, data, src);
    }
  };

  useEffect(() => {
    // 把业务组件中操作表单的api暴露给父组件
    if (typeof getWebviewApis === 'function') {
      getWebviewApis(__compId, {
        contentWindow: getContentWindow(),
        postMessage,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [__compId]);

  const receiveMessage = (d: any) => {
    // eslint-disable-next-line no-unused-expressions
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    onMessage && onMessage(d);
  };

  useImperativeHandle(ref, () => ({
    setSrc: (_url: string) => {
      setSrc(_url);
    },
    postMessage: (message: any) => {
      postMessage(message);
    },
    refreshContainer: () => {
      setUpdate(String(Date.now()));
    },
  }));

  useEffect(() => {
    const fn = addEventListenerMessage(receiveMessage);
    return () => {
      removeEventListenerMessage(fn);
    };
  }, []);

  return (
    <iframe
      title="title"
      ref={webViewRef}
      {...restProps}
      src={src}
      key={update}
      style={hiddenStyle}
    />
  );
});

export default Webview;
