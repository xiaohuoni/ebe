export default {
  placeholder: '请输入',
  confirm: '确定',
  clearText: '清除',
  cancelText: '取消',
  end: '结束',
  start: '开始',
  more: '更多',
  goBack: '返回',
  'PageView.getAppError': '获取应用@{appId}信息失败，请检查是否拥有该应用权限',
  year: '@{year}年',
  month: '@{month}月',
  day: '@{day}日',
  hour: '@{hour}时',
  minute: '@{minute}分',
  second: '@{second}秒',
  'command.stopCMD.undefined': '退出指令错误的抛出: 返回内容__undefined__',
  'command.stopCMD': '退出指令错误的抛出值为：@{value}',
  'command.gainErrorPrefix':
    '页面【@{pageName}】上的组件【@{name}】(@{id})@{eventName}@{lineNumberText}发生了异常：\n@{msg}',
  'command.lineNumber': '第@{lineNumber}行',
  'command.eventName': '的@{eventName}事件內',
  'command.debugger.msg': '触发调试工具断点',
  'command.starteval': '指令开始执行',
  'command.finisheval': '指令执行成功',
  'command.error': '指令错误：@{errmsg}',
  'command.exception': '脚本运行时异常！@{errmsg}',
  'command.sandboxErr': '沙箱执行出错！得到的表达式: @{expr}',
  'command.sandboxException': '指令执行沙箱表达式：@{expr}时遇到异常！',
  'command.illegal': '@{action}为非法值!',
  'errorMessage.01-00-2-000-001001':
    '没有查询到ID：@{busiCompId}的业务组件实例数据，该页面将不会渲染！请检查配置或者确认该页面是否有权限访问',
  'errorMessage.01-00-2-000-000001':
    '没有查询到ID：@{pageId}的页面实例数据，该页面将不会渲染！请检查配置或者确认该页面是否有权限访问',
  'errorMessage.05-03-1-304-012008': '执行页面自定义函数错误：@{error}',
  'errorMessage.05-03-1-304-020004': '没有找到组件@{compId}的引用，操作失败！',
  'errorMessage.05-03-1-304-020005': '在@{action}中发生错误：@{error}',
  'errorMessage.05-03-1-304-020002':
    '指令错误：接收的值不匹配，当前值为:@{field}, 期望为数字或字符串',
  reset: '重置',
  loadingText: '加载中',
  warnFormat: '格式不正确',
  notEmpty: '@{name}不能为空',
  actionCacheError:
    '当前组件ID=@{compId}不存在或者未进行初始化先进行事件缓存，组件初始化后执行',
  notFountParentFn: '没有找到指定的父页面方法@{funcName}',
  all: '全选',
  add: '添加',
  delete: '删除',
  edit: '编辑',
  deleteConfirm: '确认删除吗？',
  title: '标题',
  functionWarning: '必须为函数声明的表达式',
  stringError: '该指令的入参格式应该为字符串，但接受到非字符串的值',
  validateAction: '当前控件ID@{compId} 没有暴露【@{action}】方法',
  callActionError: '当前控件ID@{compId}的引用，调用失败',
  nodeRule: '节点规则不正确，请使用node.字段名进行配置',
  understood: '知道了',
  noListData: '暂无列表数据',
  fileNotExist: '文件资源不存在',
  fileNotSupportPreview: '当前文件不支持在线预览',
  componentError: '组件渲染错误',
  compName: '组件名称',
  compId: '组件标识',
  pageId: '页面标识',
  errorMsg: '错误信息',
  errorStack: '错误堆栈',
  errorTips: '组件加载失败，点击',
  viewDetails: '查看详情',
  downloadFail: '下载失败',
  download: '下载',
  derive: '导出',
  'Meta.array.typeError': '替换数据不是数组',
  'Meta.provide.initError': 'provide数据不能使用以下key: @{keys}',
  'Meta.provide.setError': 'provide数据不能使用: @{key}',
  'Meta.base.initError': '请调用init方法，并返回数据',
  'Meta.dataSource.initFail': '初始化数据源(@{name})失败: @{errMsg}',
  'Meta.dataSource.updateFail': '设置页面数据源失败',
  'Meta.dataSource.notFound': '数据源@{name}不存在， 请删除配置！',
  'Meta.dataSource.reloadFail':
    '刷新页面数据源失败, @{name}不存在，请删除配置！',
  'Meta.dataSource.reloadFailMsg': '页面数据源刷新失败(@{name}): @{errMsg}',
  'Meta.dataSource.clearFailMsg': '清空页面数据源失败',
  'Meta.globalData.initFail': '初始化全局数据源(@{name})失败: @{errMsg}',
  'Meta.globalData.updateFail': '设置全局数据源失败',
  'Meta.globalData.notFound': '全局数据源@{name}不存在，请删除配置！',
  'Meta.globalData.reloadFail':
    '刷新全局数据源失败, @{name}不存在，请删除配置！',
  'Meta.globalData.reloadFailMsg': '全局数据源刷新失败(@{name}): @{errMsg}',
  'Meta.globalData.clearFailMsg': '清空全局数据源失败',
  'exportFile.process.message':
    '总记录@{total}条，已生成数据@{currentCount}条，剩余@{count}条完成到处。',
  'export.process.downloading': '正在等待下载，请稍后...',
  'export.process.handling': '正在处理中，请稍后...',
  'exportFile.fail': '导出失败，稍后请重试。',
  deriveFail: '导出失败',
  componentNotFound: '@{compName}组件未注册',
  'sysAction.localtion.fail': '定位失败',
  'sysAction.location.transformfail': '坐标转换失败！',
  'sysAction.location.registerFail': '@{name}注册失败',
  'sysAction.sysSetValue.valueList': '没有配置赋值关系，无法赋值！',
  'sysAction.common.waring': '指令警告：@{message}',
  'sysAction.setDownloadResopnse.configurationError': 'downloadUrl配置有误',
  'sysAction.setDownloadResopnse.fileEmpty': '没有配置下载地址，操作失败！',
  'sysAction.exportCustomData.deriving': '正在导出中，请稍候...',
  'service.failMsg': '网络繁忙，请稍后再试',
  'service.notExist': '找不到指定服务@{url}，无法发起请求！',
  'service.errorMsg': '发送请求错误：@{message}',
  'sysAction.customPrintOrExport.exporting': '导出中',
  'sysAction.customPrintOrExport.printing': '打印中',
  'sysAction.customActionCode.timeout': '超过指定超时时间@{timeout}ms',
  notExistMethod: '没有找到指定的方法@{functionCode}',
  'sysAction.callParentCustomFunc.fail': '调用父页面事件失败: @{msg}',
  'sysAction.callSelfFunc.notFound':
    '没有找到自定义事件[@{customFuncName}]方法',
  'sysAction.callSelfFunc.error': '`在调用自定义事件中发生错误：@{error}',
  'sysAction.callCustomPageFunc.notFound':
    '执行调用任意页面事件错误，当前页面未找到自定义事件:@{customFuncName}，请排查该页面是否缓存或是否配置了该自定义事件！',
  'sysAction.callCustomPageFunc.error':
    '执行调用任意页面事件:@{name}发生错误: @{error}',
  'sysAction.callCurrentFunc.notFound':
    '执行调用自定义事件错误，当前页面未找到自定义事件:@{customFuncName}，请排查该页面是否缓存或是否配置了该自定义事件！',
  'sysAction.callCurrentFunc.error':
    '执行调用自定义事件:@{name}发生错误: @{error}',
  detail: '详情',
  ctrl: '操作',
  save: '保存',
  createNew: '新增',
  selectPlaceholder: '请选择@{title}',
  'lcdpApi.router.urlEmpty': '页面跳转地址缺失，请检查',
  'lcdpApi.router.openFail': '打开新页面失败，缺失@{type}',
  'lcdpApi.router.notSupport': '不支持的页面类型: @{type}',
  'lcdpApi.router.notFound': '找不到跳转页面的数据',
  'service.errorHandler.badRequestError':
    '当前请求错误错误:错误编码@{status}请请求提供商处理',
  'service.errorHandler.unauthorizedError':
    '当前请求无权限:错误编码@{status}，请确认是否有权限或联系管理员！',
  'service.errorHandler.forbiddenError':
    '请求服务器被拒绝:错误编码@{status}，通常是权限问题，请确保有权限访问！',
  'service.errorHandler.notFoundError':
    '请求的资源不存在:错误编码@{status}，请排查环境地址和对应资源是否存在',
  'service.errorHandler.internalServerError':
    '服务器内部错误:错误编码@{status}，请联系服务提供商处理！',
  'service.errorHandler.notImplementedError':
    '请求服务器不支持的请求功能:错误编码@{status}, 请联系服务提供商处理！ ',
  'service.errorHandler.badGatewayError':
    '服务器作为网关或代理，从上游服务器收到无效的响应:错误编码@{status}, 请联系服务提供商处理！',
  'service.errorHandler.serviceUnavailableError':
    '服务器暂时不可用，通常是由于过载或维护:错误编码@{status}, 请联系服务提供商处理！ ',
  'service.errorHandler.requestEntityTooLargeError':
    '请求实体过大:错误编码@{status}, 请通过修改 nginx 配置文件的 client_max_body_size 大小和后端应用的配置项#上传文件大小限制spring.servlet.multipart.max-file-size=300MB spring.servlet.multipart.max-request-size=300MB',
  'service.errorHandler.url': '请求地址:@{path}',
  'service.hooks.fetchSendBeforeError':
    '执行fetchSendBefore/请求发送前事件出错:@{message}',
  'service.hooks.fetchResponseError':
    '执行fetchResponse/请求响应事件出错:@{message}',
  'service.hooks.fetchSuccessError':
    '执行fetchSuccess/请求成功事件出错:@{message}',
  'service.hooks.fetchFailError': '执行fetchFail/请求失败事件出错@{message}',
  'service.config.timeoutMsg': '请求失败，请求超时未响应',
  relogin: '请重新登录',
  'appManager.createAppFail':
    '未创建/获取成功，如需创建，请传入createOnAbsent: true',
  selectAll: '全选',
  selectNumber: '已选@{num}个',
  reupload: '重新上传',
  upload: '上传',
  'Upload.exception': '请求失败，网关响应异常',
  'Upload.failed': '上传失败',
  'Upload.success': '上传成功',
  cancelUpload: '取消上传',
  close: '关闭',
  fileUpload: '文件上传',
  clickdownload: '点击下载',
  fileSize: '文件大小：',
  startDate: '开始年月',
  yearUnit: '年',
  halfYearUnit: '半年',
  quarterUnit: '季度',
  monthUnit: '月',
  timeUnit: '次',
  oneclickFilling: '一键填充',
  residue: '剩余',
  yuan: '元',
  minRule: '低于最小选项限制[最少选@{min}个]',
  maxRule: '超过最大选项限制[最多选@{max}个]',
  minAndMaxRule: '选项限制须大于等于@{min}且小于等于@{max}',
  'NoPermission.description': '您还没有访问权限，请联系管理员～',
  'NotFound.description': '抱歉，您访问的页面不存在',
  'Modal.missParams': '弹窗操作失败：缺少页面实例ID或页面路径',
  scaleMax: '已缩放至最大',
  scaleMin: '已缩放至最小',
  preview: '预览',
  notSupportPreview: '该文件不支持当前窗口预览',
  months: [
    '一月',
    '二月',
    '三月',
    '四月',
    '五月',
    '六月',
    '七月',
    '八月',
    '九月',
    '十月',
    '十一月',
    '十二月',
  ],
  untitled: '未命名',
  pageName: '页面名称',
  pageType: '页面类型',
  compType: '组件类型',
  eventType: '事件类型',
  customEvent: '页面自定义事件',
  eventCode: '事件编码',
  cmdLocation: '动作位置',
  eventName: '事件名称',
  request_URL_is_empty: '未配置请求信息',
  actionName: '动作名称',
  'ErrorMsg.cancelText': '我知道了',
  'ErrorMsg.exceptionHelp': '异常帮助',
  errTypeTitMap: {
    '01': '网络请求异常',
    '02': '程序处理异常',
    '03': '业务数据异常',
    '04': '服务数据异常',
    '05': '配置数据异常',
    '06': '客户端请求异常',
    '07': '业务处理异常',
    '08': '服务器处理异常',
  },
  noData: '暂无数据',
  'ErrorMsg.no-information': '暂无匹配信息，请联系平台管理员',
  'ErrorMsg.solution': '解决方案',
  'ErrorMsg.errorMsgMatch': '错误信息匹配',
  'ErrorMsg.articleMap': {
    // 网络异常
    '01-00-2-000-000001': {
      title: '服务请求失败，网络出现异常',
      content: `<dl>
      <dt>网络异常原因：</dt>
      <dd>
        <ol>
          <li>网络故障，您的计算机/手机无Internet访问；</li>
          <li>计算机/手机开启了其他网络代理；</li>
          <li>请求被网络安全拦截；</li>
        </ol>
      <dd>
      <dt>解决方法：</dt>
      <dd>
        <ol>
          <li>首先确保您的计算机/手机已经通过Wi-Fi或电缆方式正常接入网络;</li>
          <li>如果使用公网访问系统，检查您的计算机/手机是否已连接到Internet，如无Internet访问，你可以尝试:<br />
            - 重启电脑、光猫、路由器、手机网络<br />
            - 调整DNS配置<br />
            - 重置TCP/IP网络配置<br />
            - 使用其他浏览器<br />
            如果问题仍然存，您应该联系您的互联网服务提供商并检查是否有任何技术问题。
          </li>
          <li>检查是否开启其他网络代理，如开启请尝试关闭。</li>
        </ol>
        </dd>
      </dl>
      `,
    },
    // 请求超时
    '01-00-2-000-000002': {
      title: '服务请求失败，请求超时',
      content: `<dl>
      <dt>请求失败可能原因：</dt>
      <dd>
        <ol>
          <li>当前系统处于使用高峰期，响应较慢；</li>
          <li>网络上行下行速率慢；</li>
          <li>请求报文过大，上传需要较多时间；</li>
          <li>文件下载，文件大小过大，需要较多时间；</li>
        </ol>
        </dd>
      </dl>
      <dt>解决方法：</dt>
      <dd>
        <ol>
          <li>请稍后再试；</li>
          <li>检查网络，测试网络速度，并优化；</li>
          <li>如内容过大，联系管理员调整超时时长；</li>
        </ol>
      </dd>
      </dl>
      `,
    },
    // 请求404
    '01-00-2-000-000404': {
      title: '服务请求失败，请求资源不存在(404)',
      content: `<dl>
      <dt>请求失败可能原因：</dt>
      <dd>
        <ol>
          <li>资源地址不正确；</li>
          <li>资源已被删除，浏览器缓存导致资源地址没更新；</li>
          <li>页面版本跟服务版本不一致；</li>
        </ol>
        </dd>
      </dl>
      <dt>解决方法：</dt>
      <dd>
        <ol>
          <li>清除浏览器缓存再重试；</li>
          <li>联系系统管理员排查资源地址和版本信息；</li>
        </ol>
      </dd>
      </dl>
      `,
    },
    // 请求413
    '01-00-2-000-000413': {
      title: '服务请求失败，请求报文体超过网关限制',
      content: `<dl>
      <dt>请求失败原因：</dt>
      <dd>
        <ol>
          <li>请求报文体过大引起的，请求长度超过了网关默认的缓存大小和最大客户端最大请求大小；</li>
        </ol>
        </dd>
      </dl>
      <dt>解决方法：</dt>
      <dd>
        <ol>
          <li>请联系系统管理员，调整网关配置</li>
        </ol>
      </dd>
      </dl>
      `,
    },
    // 网关错误
    '06-00-3-000-000502': {
      title: '服务请求失败，请稍后再试或者联系系统管理员',
      content: `<dl>
      <dt>请求失败可能原因：</dt>
      <dd>
        <ol>
          <li>系统正在发版；</li>
          <li>当前系统处于使用高峰期，响应较慢；</li>
          <li>系统存在内部错误；</li>
        </ol>
        </dd>
      </dl>
      <dt>解决方法：</dt>
      <dd>
        <ol>
          <li>请稍后再试；</li>
          <li>请联系系统管理员，核查：<br />
            - 从服务端吞吐量承载考虑，是否需要进行系统扩容；<br />
            - 从服务端程序问题方面考虑，是否需要进行程序优化；<br />
            - 从网络问题方面考虑，是否需要检查网络消耗、负载均衡配置是否正确。
          </li>
        </ol>
      </dd>
      </dl>
      `,
    },
    // 网关超时
    '06-00-3-000-000504': {
      title: '服务请求失败，请稍后再试或者联系系统管理员',
      content: `<dl>
      <dt>请求失败可能原因：</dt>
      <dd>
        <ol>
          <li>当前系统处于使用高峰期，响应较慢；</li>
        </ol>
        </dd>
      </dl>
      <dt>解决方法：</dt>
      <dd>
        <ol>
          <li>请稍后再试；</li>
          <li>请联系系统管理员，核查：<br />
            - 从服务端吞吐量承载考虑，是否需要进行系统扩容；<br />
            - 从网络问题方面考虑，是否需要检查网络消耗、负载均衡配置是否正确。
          </li>
        </ol>
      </dd>
      </dl>
      `,
    },
  },
  open: '展开',
  packUp: '收起',
  documentLink: '文档链接',
  serviceURL: '服务地址',
  PageRequestPath: '页面请求路径',
  apiReqPath: '接口请求路径',
  apiResBody: '接口返回报文',
  faultReport: '故障上报',
  hasReported: '故障已上报',
  reporting: '故障上报中...',
  hundred: '百',
  k: '千',
  w: '万',
  '10w': '十万',
  '100w': '百万',
  '1000w': '千万',
  '100m': '亿',
  b: '十亿',
  '10b': '百亿',
  '100b': '千亿',
  t: '万亿',
  '10t': '十万亿',
  cancelConfirm: '取消后修改内容将不保存，确认取消吗？',
  zipPreviewPlaceholder: '请选择包内文件进行预览',
  zipPreviewTitle: '当前预览内容为压缩包，不支持直接预览',
  zipPreviewTips: '请在下方选择压缩包内文件进行预览',
  PageNotInPortal:
    '当前未在灵犀平台门户内，无法进行门户跳转，请修改页面跳转类型。',
  cancel: '取消',
};
