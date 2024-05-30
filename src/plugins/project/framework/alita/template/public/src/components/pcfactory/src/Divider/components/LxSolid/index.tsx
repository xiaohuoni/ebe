import React, { useMemo } from 'react';
import classnames from 'classnames';
import styles from './index.module.less';

interface LxSolidProps {
  type?: string;
  dividerText?: string;
  showTitle?: boolean;
  style?: React.CSSProperties;
  customStyle?: React.CSSProperties; // 兼容旧数据
  orientation?: string;
  titleStyle?: React.CSSProperties;
  className?: string;
  dividerColor?: string;
}

export const dividerClsPrefix = 'ued-divider';

const LxSolid: React.FC<LxSolidProps> = (props) => {
  const { type = 'horizontal', dividerText, showTitle, style, customStyle, orientation, titleStyle, className, dividerColor, ...restProps } = props;
  const borderColor = useMemo(() => {
    if (dividerColor || style?.borderColor || customStyle?.borderColor) {
      return dividerColor || style?.borderColor || customStyle?.borderColor;
    }
    return '';
  }, [style?.borderColor, customStyle?.borderColor, dividerColor]);
  const lHeight = useMemo(() => {
    if (style?.height && String(style?.height).match('px')) {
      return style?.height;
    } if (type === 'horizontal') {
      // 水平默认1px
      return '1px';
    }
    return '20px';
  }, [style?.height, type]);
  if (type === 'horizontal' && dividerText && showTitle !== false) { // 有文字的情况
    let leftFlex = 1;
    let rightFlex = 1;
    switch (orientation) {
      case 'left':
        leftFlex = 1;
        rightFlex = 11;
        break;
      case 'center':
        leftFlex = 1;
        rightFlex = 1;
        break;
      case 'right':
        leftFlex = 11;
        rightFlex = 1;
        break;
      default:
        break;
    }
    return (
      <div style={{ ...style, ...customStyle }} className={classnames(`${dividerClsPrefix}`, `${dividerClsPrefix}-solid`, styles.solidDivider, className)} {...restProps}>
        <div className={`${dividerClsPrefix}-line ${dividerClsPrefix}-line-left`} style={{ flex: leftFlex, backgroundColor: borderColor, height: '1px' }} />
        <div className={classnames(`${dividerClsPrefix}-title`, styles.dividerText)} style={titleStyle}>{dividerText}</div>
        <div className={`${dividerClsPrefix}-line ${dividerClsPrefix}-line-right`} style={{ flex: rightFlex, backgroundColor: borderColor, height: '1px' }} />
      </div>);
  }

  return (
    <div style={{ ...style, ...customStyle }} className={classnames(`${dividerClsPrefix}`, `${dividerClsPrefix}-solid`, styles.solidDivider, className)} {...restProps}>
      <div className={`${dividerClsPrefix}-line`} style={{ backgroundColor: borderColor, height: lHeight, width: '100%' }} />
    </div>
  );
};
export default LxSolid;
