import generate from '@babel/generator';
import * as parser from '@babel/parser';
import traverse from '@babel/traverse';
import * as t from '@babel/types';
import {
  CodeGeneratorError,
  CompositeValueGeneratorOptions,
  IScope,
} from '../types';
import { CMDGeneratorFunction } from './CMDGenerator';
import { isJSExpressionFn } from './common';
import { isEventData, isJSExpression, isJSFunction } from './deprecated';
import { ParseError, transformExpressionLocalRef } from './expressionParser';

function parseFunction(content: string): t.FunctionExpression | null {
  try {
    const ast = parser.parse(`(${content});`, {
      plugins: ['jsx'],
    });

    let resultNode: t.FunctionExpression | null = null;
    traverse(ast, {
      FunctionExpression(path) {
        resultNode = path.node;
        path.stop();
      },
    });
    return resultNode;
  } catch (e) {
    throw new ParseError(content, e);
  }
}

function transformFuncExpr2MethodMember(
  methodName: string,
  content: string,
): string {
  const funcNode = parseFunction(content);
  if (funcNode) {
    const targetNode = t.classMethod(
      'method',
      (methodName && t.identifier(methodName)) ||
        funcNode.id ||
        t.identifier('notDefineName'),
      funcNode.params,
      funcNode.body,
      undefined,
      undefined,
      undefined,
      funcNode.async || undefined,
    );

    const { code: resultCode } = generate(targetNode, { sourceMaps: false });
    return resultCode;
  }

  throw new Error('Can not find Function Statement');
}

function getArrowFunction(content: string) {
  const funcNode = parseFunction(content);
  if (funcNode) {
    const targetNode = t.arrowFunctionExpression(
      funcNode.params,
      funcNode.body,
      funcNode.async || undefined,
    );

    const { code: resultCode } = generate(targetNode, { sourceMaps: false });
    return resultCode;
  }

  throw new Error('Can not find Function Statement');
}

function getBodyStatements(content: string) {
  const funcNode = parseFunction(content);
  if (funcNode) {
    const statements: t.Statement[] = funcNode.body.body;

    const targetNode = t.program(statements, undefined, 'module', undefined);

    const { code: resultCode } = generate(targetNode, { sourceMaps: false });
    return resultCode;
  }

  throw new Error('Can not find Function Statement');
}

/**
 * 是否是广义上的 JSFunction
 * @param value
 * @returns
 */
export function isBroadJSFunction(value: unknown): boolean {
  return isJSExpressionFn(value) || isJSFunction(value);
}

export function generateExpression(value: any, scope: IScope): string {
  if (isJSExpression(value)) {
    const exprVal = (value as any).value.trim();
    if (!exprVal) {
      return 'null';
    }

    const afterProcessWithLocals = transformExpressionLocalRef(exprVal, scope);
    return afterProcessWithLocals;
  }

  throw new CodeGeneratorError('Not a JSExpression');
}

function getFunctionSource(cfg: any): string {
  return cfg?.source || cfg?.value || cfg?.compiled;
}

export function generateFunction(
  value: any,
  config: {
    name?: string;
    isMember?: boolean;
    isBlock?: boolean;
    isArrow?: boolean;
    isBindExpr?: boolean;
  } = {
    name: undefined,
    isMember: false,
    isBlock: false,
    isArrow: false,
    isBindExpr: false,
  },
  options: CompositeValueGeneratorOptions = {},
) {
  if (isBroadJSFunction(value)) {
    const functionCfg = value as any;
    const functionSource = getFunctionSource(functionCfg);
    if (config.isMember) {
      return transformFuncExpr2MethodMember(config.name || '', functionSource);
    }
    if (config.isBlock) {
      return getBodyStatements(functionSource);
    }
    if (config.isArrow) {
      return getArrowFunction(functionSource);
    }
    if (config.isBindExpr) {
      return `(${functionSource}).bind(this)`;
    }
    return functionSource;
  }

  if (isJSExpression(value)) {
    return value.value;
  }

  if (isEventData(value)) {
    return CMDGeneratorFunction(
      value?.value ?? [],
      value?.value?.params,
      config?.name,
      {} as IScope,
      options,
    );
  }

  throw new CodeGeneratorError('Not a JSFunction or JSExpression');
}
