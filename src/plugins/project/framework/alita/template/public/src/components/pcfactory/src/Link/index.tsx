import { LingxiForwardRef } from '@lingxiteam/types';
import classnames from 'classnames';
import React, { useEffect, useImperativeHandle, useState } from 'react';
import { useListenProps } from '../utils';
import { getAfterString } from '../utils/common';

export interface MyLinkProps {
  visible?: boolean;
  linkValue: string;
  download?: string;
  href: string;
  compFileId?: string;
  style: React.CSSProperties;
  onClick: any;
  className?: string;
  getEngineApis?: any;
  clickType?: 'open' | 'download';
}

const Link = LingxiForwardRef<any, MyLinkProps>((props, ref) => {
  const {
    visible = true,
    linkValue,
    download,
    href,
    style,
    onClick,
    className,
    getEngineApis,
    $$componentItem,
    clickType,
    ...restProps
  } = props;

  const [compFileId, setCompFileId] = useListenProps(props.compFileId);

  const engineApis = getEngineApis?.() || {};

  const [aHref, setAHref] = useState(href);
  const isBindOnClick = typeof onClick === 'function';
  // 配置了下载文件名download的走Blob形式，修复设置文件名download属性不生效
  let isBlobDownload = false;
  const specialProps: any = {
    href: aHref,
  };

  if ((download && !clickType) || clickType === 'download') {
    specialProps.download =
      download || clickType === 'download' ? true : compFileId;
    isBlobDownload = Boolean(aHref && download);
  }

  if (isBindOnClick || isBlobDownload) {
    delete specialProps.href;
  }

  useImperativeHandle(ref, () => ({
    setCompFileId(id: any) {
      setCompFileId(id);
    },
  }));

  useEffect(() => {
    if (compFileId) {
      setAHref(engineApis?.service?.getAppFileUrlById(compFileId));
    } else {
      setAHref(href);
    }
  }, [compFileId, href]);

  const downloadFile = () => {
    if (isBlobDownload) {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', aHref, true);
      xhr.responseType = 'blob';
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.setRequestHeader('X-B-TARGET-ID', $$componentItem.pageId);
      xhr.setRequestHeader('X-B-AUTH', '1');
      xhr.setRequestHeader('APP-ID', $$componentItem.appId);
      xhr.onload = () => {
        const url = window.URL.createObjectURL(xhr.response);
        const a = document.createElement('a');
        const suffix = getAfterString(
          xhr.getResponseHeader('Content-Disposition'),
          '.',
        );
        a.href = url;
        // @ts-ignore
        a.download =
          download?.indexOf('.') > -1 ? download : `${download}.${suffix}`;
        a.click();
      };
      xhr.send();
    }
  };

  // style为了兼容放在form下时lineHeight继承为0，导致无法正常显示
  return visible ? (
    <a
      className={classnames('ued-link', className)}
      {...restProps}
      {...specialProps}
      onClick={(e) => {
        if (isBindOnClick) {
          onClick(e);
        } else if (specialProps.download) {
          downloadFile();
        }
      }}
      style={{ ...style, lineHeight: style.lineHeight || 'normal' }}
    >
      {linkValue}
    </a>
  ) : null;
});

export default Link;
