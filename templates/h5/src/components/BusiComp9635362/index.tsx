// 注意: 出码模块正在调试
import React from 'react';

import { Button } from '@lingxiteam/factory/es/index.component';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

const BusiComp9635362$$BusiComp: React.FC<PageProps> = ({
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
    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div>
      <Button
        name="按钮"
        btnIcon={false}
        type="primary"
        size="large"
        loading={false}
        mImagePostion="left"
        shape="default"
        status="1"
        children={state?.title}
        $$componentItem={{
          id: 'Button_4196567',
          uid: 'Button_4196567',
          type: 'Button',
          ...componentItem,
        }}
        visible={true}
        disabled={false}
        readOnly={false}
        style={{ textAlign: 'center' }}
        ref={(r: any) => (refs['Button_4196567'] = r)}
        {...injectData}
      />
      <Button
        name="按钮"
        btnIcon={false}
        type="primary"
        size="large"
        loading={false}
        mImagePostion="left"
        shape="default"
        status="1"
        children={state?.data?.param}
        $$componentItem={{
          id: 'Button_205224',
          uid: 'Button_205224',
          type: 'Button',
          ...componentItem,
        }}
        visible={true}
        disabled={false}
        readOnly={false}
        style={{ textAlign: 'center' }}
        ref={(r: any) => (refs['Button_205224'] = r)}
        {...injectData}
      />
    </div>
  );
};

export default withPageHOC(BusiComp9635362$$BusiComp, {
  appId: '1024143353417228288',
  pageId: 'pageId 未找到',
  hasLogin: false,
  dataSource: [],
  defaultState: { title: '', data: '' },
});
