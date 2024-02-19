// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加

import { Text, View } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

const Gonggongshenpijibietishiyu$$Page: React.FC<PageProps> = ({
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
    <div style={{ height: '100%', ...style }} className="__CustomClass_5629__">
      <View
        name={'页面'}
        visible={true}
        $$componentItem={{
          id: 'View_5629_1',
          uid: 'View_5629_1',
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
          margin: '0px 0px 0px 0px',
        }}
        ref={(r: any) => (refs['View_5629_1'] = r)}
        {...injectData}
      >
        <View
          name={'布局容器'}
          visible={true}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_319232',
            uid: 'View_319232',
            type: 'View',
            ...componentItem,
          }}
          style={{
            display: 'block',
            flexDirection: 'column',
            padding: '0px 0px 0px 0px',
            width: '100%',
            textAlign: 'center',
            margin: '200px 0px 0px 0px',
          }}
          ref={(r: any) => (refs['View_319232'] = r)}
          {...injectData}
        >
          <Text
            name={'提示语'}
            visible={true}
            content={'请选择场景树的具体场景'}
            textType={'h1'}
            version={'1.0'}
            showHtml={false}
            $$componentItem={{
              id: 'Text_643483',
              uid: 'Text_643483',
              type: 'Text',
              ...componentItem,
            }}
            style={{ fontSize: 30, lineHeight: '24px', color: '#1c242e' }}
            ref={(r: any) => (refs['Text_643483'] = r)}
            {...injectData}
          />
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(Gonggongshenpijibietishiyu$$Page, {
  pageId: '882436135732752384',
  hasLogin: false,
  defaultState: {},
});
