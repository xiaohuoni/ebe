import { CommandFunction, CondFunction } from '@lingxiteam/types';
declare class Command {
    /**
     * 组件控件指令
     */
    cmdExec: Record<string, CommandFunction>;
    /**
     * 平台级条件指令
     */
    sysCmdCond: Record<string, CondFunction>;
    /**
     * 注册平台条件组件指令
     */
    registerSysCmdCond(sysCmdCond: Record<string, CondFunction>): void;
    /**
     * 注册控件指令
     * @param sysCmdExec  系统控件指令
     * @param cmdExec 控件指令
     */
    registerCmdExec(sysCmdExec: Record<string, CommandFunction>, cmdExec?: Record<string, CommandFunction>): void;
    private isPlainObject;
    /**
     * 获取平台级条件指令
     * @returns 指令方法
     */
    getSysCmdCondByKey(key: string): string | CondFunction;
    /**
     * 获取组件控件指令或者平台级组件指令
     * @param key 指令key
     * @returns 指令方法
     */
    getCmdExecBykey(key: string): string | CommandFunction;
    getCmdExec(): Record<string, CommandFunction>;
    getSysCmdCondBy(): Record<string, CondFunction>;
    /**
     * 增控件指令
     * @param newcmd 指令
     */
    addCmdExec(newcmd: Record<string, CommandFunction>): void;
    /**
     * 增加条件指令
     * @param newcmd 指令
     */
    addSysCmd(newcmd: Record<string, CondFunction>): void;
}
export default Command;
