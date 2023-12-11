// 注意: 出码模块正在调试
import React from 'react';

import { Button, View } from '@lingxiteam/factory/es/index.component';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

const Model28529$$MobileModal: React.FC<PageProps> = ({
  data,
  CMDGenerator,
  injectData,
  refs,
  state,
  functorsMap,
  getValue,
  componentItem,
  style,
}) => {
  useEffect(() => {
    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div style={style}>
      <View
        name={'页面'}
        backgroundType={{ type: 'cleanColor', color: 'rgba(255, 255, 255, 1)' }}
        $$componentItem={{
          id: 'View_852712_1',
          uid: 'View_852712_1',
          type: 'View',
          ...componentItem,
        }}
        visible={true}
        style={{
          height: '100%',
          display: 'block',
          padding: '12px 12px 12px 12px',
          flexDirection: 'column',
          overflowY: 'scroll',
        }}
        ref={(r: any) => (refs['View_852712_1'] = r)}
        {...injectData}
      >
        <Button
          name={'按钮'}
          btnIcon={false}
          type={'primary'}
          size={'large'}
          loading={false}
          mImagePostion={'left'}
          shape={'default'}
          status={'1'}
          children={'按钮'}
          $$componentItem={{
            id: 'Button_982951',
            uid: 'Button_982951',
            type: 'Button',
            ...componentItem,
          }}
          visible={true}
          disabled={false}
          readOnly={false}
          style={{ textAlign: 'center' }}
          ref={(r: any) => (refs['Button_982951'] = r)}
          {...injectData}
        />
      </View>
    </div>
  );
};

export default withPageHOC(Model28529$$MobileModal, {
  appId: '1024143353417228288',
  pageId: '1051421568049684480',
  hasLogin: false,
  dataSource: [],
  defaultState: { bizId: '', sceneCode: '', bizData: '' },
});
