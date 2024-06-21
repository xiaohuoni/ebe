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
  dividerColor?: string; // 新增属性
}

export const dividerClsPrefix = 'ued-divider';

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
    dividerColor,
    ...restProps
  } = props;
  // 虚线的颜色
  const dashedColor = useMemo(() => {
    const color =
      dividerColor || style?.borderColor || customStyle?.borderColor || ''; // customStyle 旧数据
    return color;
  }, [
    customStyle?.borderColor,
    style?.borderColor,
    style?.height,
    dividerColor,
  ]);
  const backgroundStyle: React.CSSProperties = useMemo(() => {
    const bWidth = dashedWidth + dashedMargin;
    const widthPercent = `${((dashedWidth / bWidth) as any).toFixed(6) * 100}%`;
    // const height = style?.height && String(style?.height).match('px') ? style?.height : '1px';
    const height = '1px';
    const curStyle = {
      height,
      backgroundSize: `${bWidth}px ${height}`,
      backgroundRepeat: 'repeat-x',
    };
    return dashedColor
      ? {
          ...curStyle,
          backgroundImage: `linear-gradient(90deg, ${dashedColor} 0%, ${dashedColor} ${widthPercent}, transparent ${widthPercent}, transparent 100%)`,
        }
      : {
          ...curStyle,
          backgroundImage: `linear-gradient(90deg, #fff 0%, #fff ${widthPercent}, transparent ${widthPercent}, transparent 100%)`,
        };
  }, [dashedMargin, dashedWidth, dashedColor]);
  if (showTitle !== false && dividerText) {
    // 显示标题
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
      <div
        style={{ width: style?.width || 'auto', ...style }}
        className={classnames(
          dividerClsPrefix,
          `${dividerClsPrefix}-dashed`,
          styles.dashedDivider,
          className,
        )}
        {...restProps}
      >
        <div
          className={classnames(
            `${dividerClsPrefix}-line`,
            `${dividerClsPrefix}-line-left`,
            dashedColor ? '' : `${dividerClsPrefix}-defautl-bg`,
          )}
          style={{ ...backgroundStyle, flex: leftFlex }}
        />
        <div
          className={classnames(
            `${dividerClsPrefix}-title`,
            styles.dividerText,
          )}
          style={titleStyle}
        >
          {dividerText}
        </div>
        <div
          className={classnames(
            `${dividerClsPrefix}-line`,
            `${dividerClsPrefix}-line-right`,
            dashedColor ? '' : `${dividerClsPrefix}-defautl-bg`,
          )}
          style={{ ...backgroundStyle, flex: rightFlex }}
        />
      </div>
    );
  }
  return (
    <div
      style={{ width: style?.width || 'auto', ...style }}
      className={classnames(
        `${dividerClsPrefix}`,
        `${dividerClsPrefix}-solid`,
        styles.solidDivider,
        className,
      )}
      {...restProps}
    >
      <div
        className={`${dividerClsPrefix}-line`}
        style={{ height: '1px', width: '100%', ...backgroundStyle }}
        {...restProps}
      />
    </div>
  );
};
export default LxDashed;
