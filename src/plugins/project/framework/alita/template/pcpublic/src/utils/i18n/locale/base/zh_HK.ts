export default {
  placeholder: '請輸入',
  confirm: '確認',
  clearText: '清除',
  cancelText: '取消',
  more: '更多',
  end: '結束',
  start: '開始',
  'PageView.getAppError':
    '獲取應用@{appId}信息失敗，請檢查是否擁有該應用權限。',
  year: '@{year}年',
  month: '@{month}月',
  day: '@{day}日',
  hour: '@{hour}时',
  minute: '@{minute}分',
  second: '@{second}秒',
  'command.stopCMD.undefined': '退出指令錯誤的拋出: 返回內容__undefined__',
  'command.stopCMD': '退出指令錯誤的拋出值為：@{value}',
  'command.gainErrorPrefix':
    '頁面【@{pageName}】上的組件【@{name}】(@{id})@{eventName}@{lineNumberText}發生了異常：\n@{msg}',
  'command.lineNumber': '第@{lineNumber}行',
  'command.eventName': '的@{eventName}事件內',
  'command.debugger.msg': '觸發調試工具斷點',
  'command.starteval': '指令開始執行',
  'command.error': '指令錯誤：@{errmsg}',
  'command.exception': '腳本運行時異常！@{errmsg}',
  'command.sandboxErr': '沙箱執行出錯！得到的表達式: @{expr}',
  'command.sandboxException': '指令執行沙箱表達式：@{expr}時遇到異常！',
  'command.illegal': '@{action}為非法值!',
  reset: '重置',
  loadingText: '加載中',
  noListData: '暫無列表數據',
  warnFormat: '格式不正確',
  notEmpty: '@{name}不能為空',
  actionCacheError:
    '當前組件ID=@{compId}不存在或者未進行初始化先進行事件緩存，組件初始化後執行',
  notFountParentFn: '沒有找到指定的父頁面方法@{funcName}',
  all: '全選',
  add: '添加',
  delete: '删除',
  edit: '編輯',
  deleteConfirm: '確認刪除嗎？',
  title: '標題',
  functionWarning: '必須為函數聲明的表達式',
  stringError: '該指令的入參格式應該為字符串，但接受到非字符串的值',
  validateAction: '當前控件ID@{compId} 沒有暴露【@{action}】方法',
  callActionError: '當前控件ID@{compId}的引用，調用失敗',
  nodeRule: '節點規則不正確，請使用node.字段名進行配置',
  'errorMessage.01-00-2-000-001001':
    '沒有查詢到ID：@{busiCompId}的業務組件實例數據，該頁面將不會渲染！請檢查配置或者確認該頁面是否有訪問權限',
  'errorMessage.01-00-2-000-000001':
    '未找到ID：@{pageId}的頁面實例數據，該頁面將不會被渲染！請檢查配置或確認該頁面是否有訪問權限。',
  'errorMessage.05-03-1-304-012008': '執行頁面自定義函數錯誤：@{error}',
  'errorMessage.05-03-1-304-020004': '沒有找到組件@{compId}的引用，操作失敗！',
  'errorMessage.05-03-1-304-020005': '在@{action}中發生錯誤：@{error}',
  'errorMessage.05-03-1-304-020002':
    '錯誤消息：指令錯誤 - 接收的值不匹配。當前值：@{field}。期望值：數字或字符串。',
  understood: '知道了',
  fileNotExist: '文件資源不存在.',
  fileNotSupportPreview: '當前文件不支持在線預覽.',
  componentError: '元件渲染錯誤.',
  compName: '元件名稱',
  compId: '元件標識',
  pageId: '頁面標識',
  whichRow: '第@{lineNumber}行',
  errorMsg: '錯誤訊息',
  errorStack: '錯誤堆疊跟踪',
  errorTips: '元件載入失敗，點擊',
  viewDetails: '查看詳情',
  downloadFail: '下載失敗',
  request_URL_is_empty: '未配置請求資訊',
  download: '下載',
  derive: '導出',
  'Meta.array.typeError': '替換數據不是數組',
  'Meta.provide.initError': '提供的數據不能使用以下鍵: @{keys}',
  'Meta.provide.setError': '提供的數據不能使用: @{key}',
  'Meta.base.initError': '請調用init方法並返回數據',
  'Meta.dataSource.initFail': '初始化數據源(@{name})失敗: @{errMsg}',
  'Meta.dataSource.updateFail': '設置頁面數據源失敗',
  'Meta.dataSource.notFound': '數據源@{name}不存在，請刪除配置',
  'Meta.dataSource.reloadFail': '刷新頁面數據源失敗，@{name}不存在，請刪除配置',
  'Meta.dataSource.reloadFailMsg': '頁面數據源刷新失敗(@{name}): @{errMsg}',
  'Meta.dataSource.clearFailMsg': '清空頁面數據源失敗',
  'Meta.globalData.initFail': '初始化全局數據源(@{name})失敗: @{errMsg}',
  'Meta.globalData.updateFail': '設置全局數據源失敗',
  'Meta.globalData.notFound': '全局數據源@{name}不存在，請刪除配置',
  'Meta.globalData.reloadFail': '刷新全局數據源失敗，@{name}不存在，請刪除配置',
  'Meta.globalData.reloadFailMsg': '全局數據源刷新失敗(@{name}): @{errMsg}',
  'Meta.globalData.clearFailMsg': '清空全局數據源失敗',
  'exportFile.process.message':
    '總記錄@{total}條，已生成數據@{currentCount}條，剩餘@{count}條完成導出。',
  'export.process.downloading': '正在等待下載，請稍後...',
  'export.process.handling': '正在處理中，請稍後...',
  'exportFile.fail': '導出失敗，請稍後重試。',
  deriveFail: '導出失敗',
  componentNotFound: '組件@{compName}未註冊。',
  'sysAction.localtion.fail': '定位失敗',
  'sysAction.location.transformfail': '座標轉換失敗！',
  detail: '詳情',
  ctrl: '操作',
  save: '保存',
  createNew: '新增',
  selectPlaceholder: '請選擇@{title}',
  'sysAction.location.registerFail': '@{name}註冊失敗',
  'sysAction.sysSetValue.valueList': '無賦值配置，無法賦值！',
  'sysAction.common.waring': '指令警告：@{message}',
  'sysAction.setDownloadResopnse.configurationError': 'downloadUrl配置錯誤',
  'sysAction.setDownloadResopnse.fileEmpty': '未配置下載URL，操作失敗！',
  'sysAction.exportCustomData.deriving': '正在導出中，請稍候...',
  'service.failMsg': '網絡繁忙，請稍後再試',
  'service.notExist': '無法找到指定服務@{url}，無法發起請求！',
  'service.errorMsg': '發送請求錯誤：@{message}',
  'sysAction.customPrintOrExport.exporting': '導出中',
  'sysAction.customPrintOrExport.printing': '打印中',
  'sysAction.customActionCode.timeout': '超過指定超時時間@{timeout}ms',
  notExistMethod: '未找到指定的方法@{functionCode}',
  'sysAction.callParentCustomFunc.fail': '調用父頁面事件失敗：@{msg}',
  'sysAction.callSelfFunc.notFound': '未找到自定義事件[@{customFuncName}]方法',
  'sysAction.callSelfFunc.error': '在調用自定義事件中發生錯誤：@{error}',
  'sysAction.callCustomPageFunc.notFound':
    '執行調用任意頁面事件錯誤，當前頁面未找到自定義事件：@{customFuncName}，請排查該頁面是否緩存或是否配置了該自定義事件！',
  'sysAction.callCustomPageFunc.error':
    '執行調用任意頁面事件：@{name}發生錯誤：@{error}',
  'sysAction.callCurrentFunc.notFound':
    '執行調用自定義事件錯誤，當前頁面未找到自定義事件：@{customFuncName}，請排查該頁面是否緩存或是否配置了該自定義事件！',
  'sysAction.callCurrentFunc.error':
    '執行調用自定義事件：@{name}發生錯誤：@{error}',
  'lcdpApi.router.urlEmpty': '頁面跳轉地址缺失，請檢查。',
  'lcdpApi.router.openFail': '無法打開新頁面，缺失@{type}。',
  'lcdpApi.router.notSupport': '不支持的頁面類型：@{type}。',
  'lcdpApi.router.notFound': '無法找到跳轉頁面的數據。',
  'service.errorHandler.badRequestError':
    '當前請求錯誤：錯誤代碼@{status}，請聯繫服務提供商協助處理。',
  'service.errorHandler.unauthorizedError':
    '當前請求未授權：錯誤代碼@{status}，請確認您是否有權限或聯繫管理員。',
  'service.errorHandler.forbiddenError':
    '服務器拒絕了請求：錯誤代碼@{status}，通常是權限問題，請確保您有必要的訪問權限。',
  'service.errorHandler.notFoundError':
    '請求的資源不存在：錯誤代碼@{status}，請檢查環境和相關資源。',
  'service.errorHandler.internalServerError':
    '內部服務器錯誤：錯誤代碼@{status}，請聯繫服務提供商協助處理。',
  'service.errorHandler.notImplementedError':
    '請求的服務器不支持所請求的功能：錯誤代碼@{status}，請聯繫服務提供商協助處理。',
  'service.errorHandler.badGatewayError':
    '作為網關或代理的服務器從上游服務器接收到無效的響應：錯誤代碼@{status}，請聯繫服務提供商協助處理。',
  'service.errorHandler.serviceUnavailableError':
    '服務器暫時不可用，通常是因為超載或維護：錯誤代碼@{status}，請聯繫服務提供商協助處理。',
  'service.errorHandler.requestEntityTooLargeError':
    '請求實體過大:錯誤編碼@{status}，請通過修改 nginx 配置文件的 client_max_body_size 大小和後端應用的配置項#上傳文件大小限制spring.servlet.multipart.max-file-size=300MB spring.servlet.multipart.max-request-size=300MB',
  'service.errorHandler.url': '請求地址：@{path}',
  'service.hooks.fetchSendBeforeError':
    '執行 fetchSendBefore/請求發送前事件出錯：@{message}',
  'service.hooks.fetchResponseError':
    '執行 fetchResponse/請求響應事件出錯：@{message}',
  'service.hooks.fetchSuccessError':
    '執行 fetchSuccess/請求成功事件出錯：@{message}',
  'service.hooks.fetchFailError': '執行 fetchFail/請求失敗事件出錯@{message}',
  'service.config.timeoutMsg': '請求失敗，因超時未收到響應。',
  relogin: '請重新登錄。',
  'appManager.createAppFail':
    '未成功創建/獲取。如果需要創建，請傳遞 createOnAbsent: true。',
  'NoPermission.description': '您還沒有訪問權限，請聯繫管理員～',
  'NotFound.description': '抱歉，您訪問的頁面不存在',
  'Modal.missParams': '彈窗操作失敗：缺少頁面實例ID或頁面路徑。',
  selectAll: '全選',
  selectNumber: '已選擇@{num}',
  reupload: '重新上傳',
  upload: '上傳',
  'Upload.exception': '請求失敗，網關響應異常',
  'Upload.failed': '上傳失敗',
  'Upload.success': '上傳成功',
  minRule: '低於最小選項限制[最少選@{min}個]',
  maxRule: '超過最大選項限制[最多選@{max}個]',
  minAndMaxRule: '選項限制須大於等於@{min}且小於等於@{max}',
  cancelUpload: '取消上傳',
  close: '關閉',
  fileUpload: '文件上傳',
  clickdownload: '點擊下載',
  fileSize: '文件大小：',
  startDate: '開始年月',
  yearUnit: '年',
  halfYearUnit: '半年',
  quarterUnit: '季度',
  monthUnit: '月',
  timeUnit: '次',
  oneclickFilling: '一鍵填充',
  residue: '剩餘',
  yuan: '元',
  scaleMax: '已縮放至最大',
  scaleMin: '已縮放至最小',
  preview: '預覽',
  notSupportPreview: '該文件不支持當前窗口預覽',
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
  pageName: '頁面名稱',
  pageType: '頁面類型',
  compType: '元件類型',
  eventType: '事件類型',
  customEvent: '自定義頁面事件',
  eventCode: '事件編碼',
  cmdLocation: '動作位置',
  eventName: '事件名稱',
  actionName: '動作名稱',
  'ErrorMsg.cancelText': '我知道了',
  'ErrorMsg.exceptionHelp': '異常幫助',
  errTypeTitMap: {
    '01': '網路請求異常',
    '02': '程序處理異常',
    '03': '業務資料異常',
    '04': '服務資料異常',
    '05': '配置資料異常',
    '06': '客戶端請求異常',
    '07': '業務處理異常',
    '08': '伺服器處理異常',
  },
  noData: '暫無數據',
  'ErrorMsg.no-information': '暫無匹配信息，請聯繫平臺管理員',
  'ErrorMsg.solution': '解決方案',
  'ErrorMsg.errorMsgMatch': '錯誤訊息匹配',
  'ErrorMsg.articleMap': {
    // 網路異常
    '01-00-2-000-000001': {
      title: '服務請求失敗，網路出現異常',
      content: `<dl>
     <dt>網路異常原因：</dt>
     <dd>
       <ol>
         <li>網路故障，您的電腦/手機無Internet存取；</li>
         <li>電腦/手機開啟了其他網路代理；</li>
         <li>請求被網路安全攔截；</li>
       </ol>
     <dd>
     <dt>解決方法：</dt>
     <dd>
       <ol>
         <li>首先確保您的電腦/手機已經透過Wi-Fi或電纜方式正常連接網路;</li>
         <li>如果使用公網存取系統，檢查您的電腦/手機是否已連接到Internet，如無Internet訪問，你可以嘗試:<br />
           - 重新啟動電腦、光貓、路由器、手機網路<br />
           - 調整DNS配置<br />
           - 重置TCP/IP網路配置<br />
           - 使用其他瀏覽器<br />
           如果問題仍然存，您應該聯絡您的網路服務供應商並檢查是否有任何技術問題。
         </li>
         <li>檢查是否開啟其他網路代理，如開啟請嘗試關閉。 </li>
       </ol>
       </dd>
     </dl>
     `,
    },
    // 請求超時
    '01-00-2-000-000002': {
      title: '服務請求失敗，請求超時',
      content: `<dl>
     <dt>請求失敗可能原因：</dt>
     <dd>
       <ol>
         <li>目前系統處於使用高峰期，反應較慢；</li>
         <li>網路上行下行速率慢；</li>
         <li>請求訊息過大，上傳需要較多時間；</li>
         <li>檔案下載，檔案大小過大，需要較多時間；</li>
       </ol>
       </dd>
     </dl>
     <dt>解決方法：</dt>
     <dd>
       <ol>
         <li>請稍後再試；</li>
         <li>檢查網絡，測試網絡速度，並優化；</li>
         <li>如內容過大，聯絡管理員調整超時時長；</li>
       </ol>
     </dd>
     </dl>
     `,
    },
    // 請求404
    '01-00-2-000-000404': {
      title: '服務請求失敗，請求資源不存在(404)',
      content: `<dl>
     <dt>請求失敗可能原因：</dt>
     <dd>
       <ol>
         <li>資源位址不正確；</li>
         <li>資源已被刪除，瀏覽器快取導致資源位址未更新；</li>
         <li>頁面版本跟服務版本不一致；</li>
       </ol>
       </dd>
     </dl>
     <dt>解決方法：</dt>
     <dd>
       <ol>
         <li>清除瀏覽器快取再試一次；</li>
         <li>聯絡系統管理員排查資源地址和版本資訊；</li>
       </ol>
     </dd>
     </dl>
     `,
    },
    // 請求413
    '01-00-2-000-000413': {
      title: '服務請求失敗，請求訊息本體超過網關限制',
      content: `<dl>
     <dt>請求失敗原因：</dt>
     <dd>
       <ol>
         <li>請求封包主體過大所引起的，請求長度超過了網關預設的快取大小和最大客戶端最大請求大小；</li>
       </ol>
       </dd>
     </dl>
     <dt>解決方法：</dt>
     <dd>
       <ol>
         <li>請聯絡系統管理員，調整網關設定</li>
       </ol>
     </dd>
     </dl>
     `,
    },
    // 網關錯誤
    '06-00-3-000-000502': {
      title: '服務請求失敗，請稍後再試或聯絡系統管理員',
      content: `<dl>
     <dt>請求失敗可能原因：</dt>
     <dd>
       <ol>
         <li>系統正在發版；</li>
         <li>目前系統處於使用高峰期，反應較慢；</li>
         <li>系統存在內部錯誤；</li>
       </ol>
       </dd>
     </dl>
     <dt>解決方法：</dt>
     <dd>
       <ol>
         <li>請稍後再試；</li>
         <li>請聯絡系統管理員，核查：<br />
           - 從服務端吞吐量承載考慮，是否需要進行系統擴容；<br />
           - 從服務端程式問題方面考慮，是否需要進行程式最佳化；<br />
           - 從網路問題考慮，是否需要檢查網路消耗、負載平衡配置是否正確。
         </li>
       </ol>
     </dd>
     </dl>
     `,
    },
    // 網關逾時
    '06-00-3-000-000504': {
      title: '服務請求失敗，請稍後再試或聯絡系統管理員',
      content: `<dl>
     <dt>請求失敗可能原因：</dt>
     <dd>
       <ol>
         <li>目前系統處於使用高峰期，反應較慢；</li>
       </ol>
       </dd>
     </dl>
     <dt>解決方法：</dt>
     <dd>
       <ol>
         <li>請稍後再試；</li>
         <li>請聯絡系統管理員，核查：<br />
           - 從服務端吞吐量承載考慮，是否需要進行系統擴容；<br />
           - 從網路問題考慮，是否需要檢查網路消耗、負載平衡配置是否正確。
         </li>
       </ol>
     </dd>
     </dl>
     `,
    },
  },
  open: '展開',
  packUp: '收起',
  documentLink: '文件連結',
  serviceURL: '服務位址',
  PageRequestPath: '頁面請求路徑',
  apiReqPath: '介面請求路徑',
  apiResBody: '介面返回封包',
  faultReport: '故障上報',
  hasReported: '故障已上報',
  reporting: '故障上報中...',
  hundred: '百',
  k: '千',
  w: '萬',
  '10w': '十萬',
  '100w': '百萬',
  '1000w': '千萬',
  '100m': '億',
  b: '十億',
  '10b': '百億',
  '100b': '千億',
  t: '萬億',
  '10t': '十萬億',
  cancelConfirm: '取消後修改內容將不保存，確認取消嗎？',
  zipPreviewPlaceholder: '請選擇zip包內文件進行預覽',
  zipPreviewTitle: '當前預覽內容為壓縮包，不支持直接預覽',
  zipPreviewTips: '請在下方選擇壓縮包內文件進行預覽',
  PageNotInPortal:
    '當前不在靈犀平台門戶內，無法進行門戶跳轉，請修改頁面跳轉類型。',
};
