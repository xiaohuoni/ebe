// 注意: 出码模块正在调试
import React from 'react';

import { Button, View } from '@lingxiteam/pcfactory/es/index.component';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

const Ceshi1071$$Page: React.FC<PageProps> = ({
  data,
  CMDGenerator,
  injectData,
  refs,
}) => {
  return (
    <div>
      <View
        name="布局容器1"
        visible={true}
        style={{
          display: 'flex',
          flexDirection: 'column',
          position: 'static',
          padding: '12px 0px 12px 0px',
          width: '100%',
          borderStyle: 'solid',
          borderWidth: 0,
          borderRadius: '0px 0px 0px 0px',
          border: '0px',
        }}
        ref={(r: any) => (refs['View_4060305'] = r)}
        {...injectData}
      >
        <Button
          name="按钮"
          // btnIcon="none"
          type="default"
          size="default"
          shape="default"
          autoProcessFlow={false}
          classification="default"
          // basicStatus="1"
          flowProcessResult="common"
          iconPosition="left"
          visible={true}
          ghost={false}
          loading={false}
          block={false}
          hasIcon={false}
          btnText="按钮"
          style={{ textAlign: 'center' }}
          ref={(r: any) => (refs['Button_197969'] = r)}
          {...injectData}
        />
      </View>
    </div>
  );
};

export default withPageHOC(Ceshi1071$$Page, {
  // TODO: appId
  appId: '1024143353417228288',
  dataSource: [
    {
      id: 169891588296195260,
      name: 'nothing',
      description: 'nothing',
      source: 'custom',
      type: 'object',
      filterParams: [],
      outParams: [
        {
          attrId: '2606065',
          code: 'param',
          name: '属性',
          type: 'string',
          initialData: { type: 'static', value: '123' },
          showInput: true,
        },
      ],
      config: { hooks: [] },
      rootOutParams: { type: 'static', value: '' },
    },
    {
      id: 169958147710874270,
      name: 'list',
      description: 'list',
      source: 'custom',
      type: 'objectArray',
      filterParams: [],
      outParams: [
        {
          attrId: '007221',
          code: 'param',
          name: '属性',
          type: 'string',
          initialData: { type: 'static' },
          showInput: false,
        },
      ],
      config: { hooks: [] },
      rootOutParams: { type: 'static', value: '[{param:1},{param:}]2' },
    },
  ],
});
