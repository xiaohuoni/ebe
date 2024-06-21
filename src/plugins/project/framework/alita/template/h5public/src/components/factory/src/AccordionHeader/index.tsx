import React from 'react';
import { AppForwardRef } from '../BasicComponents';

export interface MyAccordionHeaderProps {
  title?: string;
  subTitle?: string;
  titleKey: string;
  subTitleKey: string;
  titleStyle?: React.CSSProperties;
  subTitleStyle?: React.CSSProperties;
}

const prefixCls = 'lcdp-accordion';
const AccordionHeader = AppForwardRef<MyAccordionHeaderProps>((props, ref) => {
  const {
    title,
    subTitle,
    titleKey,
    subTitleKey,
    titleStyle,
    subTitleStyle,
    children,
  } = props;
  return children ? (
    <>{children}</>
  ) : (
    <div className={`${prefixCls}-header`} style={{ fontSize: '15px' }}>
      <div className={`${prefixCls}-title`} style={titleStyle}>
        {/** @ts-ignore */}
        {title || props[titleKey]}
      </div>
      <div className={`${prefixCls}-subTitle`} style={subTitleStyle}>
        {/** @ts-ignore */}
        {subTitle || props[subTitleKey]}
      </div>
    </div>
  );
});

AccordionHeader.displayName = 'AccordionHeader';

export default AccordionHeader;
