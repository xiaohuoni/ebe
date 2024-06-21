import { LingxiForwardRef } from '@lingxiteam/types';
import React, { useMemo } from 'react';
import useHiddenStyle from '../utils/hooks/useHiddenStyle';
import { withTransformProps } from '../utils/withTransformProps';
import transformProps from './transformProps';

export interface MyTextprops {
  showHtml?: boolean;
  visible?: boolean;
  name?: string;
  style?: React.CSSProperties;
  textReg?: any;
}

const Text = LingxiForwardRef<any, MyTextprops>((props, ref) => {
  const {
    children,
    name,
    textReg,
    showHtml = false,
    visible = true,
    style,
    ...restProps
  } = props;

  const hiddenStyle = useHiddenStyle(visible, style);

  /**
   * attrNbrInfo 静态数据的值，预处理的上报随后返回
   */
  const { customs, attrNbrInfo } = textReg || {};

  const getRegStr = (str: string) =>
    /^\/.+\/.*/g.test(str) ? str.replace(/^\//, '').replace(/\/$/g, '') : str;

  const getRegMap = (
    array: string[],
    originKey: string,
    targetKey: string,
  ): [Record<string, any>, string[]] => {
    const regExpMap = {};
    const regExpSort = [...array].sort(
      (a: any, b: any) =>
        String(b[originKey]).length - String(a[originKey]).length,
    );
    regExpSort.forEach((c) => {
      // @ts-ignore
      regExpMap[getRegStr(c[originKey])] = c[targetKey];
    });
    // @ts-ignore
    return [regExpMap, regExpSort.map((c) => c[originKey])];
  };
  const getRegMapItem = (map: any, item: string) => {
    const key = Object.keys(map).find((c) => new RegExp(c).test(item)) || '';
    return map[key];
  };
  const getFinalStr = (
    array: string[],
    originKey: string,
    targetKey: string,
  ) => {
    const [customRegMap, customRegSort] = getRegMap(
      array,
      originKey,
      targetKey,
    );
    const reStr = `(${customRegSort.join('|')})`;
    const newReg = new RegExp(reStr, 'g');
    const pcontent = typeof children === 'string' ? children : '';
    return pcontent.replace(
      newReg,
      (it) => customRegMap[it] || getRegMapItem(customRegMap, it),
    );
  };
  const showContent = useMemo(() => {
    if (textReg) {
      if (Array.isArray(attrNbrInfo) && attrNbrInfo.length) {
        return attrNbrInfo?.length
          ? getFinalStr(attrNbrInfo, 'value', 'label')
          : children;
      }
      if (Array.isArray(customs) && customs.length) {
        return getFinalStr(customs, 'text', 'translation');
      }
    }
    return children;
  }, [children, attrNbrInfo]);

  return (
    <>
      {showHtml ? (
        <span
          style={{
            whiteSpace: 'pre-wrap',
            ...hiddenStyle,
          }}
          aria-label="factory-text"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: (showContent || name) as any }}
          {...restProps}
        />
      ) : (
        <span
          aria-label="factory-text"
          style={{
            whiteSpace: 'pre-wrap',
            ...hiddenStyle,
          }}
          {...restProps}
        >
          {showContent || name}
        </span>
      )}
    </>
  );
});

export default withTransformProps(Text, transformProps);
