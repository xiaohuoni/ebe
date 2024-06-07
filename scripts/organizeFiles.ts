import fs from 'fs';
import path from 'path';
const sysCmd = [
  'JSBridge',
  'accountDivide',
  'addEventListenerParentMessage',
  'apiRequest',
  'apiRequestByFlow',
  'callCurrentFunc',
  'callCustomPageFunc',
  'callFuncComp',
  'callNotStatedCustomFunc',
  'callParentCustomFunc',
  'callSelfFunc',
  'clearMobileValue',
  'clearTimer',
  'clearValue',
  'closeModal',
  'closePopover',
  'console',
  'copyToClipboard',
  'customActionCode',
  'customPrintOrExport',
  'downloadByFileId',
  'dropPageByCatch',
  'exportBusiObjectData',
  'exportCustomBusiObjectData',
  'exportCustomData',
  'exportPage',
  'exportSQLServiceData',
  'getCustomState',
  'getDynamicDataFormValue',
  'getItemFromLocalStorage',
  'getLocalLocation',
  'getValue',
  'hideMessage',
  'history',
  'historyGoBack',
  'historyPush',
  'historyReplace',
  'ifelse',
  'importBusiObjectData',
  'importCustomBusiObjectData',
  'importCustomData',
  'okCallbackData',
  'postObjectData',
  'postParentMessage',
  'previewFile',
  'print',
  'reload',
  'reloadDataSource',
  'reloadDynamicData',
  'resetCurrentDynamicForm',
  'resetDataSource',
  'return',
  'saveBlobFile',
  'scanCode',
  'sendMessageIframe',
  'setCompChildrenValue',
  'setCustomState',
  'setDataSource',
  'setDisable',
  'setDownloadResponse',
  'setDrawerTitle',
  'setDynamicDataValues',
  'setEditor',
  'setInterval',
  'setItemToLocalStorage',
  'setLoading',
  'setMobileFormEditor',
  'setMobileValue',
  'setModalTitle',
  'setPageSrc',
  'setRequired',
  'setRules',
  'setSrc',
  'setTimeout',
  'setTimer',
  'setValue',
  'setVisible',
  'showAppCustomModal',
  'showCustomModal',
  'showDrawer',
  'showMessage',
  'showModal',
  'sysSetDisable',
  'sysSetFormItemStatus',
  'sysSetRequired',
  'sysSetState',
  'sysSetValue',
  'sysSetVisible',
  'validateDynamicForm',
  'value',
];

const sysCmd1 = ['apiRequest'];

// 整理文件夹下的文件，如果文件名在 sysCmd 数组中，请将它移入子文件夹 sysCmd 中，并删除原文件。
const folderPath = path.join(__dirname, '../src/cmd');
const testFolderPath = path.join(__dirname, '../tests/cmd');
const copyFileSyncRelative = (
  from: string,
  to: string,
  cmdDir: string = '',
) => {
  console.log(from);
  // 简单的处理相对路径
  let context = fs.readFileSync(from, 'utf-8');
  context = context
    .replace(/from '\.\.\//g, "from '../../")
    .replace(/from '\.\//g, "from '../");
  if (cmdDir) {
    context = context.replace(/src\/cmd/g, `src/cmd/${cmdDir}`);
  }
  fs.writeFileSync(to, context, 'utf-8');
};
// TODO: 没有处理 src/cmd/index 文件
const organizeFilesByCmdType = (type: string, cmds: string[]) => {
  const sysCmdFolder = path.join(folderPath, type);
  const sysCmdTestFolder = path.join(testFolderPath, type);
  // Create sysCmd folder if it doesn't exist
  if (!fs.existsSync(sysCmdFolder)) {
    fs.mkdirSync(sysCmdFolder);
  }
  if (!fs.existsSync(sysCmdTestFolder)) {
    fs.mkdirSync(sysCmdTestFolder);
  }
  const otherType = 'pcCmd';
  const otherCmdFolder = path.join(folderPath, otherType);
  const otherCmdTestFolder = path.join(testFolderPath, otherType);
  // Create sysCmd folder if it doesn't exist
  if (!fs.existsSync(otherCmdFolder)) {
    fs.mkdirSync(otherCmdFolder);
  }
  if (!fs.existsSync(otherCmdTestFolder)) {
    fs.mkdirSync(otherCmdTestFolder);
  }
  // Loop through each file in the folder
  fs.readdirSync(folderPath).forEach((file) => {
    const filePath = path.join(folderPath, file);
    const isDirectory = fs.statSync(filePath).isDirectory();
    if (isDirectory) {
      return;
    }
    const fileName = path.parse(file).name;
    console.log(fileName);
    // Check if the file name is in sysCmd array
    if (cmds.includes(fileName)) {
      const newFilePath = path.join(sysCmdFolder, file);

      // Move the file to sysCmd folder
      copyFileSyncRelative(filePath, newFilePath);
      // Delete the file
      fs.unlinkSync(filePath);

      const testFile = path.join(testFolderPath, `${fileName}.test.ts`);
      // Move the test file to sysCmd folder
      if (fs.existsSync(testFile)) {
        const newTestFilePath = path.join(
          sysCmdTestFolder,
          `${fileName}.test.ts`,
        );

        // Move the file to sysCmd folder
        copyFileSyncRelative(testFile, newTestFilePath, type);
        fs.unlinkSync(testFile);
      }
    } else {
      // TODO: 剩下的移到 pcCmd
      const newFilePath = path.join(otherCmdFolder, file);

      // Move the file to sysCmd folder
      copyFileSyncRelative(filePath, newFilePath);
      // Delete the file
      fs.unlinkSync(filePath);

      const testFile = path.join(testFolderPath, `${fileName}.test.ts`);
      // Move the test file to sysCmd folder
      if (fs.existsSync(testFile)) {
        const newTestFilePath = path.join(
          otherCmdTestFolder,
          `${fileName}.test.ts`,
        );

        // Move the file to sysCmd folder
        copyFileSyncRelative(testFile, newTestFilePath, otherType);
        fs.unlinkSync(testFile);
      }
    }
  });
};

organizeFilesByCmdType('sysCmd', sysCmd);
