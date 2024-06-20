import { LingxiForwardRef } from '@lingxiteam/types';
import { ProgressBar } from 'antd-mobile-5';
import classNames from 'classnames';
import { useMemo } from 'react';
import './index.less';

export interface MyProgressBarProps {
  visible: boolean;
  title?: string;
  style?: any;
  placement?: any;
  text?: boolean;
  percent?: any;
  showTitle?: boolean;
  color?: any;
  fontSize?: any;
  lineHeight?: any;
  fontWeight?: any;
  valueColor?: any;
  valueFontSize?: any;
  valueLineHeight?: any;
  valueFontWeight?: any;
  fillColor?: any;
  trackColor?: any;
  trackWidth?: any;
  extendProps: any;
}

const prefixCls = 'lcdp-adm-progressbar';

const MyProgressBar = LingxiForwardRef<any, MyProgressBarProps>(
  (props, ref) => {
    const {
      visible,
      fillColor,
      trackColor,
      title,
      style,
      placement,
      showTitle,
      color,
      fontSize,
      lineHeight,
      fontWeight,
      text,
      valueColor,
      valueFontSize,
      valueLineHeight,
      valueFontWeight,
      percent,
      trackWidth,
      extendProps,
      $$componentItem,
      getEngineApis,
      ...restProps
    } = props;
    const { width, height, ...restStyle } = style || {};
    // const [curPercent, setCurPercent] = useState(percent);
    // useImperativeHandle(ref, () => ({
    //   get value() {
    //     return curPercent;
    //   },
    //   setVal: (v: any) => {
    //     setCurPercent(v);
    //   },
    // }));
    // 标题
    const renderTitle = useMemo(
      () =>
        showTitle ? (
          <div
            className={`${prefixCls}-title`}
            style={{
              color,
              fontSize,
              lineHeight,
              fontWeight,
            }}
          >
            {title}
          </div>
        ) : null,
      [showTitle, title, color, fontSize, lineHeight, fontWeight],
    );
    // 数值
    const renderValue = useMemo(
      () =>
        text ? (
          <div
            className={`${prefixCls}-value`}
            style={{
              color: valueColor,
              fontSize: restStyle?.fontSize || valueFontSize,
              lineHeight: valueLineHeight,
              fontWeight: valueFontWeight,
            }}
          >
            {`${percent || ''}%`}
          </div>
        ) : null,
      [
        text,
        percent,
        valueColor,
        valueLineHeight,
        valueFontWeight,
        valueFontSize,
        restStyle?.fontSize,
      ],
    );
    // 进度条
    const renderProgress = () => (
      <ProgressBar
        {...restProps}
        percent={+percent}
        style={{
          '--fill-color': fillColor,
          '--track-color': trackColor,
          '--track-width': `${trackWidth || ''}px`,
          ...restStyle,
        }}
        {...extendProps}
      />
    );
    if (!visible) {
      return <></>;
    }
    return (
      <div
        className={classNames({
          [`${prefixCls}-wrapper`]: true,
          [`${prefixCls}-wrapper-vertical`]: placement === 'vertical',
        })}
        style={{ ...restStyle, width, height }}
      >
        {placement === 'vertical' ? (
          <>
            <div className={`${prefixCls}-context`}>
              {renderTitle}
              {renderValue}
            </div>
            {renderProgress()}
          </>
        ) : (
          <>
            {renderTitle}
            {renderProgress()}
            {renderValue}
          </>
        )}
      </div>
    );
  },
);

MyProgressBar.defaultProps = {
  extendProps: {},
};

export default MyProgressBar;
