import { LingxiForwardRef } from '@lingxiteam/types';
import { Badge, Tabs } from 'antd';
import classNames from 'classnames';
import React, { useEffect, useImperativeHandle, useState } from 'react';
import { useHiddenStyle } from '../utils';
import CustomModule from '../utils/CustomModule';
import { DynamicTabsProps, TabsItemProps } from './PropsType';
import TabPage from './TabPage';

const MyDynamicTabs = LingxiForwardRef<any, DynamicTabsProps>((props, ref) => {
  const {
    $$componentItem,
    className,
    getEngineApis,
    lcdpParentRenderId,
    style,
    tabItems,
    type,
    defaultActiveKey,
    tabBarGutter,
    tabPosition,
    size,
    _component,
    animated,
    visible = true,
    onTabChange,
    onTabDeleteChange,
  } = props;
  const { margin, pagePadding, width, height } = style;

  const { sandBoxLoadModule } = getEngineApis();

  const [myTabItems, setMyTabItems] = useState<any[]>([]);
  const [finallyTabItems, setFinallyTabItems] = useState<any[]>([]);
  const [activeKey, setActiveKey] = useState<string>();
  const [reloadPageKey, setReloadPageKey] = useState<string | undefined>();
  // console.log('tabs:', props);

  const finalStyle = useHiddenStyle(visible, { margin, width, height });

  useImperativeHandle(ref, () => ({
    // 设置面板选中
    setActiveKey: (key: any) => {
      setActiveKey(key);
    },
    // 新增面板
    addTabs: (tabs: any[]) => {
      if (Array.isArray(tabs)) {
        let array = myTabItems.concat(tabs);
        // 查询一下新增的面板key是否与旧的相同
        const seen: any = {};
        array = array.filter((item) => {
          return seen.hasOwnProperty(item.key)
            ? false
            : (seen[item.key] = true);
        });
        setMyTabItems(array);
      }
    },
    // 关闭某些面板
    closeTabs: (tabsKey: any[]) => {
      const array = myTabItems.filter((item) => !tabsKey?.includes(item.key));
      setMyTabItems(array);
    },
    // 重载面板页面
    reloadTab: (key: string) => {
      setReloadPageKey(`${key}--##DynimicTabsKey##--${Date.now()}`);
    },
  }));

  const getTabItems = (tabsData: any[]) => {
    const items: any[] = [];
    if (Array.isArray(tabsData)) {
      tabsData.forEach((item: TabsItemProps, index) => {
        const { label, key, pagePath, badge, badgeRendering, disabled } = item;
        let itemChildren = (
          <div style={{ padding: pagePadding }}>
            面板未配置页面，请到面板设置中进行配置
          </div>
        );
        let itemLabel: any = label;

        if (pagePath?.length) {
          itemChildren = (
            <div style={{ padding: pagePadding }}>
              <TabPage
                getEngineApis={getEngineApis}
                $$componentItem={$$componentItem || {}}
                activeKey={activeKey}
                lcdpParentRenderId={lcdpParentRenderId || ''}
                item={item}
                index={index}
                reloadPageKey={reloadPageKey}
              />
            </div>
          );
        }

        if (badgeRendering && typeof (item as any)?.jsx === 'object') {
          itemLabel = (
            <div style={{ position: 'relative' }}>
              {label}
              <CustomModule
                sandBoxLoadModule={sandBoxLoadModule}
                errorInfo={{ id: _component?.id }}
                code={badgeRendering}
                compProps={{
                  text: badge,
                  item: {
                    badge,
                    label,
                  },
                  index,
                }}
              />
            </div>
          );
        } else {
          itemLabel = (
            <div style={{ position: 'relative', display: 'flex' }}>
              {itemLabel}
              <Badge
                count={badge}
                overflowCount={999}
                style={{ position: 'absolute', top: '-8px', right: '-20px' }}
              />
            </div>
          );
        }

        if (!item.hasOwnProperty('isShow') || item.isShow !== false) {
          items.push({
            label: itemLabel,
            key: String(key),
            disabled,
            children: itemChildren,
          });
        }
      });
    }

    return items;
  };

  useEffect(() => {
    setMyTabItems(tabItems);
  }, [tabItems]);

  // 更新Tab的Items数据
  useEffect(() => {
    const items = getTabItems(myTabItems);
    setFinallyTabItems(items);
  }, [myTabItems, pagePadding, activeKey, reloadPageKey]);

  // 设置默认选中项
  useEffect(() => {
    if (defaultActiveKey) {
      setActiveKey(defaultActiveKey);
    } else {
      const activeItem = tabItems?.find((c: TabsItemProps) => {
        if (
          (!c.hasOwnProperty('isShow') || c.isShow !== false) &&
          !c.disabled
        ) {
          return true;
        }
        return false;
      });
      setActiveKey(activeItem?.key);
    }
  }, [defaultActiveKey]);

  return (
    <div
      className={classNames(
        'ued-dynamic-tabs-wrap',
        'ued-tabs-wrap',
        className,
      )}
      style={finalStyle}
    >
      <Tabs
        hideAdd
        animated={animated}
        items={finallyTabItems}
        type={type}
        activeKey={activeKey}
        tabBarGutter={tabBarGutter}
        tabPosition={tabPosition}
        size={size}
        onChange={(key: string) => {
          setActiveKey(key);
          if (onTabChange) {
            const item = myTabItems?.find((item) => item.key === String(key));
            onTabChange(key, item);
          }
        }}
        onEdit={(key: any, action: string) => {
          if (action === 'remove') {
            const items = myTabItems?.filter(
              (item) => item.key !== String(key),
            );
            setMyTabItems(items);
            if (type === 'editable-card' && onTabDeleteChange) {
              onTabDeleteChange(key);
            }
          }
        }}
      />
    </div>
  );
});

export default MyDynamicTabs;
