import { Badge, TabBar } from '@lingxiteam/antd-mobile-plus';
import { LingXiFC } from '@lingxiteam/types';
import { useEffect, useMemo, useRef, useState } from 'react';
import './index.less';
import TabImage from './TabImage';
import TabPage from './TabPage';

export interface MyTabBarEDProps {
  tabsData: any[];
  style: any;
  onChange?: any;
  lcdpParentRenderId: string;
}

const prefixCls = 'appTabBar';
const MyTabBar: LingXiFC<MyTabBarEDProps> = (props) => {
  const {
    tabsData,
    style,
    onChange,
    $$componentItem,
    getEngineApis,
    lcdpParentRenderId,
  } = props;
  const {
    titleColor = '#999999',
    selectedTitleColor = '#1677ff',
    titleFontSize = '10',
    tabBarBackground = '#ffffff',
  } = style;
  const [pathName, setPathName] = useState<string>();
  const [tabs, setTabs] = useState<any>([]);
  const tabsValue = useRef(tabs);
  const { getAppFileUrlByFileCode } = getEngineApis();

  useEffect(() => {
    const tabsDataCopy = [...tabsData];
    tabsDataCopy.forEach((e: any, index: number) => {
      const item = e;
      if (item.defaultSelected && !pathName) {
        setPathName(item.key);
      }
      item.icon = (active: boolean) => {
        return (
          <TabImage
            getAppFileUrlByFileCode={getAppFileUrlByFileCode}
            titleColor={titleColor}
            selectedTitleColor={selectedTitleColor}
            defaultIcon={item.defaultIcon}
            selectedIcon={item.selectedIcon}
            isSelected={active}
            className="icon"
          />
        );
      };
      item.title = (active: boolean) => {
        if (active) {
          return (
            <span
              style={{
                color: selectedTitleColor,
                fontSize: `${titleFontSize}px`,
              }}
            >
              {item.titleText}
            </span>
          );
        }
        return (
          <span style={{ color: titleColor, fontSize: `${titleFontSize}px` }}>
            {item.titleText}
          </span>
        );
      };
      if (item.badgeData === 'point') {
        item.badge = { content: Badge.dot, style: { '--top': '15%' } };
      } else if (item.badgeData && item.badgeData.length > 0) {
        item.badge = { content: item.badgeData, style: { '--top': '25%' } };
      }
    });
    tabsValue.current = tabsDataCopy;
    setTabs([...tabsDataCopy]);
  }, [tabsData]);

  const tabComs = useMemo(() => {
    return tabs.map((item: any) => (
      <TabBar.Item
        key={item.key}
        icon={item.icon}
        title={item.title}
        badge={item.badge}
      />
    ));
  }, [tabs]);

  return (
    <div className={`${prefixCls}-app`}>
      <div className="my-apptabbar-body">
        <TabPage
          paths={tabs}
          selectedPath={pathName}
          getEngineApis={getEngineApis}
          $$componentItem={$$componentItem}
          lcdpParentRenderId={lcdpParentRenderId}
        />
      </div>
      <div
        className="my-apptabbar-bottom"
        style={{ background: tabBarBackground }}
      >
        <TabBar
          safeArea
          activeKey={pathName}
          onChange={(value: any) => {
            if (pathName === value) return;
            setPathName(value);
            let seletcedIndex = 0;
            tabs.forEach((item: any, index: number) => {
              if (item.key === value) {
                seletcedIndex = index;
              }
            });
            if (onChange) {
              onChange(seletcedIndex + 1);
            }
          }}
        >
          {tabComs}
        </TabBar>
      </div>
    </div>
  );
};

export default MyTabBar;
