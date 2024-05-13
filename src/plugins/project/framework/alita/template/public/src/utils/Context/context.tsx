import React from 'react';
import { type ImperativeHandleReturn } from '@lingxiteam/types';

export const Context = React.createContext<{
  ModalManagerRef: React.MutableRefObject<any>;
  refs: any;
  appId: string;
}>({} as any);

type objectType = Record<string, any>;

/**
 * 合并方法，支持对象中包含getter方法
 * @param object
 * @param otherArgs
 */
export function mergeGetter<
  T extends objectType,
  S1 extends objectType,
  S2 extends Record<string, any>,
>(object: T, source1: S1, ...args: S2[]) {
  const target: objectType = object || {};

  // 合并ref 保持getter对象不被转义
  const merge = (o: objectType = {}) => {
    Object.keys(o).forEach((key) => {
      const descriptor = Object.getOwnPropertyDescriptor(o, key);
      if (descriptor) {
        Object.defineProperty(target, key, descriptor!);
      } else {
        try {
          target[key] = o[key];
          // eslint-disable-next-line no-empty
        } catch {}
      }
    });
  };

  const sources: (S1 | S2)[] = [source1, ...args];

  sources.forEach((source) => {
    merge(source);
  });

  return target as any;
}
interface componentRef extends ImperativeHandleReturn {}

// 组件唯一id
type CompUniqueId = string;

export class RefsManager {
  constructor() {}

  /**
   * 组件级别Ref
   */
  private componentRef: Record<CompUniqueId, componentRef> = {};

  /**
   * 平台级别组件Ref
   */
  private systemRef: Record<CompUniqueId, componentRef> = {};

  /**
   * 最后Ref
   */
  private compRefs: Record<CompUniqueId, ImperativeHandleReturn> = {};

  /**
   * 组件级别的ref
   * @param ref
   */
  private setComponentRef = (ref: any, id: string) => {
    this.componentRef[id] = ref;
    this.updateRefs(id);
  };

  /**
   * 平台级别的ref，来自hoc组件
   * @param ref
   * @param id
   */
  private setSysRef = (ref: any, id: string) => {
    this.systemRef[id] = ref;
    this.updateRefs(id);
  };

  /**
   * 最终的refs
   * @param id
   */
  private updateRefs = (id: string) => {
    const compRefs = this.componentRef[id] || {};
    const sysRefs = this.systemRef[id] || {};

    // 注意：这里不要做展开合并, 会改变getter方法引用值
    this.compRefs[id] = mergeGetter(this.compRefs[id], sysRefs, compRefs);
  };

  public get value(): any {
    return this.compRefs;
  }
}
