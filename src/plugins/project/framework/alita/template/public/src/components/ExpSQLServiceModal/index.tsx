import {
  BaseModalProps,
  ExpSQLServiceModalHooks,
  ExpSQLServiceModalOptions,
} from '@/types';
import { api } from '@/services/api';
import { exportFileShowProgress } from '@/utils/platform/utils/fileUtils';
import { LocaleFunction } from '@lingxiteam/types';
import { Checkbox, Divider, message, Modal, Spin } from 'antd';
import React, {
  forwardRef,
  useImperativeHandle,
  useMemo,
  useState,
} from 'react';
import { prefix } from '../../styles';
import {
  closeProgressMsg,
  closeProgressNotification,
  openProgressMsg,
  showProgressNotification,
} from '../ProgressComp';
import './index.less';

const expSQLServiceModal = `${prefix}_expSQLServiceModal`;

const CheckboxGroup = Checkbox.Group;

interface ExpSQLServiceModalProps extends BaseModalProps {
  // appId: string;
  // pageId: string;
  getLocale?: LocaleFunction;
}

const ExpSQLServiceModal = forwardRef<
  ExpSQLServiceModalHooks,
  ExpSQLServiceModalProps
>((props, ref) => {
  const {
    // appId,
    // api,
    // utils,
    // pageId,
  } = props;

  const getLocale = props.getLocale!;

  const [visible, setVisible] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [curDataSource, setCurDataSource] = useState<any[]>([]);
  const [selectedKeys, setSelectedKeys] = useState<any[]>([]);
  const [confirmLoading, setConfirmLoading] = useState<boolean>(false);
  const [params, setParams] = useState<any>({});
  const [objOptions, setObjOptions] = useState<any[]>([]);

  const selectedRows = useMemo(
    () =>
      selectedKeys.length
        ? curDataSource.filter((item) => selectedKeys.includes(item.code))
        : [],
    [selectedKeys, curDataSource, params],
  );

  const querySQLServiceRowColumns = async (serviceCode: string) => {
    try {
      setLoading(true);
      const resultList: any[] =
        ((await api.getSqlQueryColumns({
          serviceCode,
          // appId
        })) as any[]) || [];
      setCurDataSource(resultList);
      setObjOptions(
        resultList.map((item) => ({
          value: item.code,
          label: item.name,
        })),
      );
      setSelectedKeys(resultList.map((item) => item.code));
    } catch (error) {
      console.log(error);
      message.error(getLocale('service.failMsg', '网络繁忙，请稍后再试'));
    } finally {
      setLoading(false);
    }
  };

  const exportInsts = async ({
    sqlServiceCode,
    sqlServiceFields,
    attrs,
    custFileName,
    exportType,
    tempParams,
    onSuccess,
    onFail,
    async,
  }: any) => {
    let hide = () => { };
    try {
      hide = message.loading(
        getLocale('export.process.handling', '正在处理中，请稍后...'),
        0,
      );
      const resultList: any[] =
        ((await api.getSqlQueryColumns({
          serviceCode: sqlServiceCode,
          // appId
        })) as any[]) || [];
      setCurDataSource(resultList);
      let params = {
        // appId,
        serviceCode: sqlServiceCode,
        // pickColumns 选择模板时传全部字段
        pickColumns:
          exportType === 'temp'
            ? resultList
            : resultList.filter((r) => sqlServiceFields.includes(r.code)),
        params: attrs,
      };
      if (exportType === 'temp') {
        params = {
          ...params,
          ...tempParams,
        };
      }
      const fileName = custFileName
        ? `${custFileName}.xlsx`
        : `${sqlServiceCode}-${new Date().getTime()}.xlsx`;
      const downloadIndex = `${fileName}_${Math.random()}`;
      await exportFileShowProgress({
        fileOrigin: 'sql',
        downloadIndex,
        params,
        fileName,
        onSuccess,
        onFail,
        // appId,
        // pageId,
        async,
        messageApi: {
          ...message,
          openProgressMsg,
          closeProgressMsg,
          showProgressNotification,
          closeProgressNotification,
        },
        getLocale,
      });
    } catch (error) {
      console.log(error);
      if (typeof onFail === 'function') {
        onFail();
      }
      message.error(getLocale('service.failMsg', '网络繁忙，请稍后再试'));
    } finally {
      hide();
    }
  };

  const exportCustInsts = async () => {
    try {
      setConfirmLoading(true);
      const { sqlServiceCode, attrs, custFileName } = params || {};
      const requestParams = {
        // appId,
        serviceCode: sqlServiceCode,
        pickColumns: selectedRows,
        params: typeof attrs === 'object' ? attrs : {},
      };
      const fileName = custFileName
        ? `${custFileName}.xlsx`
        : `${sqlServiceCode}-${new Date().getTime()}.xlsx`;
      await exportFileShowProgress({
        fileOrigin: 'sql',
        params: requestParams,
        fileName,
        // appId,
        // pageId,
        async: params.async,
        messageApi: {
          ...message,
          openProgressMsg,
          closeProgressMsg,
          showProgressNotification,
          closeProgressNotification,
        },
        getLocale,
      });
      close();
    } catch (error) {
      console.log(error);
      message.error(getLocale('service.failMsg', '网络繁忙，请稍后再试'));
    } finally {
      setConfirmLoading(false);
    }
  };

  const openWithCustFields = (options: ExpSQLServiceModalOptions) => {
    setParams(options || {});
    const {
      sqlServiceCode,
      sqlServiceFields,
      attrs,
      custFileName,
      exportType = 'field',
      onSuccess,
      onFail,
    } = options;
    if (!sqlServiceFields?.length && exportType === 'field') {
      setVisible(true);
      querySQLServiceRowColumns(sqlServiceCode);
    } else {
      exportInsts({
        ...options,
        sqlServiceCode,
        sqlServiceFields,
        attrs,
        custFileName,
        onSuccess,
        onFail,
      });
    }
  };

  const close = () => {
    setVisible(false);
  };

  const onChange = (checkedValues: any[]) => {
    setSelectedKeys(checkedValues);
  };

  const onCheckAllChange = (e: any) => {
    if (e.target.checked) {
      setSelectedKeys(curDataSource.map((item) => item.attrCode));
    } else {
      setSelectedKeys(
        curDataSource
          .filter((item) => item.isRequired === 'T')
          .map((item) => item.attrCode),
      );
    }
  };

  useImperativeHandle(ref, () => ({
    close,
    openWithCustFields,
  }));

  return (
    <Modal
      title={getLocale('ExpSQLServiceModal.title', '按字段导出SQL查询服务数据')}
      visible={visible}
      destroyOnClose
      onOk={() => {
        if (selectedKeys.length) {
          exportCustInsts();
        } else {
          message.error(
            getLocale(
              'ExpBusiObjModal.exportFieldError',
              '请先选择要导出的字段',
            ),
          );
        }
      }}
      onCancel={close}
      confirmLoading={confirmLoading}
      width={800}
    >
      <Spin spinning={loading}>
        <div>
          <Checkbox
            indeterminate={
              selectedKeys.length > 0 && selectedKeys.length < objOptions.length
            }
            onChange={onCheckAllChange}
            checked={selectedKeys.length === objOptions.length}
          >
            {getLocale('selectAll', '全选')}
          </Checkbox>
          <Divider className={`${expSQLServiceModal}-myDivider`} dashed />
          <CheckboxGroup
            options={objOptions}
            value={selectedKeys}
            onChange={onChange}
            className={`${expSQLServiceModal}-myCheckboxGroup`}
          />
        </div>
      </Spin>
    </Modal>
  );
});

ExpSQLServiceModal.defaultProps = {
  getLocale: (k, p) => p ?? '',
};

export default ExpSQLServiceModal;
