import { LingxiForwardRef } from '@lingxiteam/types';
import React, { useEffect, useImperativeHandle, useState } from 'react';
import { withTransformProps } from '../utils/withTransformProps';
import transformProps from './transformProps';

export type MyALinkprops = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;
interface ALinkProps extends MyALinkprops {
  content: string;
  visible: boolean;
  className?: string;
}

const ALink = LingxiForwardRef<any, ALinkProps>((props, ref) => {
  const { children, content, visible, href, onClick, className, ...restProps } =
    props;

  const [myHref, setHref] = useState(href);
  const [myContent, setContent] = useState(content);
  const isBindOnClick = typeof onClick === 'function';
  const specialProps: any = {
    href: myHref,
  };

  if (isBindOnClick) {
    delete specialProps.href;
  }

  useEffect(() => {
    setContent(content);
  }, [content]);
  useEffect(() => {
    setHref(href);
  }, [href]);
  useImperativeHandle(ref, () => ({
    setValue(v: any) {
      setContent(v);
    },
    setSrc(v: any) {
      setHref(v);
    },
  }));
  if (!visible) {
    return <></>;
  }
  return (
    <a
      {...restProps}
      {...specialProps}
      className={`use-app-alink ${className}`}
      onClick={onClick}
    >
      {myContent || children}
    </a>
  );
});

ALink.displayName = 'ALink';

export default withTransformProps(ALink, transformProps);
