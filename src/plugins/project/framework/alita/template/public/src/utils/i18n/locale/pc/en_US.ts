import merge from 'lodash/merge';
import { baseEnUS } from '../base';

export default merge(baseEnUS, {
  'Quill.uploadImages':
    'Only images in the formats of .jpg, .gif, and .png can be uploaded.',
  'Quill.imageSizeLimit': 'Each image cannot be larger than 3000KB',
  'Quill.selectZh': 'Please select the text before clicking on the link.',
  'Table.pageNotEmptyWarning': 'current page number is empty.',
  'Tree.appendTreeNodeWarning':
    'The data of the child nodes of the loaded tree must have the key value, without the key can not be manipulated.',
  'Tree.appendMenuNodeWarning':
    'Load menu node must have key value, without key can not be manipulated.',
  'Tree.editingWarn': 'There are no tree nodes being manipulated.',
  'Audio.cannotPlay': 'Audio node removed, can not be played.',
  'Audio.cannotStop': 'Audio node removed, can not be paused.',
  'Audio.cannotSwitch': 'Audio node removed, can not be switched.',
  'Audio.warning': 'Error getting audio file.',
  'Icon.imgFormatWarning': 'Image format error',
  'Input.lenRule':
    'Content length must be greater than or equal to @{minLength} and less than or equal to @{maxLength}.',
  'Input.maxRule':
    'The length of the content must be less than or equal to @{maxLength}.',
  'Input.minRule':
    'Content length must be greater than or equal to @{minLength}',
  'Upload.download': 'The file is downloading, please be patient.',
  'Upload.readonly':
    'Currently read-only, no files are allowed to be uploaded or removed!',
  'Upload.maxSize':
    'The current maximum file upload size is @{singleFileMaxSize}, please try again!',
  'Upload.minSize':
    'The current minimum file upload size is @{singleFileMinSize}, please try again!',
  'Upload.maxNum':
    'The current maximum number of files to upload is @{numberLimit}, no further uploads are allowed.',
  'Upload.format':
    'The file format is not correct, please upload the file in @{acceptType} format.',
  'Upload.limit':
    'The current maximum number of files to upload is @{numberLimit}, please try again.',
  'Upload.text': 'Click or drag the file into the dotted box to upload it.',
  'Upload.uploadText': 'Click on Upload',
  'Upload.downloadText': 'download',
  'Upload.origin': 'Download source file',
  'Upload.waterMark': 'Download file with watermark',
  'Upload.downloadType': 'file download options',
  'Pagination.showTotal': 'Total @{tol} items',
  'RadarChart.warning': 'Dimension data is incorrectly configured.',
  'RemoteComponent.fail': 'Failed to load custom component.',
  'Steps.wait': 'Waiting',
  'Steps.process': 'In Process',
  'Steps.finish': 'Finished',
  'Steps.error': 'Error',
  'Table.dateTypeWarning': 'Inconsistent data types',
  'Table.headTips':
    'Columns can be reordered by dragging and dropping the icons on the left.',
  'Table.headCol': 'columns',
  'Table.needObj':
    'Add rows of data that should be formatted as objects, but receive non-object values.',
  'VerificationCode.text': 'Send verification code',
  'VerificationCode.refresh': 'Refresh',
  'Img.fileIdError':
    'Command error: received value does not match, current value is :@{field}, expects a number or string.',
  'Form.actionWarning':
    'This component does not support the use of the getFormValues directive.',
  'Transfer.unit': '@{num} items',
  'Transfer.min': 'minimum @{min} data for @{name} items.',
  'Transfer.max': 'Maximum @{max} data for @{name} items.',
  'Table.filter.empty': 'empty', //
  'Table.expand.component': 'Business components have been associated:',
  'Table.data.typeError':
    'Form data type error, current type is @{type}, please check configuration.',
  'SuperSelect.load': 'Only 50 data loaded, for more data please search',
  'DatePicker.afterToday': '@{name} must be after (and including) today',
  'DatePicker.beforeToday': '@{name} must be before (and including) today',
  'DatePicker.period':
    '@{name} must be in the range @{startTime} to @{endTime}',
  'DatePicker.after': 'The @{name} time cannot be smaller than @{startTime}.',
  'DatePicker.before': 'The @{name} time cannot be greater than the @{endTime}',
  'ExpBusiObjModal.title': 'Export Business Object Data by Field',
  'ExpBusiObjModal.exportFieldError':
    'Please select the fields to export first',
  'ExpSQLServiceModal.title': 'Export SQL Query Service Data by Field',
  'ExpSQLServiceModal.importData': 'Import Data',
  'ExpSQLServiceModal.importFieldError':
    'Please select the fields to import first',
  'ExpBusiObjModal.downloadMutiTpl': 'Download Batch Import Template',
  'ExpBusiObjModal.downloadTpl': 'Download Import Template',
  'ExpBusiObjModal.dataDealing': 'Data processing...',
  'ExpBusiObjModal.downloadFailReason':
    'Download failed import data, check the reason for failure',
  'ExpBusiObjModal.validField': 'Specify valid fields for import',
  'ExpBusiObjModal.dragView':
    'Click to select a file or drag a file to this area for upload',
  'ExpBusiObjModal.onlySingleUpload': 'Support single file upload only',
  'ExpBusiObjModal.validTable': 'Please upload a valid table',
  'ExpBusiObjModal.uploadFail': '@{name} file upload failed, please try again!',
  'ExpBusiObjModal.noFile': 'No file uploaded, please select a file first',
  'ExpBusiObjModal.importFailList': 'Import failed list-@{name}.xlsx',
  'ExpBusiObjModal.partImportFailTitle': 'Partial data import failed',
  'ExpBusiObjModal.importSuccessTitle': 'Import successful',
  'ExpBusiObjModal.importSuccessMsg':
    'Data import was successful, please choose to go to the list to view',
  'ExpBusiObjModal.importFailTitle': 'Import failed',
  'ExpBusiObjModal.importFailMsg':
    'Data import failed, please check the following information and resubmit.',
  'AccountDivideModal.setAccount': 'Set Account',
  'AccountDivideModal.edit': 'Change Plan',
  'AccountDivideModal.detail': 'Plan Details',
  'AccountDivideModal.disableAutoFill':
    'Does not meet the automatic fill condition',
  'AccountDivideModal.fillFail':
    'Automatic filling failed, please manually enter at least one basis data and try again',
  'AccountDivideModal.AccountNoFinish':
    'Account division not completed, please check carefully',
  'AccountDivideModal.validDate': 'Please select a valid start date',
  'AccountDivideModal.startDatePlaceholder': 'Please select a valid start date',
  'AccountDivideModal.accountMode': 'Billing Mode',
  'ProgressComp.cancelMessage':
    'Canceling will result in no download results. Please confirm if you want to cancel',
  'ProgressComp.progressMsg': '@{fileName} is in progress: @{text}',
  'ImportBusiObjModal.tips':
    'Import total records @{total}, of which @{success} are successful, and @{fail} are failures',
  'AccountDivideDetail.subject': 'Subject:',
  'AccountDivideDetail.plan': 'Current Plan',
  'AccountDivideDetail.aleterAfter': 'Plan After Change',
  'Upload.uploadPlaceholder': 'Click or drag and drop files here to upload',
  'Upload.singleStrict':
    'Single file mode does not allow uploading multiple files',
  'Upload.actionStrict':
    'The upload action is not configured, please return to modify it!',
  'Upload.fileLimit': 'Exceeds file size limit, currently @{num}',
});
