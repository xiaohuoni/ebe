export default {
  placeholder: 'please Enter',
  confirm: 'confirm',
  clearText: 'clear',
  cancelText: 'cancel',
  more: 'more',
  end: 'end',
  start: 'start',
  'PageView.getAppError':
    'Failed to retrieve application information for @{appId}. Please check if you have the necessary permissions for this application.',
  year: '@{year}year',
  month: '@{month}month',
  day: '@{day}day',
  hour: '@{hour}hour',
  minute: '@{minute}minute',
  second: '@{second}second',
  'command.stopCMD.undefined': 'Error throwing exit command: return content __undefined__',
  'command.stopCMD': 'The thrown value of the exit command error is: @{value}',
  'command.gainErrorPrefix': 'An exception occurred on component "@{name}" (@{id})@{eventName}@{lineNumberText} on page "@{pageName}":\n@{msg}',
  'command.lineNumber': 'Line @{lineNumber}',
  'command.eventName': 'withinthe @{eventName} event',
  'command.debugger.msg': 'Trigger the debugging tool breakpoint',
  'command.starteval': 'The instruction starts executing',
  'command.error': 'Instruction error：@{errmsg}',
  'command.exception': 'Script runtime exception！@{errmsg}',
  'command.sandboxErr': 'Sandbox execution error! The expression obtained is: @{expr}',
  'command.sandboxException': 'An exception occurred while executing the sandbox expression: @{expr}!',
  'command.illegal': '@{action} is an illegal value!',
  'errorMessage.05-03-1-304-020004': 'Failed to find a reference to component@{compId} !',
  'errorMessage.05-03-1-304-020002':
    'Error message: Instruction error - The received value does not match. Current value: @{field}. Expected: a number or a string.',
  reset: 'reset',
  loadingText: 'loading',
  noListData: 'No list data yet',
  warnFormat: 'The format is incorrect',
  notEmpty: '@{name} cannot be empty',
  actionCacheError:
    'The current component ID = @{compId} does not exist or is not initialized first event caching, the action will be executed after the component is initialized.',
  notFountParentFn: 'The specified parent page method @{funcName} was not found',
  all: 'all',
  add: 'add',
  delete: 'delete',
  edit: 'edit',
  deleteConfirm: 'Confirm deletion?',
  title: 'title',
  functionWarning: 'Must be an expression declared for a function',
  stringError: 'The input format of this action should be a string, but accepts a non-string value.',
  validateAction: 'The current component ID @{compId} does not expose the [@{action}] method.',
  callActionError: 'Reference to the current component ID @{compId} failed to be invoked.',
  nodeRule: 'Node rules are incorrect, configure using [node.] field name',
  'errorMessage.01-00-2-000-001001':
    'No business component instance data found for ID: @{busiCompId}. The page will not be rendered! Please check the configuration or confirm if the page has permission to access',
  'errorMessage.01-00-2-000-000001':
    'No instance data found for ID: @{pageId}. The page will not be rendered! Please check the configuration or confirm if the page has access rights.',
  'errorMessage.05-03-1-304-012008': 'Error executing page custom function: @{error}',
  'errorMessage.05-03-1-304-020005': 'An error occurred in @{action}: @{error}',
  understood: 'Understood',
  fileNotExist: 'File resource does not exist.',
  fileNotSupportPreview: 'The current file does not support online preview',
  componentError: 'Component rendering error',
  compName: 'Component Name',
  compId: 'Component ID',
  pageId: 'Page ID',
  request_URL_is_empty: 'Request information not configured.',
  errorMsg: 'Error Message',
  errorStack: 'Error Stack Trace',
  errorTips: 'Component loading failed, click',
  viewDetails: 'View Details',
  downloadFail: 'Download Failed',
  download: 'Download',
  derive: 'Export',
  'Meta.array.typeError': 'Replacement data is not an array',
  'Meta.provide.initError': 'Provide data cannot use the following keys: @{keys}',
  'Meta.provide.setError': 'Provide data cannot use: @{key}',
  'Meta.base.initError': 'Please call the init method and return data',
  'Meta.dataSource.initFail': 'Failed to initialize data source (@{name}): @{errMsg}',
  'Meta.dataSource.updateFail': 'Failed to set page data source',
  'Meta.dataSource.notFound': 'Data source @{name} not found，Please delete configuration',
  'Meta.dataSource.reloadFail': 'Failed to refresh page data source, @{name} not found，Please delete configuration',
  'Meta.dataSource.reloadFailMsg': 'Page data source refresh failed (@{name}): @{errMsg}',
  'Meta.dataSource.clearFailMsg': 'Failed to clear page data source',
  'Meta.globalData.initFail': 'Failed to initialize global data source (@{name}): @{errMsg}',
  'Meta.globalData.updateFail': 'Failed to set global data source',
  'Meta.globalData.notFound': 'Global data source @{name} not found，Please delete configuration',
  'Meta.globalData.reloadFail': 'Failed to refresh global data source, @{name} not found，Please delete configuration',
  'Meta.globalData.reloadFailMsg': 'Global data source refresh failed (@{name}): @{errMsg}',
  'Meta.globalData.clearFailMsg': 'Failed to clear global data source',
  'exportFile.process.message': 'Total records: @{total} | Data generated: @{currentCount} | Remaining: @{count} to export.',
  'export.process.downloading': 'Waiting for download, please wait...',
  'export.process.handling': 'Processing, please wait...',
  'exportFile.fail': 'Export failed, please retry later.',
  deriveFail: 'Export failed',
  componentNotFound: 'Component @{compName} is not registered.',
  'sysAction.localtion.fail': 'Location failed',
  'sysAction.location.transformfail': 'Coordinate transformation failed!',
  detail: 'detail',
  ctrl: 'operation',
  save: 'save',
  createNew: 'new',
  selectPlaceholder: 'please select @{title}',
  'sysAction.location.registerFail': '@{name} registration failed',
  'sysAction.sysSetValue.valueList': 'No value assignment configuration, unable to assign!',
  'sysAction.common.waring': 'Command warning: @{message}',
  'sysAction.setDownloadResopnse.configurationError': 'downloadUrl configuration error',
  'sysAction.setDownloadResopnse.fileEmpty': 'No download URL configured, operation failed!',
  'sysAction.exportCustomData.deriving': 'Exporting, please wait...',
  'service.failMsg': 'Network busy, please try again later',
  'service.notExist': 'Unable to find the specified service @{url}, cannot initiate request!',
  'service.errorMsg': 'Sending request error: @{message}',
  'sysAction.customPrintOrExport.exporting': 'Exporting',
  'sysAction.customPrintOrExport.printing': 'Printing',
  'sysAction.customActionCode.timeout': 'Exceeded specified timeout of @{timeout}ms',
  notExistMethod: 'The specified method @{functionCode} was not found',
  'sysAction.callParentCustomFunc.fail': 'Failed to call parent page event: @{msg}',
  'sysAction.callSelfFunc.notFound': 'Custom event method [@{customFuncName}] not found',
  'sysAction.callSelfFunc.error': 'An error occurred while calling the custom event: @{error}',
  'sysAction.callCustomPageFunc.notFound':
    'Error executing call to any page event, the current page does not have the custom event: @{customFuncName}. Please check if the page is cached or if the custom event is configured!',
  'sysAction.callCustomPageFunc.error': 'Error executing call to any page event: @{name}, error: @{error}',
  'sysAction.callCurrentFunc.notFound':
    'Error executing call to custom event, the current page does not have the custom event: @{customFuncName}. Please check if the page is cached or if the custom event is configured!',
  'sysAction.callCurrentFunc.error': 'Error executing call to custom event: @{name}, error: @{error}',
  'lcdpApi.router.urlEmpty': 'Page jump address is missing, please check.',
  'lcdpApi.router.openFail': 'Failed to open a new page, missing @{type}.',
  'lcdpApi.router.notSupport': 'Unsupported page type: @{type}.',
  'lcdpApi.router.notFound': 'Data for the jump page cannot be found.',
  'service.errorHandler.badRequestError': 'Current request error: Error code @{status}, please contact the service provider for assistance.',
  'service.errorHandler.unauthorizedError':
    'Current request lacks authorization: Error code @{status}, please confirm whether you have permission or contact the administrator.',
  'service.errorHandler.forbiddenError':
    'The request is denied by the server: Error code @{status}, usually due to permissions issues, please ensure you have the necessary access.',
  'service.errorHandler.notFoundError':
    'The requested resource does not exist: Error code @{status}, please check the environment and corresponding resources.',
  'service.errorHandler.internalServerError': 'Internal server error: Error code @{status}, please contact the service provider for assistance.',
  'service.errorHandler.notImplementedError':
    'The request server does not support the requested functionality: Error code @{status}, please contact the service provider for assistance.',
  'service.errorHandler.badGatewayError':
    'The server, acting as a gateway or proxy, received an invalid response from an upstream server: Error code @{status}, please contact the service provider for assistance.',
  'service.errorHandler.serviceUnavailableError':
    'The server is temporarily unavailable, typically due to overload or maintenance: Error code @{status}, please contact the service provider for assistance.',
  'service.errorHandler.url': 'Request address: @{path}',
  'service.errorHandler.requestEntityTooLargeError': 'The request entity is too large:  Error code @{status}, please modify the client_max_body_size size of the nginx configuration file and the configuration item of the cloud application # Upload file size limit spring.servlet.multipart.max-file-size=300MB spring.servlet.multipart.max-request-size= 300MB',
  'service.hooks.fetchSendBeforeError': 'Error executing fetchSendBefore/request sending before event: @{message}',
  'service.hooks.fetchResponseError': 'Error executing fetchResponse/request response event: @{message}',
  'service.hooks.fetchSuccessError': 'Error executing fetchSuccess/request success event: @{message}',
  'service.hooks.fetchFailError': 'Error executing fetchFail/request failure event: @{message}',
  'service.config.timeoutMsg': 'Request failed, no response due to timeout.',
  relogin: 'Please log in again.',
  'appManager.createAppFail': 'Not created/fetched successfully. If you need to create, please pass createOnAbsent: true.',
  'NoPermission.description': 'You do not have access permission, please contact the administrator~',
  'NotFound.description': 'Sorry, the page you are trying to access does not exist.',
  'Modal.missParams': 'Modal operation failed: Missing page instance ID or page path.',
  months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  selectAll: 'Select All',
  selectNumber: '@{num} selected',
  reupload: 'Reupload',
  upload: 'Upload',
  'Upload.exception': 'Request Failed, Gateway Response Exception',
  'Upload.failed': 'Upload Failed',
  'Upload.success': 'Upload success',
  minRule: 'Below the minimum option limit [at least @{min} selections].',
  maxRule: 'Maximum option limit exceeded [up to @{max} selections].',
  minAndMaxRule: 'Options must be greater than or equal to @{min} and less than or equal to @{max}',
  cancelUpload: 'Cancel Upload',
  close: 'Close',
  fileUpload: 'File Upload',
  clickdownload: 'Click to Download',
  fileSize: 'File Size:',
  startDate: 'Start Date',
  yearUnit: 'Year',
  halfYearUnit: 'Half Year',
  quarterUnit: 'Quarter',
  monthUnit: 'Month',
  timeUnit: 'Times',
  oneclickFilling: 'One-click Filling',
  residue: 'Remaining',
  yuan: 'Yuan',
  scaleMax: 'Scaled to the maximum',
  scaleMin: 'Scaled to the minimum',
  preview: 'Preview',
  notSupportPreview: 'This file does not support current window preview',
  untitled: 'Untitled',
  pageName: 'Page Name',
  pageType: 'Page Type',
  compType: 'Component Type',
  eventType: 'Event Type',
  customEvent: 'Custom Page Event',
  eventCode: 'Event Code',
  cmdLocation: 'Action Location',
  eventName: 'Event Name',
  actionName: 'Action Name',
  'ErrorMsg.cancelText': 'I got it',
  'ErrorMsg.exceptionHelp': 'Exception Help',
  errTypeTitMap: {
    '01': 'Network request exception',
    '02': 'Program processing exception',
    '03': 'Business data exception',
    '04': 'Service data exception',
    '05': 'Configuration data exception',
    '06': 'Client request exception',
    '07': 'Business processing exception',
    '08': 'Server processing exception',
  },
  noData: 'No data available',
  'ErrorMsg.no-information': 'No matching information, please contact the platform administrator',
  'ErrorMsg.solution': 'solution',
  'ErrorMsg.errorMsgMatch': 'Error Message',
  'ErrorMsg.articleMap': {
    // network anomaly
    '01-00-2-000-000001': {
      title: 'Service request failed, network abnormality',
      content: `<dl>
     <dt>Cause of network abnormality:</dt>
     <dd>
       <ol>
         <li>Network failure, your computer/mobile phone has no Internet access;</li>
         <li>Other network proxies are enabled on the computer/mobile phone;</li>
         <li>The request was intercepted by network security;</li>
       </ol>
     <dd>
     <dt>Solution:</dt>
     <dd>
       <ol>
         <li>First make sure your computer/mobile phone is properly connected to the network via Wi-Fi or cable;</li>
         <li>If you use the public network to access the system, check whether your computer/mobile phone is connected to the Internet. If there is no Internet access, you can try:<br />
           - Restart the computer, optical modem, router, and mobile phone network<br />
           - Adjust DNS configuration<br />
           - Reset TCP/IP network configuration<br />
           - Use another browser<br />
           If the problem persists, you should contact your internet service provider and check if there are any technical issues.
         </li>
         <li>Check whether other network proxies are turned on. If so, try turning them off. </li>
       </ol>
       </dd>
     </dl>
     `,
    },
    // Request timed out
    '01-00-2-000-000002': {
      title: 'Service request failed, request timed out',
      content: `<dl>
     <dt>Possible reasons for request failure:</dt>
     <dd>
       <ol>
         <li>The current system is in peak usage period and the response is slow;</li>
         <li>The network uplink and downlink speeds are slow;</li>
         <li>The request message is too large and takes a long time to upload;</li>
         <li>File download, the file size is too large and takes more time;</li>
       </ol>
       </dd>
     </dl>
     <dt>Solution:</dt>
     <dd>
       <ol>
         <li>Please try again later;</li>
         <li>Check the network, test network speed, and optimize;</li>
         <li>If the content is too large, contact the administrator to adjust the timeout;</li>
       </ol>
     </dd>
     </dl>
     `,
    },
    // Request 404
    '01-00-2-000-000404': {
      title: 'Service request failed, the requested resource does not exist (404)',
      content: `<dl>
     <dt>Possible reasons for request failure:</dt>
     <dd>
       <ol>
         <li>The resource address is incorrect;</li>
         <li>The resource has been deleted, and the browser cache has caused the resource address not to be updated;</li>
         <li>The page version is inconsistent with the service version;</li>
       </ol>
       </dd>
     </dl>
     <dt>Solution:</dt>
     <dd>
       <ol>
         <li>Clear browser cache and try again;</li>
         <li>Contact the system administrator to check the resource address and version information;</li>
       </ol>
     </dd>
     </dl>
     `,
    },
    // Request 413
    '01-00-2-000-000413': {
      title: 'Service request failed, the request message body exceeds the gateway limit',
      content: `<dl>
     <dt>Reason for request failure:</dt>
     <dd>
       <ol>
         <li>Caused by the request message body being too large, the request length exceeds the default cache size of the gateway and the maximum client request size;</li>
       </ol>
       </dd>
     </dl>
     <dt>Solution:</dt>
     <dd>
       <ol>
         <li>Please contact the system administrator to adjust the gateway configuration</li>
       </ol>
     </dd>
     </dl>
     `,
    },
    // Gateway error
    '06-00-3-000-000502': {
      title: 'Service request failed, please try again later or contact the system administrator',
      content: `<dl>
     <dt>Possible reasons for request failure:</dt>
     <dd>
       <ol>
         <li>The system is being released;</li>
         <li>The current system is in peak usage period and the response is slow;</li>
         <li>There is an internal error in the system;</li>
       </ol>
       </dd>
     </dl>
     <dt>Solution:</dt>
     <dd>
       <ol>
         <li>Please try again later;</li>
         <li>Please contact your system administrator to verify:<br />
           - Considering the throughput of the server, whether it is necessary to expand the system capacity;<br />
           - Consider whether program optimization is needed from the perspective of server-side program issues;<br />
           - Considering network problems, whether it is necessary to check whether network consumption and load balancing configuration are correct.
         </li>
       </ol>
     </dd>
     </dl>
     `,
    },
    // Gateway timeout
    '06-00-3-000-000504': {
      title: 'Service request failed, please try again later or contact the system administrator',
      content: `<dl>
     <dt>Possible reasons for request failure:</dt>
     <dd>
       <ol>
         <li>The current system is in peak usage period and the response is slow;</li>
       </ol>
       </dd>
     </dl>
     <dt>Solution:</dt>
     <dd>
       <ol>
         <li>Please try again later;</li>
         <li>Please contact your system administrator to verify:<br />
           - Considering the throughput of the server, whether it is necessary to expand the system capacity;<br />
           - Considering network problems, whether it is necessary to check whether network consumption and load balancing configuration are correct.
         </li>
       </ol>
     </dd>
     </dl>
     `,
    },
  },
  open: 'Expand',
  packUp: 'close',
  documentLink: 'Documentation link',
  serviceURL: 'service address',
  PageRequestPath: 'Page request path',
  apiReqPath: 'Interface request path',
  apiResBody: 'Interface returns message',
  faultReport: 'Fault report',
  hasReported: 'Fault reported',
  reporting: 'Fault reporting...',
  hundred: 'hundred',
  k: 'thousand',
  w: 'ten thousand',
  '10w': 'hundred thousand',
  '100w': 'million',
  '1000w': 'ten million',
  '100m': 'hundred million',
  b: 'billion',
  '10b': 'ten billion',
  '100b': 'hundred billion',
  t: 'trillion',
  '10t': 'ten trillion',
  cancelConfirm: 'Changes will not be saved after canceling, confirm canceling?',
  zipPreviewPlaceholder: 'Please select the files in the zip package to preview them.',
  zipPreviewTitle: 'The current preview is a zip file, direct preview is not supported.',
  zipPreviewTips: 'Please select the files in the zip below to preview!',
  PageNotInPortal: 'The current page is not within the Lingxi platform portal, and portal redirection is not possible. Please modify the page redirection type.',
};
