import React from 'react';
import LxDashed from './components/LxDashed';
import LxSolid from './components/LxSolid';
import LeftTopDivider from './components/LeftTopDivider';
import LeftTabDivider from './components/LeftTabDivider';
import LeftLineDivider from './components/LeftLineDivider';
import LeftCardDivider from './components/LeftCardDivider';
import CenterTabDivider from './components/CenterTabDivider';
import CenterLineDivider from './components/CenterLineDivider';

export interface MyDividerProps {
  visible: any;
  dividerText?: string;
  onSelectedRowsRelease?: (e: any[]) => void;
  onSelectedRowKeysRelease?: (e: any[]) => void;
  onSelectedKeysRelease?: (e: any[]) => void;
  onEditingKeyRelease?: (e: any[]) => void;
  onInlineEditRelease?: (e: any) => void;
  onInlineSaveRelease?: (e: any) => void;
  onSelectedDataRelease?: (e: any[]) => void;
  pageState?: any;
  pagePublicState?: any;
  type?: string;
  width?: number;
  height?: number;
  style?: React.CSSProperties;
  customStyle?: React.CSSProperties;
  basicStatus?: string;
  dashed?: boolean;
  showTitle?: boolean;
  titleColor?: string;
  titleFontSize?: string;
  titleLineHeight?: string;
  titleFontWeight?: string;
  dashedWidth?: number;
  dashedMargin?: number;
}

const MyDivider: React.FC<MyDividerProps> = (props) => {
  const {
    visible = true,
    dividerText,
    onSelectedRowsRelease,
    onSelectedRowKeysRelease,
    onSelectedKeysRelease,
    onEditingKeyRelease,
    onInlineEditRelease,
    onInlineSaveRelease,
    onSelectedDataRelease,
    pageState,
    pagePublicState,
    type,
    style,
    customStyle,
    basicStatus,
    dashed,
    showTitle,
    titleColor,
    titleFontSize,
    titleLineHeight,
    titleFontWeight,
    dashedWidth = 4,
    dashedMargin = 4,
    ...restProps
  } = props;

  if (!visible) {
    return null;
  }

  const dividerStyle = () => {
    let s = { ...style, ...customStyle };
    if (type === 'vertical') { // 设置默认值
      s = { width: '1px', height: '12px', ...s };// 垂直
    } else {
      s = { width: '100%', height: '1px', ...s };// 水平
    }
    return s;
  };
  const titleStyle = () => {
    // 兼容旧数据，新的字体去掉该属性
    if (titleLineHeight) {
      return {
        color: titleColor,
        fontSize: titleFontSize,
        lineHeight: titleLineHeight,
        fontWeight: titleFontWeight,
      };
    }
    return {
      color: titleColor,
      fontSize: titleFontSize,
      fontWeight: titleFontWeight,
    };
  };
  const dividerView = () => {
    if (`${basicStatus}` === '2') {
      return null;
    }
    switch (`${dashed}`) {
      case 'true':
        if (type === 'horizontal') {
          return <LxDashed
            showTitle={showTitle}
            dividerText={dividerText}
            titleStyle={titleStyle()}
            dashedWidth={dashedWidth}
            dashedMargin={dashedMargin}
            customStyle={customStyle}
            style={dividerStyle()}
            {...restProps}
          />;
        }
        return <LxSolid
          showTitle={showTitle}
          dividerText={dividerText}
          style={dividerStyle()}
          type={type}
          titleStyle={titleStyle()}
          {...restProps}
        />;
          
      case 'leftTop':
        return <LeftTopDivider
          titleStyle={titleStyle()}
          showTitle={showTitle}
          dividerText={dividerText}
          style={style}
          customStyle={customStyle}
          {...restProps}
        />;
      case 'leftTab':
        return <LeftTabDivider
          titleStyle={titleStyle()}
          showTitle={showTitle}
          dividerText={dividerText}
          style={style}
          customStyle={customStyle}
          {...restProps}
        />;
      case 'leftCard':
        return <LeftCardDivider
          titleStyle={titleStyle()}
          showTitle={showTitle}
          dividerText={dividerText}
          style={style}
          customStyle={customStyle}
          {...restProps}
        />;
      case 'leftLine':
        return <LeftLineDivider
          titleStyle={titleStyle()}
          showTitle={showTitle}
          dividerText={dividerText}
          style={style}
          customStyle={customStyle}
          {...restProps}
        />;
      case 'centerTab':
        return <CenterTabDivider
          titleStyle={titleStyle()}
          showTitle={showTitle}
          dividerText={dividerText}
          style={style}
          customStyle={customStyle}
          {...restProps}
        />;
      case 'centerLine':
        return <CenterLineDivider
          titleStyle={titleStyle()}
          showTitle={showTitle}
          dividerText={dividerText}
          style={style}
          customStyle={customStyle}
          {...restProps}
        />;
      default:
        return <LxSolid
          showTitle={showTitle}
          dividerText={dividerText}
          style={dividerStyle()}
          type={type}
          titleStyle={titleStyle()}
          {...restProps}
        />;
    }
  };
  return <>{dividerView()}</>;
};

export default MyDivider;
