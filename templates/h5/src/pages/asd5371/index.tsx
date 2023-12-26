// 注意: 出码模块正在调试
import React from 'react';

import { Button, View } from '@/components/factory';

import Popover from '@/components/Popover';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import { setPageNavBar } from 'alita';

const Asd5371$$Page: React.FC<PageProps> = ({
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
    setPageNavBar({
      pagePath: '/asd5371',
      navBar: {
        pageTitle: 'asd',
        hideNavBar: false,
      },
    });

    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div style={style}>
      <View
        name={'页面'}
        backgroundType={{ type: 'cleanColor', color: 'rgba(255, 255, 255, 1)' }}
        visible={true}
        $$componentItem={{
          id: 'View_037952_1',
          uid: 'View_037952_1',
          type: 'View',
          ...componentItem,
        }}
        style={{
          height: '100%',
          display: 'block',
          padding: '12px 12px 12px 12px',
          flexDirection: 'column',
          overflowY: 'auto',
        }}
        ref={(r: any) => (refs['View_037952_1'] = r)}
        {...injectData}
      >
        <Popover
          options={{
            tipType: '2',
            contentType: '1',
            mode: 'light',
            contentText: '123213',
            contentTextFont: 15,
            destroyOnHide: false,
            placement: 'top',
          }}
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
              id: 'Button_091723',
              uid: 'Button_091723',
              type: 'Button',
              ...componentItem,
            }}
            visible={true}
            readOnly={false}
            disabled={false}
            style={{ textAlign: 'center' }}
            ref={(r: any) => (refs['Button_091723'] = r)}
            {...injectData}
          />
        </Popover>
      </View>
    </div>
  );
};

export default withPageHOC(Asd5371$$Page, {
  appId: '1024143353417228288',
  pageId: '1024143466269171712',
  hasLogin: false,
  dataSource: [],
  defaultState: { bizId: '', sceneCode: '', bizData: '' },
});
