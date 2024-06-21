import { LingxiForwardRef } from '@lingxiteam/types';
import { SideBar } from 'antd-mobile-5';
import classNames from 'classnames';
import { useCallback, useEffect, useImperativeHandle, useState } from 'react';
import './index.less';
import { SideBarProps, SideBarTabsProps } from './PropsType';
import TabPage from './TabPage';

const prefixCls = 'appSideBar';
const MySideBar = LingxiForwardRef<any, SideBarProps>((props, ref) => {
  const {
    className,
    tabs,
    style,
    getEngineApis,
    $$componentItem,
    lcdpParentRenderId,
    defaultSideBarActiviteKey,
    onChange,
  } = props;
  const {
    tabBarWidth,
    tabBarHeight,
    tabBarBackgroundColor = '',
    tabBarActiveTextColor = '',
    tabBarInactiveTextColor = '',
    tabPointerColor = '',
    tabBarActiveBackgroundColor = '',
    tabBarTextFont,
    tabItemBorderRadius,
  } = style;
  const [activeKey, setActiveKey] = useState<string | undefined>();
  const [reloadPageKey, setReloadPageKey] = useState<string | undefined>();
  const [finalTabs, setFinalTabs] = useState<any[]>([]);
  const { px2rem } = getEngineApis();

  const customTitle = useCallback(
    (item: { key: string | number; title: string }) => {
      const textColor =
        item.key === activeKey
          ? tabBarActiveTextColor
          : tabBarInactiveTextColor;
      return <div style={{ color: textColor }}>{item?.title || item.key}</div>;
    },
    [tabBarActiveTextColor, tabBarInactiveTextColor, activeKey],
  );

  const onSideBarChange = (key: string) => {
    setActiveKey(key);
    if (onChange) {
      onChange(key);
    }
  };

  const tabReloadPage = (key: string) => {
    setReloadPageKey(`${key}--##sideBarKey##--${Date.now()}`);
  };

  useImperativeHandle(ref, () => ({
    reloadPage: tabReloadPage,
  }));

  useEffect(() => {
    // finalTabs用于展示可显示的侧栏数量，tabs用作右侧页面的缓存，防止页面设置为可显示的时候又重新加载已显示的页面。
    const pages: any[] = [];
    let selectPageId = defaultSideBarActiviteKey;
    tabs?.forEach((item: SideBarTabsProps) => {
      const newItem = { ...item };
      if (!item.hasOwnProperty('isShow') || item.isShow !== false) {
        if (!selectPageId && !item?.disabled) {
          selectPageId = item.key;
        }
        newItem.isShow = true;
        pages.push(newItem);
      }
    });
    setFinalTabs(pages);
    setActiveKey(selectPageId);
  }, [tabs, defaultSideBarActiviteKey]);

  return (
    <div className={classNames(`${prefixCls}-wrap`, className)}>
      {Array.isArray(tabs) && tabs?.length ? (
        <div
          className="my-side-container"
          style={px2rem({
            '--my-side-bar-pointer-color':
              tabPointerColor || 'var(--adm-color-primary)',
            '--my-side-bar-active-bg-color':
              tabBarActiveBackgroundColor || 'var(--adm-color-background)',
            '--my-side-bar-font-size':
              `${tabBarTextFont}px` || 'var(--adm-font-size-main)',
          })}
        >
          <div className="side">
            <SideBar
              activeKey={activeKey}
              onChange={onSideBarChange}
              style={px2rem({
                '--width': tabBarWidth,
                '--height': tabBarHeight,
                '--background-color': tabBarBackgroundColor,
                '--item-border-radius': `${tabItemBorderRadius || 8}px`,
              })}
            >
              {finalTabs.map((item: SideBarTabsProps) => (
                <SideBar.Item
                  key={item.key}
                  title={customTitle(item)}
                  badge={Number(item?.badge) > 99 ? '99+' : Number(item?.badge)}
                  disabled={item?.disabled}
                />
              ))}
            </SideBar>
          </div>
          <div className="main">
            {tabs.map((item: SideBarTabsProps, index: number) => (
              <div
                className={classNames(
                  'content',
                  activeKey === item.key && 'active',
                )}
              >
                <TabPage
                  getEngineApis={getEngineApis}
                  $$componentItem={$$componentItem}
                  activeKey={activeKey}
                  lcdpParentRenderId={lcdpParentRenderId}
                  item={item}
                  index={index}
                  reloadPageKey={reloadPageKey}
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="my-side-bar-body">
          {Array.isArray(tabs) ? (
            <span>组件未配置页面</span>
          ) : (
            <span>组件面板设置数据格式错误</span>
          )}
        </div>
      )}
    </div>
  );
});

export default MySideBar;
