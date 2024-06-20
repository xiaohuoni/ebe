import React from 'react';
import { AppForwardRef } from '../BasicComponents';
import './index.less';

const prefixCls = 'lcdp-card-footer';
export interface MyCardFooterProps {
  isContainer?: boolean;
  style: React.CSSProperties;
  content?: React.ReactNode | string;
  extra?: React.ReactNode | string;
  cardType?: string;
  showFooter?: boolean;
  visible?: boolean;
  customStyle?: any;
}

const CardFooter = AppForwardRef<MyCardFooterProps>((props, ref) => {
  const {
    children,
    content = '',
    extra = '',
    cardType = '1',
    showFooter = true,
    style,
    isContainer,
    visible,
  } = props;

  if (!visible) {
    return <></>;
  }
  if (!isContainer) {
    // 兼容旧数据
    return (
      <div className={`${prefixCls}-old-date-cell`}>
        <div>{content}</div>
        <div>{extra}</div>
      </div>
    );
  }
  return (
    <>
      {showFooter ? (
        <div
          className={
            `${cardType}` === '1'
              ? `${prefixCls}-draw-box-border`
              : `${prefixCls}-draw-box`
          }
          style={style}
        >
          {children}
        </div>
      ) : null}
    </>
  );
});

CardFooter.displayName = 'CardFooter';

export default CardFooter;
