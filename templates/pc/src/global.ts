import { initConfig } from '@lingxiteam/engine-pc';
import assets from '@lingxiteam/pcfactory/umd/listAssets.json';
import React from 'react';
import ReactDOM from 'react-dom';
import { useLocation } from 'react-router-dom';
// 注意: 与移动端不同，pc 的 esm 是 rollup 构建的，并且去除了 index 中的 index.component 引用
// @ts-ignore
import pcfactory from '@lingxiteam/pcfactory';
// 直接引入 pcfactory 打包好的 css，不需要主工程再单独构建了
import assetHelper from '@lingxiteam/engine-assets';
import '@lingxiteam/pcfactory/dist/index.component.min.css';
import componentCMD from '@lingxiteam/pcfactory/es/index.cmdexec';
import compLocales from '@lingxiteam/pcfactory/es/index.locale';
import { antPrefix as clsPrefix } from '@lingxiteam/pcfactory/es/variables';
import sysAction from '@lingxiteam/sys-action';
// import { NoPermission, NotFound } from './components/Exception';
import type { CommandFunction, CondFunction } from '@lingxiteam/types';

const { enPreprocess, enRunPreprocess, cmdexec } = pcfactory;
// 提供热更新使用
window.React = React;
window.ReactDOM = ReactDOM;

// @ts-ignore
window.APPVERSION = 'APP_VERSION';

initConfig({
  platform: 'pc',
  // @ts-ignore
  // factory: Object.keys(config).map(type => ({
  // @ts-ignore
  // component: Loadable({
  //   loader: layzLoader(component[type]),
  //   // TODO: 需要像 配置态 一样设计统一的 Loading，用来处理文件 load 异常
  //   // @ts-ignore
  //   loading: Spin,
  // }),
  // component: component[type],
  // @ts-ignore
  // config: config[type],
  // })),
  platformConfig: {
    httpSecurityMode: '1.0',
    apiPrefix: process.env.REACT_APP_REQUEST_PREFIX || 'server/',
    errorCodeShowType: 'console',
    prefixCls: clsPrefix,
    useHotUpdate: {
      NODE_ENV: process.env.NODE_ENV,
      pkgInfo: {
        '@lingxiteam/pcfactory': assets,
      },
    },
  },
  comPreprocess: enPreprocess,
  // @ts-ignore
  comRunProcess: enRunPreprocess,
  // @ts-ignore
  cmdexec,
  // @ts-ignore
  useLocation,
  history,
  isInitPlatformFu: true,
  // expectionComponents: {
  //   noPermission: NoPermission,
  //   notFound: NotFound,
  // },
  locales: compLocales,
});

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
