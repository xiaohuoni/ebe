import { LingxiForwardRef } from '@lingxiteam/types';
import React, { useEffect, useImperativeHandle, useRef, useState } from 'react';
import { useDeepCompareEffect } from '../utils/ahooks';
import useStyle from '../View/useStyle';

export interface MyLoopprops extends React.HTMLProps<HTMLDivElement> {
  visible: boolean;
  src?: string;
  fileCode?: string;
  backgroundType: any;
  style: React.CSSProperties;
  className: string;
  dataSource: any[];
  itemKey: string;
  indexKey: string;
  uniqueField: string;
}

const Loop = LingxiForwardRef<any, MyLoopprops>((props, ref) => {
  const {
    visible = true,
    backgroundType,
    className,
    fileCode,
    src,
    style,
    getEngineApis,
    dataSource: myDataSource = [],
    itemKey = 'item',
    indexKey = 'i',
    uniqueField,
    ...restProps
  } = props;

  const { MemoRenderer, getAppFileUrlByFileCode } = props.getEngineApis();
  const { MemoLoopItem, renderer } = MemoRenderer;
  const [dataSource, setDataSource] = useState(
    Array.isArray(myDataSource) ? myDataSource : [],
  );

  const [imgSrc, setImgSrc] = useState();

  useImperativeHandle(ref, () => ({
    setDataSource: (data: any[]) => {
      if (Array.isArray(data)) {
        setDataSource(data);
      }
    },
  }));
  useEffect(() => {
    if (backgroundType?.image || fileCode) {
      // @ts-ignore
      setImgSrc(getAppFileUrlByFileCode(backgroundType.image || fileCode));
    }
  }, [backgroundType, src, fileCode]);

  useDeepCompareEffect(() => {
    if (Array.isArray(myDataSource)) {
      setDataSource(myDataSource);
    }
  }, [myDataSource]);

  const viewRef = useRef<HTMLDivElement>();
  const restStyle = useStyle(
    {
      ...props,
      src: imgSrc,
    },
    viewRef,
  );

  if (!visible) {
    return null;
  }

  return (
    <div
      {...restProps}
      className={`${className}`}
      style={{ ...restStyle, ...style }}
    >
      {dataSource?.map((item, i) => {
        const renderProps = {
          itemKey,
          indexKey,
          item,
          i,
          __render__: props.__render__,
          renderer,
          key: item[uniqueField] ?? i,
          itemId: item[uniqueField] ?? i,
          compId: props.$$componentItem.uid,
        };
        return <MemoLoopItem {...renderProps} />;
      })}
    </div>
  );
});

export default Loop;
