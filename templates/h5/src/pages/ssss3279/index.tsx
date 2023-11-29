// 注意: 出码模块正在调试
import React from 'react';

import { View } from '@lingxiteam/factory/es/index.component';

import Pageview from '@/components/Pageview';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import { setPageNavBar } from 'alita';

const Ssss3279$$Page: React.FC<PageProps> = ({
  data,
  CMDGenerator,
  injectData,
  refs,
  state,
  functorsMap,
  getValue,
  componentItem,
}) => {
  useEffect(() => {
    setPageNavBar({
      pagePath: '/ssss3279',
      navBar: {
        pageTitle: 'ssss',
        hideNavBar: false,
      },
    });

    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div>
      <View
        name="页面"
        backgroundType={{ type: 'cleanColor', color: '#F9F9F9' }}
        $$componentItem={{
          id: 'View_196935_1',
          uid: 'View_196935_1',
          type: 'View',
          ...componentItem,
        }}
        visible={true}
        style={{
          height: '100%',
          display: 'block',
          padding: '12px 12px 12px 12px',
          flexDirection: 'column',
          overflowY: 'auto',
        }}
        ref={(r: any) => (refs['View_196935_1'] = r)}
        {...injectData}
      >
        <Pageview
          name="页面容器"
          visible={1}
          pageViewCompState={{ title: data?.pageTsData?.title }}
          pageSrc="/ceshi1071"
          pageId="1024143466269171712"
          style={{ height: 'auto', width: '100%' }}
          ref={(r: any) => (refs['Pageview_741562'] = r)}
          {...injectData}
        />
      </View>
    </div>
  );
};

export default withPageHOC(Ssss3279$$Page, {
  appId: '1024143353417228288',
  pageId: '1024161040026025984',
  hasLogin: false,
  dataSource: [
    {
      id: 170116221137964640,
      name: 'pageTsData',
      description: 'pageTsData',
      source: 'custom',
      type: 'object',
      filterParams: [],
      outParams: [
        {
          attrId: '5310428',
          code: 'title',
          name: '属性',
          type: 'string',
          initialData: { type: 'static', value: '页面容器' },
          showInput: true,
        },
      ],
      config: { hooks: [] },
    },
  ],
  defaultState: { bizId: '', sceneCode: '', bizData: '' },
});
