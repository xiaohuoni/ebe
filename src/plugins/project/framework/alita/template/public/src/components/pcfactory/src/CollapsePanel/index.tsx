import React, { useEffect, useRef } from 'react';
import { Collapse } from 'antd';
import type { CollapsePanelProps } from 'antd/lib/collapse';
import CommIcon from '../Icon';
import type { PrefixIconIconProps } from '../Icon/PropsType';
import useBackgroundStyle from '../View/useBackgroundStyle';
import { useChildRenderContext } from '../utils';
import { LingxiForwardRef } from '@lingxiteam/types';
import { useUpdateEffect } from '../utils/ahooks';


const { Panel } = Collapse;

export interface MyCollapsePanelProps extends CollapsePanelProps {
  hasIcon?: boolean;
  visible: boolean;
  cardIconType: string;
  titleColor: string;
  headerColor?: string;
  backgroundType?: any;
  appId?: string;
  prefixIcon?: PrefixIconIconProps;
  getEngineApis?: any;
}

const CollapsePanel = LingxiForwardRef<any, MyCollapsePanelProps>((props, ref) => {
  const {
    visible = true,
    children,
    header,
    style,
    backgroundType,
    getEngineApis,
    ...restProps
  } = props;
  const { appId } = props.$$componentItem;
  const childRenderContext = useChildRenderContext();

  const {
    hasIcon,
    cardIconType,
    prefixIcon = {},
    titleColor,
    headerColor,
    style: parentStyle,
  } = childRenderContext.parentProps || {};

  const { currentIndex, props: currentProps } = childRenderContext?.getCurrentData?.(props.$$componentItem.uid) || {
    currentIndex: 0,
    props: {},
  };

  const renderRef = useRef<any>();

  const engineApis = getEngineApis?.() || {};

  const { backgroundStyle } = useBackgroundStyle({ engineApis, backgroundType, appId, mode: 'engine' });
  const renderHeader = () => {
    const headStyle: { backgroundColor?: string } = {};
    if (headerColor) {
      headStyle.backgroundColor = headerColor;
    }
    const panelHeader = titleColor ? <div style={{ color: titleColor }}>{header}</div> : header;

    if (hasIcon || cardIconType) {
      // 兼容存量数据中没有设置标题样式的
      switch (cardIconType) {
        case 'middle':
          return (
            <div className="ued-collapse-panel-header" style={headStyle}>
              {panelHeader}
            </div>
          );
        case 'left':
          return (
            <div
              style={headStyle}
              className="ued-collapse-panel-header ued-collapse-panel-header-icon-left"
            >
              {panelHeader}
            </div>
          );
        case 'auto': {
          const {
            prefixIconType,
            prefixIconTheme,
            prefixIconIsIconFont,
            prefixIconFontAddress,
            prefixIconiconFile,
            prefixIconIconFileInfo,
          } = prefixIcon;

          return (
            <div
              style={headStyle}
              className="ued-collapse-panel-header ued-collapse-panel-header-icon-auto"
            >
              <CommIcon
                icon={{
                  type: prefixIconType,
                  theme: prefixIconTheme,
                  isIconFont: prefixIconIsIconFont,
                  fontAddress: prefixIconFontAddress,
                  iconFile: prefixIconiconFile,
                  iconFileInfo: prefixIconIconFileInfo,
                }}
                engineApis={engineApis}
                getEngineApis={getEngineApis}
                $$componentItem={props.$$componentItem}
                className=""
              />
              {panelHeader}
            </div>
          ); }
        case 'none':
          return (
            <div style={headStyle} className="ued-collapse-panel-header-default">
              {panelHeader}
            </div>
          );
        default:
          return (
            <div style={headStyle} className="ued-collapse-panel-header">
              {panelHeader}
            </div>
          );
      }
    } else {
      return (
        <div style={headStyle} className="ued-collapse-panel-header-default">
          {panelHeader}
        </div>
      );
    }
  };


  renderRef.current = visible ? (
    <Panel
      {...restProps}
      header={renderHeader()}
      key={currentProps?.key ?? currentIndex}
    >
      <div style={{ ...backgroundStyle, padding: parentStyle?.padding, ...style }} className="ued-collapse-pane-content">
        {children}
      </div>
    </Panel>
  ) : null;

  useEffect(() => {
    childRenderContext.collectChildren?.(
      props.$$componentItem.uid,
      renderRef
    );
  }, []);

  useUpdateEffect(() => {
    // 监听需要更新的属性
    childRenderContext.update?.();
  }, [visible]);

  return null;
});

export default CollapsePanel;
