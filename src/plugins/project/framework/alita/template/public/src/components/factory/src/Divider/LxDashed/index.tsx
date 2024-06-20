import classnames from 'classnames';
import React, { useMemo } from 'react';
import styles from './index.module.less';

interface MyDashedProps {
  showTitle?: boolean;
  dividerText?: string;
  titleStyle?: React.CSSProperties;
  dashedWidth?: number;
  dashedMargin?: number;
  customStyle?: React.CSSProperties;
  style?: React.CSSProperties;
  orientation?: string;
  className?: string;
}

const LxDashed: React.FC<MyDashedProps> = (props) => {
  const {
    showTitle,
    dividerText,
    dashedMargin = 4,
    dashedWidth = 4,
    customStyle,
    style,
    titleStyle,
    orientation = 'center',
    className,
    ...restProps
  } = props;
  const backgroundStyle: React.CSSProperties = useMemo(() => {
    const bWidth = dashedWidth + dashedMargin;
    const color =
      style?.borderColor || customStyle?.borderColor || 'rgba(0, 0, 0, 0.06)'; // customStyle 旧数据
    const widthPercent = `${((dashedWidth / bWidth) as any).toFixed(6) * 100}%`;
    const height = style?.height || '1px';
    const curStyle = {
      height,
      backgroundImage: `linear-gradient(90deg, ${color} 0%, ${color} ${widthPercent}, #fff ${widthPercent}, #fff 100%)`,
      backgroundSize: `${bWidth}px ${height}`,
      backgroundRepeat: 'repeat-x',
    };
    return curStyle;
  }, [
    dashedMargin,
    dashedWidth,
    customStyle?.borderColor,
    style?.borderColor,
    style?.height,
  ]);
  if (showTitle && dividerText) {
    // 显示标题
    let leftWidth = '50%';
    let rightWidth = '50%';
    switch (orientation) {
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
        style={{ width: style?.width || 'auto', ...style }}
        {...restProps}
        className={classnames(styles.dashedDivider, className)}
      >
        <div style={{ ...backgroundStyle, width: leftWidth }} />
        <div className={styles.dividerText} style={titleStyle}>
          {dividerText}
        </div>
        <div style={{ ...backgroundStyle, width: rightWidth }} />
      </div>
    );
  }
  return (
    <div
      {...restProps}
      style={{ ...backgroundStyle, ...style }}
      className={className}
    />
  );
};
export default LxDashed;
