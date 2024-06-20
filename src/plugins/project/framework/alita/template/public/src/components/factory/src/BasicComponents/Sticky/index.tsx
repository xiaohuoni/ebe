import { useInViewport } from 'ahooks';
import React, { FC, useMemo, useRef } from 'react';
import ReactDOM from 'react-dom';
import './index.less';

const prefixCls = 'lcdp-app-sticky';

interface StickyChildProps {
  style: React.CSSProperties;
  isSticky: boolean;
}

interface StickyProps {
  top: React.CSSProperties['top'];
  isOpenSticky?: boolean;
  children: (opts: StickyChildProps) => React.ReactElement;
}

const StickyHeader: FC<StickyProps> = (props) => {
  const { children, isOpenSticky = false, top = 0 } = props;
  const ref = useRef(null);
  const contentRef = useRef<Element>();
  const [inViewPort] = useInViewport(ref);

  const childParams: StickyChildProps = useMemo(() => {
    if (!isOpenSticky) {
      return { style: {}, isSticky: false };
    }

    if (inViewPort) {
      return { style: {}, isSticky: false };
    }

    const dom = contentRef.current;

    if (!dom) {
      return { style: {}, isSticky: false };
    }
    const { x, width } = dom?.getBoundingClientRect() || {};

    return {
      style: {
        position: 'fixed',
        top: `${top || 0}px`,
        left: x,
        width,
      },
      isSticky: true,
    };
  }, [inViewPort, isOpenSticky]);

  const element = React.cloneElement(children(childParams), {
    ref: (content: React.ReactInstance | null | undefined) => {
      // eslint-disable-next-line react/no-find-dom-node
      const contentNode = ReactDOM.findDOMNode(content);
      if (contentNode) {
        contentRef.current = contentNode as Element;
      }
    },
  });

  return (
    <>
      {isOpenSticky && <div ref={ref} className={`${prefixCls}-baseline`} />}
      {element}
    </>
  );
};

export default StickyHeader;
