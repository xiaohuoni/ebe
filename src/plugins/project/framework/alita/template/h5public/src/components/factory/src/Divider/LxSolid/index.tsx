import classnames from 'classnames';
import React, { useMemo } from 'react';
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
}
const LxSolid: React.FC<LxSolidProps> = (props) => {
  const {
    type,
    dividerText,
    showTitle,
    style,
    customStyle,
    orientation,
    titleStyle,
    className,
    ...restProps
  } = props;
  const borderColor = useMemo(() => {
    if (style?.borderColor || customStyle?.borderColor) {
      return style?.borderColor || customStyle?.borderColor;
    }
    return 'rgba(0, 0, 0, 0.06)';
  }, [style?.borderColor, customStyle?.borderColor]);
  if (dividerText && showTitle && type === 'horizontal') {
    // 有文字的情况
    let leftWidth = '50%';
    let rightWidth = '50%';
    switch (
      orientation // 文字方向
    ) {
      case 'left':
        leftWidth = '5%';
        rightWidth = '95%';
        break;
      case 'center':
        leftWidth = '50%';
        rightWidth = '50%';
        break;
      case 'right':
        leftWidth = '95%';
        rightWidth = '5%';
        break;
      default:
        break;
    }
    return (
      <div
        {...restProps}
        style={{ ...style, ...customStyle }}
        className={classnames(styles.solidDivider, className)}
      >
        <div
          style={{
            width: leftWidth,
            backgroundColor: borderColor,
            height: style?.height,
          }}
        />
        <div className={styles.dividerText} style={titleStyle}>
          {dividerText}
        </div>
        <div
          style={{
            width: rightWidth,
            backgroundColor: borderColor,
            height: style?.height,
          }}
        />
      </div>
    );
  }

  return (
    <div
      style={{ backgroundColor: borderColor, ...style }}
      {...restProps}
      className={className}
    />
  );
};
export default LxSolid;
