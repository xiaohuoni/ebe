import React, { useMemo } from 'react';
import { LingxiForwardRef } from '@lingxiteam/types';
import useDoubleClick from '../utils/hooks/useDoubleClick';

export interface MyTextProps {
  name?: string;
  visible?: boolean;
  textType?: string;
  style?: React.CSSProperties;
  content: string;
  textReg?: any;
  version?: string;
  showHtml?: boolean;
  compType?: string;
  onSelectedRowsRelease?: (e: any) => void;
  onSelectedRowKeysRelease?: (e: any[]) => void;
  onSelectedKeysRelease?: (e: any[]) => void;
  onEditingKeyRelease?: (e: any) => void;
  onInlineEditRelease?: (e: any) => void;
  onInlineSaveRelease?: (e: any) => void;
  onSelectedDataRelease?: (e: any[]) => void;
  pageState?: any;
  pagePublicState?: any;
  onDoubleClick?: React.MouseEventHandler<any>;
  onClick?: React.MouseEventHandler<any>
}


const Text = LingxiForwardRef<any, MyTextProps>((props, ref) => {
  const {
    name,
    visible = true,
    textType,
    style,
    textReg,
    version,
    showHtml,
    compType,
    onSelectedRowsRelease,
    onSelectedRowKeysRelease,
    onSelectedKeysRelease,
    onEditingKeyRelease,
    onInlineEditRelease,
    onInlineSaveRelease,
    onSelectedDataRelease,
    pageState,
    pagePublicState,
    content,
    onDoubleClick,
    onClick,
    ...restProps
  } = props;

  const events = useDoubleClick({
    clickName: 'onClick',
    doubleClickName: 'onDoubleClick',
    events: {
      onClick,
      onDoubleClick,
    },
  });

  /**
   * attrNbrInfo 静态数据的值，预处理的上报随后返回
   */

  const { customs, attrNbrInfo } = textReg || {};
  const getRegStr = (str: string) =>
    /^\/.+\/.*/g.test(str) ? str.replace(/^\//, '').replace(/\/$/g, '') : str;

  const getRegMap = (
    array: string[],
    originKey: any,
    targetKey: any,
  ): [Record<string, any>, string[]] => {
    const regExpMap: any = {};
    const regExpSort = [...array].sort(
      (a: any, b: any) => String(b[originKey]).length - String(a[originKey]).length,
    );
    regExpSort.forEach((c) => {
      regExpMap[getRegStr(c[originKey])] = c[targetKey];
    });
    return [regExpMap, regExpSort.map((c) => c[originKey])];
  };

  const getRegMapItem = (map: any, item: string) => {
    const key = Object.keys(map).find((c) => new RegExp(c).test(item)) || '';
    return map[key];
  };

  const getFinalStr = (array: string[], originKey: string, targetKey: string) => {
    const [customRegMap, customRegSort] = getRegMap(array, originKey, targetKey);
    const reStr = `(${customRegSort.join('|')})`;
    const newReg = new RegExp(reStr, 'g');
    const pcontent = typeof content === 'string' ? content : '';
    return pcontent.replace(newReg, (it) => customRegMap[it] || getRegMapItem(customRegMap, it));
  };
  const Ele: any = useMemo(() => {
    const _tag = textType?.toLowerCase();
    if (!_tag) {
      console.warn('文本控件：文本类型不能为空，将使用div进行展示');
      return 'div';
    }
    const htmlTextTag = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'a', 'p', 'q', 'strong', 'em', 'mark', 'time', 'meter', 'ruby', 'rt', 'rp', 'div', 'span'];
    if (!htmlTextTag.includes(_tag)) {
      console.warn(`文本控件：文本类型(${_tag})为非文本标签，将使用div进行展示`);
      return 'div';
    }
    return _tag;
  }, [textType]);
  const showContent = useMemo(() => {
    if (textReg) {
      if (Array.isArray(attrNbrInfo) && attrNbrInfo.length) {
        return attrNbrInfo?.length
          ? getFinalStr(attrNbrInfo, 'value', 'label')
          : content;
      }
      if (Array.isArray(customs) && customs.length) {
        return getFinalStr(customs, 'text', 'translation');
      }
    }
    return content;
  }, [content, attrNbrInfo]);


  // eslint-disable-next-line no-nested-ternary
  return visible ? (
    showHtml ? (
      <Ele
        style={{
          wordBreak: 'break-word',
          minHeight: '20px',
          whiteSpace: 'pre-wrap',
          ...style,
        }}
        dangerouslySetInnerHTML={{ __html: showContent }}
        data-compid={(props as any)?.['data-compid']}
        {...restProps}
        {...events}
      />
    ) : (
      <Ele
        style={{
          wordBreak: 'break-word',
          minHeight: '20px',
          whiteSpace: 'pre-wrap',
          ...style,
        }}
        data-compid={(props as any)?.['data-compid']}
        {...restProps}
        {...events}
      >
        {showContent}
      </Ele>
    )
  ) : null;
});

export default Text;
