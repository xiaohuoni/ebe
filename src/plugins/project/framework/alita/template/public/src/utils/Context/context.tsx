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
        } catch { }
      }
    });
  };

  const sources: (S1 | S2)[] = [source1, ...args];

  sources.forEach((source) => {
    merge(source);
  });

  return target as any;
}
interface componentRef extends ImperativeHandleReturn { }

export class RefsManager {
  constructor() { }

  /**
   * 页面级别Ref
   */
  private systemRef: Record<string, Record<string, any>> = {};

  /**
 * 页面级别Ref
 */
  private sysCustomActionMapRef: Record<string, Record<string, any>> = {};

  /**
   * 页面级别的ref
   * @param ref
   */
  private setSystemRef = (renderId: string, comRefs: Record<string, any>) => {
    if (this.systemRef[renderId]) {
      mergeGetter(this.systemRef[renderId], comRefs);
    } else {
      this.systemRef[renderId] = comRefs;
    }
  };


  /**
 * 页面级别的ref
 * @param ref
 */
  private setSysCustomActionMapRef = (renderId: string, customActionMapRef: Record<string, any>) => {
    if (this.sysCustomActionMapRef[renderId]) {
      mergeGetter(this.sysCustomActionMapRef[renderId], customActionMapRef);
    } else {
      this.sysCustomActionMapRef[renderId] = customActionMapRef;
    }
  };
  public getComRefs = (renderId: string) => {
    return this.systemRef[renderId] || {};
  };

  public getCustomActionMapRef = (renderId: string): Record<string, any> => {
    return this.sysCustomActionMapRef[renderId] || {};
  }
  public get refs(): any {
    return this.systemRef;
  }
}
