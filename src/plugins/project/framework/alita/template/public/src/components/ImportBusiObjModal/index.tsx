import React, {
  useState, useImperativeHandle, forwardRef, useMemo, useRef, useEffect,
} from 'react';
import {
  Button, Checkbox, Card, Upload, Spin, Progress, message, Modal
} from 'antd';
import { openProgressMsg, closeProgressMsg } from '../ProgressComp';
import pageIcon from '../../assets/pageicon';
import security from "@/utils/Security";
import { IconFont } from '../IconFont';
import './index.less';
import { prefix } from '../../styles';
import { UploadProps } from 'antd/es/upload/interface';
import { ImportBusiObjModalHooks, ImportBusiObjModalProps } from './types';
import engineApi from '@/services/api/engine';
import { getAppFileUrlByFileCode } from '@/services/api/getAppFileUrlByFileCode';
import { handleParseGroups as parseGroupFunction } from '@/utils/engine-utils/exportCustomUtils';;
import resolveApiPath from '@/utils/service/resolveApiPath';
import { batchDownloadFileByIds, saveBlobFile } from '@/utils/platform/utils/fileUtils';

const importBusiObjModal = `${prefix}-import-busi-obj-modal`;

const { Dragger } = Upload;

const CheckboxGroup = Checkbox.Group;

enum Status {
  done = 'done',
  init = 'init',
  fail = 'fail'
}

enum DownloadType {
  downloadTemplate = 'downloadTemplate',
  downloadFail = 'downloadFail',
}

const initInfo = {
  success: [],
  fail: [],
  status: Status.init, // 上传状态,
  msg: '',
  // 异步导入的数据
  fileId: undefined,
  successCount: 0,
  failCount: 0,
  isAsyncImport: false,
};

// 表头分组的处理保持与表格组件一致
const treeRootName = 'tree-root';
export const handleParseGroups = (params: any) => {
  const { list, groupMap, nameMap } = params;
  const keys = Object.keys(groupMap || {});
  if (!groupMap || !keys?.length) {
    // 分组为空时，不处理
    return undefined;
  }
  const finalGroup: any = {};
  // 实际层级数，包含列数据级
  let maxGroupLevel = 1;
  keys.forEach(k => {
    let group = groupMap[k];
    // 兼容旧版的分组数据
    if (typeof group === 'string') {
      group = [group];
    }
    // 兼容可能存在的空数据
    if (group === '' || group === null || group === undefined) {
      group = [''];
    }
    // 过滤掉空的配置
    group = group.filter((g: any) => g);
    // 保留一个空配置，以进入构造
    group = group.length === 0 ? [''] : group;
    maxGroupLevel = Math.max(maxGroupLevel, group.length + 1);
    finalGroup[k] = group;
  });
  // 用于表格头分组的数据结构：左树根节点，为第0层
  const leftTree: any = {
    title: treeRootName,
  };
  // 记录子级对应的父级
  const parentTreeNode = new WeakMap();
  list.forEach((col: any, i: number) => {
    const group = finalGroup[col];
    handleMultiLevelHeader({
      leftTree,
      column: { title: nameMap[col], key: col, index: col?.sort || i },
      group,
      parentTreeNode,
      maxGroupLen: maxGroupLevel,
    });
  });
  if (leftTree?.children?.length) {
    return [...leftTree?.children];
  }
  // 为空时不传出分组字段
  return undefined;
};

// TODO 记得删
// const appId = '1089426139952508928';
// const pageId = '1108371301173338112';
const ImportBusiObjModal = forwardRef<ImportBusiObjModalHooks, ImportBusiObjModalProps>((props, ref) => {
  const {
    // appId,
    // pageId,
    // utils,
  } = props;
  const getLocale = props.getLocale!;
  // const api = getApis({ appId: appId, pageId: pageId });
  const [visible, setVisible] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [curDataSource, setCurDataSource] = useState<any[]>([]);
  const [selectedKeys, setSelectedKeys] = useState<any[]>([]);
  const [uploading, setUploading] = useState<boolean>(false);
  const [params, setParams] = useState<any>({});
  const [objOptions, setObjOptions] = useState<any[]>([]);
  const [isCustom, setIsCustom] = useState<boolean>(false); // 是否自定义导入业务对象数据
  const [isCustomService, setIsCustomService] = useState<boolean>(false); // 是否自定义导入数据(通过自定义服务)
  const [isHideCheck, setIsHideCheck] = useState<boolean>(false); // 是否展示选择内容
  const [fileList, setFileList] = useState<any[]>([]);
  const uploadAbortController = useRef<any>();
  // 上传进度和文件解析进度
  const [progress, setProgress] = useState<{ upload: number, parse: number; }>({
    upload: 0,
    parse: 0,
  });
  const timeRef = useRef<any>();

  // 导入的成功和失败列
  const [importInfo, setImportInfo] = useState<any>(initInfo);
  const importList = useRef<any>([]);

  const RESULT_INFO = {
    warn: {
      title: getLocale('ExpBusiObjModal.partImportFailTitle', '部分数据导入失败'),
      icon: 'lcdp-icon-Warning',
    },
    success: {
      title: getLocale('ExpBusiObjModal.importSuccessTitle', '导入成功'),
      icon: 'lcdp-icon-Success',
      tips: getLocale('ExpBusiObjModal.importSuccessMsg', '数据导入成功，请选择前往列表查看'),
    },
    error: {
      title: getLocale('ExpBusiObjModal.importFailTitle', '导入失败'),
      icon: 'lcdp-icon-Error',
      tips: getLocale('ExpBusiObjModal.importFailMsg', '数据导入失败，请核对以下信息后，再重新提交。'),
    },
  };

  type RESULT_INFO_TYPE = keyof typeof RESULT_INFO;

  useEffect(() => {
    return () => {
      if (timeRef?.current) {
        clearTimeout(timeRef?.current);
      }
    };
  }, []);

  const { successLen, failLen, fileId, isAsyncImport } = useMemo(() => {
    const { isAsyncImport, fail, success, failCount, successCount } = importInfo || {};
    return {
      ...importInfo,
      successLen: isAsyncImport ? successCount : success?.length,
      failLen: isAsyncImport ? failCount : fail?.length,
    };
  }, [importInfo]);

  // 需要展示上传进度步骤和结果页的（自定义导入业务对象和导入业务对象数据动作）
  const hasUploadProcess = useMemo(() => isCustom || (!isCustom && !isCustomService), [isCustom, isCustomService]);

  const [selectedRows, colNameMap] = useMemo<[any[], any]>(() => {
    const { busiObjectFields, customGroup } = params;
    const nameMap: any = {};
    if (isCustom) {
      // 自定义导入业务对象数据时，busiObjectFields为对象数组格式，其他情况下，busiObjectFields为数组
      const newFields: any = [];
      if (busiObjectFields?.length) {
        curDataSource.forEach((item) => {
          const curField = busiObjectFields.find((field: any) => (item.attrCode === field?.code || item.attrCode === field));
          if (curField) {
            nameMap[typeof curField === 'string' ? curField : curField?.code] = item.attrName || item.attrCode;
            newFields.push(curField?.code ? ({ ...item, ...(curField || {}) }) : item);
          }
        });
      }
      if (customGroup) {
        // 存在表头分组时，需要记录下导出字段的名称和编码映射，组装分组时需要用到
        curDataSource.forEach(c => { nameMap[c.attrCode] = c.attrName; });
      }
      return [newFields, nameMap];
    }
    return [selectedKeys.length ? curDataSource.filter((item) => selectedKeys.includes(item.attrCode)) : [], nameMap];
  }, [selectedKeys, curDataSource, params, isCustom]);

  const uploadDisabled = useMemo(
    () =>
      loading ||
      uploading ||
      // 导入业务对象数据动作需要勾选导出字段
      (selectedKeys.length === 0 && !isCustom && !isCustomService) ||
      // 自定义导入业务对象数据动作需要配置导出列，否则禁止上传
      (isCustom && params.busiObjectFields?.length === 0) ||
      // 自定义导入动作需要配置自定义导入地址
      (isCustomService && !params.custUrl),
    [loading, uploading, selectedKeys, isCustom, isCustomService, params]
  );

  // 获取对象字段
  const queryBusiObjectRowColumns = async ({ busiObjectId }: any) => {
    try {
      setLoading(true);
      const resultList: any = await engineApi.queryBusiObjectRowColumns({ busiObjectId });
      setCurDataSource(resultList);
      setObjOptions(resultList.map((item: any) => ({
        value: item.attrCode,
        label: item.attrName,
        disabled: item.isRequired === 'T',
      })));
      const rows = resultList.filter((item: any) => item.isRequired === 'T');
      setSelectedKeys(rows.map((item: any) => item.attrCode));
    } catch (error) {
      console.log(error);
      message.error(getLocale('service.failMsg', '网络繁忙，请稍后再试'));
    } finally {
      setLoading(false);
    }
  };

  const queryCustBusiObjectRowColumns = async ({ busiObjectId }: any) => {
    try {
      setLoading(true);
      const resultList: any = await engineApi.queryBusiObjectRowColumns({ busiObjectId });
      setCurDataSource(resultList);
    } catch (error) {
      console.log(error);
      message.error(getLocale('service.failMsg', '网络繁忙，请稍后再试'));
    } finally {
      setLoading(false);
    }
  };

  const getWorkBookTemplate = async (downloadType = DownloadType.downloadTemplate) => {
    if (isAsyncImport && downloadType === DownloadType.downloadFail && fileId) {
      // 异步导入如果存在失败原因，从文件服务器下载
      batchDownloadFileByIds({
        fileIds: fileId,
        newFileName: getLocale('ExpBusiObjModal.importFailList', `导入失败列表-${new Date().getTime()}.xlsx`, { name: `${new Date().getTime()}` }),
        messageApi: {
          ...message,
          openProgressMsg,
          closeProgressMsg,
        },
        // appId,
        // pageId,
        getLocale,
      });
      return;
    }
    try {
      const { busiObjectId, fileName, customGroup } = params || {};
      const obj: any = {
        pickRows: selectedRows,
        busiObjectId,
      };
      // 存在配置的表头分组，下载模版时需要传给后端组装多表头模版
      if (customGroup && typeof parseGroupFunction === 'function') {
        // 配置了表头分组规则的，进行头部分组组装
        obj.groups = parseGroupFunction({
          list: selectedRows.sort((a, b) => +a?.sort - (+b?.sort)).map((row) => row.attrCode),
          groupMap: customGroup,
          nameMap: colNameMap,
        });
      }
      let resultList;
      let name: string = '';
      // 下载失败模版
      if (downloadType === DownloadType.downloadFail) {
        if (importList?.current?.length) {
          resultList = await engineApi.getFailedWorkBook({
            pickRows: obj.pickRows,
            groups: obj.groups,
            insts: importList?.current || [],
          });
          name = getLocale('ExpBusiObjModal.importFailList', `导入失败列表-${new Date().getTime()}.xlsx`, { name: `${new Date().getTime()}` });
        }
      } else {
        name = fileName ? `${fileName}.xlsx` : `tpl-${new Date().getTime()}.xlsx`;
        resultList = await engineApi.getWorkBookTemplate(obj);
      }
      if (resultList) {
        saveBlobFile({
          data: resultList,
          fileName: name,
        });
      }
    } catch (error) {
      console.log(error);
      message.error(getLocale('service.failMsg', '网络繁忙，请稍后再试'));
    }
  };

  const open = (options: any) => {
    setVisible(true);
    setIsCustom(false);
    setIsCustomService(false);
    setParams(options || {});
    const { busiObjectId } = options;
    queryBusiObjectRowColumns({ busiObjectId });
  };

  const openWithCustFields = (options: any) => {
    setVisible(true);
    setIsCustom(true);
    setIsCustomService(false);
    setParams(options || {});
    const { busiObjectId } = options;
    queryCustBusiObjectRowColumns({ busiObjectId });
  };

  const openWithCustParams = (options: any) => {
    setVisible(true);
    setIsCustom(false);
    setIsCustomService(true);
    setParams(options || {});
  };

  const close = () => {
    setVisible(false);
    setFileList([]);
    setImportInfo(initInfo);
    // 关闭弹窗的时候如果请求还未结束则停止请求
    if (uploadAbortController.current && typeof uploadAbortController.current?.abort === 'function') {
      // 终止请求
      uploadAbortController.current.abort();
    }
  };

  const onChange = (checkedValues: any[]) => {
    setSelectedKeys(checkedValues);
  };

  const onCheckAllChange = (e: any) => {
    if (e.target.checked) {
      setSelectedKeys(curDataSource.map((item) => item.attrCode));
    } else {
      setSelectedKeys(curDataSource.filter((item) => item.isRequired === 'T').map((item) => item.attrCode));
    }
  };


  // TODO: 待确认
  const uploadAction = useMemo(() => {
    if (!isCustomService) {
      return engineApi.importInsts;
    }
    const { custUrl } = params || {};
    if (custUrl?.api) {
      return resolveApiPath(custUrl.api);
    }

    // TODO: 其他情况（自定义导入数据？？）
    // if (typeof custUrl === 'string' && custUrl?.startsWith('http') || custUrl?.startsWith('//')) {
    //   return custUrl;
    // }
    // if (typeof custUrl === 'string' && custUrl?.startsWith('/')) {
    //   return prefix + custUrl;
    // }
    // return `${prefix}/${custUrl}`;
    return '';
  }, [isCustomService, params]);

  // 上传时的额外参数
  const uploadPropsData = useMemo<any>(() => {
    const obj: any = {};
    const { customGroup, exception = {} } = params || {};
    if (exception) {
      Object.keys(exception).forEach(exp => {
        obj[exp] = exception[exp];
      });
    }
    // 存在配置的表头分组，下载模版时需要传给后端组装多表头模版
    if (customGroup && typeof parseGroupFunction === 'function') {
      // 配置了表头分组规则的，进行头部分组组装
      obj.groups = parseGroupFunction({
        list: selectedRows.sort((a, b) => +a?.sort - (+b?.sort)).map(row => row.attrCode),
        groupMap: customGroup,
        nameMap: colNameMap,
      });
    }
    if (!isCustomService) {
      return {
        query: new Blob([JSON.stringify({
          pickRows: selectedRows,
          showOnly: params.showOnly === 'T' ? 'T' : 'F',
          busiObjectId: params.busiObjectId,
          ...obj,
        })], { type: 'application/json' }),
      };
    }
    const { _source, _serviceId } = params.custUrl || {};
    const customParams: any = {
      param: new Blob([JSON.stringify({ ...(params.custParams || {}), ...obj })], { type: 'application/json' }),
    };
    if (_source === 'std') {
      // 自定义导出勾选了编排类服务
      // customParams['ORCHESTRATION.appId'] = appId;
      customParams['ORCHESTRATION.serviceVersionId'] = _serviceId;
    }
    return customParams;
  }, [isCustomService, selectedRows, params, colNameMap]);

  const baseUploadProps: UploadProps = {
    name: 'impFile',
    action: uploadAction,
    // @ts-ignore
    withCredentials: true,
    // @ts-ignore
    disabled: uploadDisabled,
    // @ts-ignore
    // showUploadList: isCustom || isCustomService ? true : false,
    // @ts-ignore
    accept: '.xls,.xlsx',
    listType: 'picture',
    // @ts-ignore
    headers: {
      // @ts-ignore
      // 'APP-ID': appId,
      // @ts-ignore
      // 'X-B-TARGET-ID': pageId,
      // @ts-ignore
      'X-B-AUTH': 1,
    },
    // @ts-ignore
    maxCount: 1,
    // @ts-ignore
    data: uploadPropsData,
  };

  /**
 * @param responseParams 响应失败上下文参数
 */
  const handleFail = (responseParams: any) => {
    // 状态码非200的情况
    const { message } = responseParams || {};
    const { success, fail, isAsyncImport } = responseParams?.resultObject || {};
    const resultMsg = responseParams?.resultMsg || message;
    if (typeof params?.onFail === 'function') {
      params.onFail(isAsyncImport ? undefined : fail || responseParams?.resultObject, resultMsg);
    }
    setImportInfo({ ...responseParams?.resultObject, msg: resultMsg || getLocale('ExpBusiObjModal.uploadFail', '文件上传失败，请重试！', {}), status: Status.fail, fail, success });
    if (isCustomService) {
      // 上传失败时重置列表
      setFileList([]);
    }
  };

  /**
   *
   * @param responseParams 响应成功上下文参数
   * @param triggerCallback 是否触发回调和关闭弹窗
   */
  const handleSuccess = (responseParams: any, triggerCallback = false) => {
    const { success, fail, successCount, failCount, isAsyncImport } = responseParams?.resultObject || {};
    const successLen = isAsyncImport ? successCount : success?.length;
    const failLen = isAsyncImport ? failCount : fail?.length;
    // 全部导入失败时触发
    if (!successLen && failLen) {
      handleFail({ ...responseParams, resultMsg: getLocale('ExpBusiObjModal.uploadFail', '文件上传失败，请重试！', {}) });
    } else {
      if (typeof params?.onSuccess === 'function') {
        params.onSuccess(isAsyncImport ? undefined : success || responseParams?.resultObject, responseParams?.resultMsg);
      }
      // if (hasUploadProcess && !triggerCallback) {
      setImportInfo({
        ...responseParams?.resultObject,
        status: Status.done,
        msg: responseParams?.resultMsg,
        success: success || responseParams?.resultObject || [],
        fail,
      });
      // } else {
      //   close();
      // }
    }
  };

  // 模拟数据处理进度条
  const mockParseProgress = () => {
    let percent = 0;
    let resolve;
    const update = () => {
      if (timeRef?.current) {
        window.clearTimeout(timeRef?.current);
        timeRef.current = null;
      }
      timeRef.current = setTimeout(() => {
        percent = +(percent + Math.max((100 - percent) / 5, 0.01)).toFixed(2);
        setProgress((pre: any) => ({ ...pre, parse: percent }));
        if (percent < 100) {
          update();
        }
      }, 200);
    };
    new Promise((res, rej) => {
      resolve = res;
      update();
    }).then((p) => {
      if (timeRef?.current) {
        window.clearTimeout(timeRef?.current);
        timeRef.current = null;
      }
      setProgress((pre: any) => ({ ...pre, parse: p }));
    });
    return resolve;
  };

  // 后端返回处理所有列表，前端需要进行解析区分出成功与失败的列表
  const parseSuccess = (result: any, isAsyncImport = false) => {
    return new Promise((resolve) => {
      if (params?.exception?.partialImport !== 'T') {
        // 非部分导入时，存在失败的条目则表示导入失败
        let fail: any[] = [];
        if (!isAsyncImport) {
          fail = (result || []).find((c: any) => c.failReason);
        }
        resolve(isAsyncImport ? {
          ...result,
          isAsyncImport,
        } : { success: fail ? [] : result, fail: fail ? result : [] });
      } else {
        const res: any = {
          success: [],
          fail: [],
        };
        // 开启部分导入时，需要分别展示成功和失败的条目
        setTimeout(() => {
          const parse = (list: any[]) => {
            const curList = list.slice(0, 50);
            curList.forEach((l) => {
              if (l.failReason) {
                res.fail.push(l);
              } else {
                res.success.push(l);
              }
            });
            if (list.slice(50)?.length > 0) {
              const callback = () => {
                parse(list.slice(50));
              };
              if (typeof window.requestAnimationFrame === 'function') {
                window.requestAnimationFrame(callback);
              } else {
                setTimeout(callback, 0);
              }
            } else {
              resolve(res);
            }
          };
          if (isAsyncImport) {
            resolve({ ...result, isAsyncImport });
          } else {
            parse(result);
          }
        }, 0);
      }
    });
  };

  // 自定义上传方法，若没传response参数，则手动发起上传请求
  const handleCustomUpload = async (res?: any, list?: any) => {
    const _fileList = fileList?.length > 0 ? fileList : list;
    if (!_fileList?.length) {
      message.warn(getLocale('ExpBusiObjModal.noFile', '无上传文件，请先选择文件'));
      return;
    }
    let response = res;
    if (!response) {
      try {
        setUploading(true);
        const xhrPromise = new Promise((resolve, reject) => {
          const xhr = new XMLHttpRequest();
          const formData = new FormData();
          const file = _fileList[0];
          formData.append(baseUploadProps.name || 'file', file);
          if (Object.keys(uploadPropsData)?.length) {
            Object.keys(uploadPropsData).forEach(key => {
              formData.append(key, uploadPropsData[key]);
            });
          }
          importList.current = [];
          xhr.open('post', baseUploadProps.action as string);
          Object.keys(baseUploadProps.headers || {}).forEach(c => {
            xhr.setRequestHeader(c, (baseUploadProps.headers || {})[c]);
          });
          xhr.setRequestHeader('X-SIGN', security.httpEncryption.createHttpSignStr(
            baseUploadProps.action as string,
            { method: 'post', headers: baseUploadProps.headers, body: formData || '', search: '' }
          ));
          xhr.withCredentials = true;
          // 后端解析结束触发回调，终止进度
          let finishFn: any;
          xhr.upload.onprogress = ({ loaded }) => {
            setProgress(pre => ({
              ...pre,
              upload: +((loaded / file.size) * 100).toFixed(2),
            }));
            if (loaded >= file.size) {
              finishFn = mockParseProgress();
            }
          };
          xhr.onload = async () => {
            response = JSON.parse(xhr.responseText || xhr.response);
            if (xhr.status === 200) {
              let result = response?.resultObject;
              let isAsyncImport = false;
              if (hasUploadProcess) {
                if (result && typeof result === 'object' && result?.failCount !== undefined) {
                  isAsyncImport = true;
                } else if (Array.isArray(result || [])) {
                  // 只解析不入库的导入数据出参为数组格式，入库的数据调整成异步导入，返回对象格式
                  importList.current = result || [];
                  result = [...importList.current];
                }
                const res = await parseSuccess(result, isAsyncImport);
                response = {
                  ...response,
                  resultObject: res,
                };
              }
            }
            if (typeof finishFn === 'function') {
              finishFn(100);
            }
            resolve(response);
            uploadAbortController.current = null;
          };
          xhr.ontimeout = () => {
            xhr.abort();
            reject();
            if (typeof finishFn === 'function') {
              finishFn(0);
            }
            uploadAbortController.current = null;
          };
          uploadAbortController.current = {
            abort: () => {
              reject();
              xhr.abort();
              if (typeof finishFn === 'function') {
                finishFn(0);
              }
              if (isCustomService) {
                setFileList([]);
              }
            },
          };
          xhr.send(formData);
        });
        await xhrPromise;
      } finally {
        // 重置进度条
        setUploading(false);
        setProgress({ upload: 0, parse: 0 });
      }
    }
    const { resultObject, resultCode } = response || {};
    if (resultCode === '0') {
      handleSuccess(response);
    } else if (resultCode && resultCode !== '0') {
      handleFail(response);
    } else if (!resultCode) {
      // 兼容旧方式
      if (!(resultObject && resultObject[0])) {
        handleFail(response);
      } else {
        handleSuccess(response);
      }
    }
  };

  const renderFileItem = (file: any, remove?: any) => (
    <div className="upload-list-item">
      <img src={pageIcon.excelIcon} alt="" />
      <div className="content">
        <div className="title">{file.name}</div>
        <div className="text">
          {getLocale('fileSize', '文件大小')}
          {((file?.size || 0) / (1024 * 1024)).toFixed(3)}MB
        </div>
      </div>
      {remove && (
        <div className="delete" onClick={remove}>
          <IconFont width={16} height={16} iconClass="lcdp-icon-shanchu" />
        </div>
      )}
    </div>
  );

  const uploadProps: UploadProps = {
    ...baseUploadProps,
    // @ts-ignore
    onChange: async (info) => {
      if (!info.file.status) {
        return;
      }
      setFileList(info.fileList);
      if (!['uploading', 'removed'].includes(info.file.status) && !loading) {
        setLoading(true);
      }
      if (info.file.status === 'done') {
        setLoading(false);
        const { response } = info.file;
        await handleCustomUpload(response);
      } else if (info.file.status === 'error') {
        setLoading(false);
        message.error(getLocale('ExpBusiObjModal.uploadFail', `${info.file.name} 文件上传失败，请重试！`, { name: info.file.name }));
      } else if (info.file.status === 'removed') {
        setLoading(false);
      }
    },
    beforeUpload: (file, list) => {
      if (!['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel'].includes(file.type)) {
        message.warn(getLocale('ExpBusiObjModal.validTable', '请上传合法的表格'));
        return Promise.reject();
      }
      if (visible) {
        // 自定义导入业务对象数据/导入业务对象数据
        setFileList(list);
        if (isCustomService) {
          handleCustomUpload(null, list);
        }
        return false;
      }
      return undefined;
    },
    itemRender: (_, file: any, __, { remove }) => {
      return (renderFileItem(file, remove));
    },
  };

  useImperativeHandle(ref, () => ({
    open,
    close,
    openWithCustFields,
    openWithCustParams,
  }));

  const renderResultIcon = (type: RESULT_INFO_TYPE, info?: any) => {
    const resultInfo = {
      ...(RESULT_INFO[type] || {}),
      ...info,
    };
    return (
      <div className="result">
        <p className="iconbox">
          <IconFont
            className="icon"
            width={60}
            height={60}
            iconClass={resultInfo.icon}
          />
        </p>
        <p className="title">
          {resultInfo.title}
        </p>
        <p className="tips">{resultInfo.tips}</p>
      </div>
    );
  };

  /** 自定义导入业务对象数据、导入业务对象数据动作
   * 全部校验通过
   * - 展示成功，触发成功回调
   * 部分校验不通过
   * - 开启部分导入
   *   - 存在成功
   *    - 展示部分失败，触发成功回调传入成功列表，允许下载失败原因
   * - 非部分导入
   *   - 展示失败，触发失败回调，允许下载失败原因
   * 全部校验不通过
   * - resultcode不为0或者接口非200
   *   - 展示失败，触发失败回调，不下载失败原因
   * - 接口200
   *   - 展示失败，触发失败回调，允许下载失败原因
   */
  const renderImportResult = () => {
    if (uploading && fileList[0]) {
      // 上传中，展示进度
      return (
        <Spin spinning={progress.upload >= 100 || true} tip={getLocale('ExpBusiObjModal.dataDealing', '数据处理中...')}>
          <div className="progress">
            {renderFileItem(fileList[0])}
            <div className="progress-item">
              {getLocale('fileUpload', '文件上传')}
              <Progress percent={progress.upload || 0} />
            </div>
            {/* <div className="progress-item">
            数据处理
            <Progress percent={progress.parse || 0} />
          </div> */}
          </div>
        </Spin>
      );
    } if (importInfo?.status === Status.fail && !failLen) {
      // 上传失败
      return (
        <>
          {renderResultIcon('error')}
          <div className="result-sub">
            <span className="title-icon">
              <IconFont
                className="icon"
                width={16}
                height={16}
                iconClass="lcdp-icon-News"
              />
            </span>
            {importInfo?.msg}
          </div>
        </>
      );
    } if ([Status.done, Status.fail].includes(importInfo?.status) && failLen) {
      const successLength = successLen || 0;
      const failLength = failLen || 0;
      return (
        <>
          {/* 部分成功部分失败 */}
          {params.exception?.partialImport === 'T' && successLength !== 0 && renderResultIcon('warn',
            {
              tips: getLocale('ImportBusiObjModal.tips',
                `导入总记录数${successLength + failLength}条，其中${successLength}条成功，${failLength}条失败`,
                { total: successLength + failLength, success: successLength, fail: failLen })
            })}
          {/* 全部校验失败 */}
          {failLength && successLength === 0 && renderResultIcon('error')}
          <div className="result-sub">
            <span className="title-icon">
              <IconFont
                className="icon"
                width={16}
                height={16}
                iconClass="lcdp-icon-News"
              />
            </span>
            <div className="content">
              {getLocale('ExpBusiObjModal.downloadFailReason', '下载导入失败数据，查看失败原因')}
            </div>
            <a
              href="javascript:void(0);"
              onClick={(e) => {
                e.preventDefault();
                getWorkBookTemplate(DownloadType.downloadFail);
              }}
            >{getLocale('clickdownload', '点击下载')}
            </a>
          </div>
        </>
      );
    } if (importInfo?.status === Status.done) {
      // 导入成功
      return renderResultIcon('success');
    }
    return (
      <>
        {!isCustom && !isCustomService ? (
          <Card
            title={
              <>
                <span
                  className={`${importBusiObjModal}-icon`}
                  onClick={() => setIsHideCheck(!isHideCheck)}
                >
                  <IconFont
                    className="ant-tabs-icon"
                    width={16}
                    height={16}
                    iconClass="lcdp-icon-sanjiaoxiala"
                  />
                </span>
                <Checkbox
                  indeterminate={
                    selectedKeys.length > 0 &&
                    selectedKeys.length < objOptions.length
                  }
                  onChange={onCheckAllChange}
                  className={`${importBusiObjModal}-checkwrap`}
                  checked={selectedKeys.length === objOptions.length}
                >
                  <span>{getLocale('ExpBusiObjModal.validField', '指定导入的有效字段')}</span>
                </Checkbox>
              </>
            }
            size="small"
            style={{ width: '100%' }}
            className={`${importBusiObjModal}-downloadcard`}
            extra={
              <Button
                onClick={() => {
                  if (selectedKeys.length) {
                    getWorkBookTemplate();
                  } else {
                    message.error(getLocale('ExpBusiObjModal.exportFieldError', '请先选择要导出的字段'));
                  }
                }}
                type="link"
              >
                {getLocale('ExpBusiObjModal.downloadMutiTpl', '下载批量导入模版')}
              </Button>
            }
          >
            {!isHideCheck && (
              <Spin spinning={loading}>
                <CheckboxGroup
                  options={objOptions}
                  value={selectedKeys}
                  onChange={onChange}
                  className={`${importBusiObjModal}-checkbox`}
                />
              </Spin>
            )}
          </Card>
        ) : null}
        <Card
          title={isCustom || isCustomService ? '' : getLocale('fileUpload', '文件上传')}
          size="small"
          style={{
            width: '100%',
            marginTop: isCustom || (isCustomService && params.custTpl) ? 0 : 10,
            borderTopWidth: isCustomService ? 0 : 1,
          }}
          className={`${importBusiObjModal}-customCard`}
        >
          {isCustom || isCustomService ? (
            <div className="title">{getLocale('fileUpload', '文件上传')}</div>
          ) : null}
          <Dragger
            {...uploadProps}
            fileList={fileList}
            style={{ opacity: uploadDisabled ? 0.3 : 1 }}
          >
            <p className="ant-upload-drag-icon">
              <IconFont
                className="ant-tabs-icon"
                width={48}
                height={48}
                iconClass="lcdp-icon-cloud-upload"
              />
            </p>
            <p className={`${importBusiObjModal}-text`}>
              {getLocale('ExpBusiObjModal.dragView', '点击选择文件或拖动文件到此区域进行上传')}
            </p>
            <p className={`${importBusiObjModal}-hint`}>{getLocale('ExpBusiObjModal.onlySingleUpload', '仅支持单个文件上传')}</p>
          </Dragger>
        </Card>
      </>
    );
  };

  const renderCardExtra = () => {
    if (isCustom) {
      return (
        <Button
          className={`${importBusiObjModal}-downloadTempBtn`}
          onClick={
            () => {
              if (selectedRows.length) {
                getWorkBookTemplate();
              } else {
                message.error(getLocale('ExpSQLServiceModal.importFieldError', '请先选择要导入的字段'));
              }
            }
          }
          type="link"
        >
          {getLocale('ExpBusiObjModal.downloadMutiTpl', '下载批量导入模版')}
        </Button>
      );
    }
    if (isCustomService && (params.custTpl || params.custTplUrl)) {
      return (
        <Button
          onClick={
            () => {
              const { fileCode } = params.custTpl || {};
              // @ts-ignore
              const downloadUrl = params.custTplUrl || (fileCode ? getAppFileUrlByFileCode(fileCode) : null);
              if (!downloadUrl) {
                return;
              }
              // 下载导入模板自定义名称无效处理
              const xhr = new XMLHttpRequest();
              xhr.open('GET', downloadUrl, true);
              xhr.responseType = 'blob'; // 通过文件下载url拿到对应的blob对象
              xhr.onload = () => {
                if (xhr.status === 200) {
                  const link = document.createElement('a');
                  link.href = window.URL?.createObjectURL(xhr.response);
                  if (params?.name) {
                    link.download = `${params.name}.xlsx`;
                  }
                  if (params?.custTpl?.name) {
                    link.download = params?.custTpl?.name;
                  }
                  link.click();
                  link.remove();
                  window.URL?.revokeObjectURL(link.href);
                }
              };
              xhr.send();
            }
          }
          type="link"
          className={`${importBusiObjModal}-downloadTempBtn`}
        >
          {getLocale('ExpBusiObjModal.downloadTpl', '下载导入模版')}
        </Button>
      );
    }
    return null;
  };

  return (
    <Modal
      className={`${importBusiObjModal}-customModal`}
      title={(
        <>
          <span className="title">{getLocale('ExpSQLServiceModal.importData', '导入数据')}</span>
          {(isCustom || isCustomService) && (
            renderCardExtra()
          )}
        </>
      )}
      visible={visible}
      destroyOnClose
      onCancel={close}
      footer={
        <>
          <Button
            type="default"
            onClick={() => {
              if (uploading) {
                if (uploadAbortController.current && typeof uploadAbortController.current?.abort === 'function') {
                  // 终止请求
                  uploadAbortController.current.abort();
                }
              } else {
                close();
              }
            }}
          >
            {uploading ? getLocale('cancelUpload', '取消上传') : getLocale('close', '关闭')}
          </Button>
          {/* 自定义导入 */}
          {isCustomService && !uploading && importInfo?.status === Status.fail && (
            <Button
              type="primary"
              onClick={() => {
                setProgress({
                  upload: 0,
                  parse: 0,
                });
                setImportInfo(initInfo);
              }}
            >
              {getLocale('reupload', '重新上传')}
            </Button>
          )}
          {/* 自定义导入业务对象数据、导入业务对象数据 */}
          {hasUploadProcess && !uploading && !(importInfo?.status === Status.done && (failLen || 0) === 0) && (
            <Button
              type="primary"
              onClick={() => {
                setProgress({
                  upload: 0,
                  parse: 0,
                });
                if (importInfo?.status === Status.fail || (failLen || 0) > 0) {
                  setImportInfo(initInfo);
                } else {
                  handleCustomUpload();
                }
              }}
            >
              {importInfo?.status === Status.fail || (failLen || 0) > 0 ? getLocale('reupload', '重新上传') : getLocale('upload', '上传')}
            </Button>
          )}
        </>
      }
      width={588}
    >
      {renderImportResult()}
    </Modal>
  );
});

ImportBusiObjModal.defaultProps = {
  getLocale: (k, p) => p ?? '',
};

export default ImportBusiObjModal;
