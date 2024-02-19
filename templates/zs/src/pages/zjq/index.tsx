// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加

import {
  Button,
  Collapse,
  CollapsePanel,
  Form,
  GridView,
  StdUpload,
  View,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const Zjq$$Page: React.FC<PageProps> = ({
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
      className="__CustomClass_256646__"
    >
      <View
        name={'页面'}
        $$componentItem={{
          id: 'View_256646_1',
          uid: 'View_256646_1',
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
        }}
        ref={(r: any) => (refs['View_256646_1'] = r)}
        {...injectData}
      >
        <Collapse
          name={'折叠面板'}
          defaultActiveKey={['1']}
          expandIconPosition={'right'}
          collapseType={''}
          size={'default'}
          bordered={true}
          hasIcon={true}
          cardIconType={'middle'}
          icon={{
            type: undefined,
            theme: 'outlined',
            fontAddress: '',
            isIconFont: false,
            iconFileInfo: {},
          }}
          prefixIcon={{
            type: undefined,
            theme: 'outlined',
            fontAddress: '',
            isIconFont: false,
            iconFileInfo: {},
          }}
          $$componentItem={{
            id: 'Collapse_453541',
            uid: 'Collapse_453541',
            type: 'Collapse',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{
            width: '100%',
            margin: '0 0 16px 0',
            padding: '20px 20px 20px 20px',
          }}
          ref={(r: any) => (refs['Collapse_453541'] = r)}
          {...injectData}
        >
          <CollapsePanel
            name={'折叠子面板'}
            header={'标题1'}
            key={'1'}
            $$componentItem={{
              id: 'CollapsePanel_3424776',
              uid: 'CollapsePanel_3424776',
              type: 'CollapsePanel',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ minHeight: 40 }}
            ref={(r: any) => (refs['CollapsePanel_3424776'] = r)}
            {...injectData}
            uid="CollapsePanel_3424776"
          >
            <GridView
              name={'循环块'}
              itemKey={'item'}
              indexKey={'i'}
              pieceData={[]}
              defaultValue={[]}
              isChecked={true}
              isMultiple={true}
              columnNum={1}
              valueKey={'value'}
              span={24}
              vspace={16}
              hspace={16}
              isEditor={true}
              gridData={data?.dcOaOrg}
              fieldName={'resultData'}
              $$componentItem={{
                id: 'GridView_5062227',
                uid: 'GridView_5062227',
                type: 'GridView',
                ...componentItem,
              }}
              style={{ minHeight: 40 }}
              ref={(r: any) => (refs['GridView_5062227'] = r)}
              {...injectData}
              getEngineApis={() => {
                return {
                  ...injectData.getEngineApis(),
                  MemoRenderer: {
                    renderer: null,
                    MemoLoopItem: (props: any) => {
                      const item = props[props.itemKey] ?? props?.item;
                      const i = props[props.indexKey] ?? props?.i;
                      return (
                        <>
                          <Button
                            name={'按钮'}
                            shape={null}
                            classification={'default'}
                            autoProcessFlow={false}
                            flowProcessResult={'common'}
                            iconPosition={'left'}
                            ghost={false}
                            block={false}
                            size={'default'}
                            type={'default'}
                            hasIcon={false}
                            $$componentItem={{
                              id: 'Button_996717',
                              uid: 'Button_996717',
                              type: 'Button',
                              ...componentItem,
                            }}
                            disabled={false}
                            visible={true}
                            readOnly={false}
                            style={{ width: 'fit-content' }}
                            ref={(r: any) => (refs['Button_996717'] = r)}
                            {...injectData}
                          />
                        </>
                      );
                    },
                  },
                };
              }}
            />
          </CollapsePanel>
          <CollapsePanel
            name={'折叠子面板'}
            header={'标题2'}
            key={'2'}
            $$componentItem={{
              id: 'CollapsePanel_4751657',
              uid: 'CollapsePanel_4751657',
              type: 'CollapsePanel',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ minHeight: 40 }}
            ref={(r: any) => (refs['CollapsePanel_4751657'] = r)}
            {...injectData}
            uid="CollapsePanel_4751657"
          />
        </Collapse>
        <Form
          name={'表单'}
          colSpan={8}
          labelCol={8}
          wrapperCol={16}
          colon={true}
          layout={'vertical'}
          labelAlign={'right'}
          header={'标题'}
          colSpace={16}
          rowSpace={16}
          formCode={'Form_7982014'}
          $$componentItem={{
            id: 'Form_7982014',
            uid: 'Form_7982014',
            type: 'Form',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ padding: '0px 0px 0px 0px' }}
          ref={(r: any) => (refs['Form_7982014'] = r)}
          {...injectData}
        >
          <StdUpload
            name={'文件上传'}
            uploadStyle={'click'}
            listType={'text'}
            titleTip={'notext'}
            tipLocation={'after'}
            tipPlacement={'top'}
            fileNameEncode={false}
            isWatermark={false}
            optionalFile={false}
            fileName={'file'}
            selfSpan={''}
            labelCol={8}
            wrapperCol={16}
            acceptType={[]}
            withCredentials={true}
            numberLimit={5}
            singleFileMaxSize={50}
            uploadText={'点击上传'}
            uploadTimeout={30000}
            deleteIcon={{
              deleteIconTheme: 'outlined',
              deleteIconType: 'delete',
              deleteIconIsIconFont: false,
              showRemoveIcon: true,
            }}
            downloadIcon={{
              downloadIconTheme: 'outlined',
              downloadIconType: 'download',
              downloadIconIsIconFont: false,
              showDownloadIcon: true,
            }}
            previewIcon={{
              previewIconTheme: 'outlined',
              previewIconType: 'eye',
              previewIconIsIconFont: false,
              showPreviewIcon: true,
            }}
            formItemIndex={0}
            fieldName={'232'}
            icon={{
              type: undefined,
              theme: 'outlined',
              fontAddress: '',
              isIconFont: false,
              iconFileInfo: {},
            }}
            $$componentItem={{
              id: 'StdUpload_8280368',
              uid: 'StdUpload_8280368',
              type: 'StdUpload',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => (refs['StdUpload_8280368'] = r)}
            {...injectData}
          />
        </Form>
      </View>
    </div>
  );
};

export default withPageHOC(Zjq$$Page, {
  pageId: '906774449121083392',
  hasLogin: false,
  dataSource,
  defaultState: {},
});
