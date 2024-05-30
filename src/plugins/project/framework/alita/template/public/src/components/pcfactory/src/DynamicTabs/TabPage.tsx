import { EngineBaseProps } from '@lingxiteam/types';
import React, { useEffect, useState } from 'react';
import { TabsItemProps } from './PropsType';

interface TabPageProps {
  getEngineApis: EngineBaseProps['getEngineApis'];
  $$componentItem: EngineBaseProps['$$componentItem'];
  activeKey?: string;
  lcdpParentRenderId: string;
  item: TabsItemProps;
  index: number;
  reloadPageKey?: string;
}

const TabPage: React.FC<TabPageProps> = (props) => {
  const {
    getEngineApis,
    $$componentItem,
    activeKey,
    lcdpParentRenderId,
    item,
    index,
    reloadPageKey,
  } = props;
  const { PageView } = getEngineApis();
  const [load, setLoad] = useState(false);

  useEffect(() => {
    if (activeKey === item.key) {
      setLoad(true);
    }
  }, [activeKey]);

  useEffect(() => {
    if (reloadPageKey) {
      const realKeyArray = reloadPageKey.split('--##DynimicTabsKey##--');
      if (item.key === realKeyArray?.[0]) {
        // 页面进行重载刷新
        setLoad(false);
        setTimeout(() => setLoad(true), 100);
      }
    }
  }, [reloadPageKey]);

  return load ? (
    <PageView
      lcdpParentRenderId={lcdpParentRenderId}
      platform="pc"
      key={item.key}
      pageSrc={item?.pagePath || ''}
      appId={$$componentItem?.appId || ''}
      $$componentItem={$$componentItem}
      getEngineApis={getEngineApis}
      visible
      style={{ width: '100%', height: '100%', overflow: 'hidden auto' }}
      compId=""
      className=""
      pageViewCompState={{ tabBarItem: item, tabBarIndex: index }}
    />
  ) : null;
};

export default TabPage;
