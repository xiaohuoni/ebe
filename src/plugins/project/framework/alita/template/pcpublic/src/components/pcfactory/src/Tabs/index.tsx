import { LingxiForwardRef } from '@lingxiteam/types';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd/es/tabs';
import classnames from 'classnames';
import React, { useEffect, useImperativeHandle, useRef, useState } from 'react';
import { basicStatusTransfer } from '../utils';
import ChannelContainer, {
  ChannelContainerOptions,
} from '../utils/ChannelContainer';

/**
 * 修改原因：
 * 由于原逻辑是通过在Tabs组件外渲染完成后，把组件再移动到Tabs内部。导致页面加载完成后 无法获取TabPanel内的表单值。
 */
export interface MyTabsProps extends TabsProps {
  value: string;
  visible: boolean;
  getEngineApis: any;
}

const { TabPane } = Tabs;

const MyTabs = LingxiForwardRef<any, MyTabsProps>((props, ref) => {
  const {
    value,
    visible = true,
    children,
    onChange,
    defaultActiveKey,
    style,
    getEngineApis,
    className,
    ...restProps
  } = props;

  const childKeys = useRef<string[]>([]);

  const { padding, ...restStyle } = style || {};

  const [activeKey, setActiveKey] = useState(() => props.defaultActiveKey);
  const memoActiveKeys = useRef<string[]>([]).current;
  const hiddenTabsKeyMap = useRef<
    Record<string, { visible: string; index: number; key: string }>
  >({}).current; // 隐藏的tabs
  // 缓存下来key 标识当前TabPanel已经渲染
  if (activeKey && !memoActiveKeys.includes(activeKey)) {
    memoActiveKeys.push(activeKey);
  }

  const [tabs, setTabs] = useState<any[]>([]);

  useImperativeHandle(ref, () => ({
    setValue: (key: any) => {
      setActiveKey(key);
    },
    get value() {
      return activeKey;
    },
    setSubTabsData: console.log,
    setTabsData: (tabsDataOptions: any = {}) => {
      const { data, key, title, status, badge } = tabsDataOptions;

      const resolvedData = data.map((tab: any) => {
        const tabKey = tab[key || 'key'];
        const tabTitle = tab[title || 'title'];
        const tabStatus = tab[status];
        const tabBadge = tab[badge || 'badge'];

        const matchTab: any = tabs?.find((t: any) => t.id === tabKey) || {};
        const newTab = { ...matchTab };

        if (typeof tabKey !== 'undefined') {
          newTab.key = tabKey;
        }

        if (typeof tabTitle !== 'undefined') {
          newTab.title = tabTitle;
        }

        if (typeof status !== 'undefined') {
          newTab.isShow = basicStatusTransfer(tabStatus)?.visible;
        }

        if (typeof tabBadge !== 'undefined') {
          newTab.badge = tabBadge;
        }

        return newTab;
      });

      setTabs(resolvedData);
    },
  }));

  useEffect(() => {
    // 如果页面渲染完成的时候activeKey不存在，那么默认设置第一个
    if (
      (activeKey &&
        !memoActiveKeys.includes(activeKey) &&
        !hiddenTabsKeyMap[activeKey]) ||
      !activeKey
    ) {
      const fistKey = Object.values(hiddenTabsKeyMap).filter(
        (i) => i.index === 0,
      );
      setActiveKey(fistKey?.[0].key);
    }
  }, []);

  const renderTabPane = (options: ChannelContainerOptions) => {
    childKeys.current = [];
    return React.Children.toArray(children).map((t, index) => {
      const { getProps, uploadChannelProps } = options;
      const c = t;
      if (React.isValidElement(c)) {
        const {
          schema: {
            props: { key },
          },
          // @ts-ignore
        } = t.props;
        // if (isShow) {
        if (!childKeys.current?.includes(key)) {
          childKeys.current.push(key);
        }

        // 将控件‘内边距’配置设置到子面板上(还原原逻辑)
        if (typeof padding !== 'undefined') {
          Object.assign(c.props.schema.style, { padding });
        }

        const {
          visible = true,
          forceRender = false,
          ...extendProps
        } = getProps(c);

        hiddenTabsKeyMap[key] = {
          visible,
          index,
          key,
        };

        return (
          <TabPane
            forceRender
            {...(c?.props.schema?.props || {})}
            key={key}
            {...extendProps}
          >
            <ChannelContainer.Item
              extendProps={{
                // TabPane是否应该渲染子节点
                visited: memoActiveKeys.includes(key) || forceRender,
                currentIndex: index,
              }}
              uploadChannelProps={uploadChannelProps}
            >
              {c}
            </ChannelContainer.Item>
          </TabPane>
        );
      }

      return null;
    });
  };

  if (!visible) {
    return null;
  }

  return (
    <div className={classnames('ued-tabs-wrap', className)}>
      <ChannelContainer>
        {(options) => (
          <Tabs
            activeKey={activeKey}
            defaultActiveKey={defaultActiveKey}
            {...restProps}
            style={restStyle}
            onChange={(activeKey) => {
              if (onChange) {
                onChange(activeKey);
              }
              setActiveKey(activeKey);
            }}
            renderTabBar={(props, DefaultTabBar) => {
              return (
                <DefaultTabBar {...props}>
                  {(node) => {
                    if (node.key && !hiddenTabsKeyMap[node.key]?.visible) {
                      return <React.Fragment key={node.key} />;
                    }
                    return node;
                  }}
                </DefaultTabBar>
              );
            }}
          >
            {renderTabPane(options)}
          </Tabs>
        )}
      </ChannelContainer>
    </div>
  );
});

export default MyTabs;
