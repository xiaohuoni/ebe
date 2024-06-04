import engineApi from '@/services/api/engine';
import { Checkbox, Divider, message, Modal, Spin } from 'antd';
import {
  forwardRef,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  closeProgressMsg,
  closeProgressNotification,
  openProgressMsg,
  showProgressNotification,
} from '../ProgressComp';
// import getApis from '../../services';
import {
  BaseModalProps,
  ExpBusiObjModalCustomOptions,
  ExpBusiObjModalHooks,
  ExpBusiObjModalOptions,
} from '@/types';
import { exportFileShowProgress } from '@/utils/platform/utils/fileUtils';
import { LocaleFunction } from '@lingxiteam/types';
import { prefix } from '../../styles';
import './index';

const expBusiObjModal = `${prefix}-expBusiObjModal`;
const CheckboxGroup = Checkbox.Group;

interface ExpBusiObjModalProps extends BaseModalProps {
  // appId?: string;
  // pageId?: string;
  getLocale?: LocaleFunction;
}

const ExpBusiObjModal = forwardRef<ExpBusiObjModalHooks, ExpBusiObjModalProps>(
  (props, ref) => {
    const {
      // api,
      // utils,
      // pageId,
      // appId,
      getLocale,
    } = props;

    // 获取api
    const [visible, setVisible] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    // const rowKey = 'attrCode';
    const [curDataSource, setCurDataSource] = useState<any[]>([]);
    const [selectedKeys, setSelectedKeys] = useState<any[]>([]);
    const [confirmLoading, setConfirmLoading] = useState<boolean>(false);
    const [params, setParams] = useState<any>({});
    const [objOptions, setObjOptions] = useState<any[]>([]);
    const [isCustom, setIsCustom] = useState<boolean>(false);
    const refSelectedRow = useRef<any[]>([]);

    const selectedRows = useMemo(() => {
      const { busiObjectFields, exportType } = params;
      if (exportType === 'temp') {
        // 导出模板
        return curDataSource;
      }
      if (isCustom) {
        // 按照传入的顺序给后端生生成，使用find不兼容ie11
        if (Array.isArray(busiObjectFields) && busiObjectFields?.length) {
          return busiObjectFields.map((attrCode) => {
            return curDataSource.filter(
              (item) => item.attrCode === attrCode,
            )?.[0];
          });
        }
        // return busiObjectFields?.length ? curDataSource.filter((item) => busiObjectFields.includes(item.attrCode)) : [];
      }
      return selectedKeys.length
        ? curDataSource.filter((item) => selectedKeys.includes(item.attrCode))
        : [];
    }, [selectedKeys, curDataSource, params, isCustom]);

    refSelectedRow.current = selectedRows;

    const queryBusiObjectRowColumns = async ({ busiObjectId }: any) => {
      try {
        setLoading(true);
        const resultList =
          ((await engineApi.queryBusiObjectRowColumns({
            busiObjectId,
          })) as any[]) || [];
        setCurDataSource(resultList);
        setObjOptions(
          resultList.map((item) => ({
            value: item.attrCode,
            label: item.attrName,
            disabled: item.isRequired === 'T',
          })),
        );
        const rows = resultList.filter((item) => item.isRequired === 'T');
        setSelectedKeys(rows.map((item) => item.attrCode));
      } catch (error) {
        console.log(error);
        message.error(getLocale!('service.failMsg', '网络繁忙，请稍后再试'));
      } finally {
        setLoading(false);
      }
    };

    const queryNExportInsts = async ({
      busiObjectId,
      attrs,
      custFileName,
      exportType,
      tempParams,
      onSuccess,
      onFail,
      async,
    }: any) => {
      let hide = () => {};
      try {
        hide = message.loading(
          getLocale!('export.process.handling', '正在处理中，请稍后...'),
          0,
        );
        const resultList =
          ((await engineApi.queryBusiObjectRowColumns({
            busiObjectId,
          })) as any[]) || [];
        setCurDataSource(resultList);
        const fileName = custFileName
          ? `${custFileName}.xlsx`
          : `${busiObjectId}-${new Date().getTime()}.xlsx`;
        const downloadIndex = `${fileName}_${Math.random()}`;
        let params = {
          pickRows: refSelectedRow.current,
          busiObjectId,
          attrs: typeof attrs === 'object' ? attrs : {},
        };
        if (exportType === 'temp') {
          params = {
            ...params,
            ...tempParams,
          };
        }
        await exportFileShowProgress({
          fileOrigin: 'object',
          downloadIndex,
          fileName,
          onSuccess,
          onFail,
          // appId,
          // pageId,
          messageApi: {
            ...message,
            openProgressMsg,
            closeProgressMsg,
            closeProgressNotification,
            showProgressNotification,
          },
          params,
          async,
          getLocale: getLocale!,
        });
      } catch (error) {
        if (typeof onFail === 'function') {
          onFail();
        }
        console.log(error);
        message.error(getLocale!('service.failMsg', '网络繁忙，请稍后再试'));
      } finally {
        hide();
      }
    };

    const exportInsts = async () => {
      try {
        setConfirmLoading(true);
        const { busiObjectId, attrs, custFileName } = params || {};
        const requestParams = {
          pickRows: selectedRows,
          busiObjectId,
          attrs: typeof attrs === 'object' ? attrs : {},
        };
        const fileName = custFileName
          ? `${custFileName}.xlsx`
          : `${busiObjectId}-${new Date().getTime()}.xlsx`;
        await exportFileShowProgress({
          fileOrigin: 'object',
          fileName,
          onSuccess: params?.onSuccess,
          onFail: params?.onFail,
          params: requestParams,
          // pageId,
          // appId,
          async: params?.async,
          messageApi: {
            ...message,
            openProgressMsg,
            closeProgressMsg,
            closeProgressNotification,
            showProgressNotification,
          },
          getLocale: getLocale!,
        });
      } catch (error) {
        if (typeof params?.onFail === 'function') {
          params.onFail();
        }
        console.log(error);
        message.error(getLocale!('service.failMsg', '网络繁忙，请稍后再试'));
      } finally {
        setConfirmLoading(false);
      }
    };

    const open = (options: ExpBusiObjModalOptions) => {
      setVisible(true);
      setIsCustom(false);
      setParams(options || {});
      queryBusiObjectRowColumns({ ...options });
    };

    // useEffect(() => {
    //   open({ busiObjectId: '38104', attrs: {} });
    // }, []);

    const openWithCustFields = (options: ExpBusiObjModalCustomOptions) => {
      setVisible(false);
      setIsCustom(true);
      setParams(options || {});
      const { busiObjectId, attrs, custFileName, onSuccess, onFail } = options;
      queryNExportInsts({
        ...options,
        busiObjectId,
        attrs,
        custFileName,
        onSuccess,
        onFail,
      });
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

    useImperativeHandle<any, ExpBusiObjModalHooks>(ref, () => ({
      open,
      close,
      openWithCustFields,
    }));

    return (
      <Modal
        title={getLocale!('ExpBusiObjModal.title', '按字段导出业务对象数据')}
        visible={visible}
        destroyOnClose
        onOk={() => {
          if (selectedKeys.length) {
            exportInsts();
          } else {
            message.error(
              getLocale!(
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
          <Checkbox
            indeterminate={
              selectedKeys.length > 0 && selectedKeys.length < objOptions.length
            }
            onChange={onCheckAllChange}
            checked={selectedKeys.length === objOptions.length}
          >
            {getLocale!('selectAll', '全选')}
          </Checkbox>
          <Divider className={`${expBusiObjModal}-myDivider`} dashed />
          <CheckboxGroup
            options={objOptions}
            value={selectedKeys}
            onChange={onChange}
            className={`${expBusiObjModal}-myCheckboxGroup`}
          />
        </Spin>
      </Modal>
    );
  },
);

ExpBusiObjModal.defaultProps = {
  getLocale: (k, p) => p ?? '',
};

export default ExpBusiObjModal;
