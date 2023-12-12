import * as DynamicForm from '@lingxiteam/dform';
import {
  messageApi as message,
  Modal,
} from '@lingxiteam/engine-app/es/components/MessageApi';
import assetHelper from '@lingxiteam/engine-assets';
import {
  httpConfig,
  lcdpApi,
  setPlatformConfig,
} from '@lingxiteam/engine-platform';
import componentCMD from '@lingxiteam/factory/es/index.cmdexec';
import sysAction from '@lingxiteam/sys-action';
import type { CommandFunction, CondFunction } from '@lingxiteam/types';
import { setPageNavBar } from 'alita';
import * as antdMobile5 from 'antd-mobile-5';
import { Toast } from 'antd-mobile-5';
import React from 'react';
import ReactDOM from 'react-dom';
// @ts-ignore
window.engineType = 'mobile';

window.React = React;
window.ReactDOM = ReactDOM;
// @ts-ignore
window.antdMobile = antdMobile5;
// @ts-ignore
window.DynamicForm = DynamicForm;

const registerCommand = (
  sysCmdexec: Record<string, CommandFunction>,
  condexec: Record<string, CondFunction>,
  cmdexec?: Record<string, CommandFunction>,
) => {
  // 这里指令系统需要注册平台指令资源和条件指令资源
  assetHelper.command.registerCmdExec(sysCmdexec, cmdexec);
  assetHelper.command.registerSysCmdCond(condexec);
  // console.log('cmdexec指令', cmdexec);
  // console.log('condexec指令', condexec);
  assetHelper.function.registerFunctions();
};
/**
 *  指令导出包含了 cmd_ 前缀 ，解析成执行需要移除
 */
// 指令
const sysCmdExec: any = {};
// 条件
const sysCmdCond: any = {};
const formatKey = (cmd: any, sourceObj: any) => {
  Object.keys(cmd).forEach((key: string) => {
    const _cmd = cmd[key];
    const cmdKey = key.startsWith('cmd_') ? key.substring(4) : key;
    sourceObj[cmdKey] = _cmd;
  });
};
formatKey(sysAction.syscmdexec, sysCmdExec);
formatKey(sysAction.syscondexec, sysCmdCond);
registerCommand(sysCmdExec, sysCmdCond, componentCMD);

const platformConfig = {
  httpSecurityMode: '1.0',
  apiPrefix: process.env.REACT_APP_REQUEST_PREFIX || '../server/',
  errorCodeShowType: 'console',
  platform: 'h5',
  // useHotUpdate: {
  //   NODE_ENV: process.env.NODE_ENV,
  //   pkgInfo: {
  //     '@lingxiteam/factory': assets,
  //   },
  // },
} as any;

httpConfig(
  lcdpApi,
  // @ts-ignore
  { engineType: window.engineType, openTracking: true },
);

/**
 * 注册在【engine-utils】包下http.js文件中用到的 antdmobile 组件, 应用勾子中使用的的到
 */
lcdpApi.setAntd({
  message,
  notification: Toast,
  modal: Modal,
});

assetHelper.otherAsset.registerAsset('setPageNavBar', setPageNavBar);
// 注册资产库多语言
// if (locales) {
//   assetHelper.locale.setLocales(locales);
// }

// 注册平台信息

setPlatformConfig(platformConfig);
