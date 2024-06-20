import changeCase from 'change-case';
import short from 'short-uuid';
import {
  DependencyType,
  IDependency,
  IExternalDependency,
  IInternalDependency,
} from '../types';

// Doc: https://www.npmjs.com/package/change-case

export function camel2dash(input: string): string {
  return changeCase.paramCase(input);
}

/**
 * 转为驼峰
 */
export function camelize(str: string): string {
  return changeCase.camelCase(str);
}

export function generateID(): string {
  return short.generate();
}

export function upperCaseFirst(inputValue: string): string {
  return changeCase.upperCaseFirst(inputValue);
}

export function uniqueArray<T>(arr: T[], by: (i: T) => string) {
  const map: Record<string, T> = {};
  arr.forEach((item) => {
    map[by(item)] = item;
  });
  // FIXME: Babel 编译存在问题，暂时替换实现
  // const uniqueKeys = [...new Set<string>(Object.keys(map))];
  const uniqueKeys = Array.from(new Set<string>(Object.keys(map)));
  const uniqueItems = uniqueKeys.map((key) => map[key]);
  return uniqueItems;
}

export function getStaticExprValue<T>(expr: string): T {
  // TODO: 需要安全性检查
  // eslint-disable-next-line no-new-func
  return Function(`"use strict";return (${expr})`)();
}

export function isJSExpressionFn(data: any) {
  return data?.type === 'JSExpression' && data?.extType === 'function';
}

export function isInternalDependency(
  dependency: IDependency,
): dependency is IInternalDependency {
  return dependency.dependencyType === DependencyType.Internal;
}

export function isExternalDependency(
  dependency: IDependency,
): dependency is IExternalDependency {
  return dependency.dependencyType === DependencyType.External;
}

const { hasOwnProperty } = Object.prototype;
export const hasOwn = (
  val: object,
  key: string | symbol,
): key is keyof typeof val => hasOwnProperty.call(val, key);

/**
 * 提取数字和字母
 * @param input
 * @returns
 */
export function extractLettersAndNumbers(input: string) {
  // 正则表达式匹配所有的字母和数字
  const regex = /[a-zA-Z0-9]/g;
  // 使用 match 方法提取所有匹配项，并将结果连接成一个字符串
  const result = input.match(regex);
  // 如果 result 不是 null，则将其连接成字符串返回；否则返回空字符串
  return result ? result.join('') : '';
}
