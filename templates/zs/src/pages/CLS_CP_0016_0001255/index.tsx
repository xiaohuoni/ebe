// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加

import { Text, View } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

const ClsCp_0016_0001255$$Page: React.FC<PageProps> = ({
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
    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div
      style={{ height: '100%', ...style }}
      className="__CustomClass_088762__"
    >
      <View
        name={'页面'}
        visible={true}
        $$componentItem={{
          id: 'View_088762_1',
          uid: 'View_088762_1',
          type: 'View',
          ...componentItem,
        }}
        style={{
          minHeight: '100%',
          display: 'flex',
          padding: '20px 20px 20px 20px',
          flexDirection: 'column',
          overflowY: 'auto',
          width: 'auto',
        }}
        ref={(r: any) => (refs['View_088762_1'] = r)}
        {...injectData}
      >
        <View
          name={'布局容器'}
          visible={true}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_9640137',
            uid: 'View_9640137',
            type: 'View',
            ...componentItem,
          }}
          disabled={false}
          readOnly={false}
          style={{
            display: 'block',
            flexDirection: 'column',
            padding: '0px 0px 0px 0px',
            width: '100%',
          }}
          ref={(r: any) => (refs['View_9640137'] = r)}
          {...injectData}
        >
          <Text
            name={'文本'}
            content={'合作伙伴\n\n\n'}
            textType={'span'}
            version={'1.0'}
            visible={true}
            showHtml={false}
            $$componentItem={{
              id: 'Text_7412922',
              uid: 'Text_7412922',
              type: 'Text',
              ...componentItem,
            }}
            disabled={false}
            readOnly={false}
            style={{ fontSize: '14px', lineHeight: '24px', color: '#1c242e' }}
            ref={(r: any) => (refs['Text_7412922'] = r)}
            {...injectData}
          />
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(ClsCp_0016_0001255$$Page, {
  pageId: '961190365010231296',
  hasLogin: false,
  defaultState: {},
});
