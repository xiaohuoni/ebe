import { EngineApisType } from '@lingxiteam/types';

const langOptions = {
  loadingText: '加载中',
  more: '更多',
  all: '全选',
  notEmpty: (params: any) => `${params.name}不能为空!`,
  add: '添加',
  delete: '删除',
  edit: '编辑',
  deleteConfirm: '确认删除吗？',
  title: '标题',
  nodeRule: '节点规则不正确，请使用node.字段名进行配置',
  reset: '重置',
  warnFormat: '格式不正确',
  confirm: '确定',
  detail: '详情',
  save: '保存',
  ctrl: '操作',
  createNew: '新增',
  selectPlaceholder: '请选择',
  'Quill.uploadImages': '只能上传格式为.jpg,.gif,.png的图片',
  'Quill.imageSizeLimit': '每张图片不能大于3000KB',
  'Quill.selectZh': '请先选中文字，再点击链接',
  'Tree.editingWarn': '没有正在操作的树节点',
  'Audio.cannotPlay': '音频节点被移除,无法播放',
  'Audio.cannotStop': '音频节点被移除,无法暂停',
  'Audio.cannotSwitch': '音频节点被移除,无法切换',
  'Audio.warning': '音频文件获取出错',
  'checkboxGroup.minRule': (params: any) => `低于最小选项限制[最少选${params?.min}个]`,
  'checkboxGroup.maxRule': (params: any) => `超过最大选项限制[最多选${params?.max}个]`,
  'Icon.imgFormatWarning': '图片格式错误',
  'Input.lenRule': (params: any) => `内容长度须大于等于${params?.minLength}且小于等于${params?.maxLength}`,
  'Input.maxRule': (params: any) => `内容长度须小于等于${params?.maxLength}`,
  'Input.minRule': (params: any) => `内容长度须大于等于${params?.minLength}`,
  'Upload.download': '该文件正在下载，请耐心等待',
  'Upload.readonly': '当前为只读状态，不允许上传或移除文件!',
  'Upload.maxSize': (params: any) => `当前文件最大上传大小为${params?.singleFileMaxSize}，请重新上传`,
  'Upload.minSize': (params: any) => `当前文件最小上传大小为${params?.singleFileMinSize}，请重新上传`,
  'Upload.maxNum': (params: any) => `当前文件最大上传个数为${params?.numberLimit}，不允许继续上传`,
  'Upload.format': (params: any) => `文件格式不正确，请上传${params?.acceptType}格式的文件`,
  'Upload.limit': (params: any) => `当前文件最大上传个数为${params?.numberLimit}，请重新选择`,
  'Upload.text': '点击或者拖动文件到虚线框内上传',
  'Upload.uploadText': '点击上传',
  'Upload.downloadText': '下载',
  'Upload.origin': '源文件下载',
  'Upload.waterMark': '加水印下载',
  'Upload.downloadType': '文件下载方式',
  'InputNumber.hundred': '百',
  'InputNumber.k': '千',
  'InputNumber.w': '万',
  'InputNumber.10w': '十万',
  'InputNumber.100w': '百万',
  'InputNumber.1000w': '千万',
  'InputNumber.100m': '亿',
  'InputNumber.b': '十亿',
  'InputNumber.10b': '百亿',
  'InputNumber.100b': '千亿',
  'InputNumber.t': '万亿',
  'InputNumber.10t': '十万亿',
  'Pagination.showTotal': (params: any) => `共 ${params?.tol} 条`,
  'RadarChart.warning': '维度数据配置有误',
  'RemoteComponent.fail': '自定义组件加载失败',
  'Steps.wait': '等待状态',
  'Steps.process': '处理中状态',
  'Steps.finish': '完成状态',
  'Steps.error': '错误状态',
  'Table.dateTypeWarning': '数据类型不一致',
  'Table.headTips': '通过左侧图标拖拽可调整列顺序',
  'Table.headCol': '列设置',
  'VerificationCode.text': '发送验证码',
  'VerificationCode.refresh': '重新获取',
  'Transfer.unit': (params: any) => `${params?.num}项`,
  'Transfer.min': (params: any) => `${params.name}最少需要选${params.min}条数据`,
  'Transfer.max': (params: any) => `${params?.name}最多可选${params?.max}条数据`,
  'Table.filter.empty': '空白',
  'Table.expand.component': '已关联业务组件：',
  'Table.data.typeError': (params: any) => `表格数据类型错误，当前类型为${params.type}，请检查配置`,
  'SuperSelect.load': '仅加载50条数据，更多数据请搜索',
  'DatePicker.afterToday': (params: any) => `${params.name}必须在今天之后（含今天）`,
  'DatePicker.beforeToday': (params: any) => `${params.name}必须在今天之前（含今天）`,
  'DatePicker.period': (params: any) => `${params.name}必须在${params.startTime}到${params.endTime}的范围内`,
  'DatePicker.after': (params: any) => `${params.name}不能小于${params.startTime}`,
  'DatePicker.before': (params: any) => `${params.name}不能大于${params.endTime}`,
  'Upload.uploadPlaceholder': '点击或拖拽文件到此处上传',
  'Upload.singleStrict': '单文件模式不允许上传多个文件',
  'Upload.actionStrict': '上传接口未配置，请返回修改！',
  'Upload.fileLimit': (params: any) => `超出文件数量限制，当前为${params.num}`,
  cancelConfirm: '取消后修改内容将不保存，确认取消吗？',
};

export const lang = (t: string, tip?: unknown) => {
  // @ts-ignore
  const l = typeof langOptions[t] === 'function' ? langOptions[t](tip) : langOptions[t];
  return l;
};
  
export const useLocale = (
  localeApis?: EngineApisType
) => {
  const getLocale = (t: string, params?: any) => {
    if (localeApis?.getLocale) {
      return localeApis?.getLocale(t, '', params);
    }
    return lang(t, params);
  };
    
  const language = localeApis?.getLocaleEnv?.() || 'zh-CN';

  return {
    lang: language,
    getLocale,
  };
};
