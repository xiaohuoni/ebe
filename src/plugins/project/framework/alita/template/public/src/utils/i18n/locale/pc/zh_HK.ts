import merge from 'lodash/merge';
import { baseZHHK } from '../base';

export default merge(baseZHHK, {
  'Quill.uploadImages': '只能上傳格式為.jpg,.gif,.png的圖片',
  'Quill.imageSizeLimit': '每張圖片不能大於3000KB',
  'Quill.selectZh': '請先選中文字，再點擊鏈接',
  'Table.pageNotEmptyWarning': '當前頁碼為空',
  'Tree.appendTreeNodeWarning':
    '加載樹的子節點數據必須有key鍵值，沒有key不能操作',
  'Tree.appendMenuNodeWarning': '加載菜單節點必須有key鍵值，沒有key不能操作',
  'Tree.editingWarn': '沒有正在操作的樹節點',
  'Audio.cannotPlay': '音頻節點被移除,無法播放',
  'Audio.cannotStop': '音頻節點被移除,無法暫停',
  'Audio.cannotSwitch': '音頻節點被移除,無法切換',
  'Audio.warning': '音頻文件獲取出錯',
  'Icon.imgFormatWarning': '圖片格式錯誤',
  'Input.lenRule': '內容長度須大於等於@{minLength}且小於等於@{maxLength}',
  'Input.maxRule': '內容長度須小於等於@{maxLength}',
  'Input.minRule': '內容長度須大於等於@{minLength}',
  'Upload.download': '該文件正在下載，請耐心等待',
  'Upload.readonly': '當前為只讀狀態，不允許上傳或移除文件!',
  'Upload.maxSize': '當前文件最大上傳大小為@{singleFileMaxSize}，請重新上傳',
  'Upload.minSize': '當前文件最小上傳大小為@{singleFileMinSize}，請重新上傳',
  'Upload.maxNum': '當前文件最大上傳個數為@{numberLimit}，不允許繼續上傳',
  'Upload.format': '文件格式不正確，請上傳@{acceptType}格式的文件',
  'Upload.limit': '當前文件最大上傳個數為@{numberLimit}，請重新選擇',
  'Upload.text': '點擊或者拖動文件到虛線框內上傳',
  'Upload.uploadText': '點擊上傳',
  'Upload.downloadText': '下載',
  'Upload.origin': '源文件下載',
  'Upload.waterMark': '加水印下載',
  'Upload.downloadType': '文件下載方式',
  'Pagination.showTotal': '共 @{tol} 條',
  'RadarChart.warning': '維度數據配置有誤',
  'RemoteComponent.fail': '自定義組件加載失敗',
  'Steps.wait': '等待狀態',
  'Steps.process': '處理中狀態',
  'Steps.finish': '完成狀態',
  'Steps.error': '錯誤狀態',
  'Table.dateTypeWarning': '數據類型不一致',
  'Table.headTips': '通過左側圖標拖拽可調整列順序',
  'Table.headCol': '列設置',
  'Table.needObj': '添加行數據的格式應該為對象，但接受到非對象的值',
  'VerificationCode.text': '發送驗證碼',
  'VerificationCode.refresh': '重新獲取',
  'Img.fileIdError':
    '指令錯誤：接收的值不匹配，當前值為:@{field}, 期望為數字或字符串',
  'Form.actionWarning': '該組件不支持使用getFormValues指令',
  'Transfer.unit': '@{num}項',
  'Transfer.min': '@{name}最少需要選@{min}條數據',
  'Transfer.max': '@{name}最多可選@{max}條數據',
  'Table.filter.empty': '空白',
  'Table.expand.component': '已關聯業務組件：',
  'Table.data.typeError': '表格數據類型錯誤，當前類型為@{type}，請檢查配置',
  'SuperSelect.load': '僅加載50條數據，更多數據請搜索',
  'DatePicker.afterToday': '@{name}必須在今天之後（含今天）',
  'DatePicker.beforeToday': '@{name}必須在今天之前（含今天）',
  'DatePicker.period': '@{name}必須在@{startTime}到@{endTime}的範圍內',
  'DatePicker.after': '@{name}不能小於@{startTime}',
  'DatePicker.before': '@{name}不能大於@{endTime}',
  'ExpBusiObjModal.title': '按字段導出業務對象數據',
  'ExpBusiObjModal.exportFieldError': '請先選擇要導出的字段',
  'ExpSQLServiceModal.title': '按字段導出SQL查詢服務數據',
  'ExpSQLServiceModal.importData': '導入數據',
  'ExpSQLServiceModal.importFieldError': '請先選擇要導入的字段',
  'ExpBusiObjModal.downloadMutiTpl': '下載批量導入模板',
  'ExpBusiObjModal.downloadTpl': '下載導入模板',
  'ExpBusiObjModal.dataDealing': '數據處理中...',
  'ExpBusiObjModal.downloadFailReason': '下載導入失敗數據，查看失敗原因',
  'ExpBusiObjModal.validField': '指定導入的有效字段',
  'ExpBusiObjModal.dragView': '點擊選擇文件或拖動文件到此區域進行上傳',
  'ExpBusiObjModal.onlySingleUpload': '僅支持單個文件上傳',
  'ExpBusiObjModal.validTable': '請上傳合法的表格',
  'ExpBusiObjModal.uploadFail': '@{name}文件上傳失敗，請重試！',
  'ExpBusiObjModal.noFile': '無上傳文件，請先選擇文件',
  'ExpBusiObjModal.importFailList': '導入失敗列表-@{name}.xlsx',
  'ExpBusiObjModal.partImportFailTitle': '部分數據導入失敗',
  'ExpBusiObjModal.importSuccessTitle': '導入成功',
  'ExpBusiObjModal.importSuccessMsg': '數據導入成功，請選擇前往列表查看',
  'ExpBusiObjModal.importFailTitle': '導入失敗',
  'ExpBusiObjModal.importFailMsg':
    '數據導入失敗，請核對以下信息後，再重新提交。',
  'AccountDivideModal.setAccount': '設置分賬',
  'AccountDivideModal.edit': '變更計劃',
  'AccountDivideModal.detail': '計劃詳情',
  'AccountDivideModal.disableAutoFill': '不符合自動填充條件',
  'AccountDivideModal.fillFail':
    '自動填充失敗，請至少先手動填入一項依據數據然後重試',
  'AccountDivideModal.AccountNoFinish': '分賬未完成，請仔細檢查',
  'AccountDivideModal.validDate': '請選擇有效的開始日期',
  'AccountDivideModal.startDatePlaceholder': '請選擇有效的開始日期',
  'AccountDivideModal.accountMode': '出賬方式',
  'ProgressComp.cancelMessage': '取消將無法獲得下載結果，請確認是否需要取消',
  'ProgressComp.progressMsg': '@{fileName} 正在@{text}：',
  'ImportBusiObjModal.tips':
    '導入總記錄數@{total}條，其中@{success}條成功，@{fail}條失敗',
  'AccountDivideDetail.subject': '科目：',
  'AccountDivideDetail.plan': '當前計劃',
  'AccountDivideDetail.aleterAfter': '變更後計劃',
  'Upload.uploadPlaceholder': '點擊或拖拽文件到此處上傳',
  'Upload.singleStrict': '單文件模式不允許上傳多個文件',
  'Upload.actionStrict': '上傳接口未配置，請返回修改！',
  'Upload.fileLimit': '超出文件數量限制，當前為@{num}',
});
