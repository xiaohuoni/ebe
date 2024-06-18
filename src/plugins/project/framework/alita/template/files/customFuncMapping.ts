import { LXProjectOptions, ResultFile } from '../../../../../../core';
import { parse2Var } from '../../../../../../core/utils/compositeType';
import { createResultFile } from '../../../../../../core/utils/resultHelper';
import pageVar from '../../../../../../utils/pageVarConfig';

export default function getFile(
  config?: LXProjectOptions,
): [string[], ResultFile] {
  const file = createResultFile(
    'customFuncMapping',
    'ts',
    ` 
export declare type RenderId = string;

const keywords = ${parse2Var(Object.keys(pageVar))};

const getSaleEventName = (eventName: any) => {
  const sale =
    /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(eventName) &&
    !/^(?:abstract|arguments|await|boolean|break|byte|case|catch|char|class|const|continue|debugger|default|delete|do|double|else|enum|eval|export|extends|false|final|finally|float|for|function|goto|if|implements|import|in|instanceof|int|interface|let|long|native|new|null|package|private|protected|public|return|short|static|super|switch|synchronized|this|throw|throws|transient|true|try|typeof|var|void|volatile|while|with|yield)$/.test(
      eventName,
    );
  const target = sale ? eventName : \`event_\${eventName}\`;
  if (keywords.includes(target)) {
    return \`safe_\${target}\`;
  }
    return target;
};

/**
 * 生成唯一id
 * @param prefix
 * @param id
 * @param slength
 * @returns
 */
export const createRenderId = (
  prefix?: string,
  separator: string = '##',
  id?: string,
  slength: number = 12,
) => {
  let uid = id;
  if (!uid) {
    uid = Math.random().toString().slice(slength);
  }
  return prefix ? prefix + separator + uid : uid;
};

class customFuncMapping {
  private mapping: Map<RenderId, Record<string, Function>> = new Map();

  /**
   * 记录id和生成的id关系，用于一个页面嵌入两个相同页面，然后吊影页面的方法，需要执行两个页面两次方法
   */
  private rennderIdMap: string[] = [];

  /**
   * 移除记录
   * @param routerId 路由id
   * @param engineId 引擎id
   */
  remove(renderId: RenderId) {
    if (renderId) {
      this.mapping.delete(renderId);
      this.rennderIdMap = this.rennderIdMap.filter((i) => i !== renderId);
    } else {
      console.error('renderId为空');
    }
  }
  get(renderId: string) {
    if (renderId) {
      return this.mapping.get(renderId) || {};
    } else {
      console.error('renderId为空');
      return {};
    }
  }
  add(renderId: RenderId, functions: Record<string, Function>) {
    if (typeof renderId === 'string') {
      this.mapping.set(renderId, functions);
      this.rennderIdMap.push(renderId);
    } else {
      console.error('renderId类型错误');
    }
  }
  callCustomFunc(renderId: string | undefined, funcName: string, ...args: any) {
    if (renderId) {
      const eventName = getSaleEventName(funcName);
      const customActionMapRef = this.get(renderId);
      if (typeof customActionMapRef?.[eventName] === 'function') {
        customActionMapRef?.[eventName](...args);
      } else {
        console.error(\`\${eventName}不存在\`);
      }
    } else {
      console.error('renderId不能为空');
    }
  }

  /**
   * 调用任意页面的自定义事件
   * @param pageName
   * @param funcName
   * @param args
   */
  callPageCustomFunc(pageName: string, funcName: string, ...args: any) {
    if (pageName) {
      this.rennderIdMap.forEach((i) => {
        // 切割得到页面名称
        const ids = i.split('##');
        if (Array.isArray(ids)) {
          const id = ids[0];
          if (id === pageName) {
            this.callCustomFunc(i, funcName, ...args);
          }
        }
      });
    } else {
      console.error('pageName不能为空');
    }
  }
}

export default new customFuncMapping();
    `,
  );

  return [['src', 'utils'], file];
}
