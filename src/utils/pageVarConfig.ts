// TODO: 这里需要补充

import { getImportFrom, getImportsFrom } from './depsHelper';

// 页面上下文配置
const pageVar = {
  urlParam: {
    type: 'Record<string, any>',
    description: 'url参数',
  },
  routerData: {
    type: 'Record<string, any>',
    description: 'url参数',
  },
  api: {
    type: 'Record<string, (...args: any[]) => Promise<any>>',
    description: '服务接口',
  },
  ModalManagerRef: {
    type: 'React.MutableRefObject<any>',
    description: '弹窗管理应用',
  },
  functorsMap: {
    type: 'Record<string, Function>',
    description: '函数库',
  },
  fatherOnOk: {
    type: '(...args: any[]) => void',
    description: '父级弹窗确认回调',
  },
  closeModal: {
    type: '(modalId?: string, pageId?: string) => void;',
    description: '关闭弹窗',
  },
  refs: {
    type: 'Record<string, any>',
    description: '组件引用对象',
  },
  state: {
    type: 'Record<string, any>',
    description: '组件状态',
  },
  // getEngineApis: {
  //   type: '() => Record<string, any>',
  //   description: '引擎能力',
  // },
  attrDataMap: {
    type: 'Record<string, any>',
    description: '静态数据',
  },
  ExpSQLServiceModalRef: {
    type: 'React.MutableRefObject<any>',
    description: '导出SQL服务弹窗',
  },
  ExpBusiObjModalRef: {
    type: 'React.MutableRefObject<any>',
    description: '导出业务对象弹窗',
  },
  ImportBusiObjModalRef: {
    type: 'React.MutableRefObject<any>',
    description: '导入业务对象弹窗',
  },
  customActionId: {
    type: 'string',
    description: '自定义动作id',
  },
  lcdpApi: {
    type: 'Record<string, any>',
    description: '低代码接口',
  },
  appInfo: {
    type: 'Record<string, any>',
    description: '应用信息',
  },
  clearActionTimer: {
    type: '(timerName: string) => void',
    description: '清空定时器',
  },
  addActionTimer: {
    type: '(type: "interval" | "timeout" | undefined, timerName: string, callback: () => void, time?: number) => void',
    description: '增加定时器',
  },
  getFormValue: {
    type: '(compId: string) => Promise<any>',
    description: '获取表单值',
  },
  getValue: {
    type: '(id: string, stateName?: string) => any',
    description: '获取控件值',
  },
  asyncGetValue: {
    type: '(id: string, stateName?: string) => Promise<any>',
    description: '异步获取表单值',
  },
  setValue: {
    type: '(ids: Record<string, any> | string, value?: any) => void',
    description: '设置表单值',
  },
  getVisible: {
    type: '(id: string) => any',
    description: '获取显隐状态',
  },
  setVisible: {
    type: `(ids: Record<string, boolean | 'toggle'> | string, value?: any) => void`,
    description: '设置控件显隐状态',
  },
  getRequired: {
    type: '(id: string) => any',
    description: '获取控件是否必填',
  },
  setRequired: {
    type: `(ids: Record<string, boolean | 'toggle'> | string, value?: any) => void`,
    description: '设置必填',
  },
  callComponentMethod: {
    type: '(comId: string, methodName: string, ...args: any[]) => any',
    description: '调用组件的方法',
  },
  setDisabled: {
    type: `(ids: Record<string, boolean | 'toggle' | 'false' | 'true'> | string, value?: any) => void`,
    description: '设置是否禁用',
  },
  getDisabled: {
    type: 'getDisabled: (id: string) => any',
    description: '获取是否禁用',
  },
  validateForm: {
    type: '(compId: string) => Promise<any>',
    description: '校验表单',
  },
  resetForm: {
    type: '(compId: string) => void',
    description: '重置表单',
  },
  clearValue: {
    type: '(compId: string) => void',
    description: '清空value值',
  },
  setFormValues: {
    type: '(compId: string, formValues?: Record<string, any>) => void',
    description: '设置表单值',
  },
  asyncCallComponentMethod: {
    type: '(comId: string, methodName: string, ...args: any[]) => Promise<unknown>',
    description: '异步调用组件的方法',
  },
  validateAllForm: {
    type: '() => Promise<any>',
    description: '校验并获取所有表单值',
  },
  getAllFormValues: {
    type: '() => Promise<any>',
    description: '获取所有表单值',
  },
  resetAllForm: {
    type: '() => void',
    description: '重置所有表单',
  },
  updateNodeChildren: {
    type: '(nodeKey: any, odata: any[], arr: any[], key: string, title: string, selectable: string | undefined) => any[]',
    description: '加载子节点数据',
  },
  getTriggerRelDataSource: {
    type: '(attrDataMap: Record<string, any[]>, aNbr: any, zNbr: any, targetValue?: any) => any',
    description: '获取联动数据值',
  },
  data: {
    type: 'Record<string, any>',
    description: '数据源',
  },
  updateData: {
    type: `({ name, path, value, type, operateType, predicate, onlySetPatch }: {
      /**
       * 数据源名称
       */
      name: string;

      /**
       * 更新数据源的路径
       */
      path: string;

      /**
       * 目标值
       */
      value?: any;

      /**
       * 需要过滤的变量
       */
      predicate?: (item: any, index: number) => boolean;

      /**
       * 操作类型 数组时需要
       */
      operateType?: 0 | 1 | 2 | 3;

      /**
       * 数组或者对象类型
       */
      type: 'object' | 'array';

      /**
       * 是否局部赋值
       */
      onlySetPatch: boolean;
    }) => Promise<Record<string, any>>`,
    description: '更新数据源',
  },
  resetDataSource: {
    type: '(name: string) => Promise<Record<string, any>> | Promise<null>',
    description: '重置数据源',
  },
  reloadCustomDataSource: {
    type: '(name: string, params?: any) => Promise<DataSourceType>',
    description: '刷新自定义数据源',
  },
  dataSnapshot: {
    type: 'Record<string, any>',
    description: '数据源快照',
  },
  reloadServiceDataSource: {
    type: '(name: string, service: any, params: any) => Promise<any>',
    description: '刷新服务数据源',
  },
  reloadObjectDataSource: {
    type: '(name: string, url: string, options: any, params: any) => Promise<any>',
    description: '刷新对象数据源',
  },
  dataReadyComplete: {
    type: 'boolean',
    description: '数据源是否加载完成',
  },
  globalData: {
    type: 'Record<string, any>',
    description: '全局数据源',
  },
  globalDataReadyComplete: {
    type: 'boolean',
    description: '全局数据源是否加载完成',
  },
  messageApi: {
    type: 'Record<string, Function>',
    description: '消息提示Api',
  },
  saveBlobFile: {
    type: `({ data, fileName }: {
      data: any;
      fileName: any;
    }) => void`,
    description: '文件保存方法',
  },
  transSuperObjectParams: {
    type: `(busiObjectIdMap?: Record<string, {
        formId?: string;
        busiObjectId?: string;
    }>, extServices?: {
        sceneCode: string;
        actionCode: string;
    }[]) => Promise<Record<string, any>>;`,
    description: '提交业务对象',
  },
  lcdpParentRenderId: {
    type: `string`,
    description: '父组件引擎id',
  },
  getStaticDataSourceService: {
    type: `(ds: any[], labelKey: string, valueKey: string) => any[]`,
    description: '获取静态数据',
  },
  addToAwaitQueue: {
    type: `(compId: string, functionName: string, ...args: any[]) => void`,
    description: '将组件放入到指令队列',
  },

  sandBoxRun: {
    type: `(code: string, extendAllowMap?: Record<string, any>) => any`,
    description: '运行沙箱',
  },
  sandBoxSafeRun: {
    type: `(code: string, extendAllowMap?: Record<string, any>) => any`,
    description: '安全运行沙箱',
  },
  appId: {
    type: 'string',
    description: '应用Id',
  },
  BannerModal: {
    type: 'Record<string, any>',
    description: '预览弹窗',
  },
  getLocaleLanguage: {
    type: '(id: string, placeholder?: string, kv?: Record<string, string>) => string | undefined',
    description: '远端文字配置',
  },
  getLocale: {
    type: '(key: string, placeholder?: string, kv?: Record<string, string>) => string',
    description: '获取静态语言包。硬编码',
  },
  getLocaleEnv: {
    type: '() => string',
    description: '获取当前语言编码',
  },
  language: {
    type: 'string',
    description: '获取当前语言编码',
  },
  locale: {
    type: 'Record<string, any>',
    description: '当前语言文案对象',
  },
};

/**
 * 生成页面上下文解构代码
 */
export const getContextInfo = (
  opts: {
    paramsName?: string;
    includeVars?: string[];
    excludeVars?: string[];
  } = { paramsName: 'context', includeVars: [], excludeVars: [] },
) => {
  const { paramsName = 'context', includeVars = [], excludeVars = [] } = opts;
  // 去重，includeVars优先级大于默认的
  const vars = new Set([...Object.keys(pageVar), ...includeVars]);
  return {
    /**
     * 解构代码字符串
     */
    deconstructionCode: `const {${[...vars]
      .filter((v) => !excludeVars.includes(v))
      .join(',')} } = ${paramsName};`,

    /**
     * 变量数组
     */
    vars: [...vars],

    deps: [
      ...getImportsFrom('@/utils/historytool', ['historytool', 'HISTORYTYPES']),
      ...getImportsFrom('@/utils/platform', [
        'previewFile',
        'saveBlobFile',
        'batchDownloadFileByIds',
        'downloadByFileCode',
      ]),
      ...getImportsFrom('@/utils/cmd', [
        'checkIsEmpty',
        'checkIsContains',
        'safeNumber',
      ]),
      getImportFrom('@/utils/customFuncMapping', 'customFuncMapping', false),
    ],
  };
};

export default pageVar;
