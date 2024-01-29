// 注意: 出码模块正在调试
import React from 'react';

import { View, Button } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

const Qipaokapian6146$$Popover: React.FC<PageProps> = ({
  data,
  CMDGenerator,
  attrDataMap = {},
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
  useEffect(() => {}, []);

  useEffect(() => {});

  return (
    <Popover useEffect={() => {}} {...injectData}>
      <View
        name={'页面'}
        backgroundType={{ type: 'cleanColor', color: 'rgba(255, 255, 255, 1)' }}
        $$componentItem={{
          id: 'View_461763_1',
          uid: 'View_461763_1',
          type: 'View',
          ...componentItem,
        }}
        disabled={false}
        visible={true}
        readOnly={false}
        style={{
          minHeight: '100%',
          display: 'flex',
          padding: '20px 20px 20px 20px',
          flexDirection: 'column',
          overflowY: 'auto',
          width: 'auto',
          height: 'auto',
        }}
        ref={(r: any) => (refs['View_461763_1'] = r)}
        {...injectData}
      >
        <Button
          name={'按钮'}
          classification={'default'}
          autoProcessFlow={false}
          flowProcessResult={'common'}
          iconPosition={'left'}
          ghost={false}
          block={false}
          size={'default'}
          disabled={false}
          type={'default'}
          btnIcon={'none'}
          hasIcon={false}
          shape={'default'}
          loading={false}
          btnText={'按钮'}
          $$componentItem={{
            id: 'Button_925889',
            uid: 'Button_925889',
            type: 'Button',
            ...componentItem,
          }}
          visible={true}
          readOnly={false}
          style={{ textAlign: 'center' }}
          ref={(r: any) => (refs['Button_925889'] = r)}
          {...injectData}
        />
        <Button
          name={'按钮'}
          classification={'default'}
          autoProcessFlow={false}
          flowProcessResult={'common'}
          iconPosition={'left'}
          ghost={false}
          block={false}
          size={'default'}
          disabled={false}
          type={'default'}
          btnIcon={'none'}
          hasIcon={false}
          shape={'default'}
          loading={false}
          btnText={'按钮'}
          $$componentItem={{
            id: 'Button_9811416',
            uid: 'Button_9811416',
            type: 'Button',
            ...componentItem,
          }}
          visible={true}
          readOnly={false}
          style={{ textAlign: 'center' }}
          ref={(r: any) => (refs['Button_9811416'] = r)}
          {...injectData}
        />
        <Button
          name={'按钮'}
          classification={'default'}
          autoProcessFlow={false}
          flowProcessResult={'common'}
          iconPosition={'left'}
          ghost={false}
          block={false}
          size={'default'}
          disabled={false}
          type={'default'}
          btnIcon={'none'}
          hasIcon={false}
          shape={'default'}
          loading={false}
          btnText={'按钮'}
          $$componentItem={{
            id: 'Button_820207',
            uid: 'Button_820207',
            type: 'Button',
            ...componentItem,
          }}
          visible={true}
          readOnly={false}
          style={{ textAlign: 'center' }}
          ref={(r: any) => (refs['Button_820207'] = r)}
          {...injectData}
        />
        <Button
          name={'按钮'}
          classification={'default'}
          autoProcessFlow={false}
          flowProcessResult={'common'}
          iconPosition={'left'}
          ghost={false}
          block={false}
          size={'default'}
          disabled={false}
          type={'default'}
          btnIcon={'none'}
          hasIcon={false}
          shape={'default'}
          loading={false}
          btnText={'按钮'}
          $$componentItem={{
            id: 'Button_592598',
            uid: 'Button_592598',
            type: 'Button',
            ...componentItem,
          }}
          visible={true}
          readOnly={false}
          style={{ textAlign: 'center' }}
          ref={(r: any) => (refs['Button_592598'] = r)}
          {...injectData}
        />
        <Button
          name={'按钮'}
          classification={'default'}
          autoProcessFlow={false}
          flowProcessResult={'common'}
          iconPosition={'left'}
          ghost={false}
          block={false}
          size={'default'}
          disabled={false}
          type={'default'}
          btnIcon={'none'}
          hasIcon={false}
          shape={'default'}
          loading={false}
          btnText={'按钮'}
          $$componentItem={{
            id: 'Button_0138794',
            uid: 'Button_0138794',
            type: 'Button',
            ...componentItem,
          }}
          visible={true}
          readOnly={false}
          style={{ textAlign: 'center' }}
          ref={(r: any) => (refs['Button_0138794'] = r)}
          {...injectData}
        />
      </View>
    </Popover>
  );
};

export default withPageHOC(Qipaokapian6146$$Popover, {
  pageId: '1066979929069211648',
  hasLogin: true,
  dataSource: [],
  defaultState: { bizId: '', sceneCode: '', bizData: '' },
});
