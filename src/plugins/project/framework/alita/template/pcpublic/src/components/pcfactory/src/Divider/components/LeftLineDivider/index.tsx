import classnames from 'classnames';
import React, { useMemo } from 'react';

interface LeftLineDividerProps {
  showTitle?: boolean;
  dividerText?: string;
  titleStyle?: React.CSSProperties;
  className?: string;
  dividerColor?: string;
  customStyle?: React.CSSProperties;
  style?: React.CSSProperties;
}

const dividerClsPrefix = 'ued-divider-leftLine';

const LeftLineDivider: React.FC<LeftLineDividerProps> = (props) => {
  const {
    showTitle,
    dividerText,
    titleStyle,
    className,
    dividerColor = '',
    style,
    customStyle,
    ...restProps
  } = props;
  // 高度需为px 分割线的样式才会生效
  const dividerHeight = useMemo(() => {
    const heigth = style?.height ? `${style?.height}` : '';
    if (heigth?.match('px')) {
      const _height = parseInt(heigth?.split('px')[0], 10);
      // 按照设计稿，标题后面3块区域和组件的高度相差10，所以最低高度应当为10
      if (_height < 10) {
        return '10px';
      }
      return style?.height;
    }
    // 默认值
    return '32px;';
  }, [style?.height]);
  const rigthView = (classNameStr: string) => {
    const heigth = `${dividerHeight}`;
    const _height = heigth?.indexOf('px')
      ? parseInt(heigth?.split('px')[0], 10) - 5
      : 27;
    if (classNameStr === 'triangle') {
      return (
        <div
          className={`${dividerClsPrefix}-right-${classNameStr}`}
          style={
            dividerColor
              ? {
                  borderBottomColor: dividerColor,
                  borderBottomWidth: _height,
                }
              : { borderBottomWidth: _height }
          }
        />
      );
    }
    if (classNameStr === 'line') {
      return (
        <div
          className={`${dividerClsPrefix}-right-${classNameStr}`}
          style={{ borderColor: dividerColor }}
        />
      );
    }
    // 标题右侧三块区域
    return (
      <div
        className={`${dividerClsPrefix}-right-${classNameStr}`}
        style={{
          backgroundColor: dividerColor,
          height: _height <= 5 ? 0 : `${_height - 5}px`,
        }}
      />
    );
  };
  return (
    <div
      style={{ ...style, ...customStyle, height: dividerHeight }}
      className={classnames(dividerClsPrefix, className)}
      {...restProps}
    >
      <div
        className={`${dividerClsPrefix}-label`}
        style={{
          ...titleStyle,
          backgroundColor: dividerColor,
          lineHeight: dividerHeight,
        }}
      >
        {showTitle && dividerText ? <span>{dividerText}</span> : null}
      </div>
      <div className={`${dividerClsPrefix}-right`}>
        {rigthView('triangle')}
        {rigthView('line')}
        {rigthView('parallelogram1')}
        {rigthView('parallelogram2')}
        {rigthView('parallelogram3')}
      </div>
    </div>
  );
};
export default LeftLineDivider;
