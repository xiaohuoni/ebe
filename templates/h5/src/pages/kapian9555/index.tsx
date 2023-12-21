// 注意: 出码模块正在调试
import React from 'react';

import { Button, View } from '@lingxiteam/factory/es/index.component';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

const Kapian9555$$MobilePopover: React.FC<PageProps> = ({
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
          id: 'View_884755_1',
          uid: 'View_884755_1',
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
        ref={(r: any) => (refs['View_884755_1'] = r)}
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
            id: 'Button_1254901',
            uid: 'Button_1254901',
            type: 'Button',
            ...componentItem,
          }}
          visible={true}
          disabled={false}
          readOnly={false}
          style={{ textAlign: 'center' }}
          ref={(r: any) => (refs['Button_1254901'] = r)}
          {...injectData}
        />
      </View>
    </div>
  );
};

export default withPageHOC(Kapian9555$$MobilePopover, {
  appId: '1024143353417228288',
  pageId: '1052397738087833600',
  hasLogin: false,
  dataSource: [],
  defaultState: { bizId: '', sceneCode: '', bizData: '' },
});
