import { ResultFile } from '../../../../../../core';
import { createResultFile } from '../../../../../../core/utils/resultHelper';

export default function getFile(): [string[], ResultFile] {
  const file = createResultFile(
    'global',
    'ts',
    `import * as DynamicForm from '@lingxiteam/dform';
    import assetHelper from '@lingxiteam/engine-assets';
    import componentCMD from '@lingxiteam/factory/es/index.cmdexec';
    import sysAction from '@lingxiteam/sys-action';
    import type { CommandFunction, CondFunction } from '@lingxiteam/types';
    import * as antdMobile5 from 'antd-mobile-5';
    import React from 'react';
    import ReactDOM from 'react-dom';
    
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
    `,
  );

  return [['src'], file];
}
