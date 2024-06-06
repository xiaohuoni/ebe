import _, { isArray, isPlainObject, isString } from 'lodash';
import {
  isJSCode,
  isJSExpression,
  isJSFunction,
  isJSSlot,
  isJSVar,
  isLXComponent,
  parse2JSCode,
} from '../utils/deprecated';

import {
  CodeGeneratorError,
  CompositeValueGeneratorOptions,
  IScope,
} from '../types';
import { executeFunctionStack } from './aopHelper';
import { isJSExpressionFn } from './common';
import { parseExpressionGetKeywords } from './expressionParser';
import fixSyntaxError from './fixSyntaxError';
import { generateExpression, generateFunction } from './jsExpression';
import { generateJsSlot } from './jsSlot';

interface ILegaoVariable {
  type: 'variable';
  value: string;
  variable: string;
}

function isVariable(v: any): v is ILegaoVariable {
  if (_.isObject(v) && (v as ILegaoVariable).type === 'variable') {
    return true;
  }
  return false;
}

interface DataSource {
  type: 'DataSource';
  id: string;
}

/**
 * 判断是否是数据源类型
 */
function isDataSource(v: unknown): v is DataSource {
  return (
    typeof v === 'object' &&
    v != null &&
    (v as Partial<DataSource>).type === 'DataSource'
  );
}

function generateArray(
  value: any,
  scope: IScope,
  options: CompositeValueGeneratorOptions = {},
): string {
  const body = value
    .map((v: any) => generateUnknownType(v, scope, options))
    .join(',');
  return `[${body}]`;
}

function generateObject(
  value: any,
  scope: IScope,
  options: CompositeValueGeneratorOptions = {},
): string {
  if (value.type === 'i18n') {
    // params 可能会绑定变量，这里需要处理下
    if (value.params && typeof value.params === 'object') {
      return `this._i18nText(${generateUnknownType(
        _.omit(value, 'type'),
        scope,
        options,
      )})`;
    }
    return `this._i18nText(${JSON.stringify(_.omit(value, 'type'))})`; // TODO: 优化：这里可以考虑提取成个常量...
  }
  const body = Object.keys(value)
    .map((key) => {
      const propName = JSON.stringify(key);
      const v = generateUnknownType(value[key], scope, options);
      // 如果是空绑定，则删除对应属性
      if (v === '"$$"') {
        return '';
      }
      return `${propName}: ${v}`;
    })
    .filter(Boolean)
    .join(',\n');
  return `{${body}}`;
}

function generateString(value: string): string {
  // 有的字符串里面会有特殊字符，比如换行或引号之类的，这里我们借助 JSON 的字符串转义功能来做下转义并加上双引号
  return JSON.stringify(value);
}

function generateCodeString(value: any): string {
  // code 字符串原样返回，感觉不太保险
  return value.value;
}

function generateLXComponentString(value: any): string {
  // 去掉头尾##
  return value.replace(/^##{|}##$/g, '');
}

function checkJavaScriptSyntax(code: string): string {
  try {
    // 使用 Function 函数尝试执行代码
    Function(`(${code})`);
    return code;
  } catch (error) {
    // 返回空字符串，并且属性将不写入
    return '""';
    // // 捕获语法错误并返回空字符串
    // return '"TODO: 语法错误"';
  }
}

export function generateVarString(value: any): string {
  // 去掉头尾$，感觉不太保险
  // 去掉尾部分号 ; 不知道加这个的意义是啥！
  // 将 `.` 改成 `?.`
  // 代码里面可能自己写了 ?. 最终会是 ??. 将它修正
  // 数字的不能转 比如0.1 不能变成 0?.1
  if (!value) {
    return '';
  }
  if (!isJSVar(value)) {
    return value;
  }
  let code = parse2JSCode(value);
  // .replace(/(?<!\d)\.(?!\d)/g, '?.')
  // .replace(/\?\?\./g, '?.');

  // 修正语法错误导致的项目无法正常运行
  code = fixSyntaxError(code);

  return checkJavaScriptSyntax(code);
}

function generateNumber(value: number): string {
  return String(value);
}

function generateBool(value: boolean): string {
  return value ? 'true' : 'false';
}

function genFunction(
  value: any,
  options: CompositeValueGeneratorOptions = {},
): string {
  const globalVars = parseExpressionGetKeywords(value.value);

  if (globalVars.includes('arguments')) {
    return generateFunction(value, { isBindExpr: true }, options);
  }

  return generateFunction(value, { isArrow: true }, options);
}

function genJsSlot(
  value: any,
  scope: IScope,
  options: CompositeValueGeneratorOptions = {},
) {
  if (options.nodeGenerator) {
    return generateJsSlot(value, scope, options.nodeGenerator);
  }
  return '';
}

function generateUnknownType(
  value: any,
  scope: IScope,
  options: CompositeValueGeneratorOptions = {},
): string {
  if (_.isUndefined(value)) {
    return 'undefined';
  }

  if (_.isNull(value)) {
    return 'null';
  }

  if (_.isArray(value)) {
    return generateArray(value, scope, options);
  }

  if (isJSCode(value)) {
    return generateCodeString(value);
  }

  if (isLXComponent(value)) {
    return generateLXComponentString(value);
  }
  if (isJSVar(value)) {
    return generateVarString(value);
  }
  // FIXME: 这个是临时方案
  // 在遇到 type variable 私有类型时，转换为 JSExpression
  if (isVariable(value)) {
    const transValue: any = {
      type: 'JSExpression',
      value: value.variable,
    };
    return generateExpression(transValue, scope);
  }

  if (isJSExpression(value)) {
    return generateExpression(value, scope);
  }

  if (isJSFunction(value) || isJSExpressionFn(value)) {
    return genFunction(value, options);
  }

  if (isJSSlot(value)) {
    return genJsSlot(value, scope, options);
  }

  if (isDataSource(value)) {
    return generateUnknownType(
      {
        type: 'JSExpression',
        value: `this.dataSourceMap[${JSON.stringify(value.id)}]`,
      },
      scope,
      options,
    );
  }

  if (_.isObject(value)) {
    return generateObject(value as any, scope, options);
  }

  if (_.isString(value)) {
    if (options.handlers?.string) {
      return executeFunctionStack(
        value,
        scope,
        options.handlers.string,
        generateString,
        options,
      );
    }
    return generateString(value);
  }

  if (_.isNumber(value)) {
    if (options.handlers?.number) {
      return executeFunctionStack(
        value,
        scope,
        options.handlers.number,
        generateNumber,
        options,
      );
    }
    return generateNumber(value);
  }

  if (_.isBoolean(value)) {
    if (options.handlers?.boolean) {
      return executeFunctionStack(
        value,
        scope,
        options.handlers.boolean,
        generateBool,
        options,
      );
    }
    return generateBool(value);
  }

  throw new CodeGeneratorError('Meet unknown composite value type');
}

// 这一层曾经是对产出做最外层包装的，但其实包装逻辑不应该属于这一层
// 这一层先不去掉，做冗余，方便后续重构
export function generateCompositeType(
  value: any,
  scope: IScope,
  options: CompositeValueGeneratorOptions = {},
): string {
  const result = generateUnknownType(value, scope, options);
  return result;
}

/**
 * 把对象的key字段e转化成合法的key
 * @param key
 */
export const getLegitimateKey = (key: string) => {
  const iCode = key.trim();
  if (!/^[\$_a-zA-Z][\d_\$a-zA-Z]{0,}$/.test(iCode) && !/^\d+$/.test(iCode)) {
    return `['${key}']`;
  }
  return iCode;
};

// 把变量标识解析成变量
export const parse2Var = (object: any): string => {
  const getType = (o: any): keyof typeof variableType => {
    if (isArray(o)) {
      return 'array';
    }
    if (isPlainObject(o)) {
      return 'object';
    }
    if (isString(o)) {
      return 'string';
    }
    return 'any';
  };

  // 按照低代码平台特性，只需要解析string/array/object类型即可，其他类型无需关注
  const variableType = {
    string: (v: string) => {
      if (isJSVar(v)) {
        return generateVarString(v);
      }
      // 需要将字符串 修改为raw
      return generateString(v);
    },

    array: (v: any[]) => {
      if (!Array.isArray(v)) return v;
      const codes = v.map((item) => variableType[getType(item)](item));
      const t: string = `${codes.join(',')}`;
      return `[${t}]`;
    },

    object: (v: any) => {
      if (!isPlainObject(v)) return v;
      let target: string[] = [];
      Object.keys(v).forEach((key) => {
        // target += `${key}: `;
        target.push(
          `${getLegitimateKey(key)}: ${variableType[getType(v[key])](v[key])}`,
        );
      });
      return `{${target.join(',')}}`;
    },

    any: (v: any) => `${v}`,
  };

  return variableType[getType(object)](object);
};
