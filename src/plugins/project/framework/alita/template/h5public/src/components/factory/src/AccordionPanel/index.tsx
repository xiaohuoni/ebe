import { LingxiForwardRef } from '@lingxiteam/types';
import React, { useEffect, useRef, useState } from 'react';
import RuntimeContainer from '../utils/ChannelContainer';
import useStyle from '../View/useStyle';

const { withChannelItem } = RuntimeContainer;
export interface MyAccordionPanelProps {
  visible: boolean;
  cardIconType: string;
  prefixIconType: string;
  prefixIconTheme: any;
  prefixIconIsIconFont: boolean;
  prefixIconFontAddress: string;
  titleColor: string;
  headerColor?: string;
  header?: React.ReactNode | string;
  fontSize?: number;
  bordered?: boolean;
  key: string;
  src?: string;
  fileCode?: string;
  backgroundType: any;
  setChildrenProps: (props: Record<string, any>) => void;
  extendProps: Record<string, any>;
}
const prefixCls = 'lcdp-accordion';
const MyAccordionPanel = LingxiForwardRef<any, MyAccordionPanelProps>(
  (props, ref) => {
    const {
      visible = true,
      children,
      src,
      fileCode,
      backgroundType = {},
      getEngineApis,
    } = props;
    const [imgSrc, setImgSrc] = useState<string>();
    const { getAppFileUrlByFileCode } = getEngineApis();

    useEffect(() => {
      if (backgroundType.image || fileCode) {
        setImgSrc(
          getAppFileUrlByFileCode(backgroundType.image || fileCode, {}),
        );
      }
    }, [backgroundType, src, fileCode]);
    const viewRef = useRef();
    const resultStyle = useStyle(
      {
        ...props,
        src: imgSrc,
      },
      viewRef,
    );
    return visible ? (
      <div className={`${prefixCls}-border-none`} style={resultStyle}>
        {children}
      </div>
    ) : null;
  },
);

MyAccordionPanel.defaultProps = {
  extendProps: {},
  visible: true,
};

export default withChannelItem(MyAccordionPanel, {
  keyPath: ['visible', 'header', 'extendProps'],
});
