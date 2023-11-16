import { CommandFunction, CondFunction } from '@lingxiteam/types';

class Command {
  /**
   * 组件控件指令
   */
  cmdExec: Record<string, CommandFunction> = {};

  /**
   * 平台级条件指令
   */
  sysCmdCond: Record<string, CondFunction> = {};

  /**
   * 注册平台条件组件指令
   */
  public registerSysCmdCond(sysCmdCond: Record<string, CondFunction>) {
    if (sysCmdCond && this.isPlainObject(sysCmdCond)) {
      this.sysCmdCond = sysCmdCond;
    } else {
      console.error('条件指令注册类型错误');
    }
  }

  /**
   * 注册控件指令
   * @param sysCmdExec  系统控件指令
   * @param cmdExec 控件指令
   */
  public registerCmdExec(
    sysCmdExec: Record<string, CommandFunction>,
    cmdExec?: Record<string, CommandFunction>,
  ) {
    this.cmdExec = sysCmdExec;
    if (cmdExec && this.isPlainObject(cmdExec)) {
      for (const key in cmdExec) {
        if (sysCmdExec.hasOwnProperty(key)) {
          console.error(`控件指令中存在相同指令, 指令将无法覆盖: ${key}`);
          //   throw new Error(`控件指令中存在相同指令, 指令将无法覆盖: ${key}`);
        } else {
          this.cmdExec[key] = cmdExec[key];
        }
      }
    }
  }

  private isPlainObject: (arg0: any) => boolean = (obj) => {
    if (obj === undefined || obj === null || Array.isArray(obj)) {
      return true;
    }
    const proto = Object.getPrototypeOf(obj);
    return !!proto && Object.getPrototypeOf(proto) === null;
  };

  /**
   * 获取平台级条件指令
   * @returns 指令方法
   */
  public getSysCmdCondByKey(key: string) {
    if (this.sysCmdCond?.[key] && typeof this.sysCmdCond[key] === 'function') {
      return this.sysCmdCond[key];
    }
    return `无法识别的条件类型：${key}，该指令是否不存在于当前指令集？`;
  }

  /**
   * 获取组件控件指令或者平台级组件指令
   * @param key 指令key
   * @returns 指令方法
   */
  public getCmdExecBykey(key: string) {
    if (this.cmdExec?.[key] && typeof this.cmdExec[key] === 'function') {
      return this.cmdExec[key];
    }
    return `无法识别的指令类型：${key}，该指令是否不存在于当前指令集？`;
  }

  public getCmdExec() {
    return this.cmdExec;
  }

  public getSysCmdCondBy() {
    return this.sysCmdCond;
  }

  /**
   * 增控件指令
   * @param newcmd 指令
   */
  public addCmdExec(newcmd: Record<string, CommandFunction>) {
    if (newcmd && this.isPlainObject(newcmd)) {
      Object.assign(this.cmdExec, newcmd);
    } else {
      console.error('增加指令错误，无法识别的类型');
    }
  }

  /**
   * 增加条件指令
   * @param newcmd 指令
   */
  public addSysCmd(newcmd: Record<string, CondFunction>) {
    if (newcmd && this.isPlainObject(newcmd)) {
      Object.assign(this.sysCmdCond, newcmd);
    } else {
      console.error('增加指令错误，无法识别的类型');
    }
  }
}

export default Command;
