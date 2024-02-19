// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加

import { View } from '@/components/factory';

import BusiComp0496635 from '@/components/BusiComp0496635';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

const Guochengchuli4891$$Page: React.FC<PageProps> = ({
  data,
  CMDGenerator,
  attrDataMap = {},
  customActionMapRef,
  injectData,
  refs,
  state,
  functorsMap,
  getStaticDataSourceService,
  getValue,
  componentItem,
  style,
  urlParam,
}) => {
  useEffect(() => {
    const eventDatasetCompState5: any = [
      {
        type: 'setCompState',
        dataId: 166098418610436030,
        options: {
          compId: 'BOFramer_318329',
          compLib: '@/components',
          pageJsonId: 52,
          compName: 'BOFramer',
          id: '548539592',
          paramsObj: {
            workId: 'piid:MOCK-e26059ea-e7e4-4b2e-aa22-e66559745c44',
          },
          paramsObjKeyValueMap: {
            workId: 'piid:MOCK-e26059ea-e7e4-4b2e-aa22-e66559745c44',
          },
        },
        line_number: 1,
      },
    ];
    eventDatasetCompState5.params = [] || [];
    CMDGenerator(eventDatasetCompState5, {}, 'setCompState', {
      id: 'setCompState',
      name: 'setCompState',
      type: 'setCompState',
      platform: 'undefined',
    });

    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div style={{ height: '100%', ...style }} className="__CustomClass_52__">
      <View
        name={'页面'}
        visible={true}
        backgroundType={{ type: 'cleanColor', color: undefined }}
        $$componentItem={{
          id: 'View_52_1',
          uid: 'View_52_1',
          type: 'View',
          ...componentItem,
        }}
        style={{ minHeight: '100%' }}
        ref={(r: any) => (refs['View_52_1'] = r)}
        {...injectData}
      >
        <View
          name={'布局容器'}
          visible={true}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_52_11',
            uid: 'View_52_11',
            type: 'View',
            ...componentItem,
          }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '4px 4px 16px 4px',
            margin: '0px 0px 20px 0px',
            width: '100%',
            borderRadius: '4px',
            flexShrink: 0,
          }}
          ref={(r: any) => (refs['View_52_11'] = r)}
          {...injectData}
        >
          <View
            name={'布局容器'}
            visible={true}
            $$componentItem={{
              id: 'View_52_111',
              uid: 'View_52_111',
              type: 'View',
              ...componentItem,
            }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '16px 16px 16px 16px',
              width: '100%',
            }}
            ref={(r: any) => (refs['View_52_111'] = r)}
            {...injectData}
          >
            <BusiComp0496635
              busiCompId={'878166584210399232'}
              name={'处理过程组件'}
              style={{ margin: '0 0 12px 0' }}
              ref={(r: any) => (refs['BOFramer_318329'] = r)}
              {...injectData}
            />
          </View>
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(Guochengchuli4891$$Page, {
  pageId: '878192581235183616',
  hasLogin: false,
  defaultState: {},
});
