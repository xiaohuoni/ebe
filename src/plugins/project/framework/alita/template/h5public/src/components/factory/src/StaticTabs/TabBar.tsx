import Tabs from './Tabs';

import type { FC } from 'react';
import React, { useRef } from 'react';
import type { PropsType } from 'rmc-tabs/es/DefaultTabBar';
import { useRefs } from '../utils/hooks/useRefs';
import './index.less';

const prefixCls = 'appTabs';
export interface TabBarProps extends PropsType {
  initialPage?: string | number;
  underlineType?: 'default' | 'custom' | 'fitTextWidth';
  underlineWidth?: string;
  onGoToTab?: (tab: number) => void;
  style: React.CSSProperties;
  isEd: boolean;
  page: number;
  realTablength: number;
  renderIcon: (p: Record<string, any>) => React.ReactNode;
}

const TabBar: FC<TabBarProps> = (props) => {
  const {
    underlineType = 'default',
    underlineWidth,
    onGoToTab = () => {},
    style,
    tabBarPosition,
    renderIcon,
    ...restProps
  } = props;
  const { refs, setRefs } = useRefs();
  const tabBarRef = useRef<any>(null);
  const [active, setActive] = React.useState(
    +(props.activeTab || props.initialPage || 0),
  );
  const getStyle = (width: number, defaultStyle: React.CSSProperties) => {
    const style = defaultStyle;
    const tabbarSize =
      tabBarRef.current?.layout?.getBoundingClientRect?.() || {};
    // 下划线居中
    if (tabBarPosition === 'left' || tabBarPosition === 'right') {
      const barSize = tabbarSize.height / props.tabs.length;
      // 若点击的是虚拟tab，则返回
      style.height = width;
      style.top = +active * barSize + (barSize - width) / 2;
      return style;
    }
    const barSize = tabbarSize.width / props.tabs.length;
    style.left = +active * barSize + (barSize - width) / 2;
    style.width = width;
    return style;
  };

  const getUnderlineStyle = (
    defaultStyle: React.CSSProperties,
  ): React.CSSProperties => {
    const style = defaultStyle;
    if (underlineType === 'default') {
      return defaultStyle;
    }
    if (underlineType === 'custom') {
      return getStyle(underlineWidth ? parseFloat(underlineWidth) : 0, style);
    }

    if (refs.length > active) {
      const { width, height }: DOMRect = (
        refs[active]?.ref as HTMLDivElement
      )?.getBoundingClientRect();
      return getStyle(
        tabBarPosition === 'left' || tabBarPosition === 'right'
          ? height
          : width,
        style,
      );
    }
    return style;
  };

  const goToTab = (index: number) => {
    if (index < props.realTablength) {
      setActive(index);
      onGoToTab(index);
    }
  };

  return (
    <Tabs.DefaultTabBar
      {...restProps}
      tabBarPosition={tabBarPosition}
      ref={tabBarRef}
      goToTab={goToTab}
      renderTab={(tabProps) => {
        if (!tabProps.id) return null;
        const { icon = {} } = tabProps;
        return (
          <span
            className={`${prefixCls}-tabBarWrapper`}
            ref={(ref) => {
              if (ref) {
                setRefs(`tabbar_${tabProps.id}`, ref);
              }
            }}
          >
            {/* {props.isEd ? <IconED {...icon} /> : <Icon {...icon} />} */}
            {renderIcon(icon)}
            <span className={`${prefixCls}-span`}> {tabProps.title}</span>
          </span>
        );
      }}
      renderUnderline={({ style, className }) => {
        return <div className={className} style={getUnderlineStyle(style)} />;
      }}
    />
  );
};

export default TabBar;
