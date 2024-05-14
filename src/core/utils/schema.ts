import { Component } from '@lingxiteam/types';
import * as _ from 'lodash';
import { IPublicTypeNodeDataType } from '../types';
import { CodeGeneratorError } from '../types/error';
import {
  isDOMText,
  isJSExpression,
  isJSFunction,
  isJSSlot,
  isNodeSchema,
} from '../utils/deprecated';
import { isJSExpressionFn } from './common';
export function isContainerSchema(x: any): x is any {
  return (
    typeof x === 'object' &&
    x &&
    typeof x.type === 'string' &&
    typeof x.fileName === 'string'
  );
}

export function isNpmInfo(x: any): x is any {
  return typeof x === 'object' && x && typeof x.package === 'string';
}

const noop = () => undefined;

const handleChildrenDefaultOptions = {
  rerun: false,
};

const DEFAULT_MAX_DEPTH = 100000;

/**
 * 遍历并处理所有的子节点
 * @param components
 * @param handlers
 * @param options
 * @returns
 */
export function handleSubNodes<T>(
  components: IPublicTypeNodeDataType,
  handlers: {
    string?: (i: string) => T;
    expression?: (i: any) => T;
    node?: (i: IPublicTypeNodeDataType) => T;
  },
  options?: {
    rerun?: boolean;
    maxDepth?: number; // 防止出现死循环无穷递归
  },
): T[] {
  const opt = {
    ...handleChildrenDefaultOptions,
    ...(options || {}),
  };
  const maxDepth = opt.maxDepth ?? DEFAULT_MAX_DEPTH;
  if (maxDepth <= 0) {
    throw new Error('handleSubNodes maxDepth reached');
  }

  if (Array.isArray(components)) {
    const list: any[] = components as any;
    return list
      .map((child) =>
        handleSubNodes(child, handlers, { ...opt, maxDepth: maxDepth - 1 }),
      )
      .reduce((p, c) => p.concat(c), []);
  }

  let result: T | undefined;
  const childrenRes: T[] = [];
  if (components === null || components === undefined) {
    return [];
  } else if (isDOMText(components)) {
    const handler = handlers.string || noop;
    result = handler(components as any);
  } else if (isJSExpression(components)) {
    const handler = handlers.expression || noop;
    result = handler(components);
  } else if (isJSSlot(components)) {
    // @ts-ignore
    return handleSubNodes(components.value as any, handlers, {
      ...opt,
      maxDepth: maxDepth - 1,
    });
  } else if (isNodeSchema(components)) {
    const handler = handlers.node || noop;
    const child = components as any;
    result = handler(child);

    if (child.components) {
      const childRes = handleSubNodes(child.components, handlers, opt);
      childrenRes.push(...childRes);
    }

    if (child.props) {
      if (Array.isArray(child.props)) {
        child.props.forEach(({ value }: any) => {
          const childRes = handleCompositeValueInProps(value);
          childrenRes.push(...childRes);
        });
      } else {
        Object.values(child.props).forEach((value) => {
          const childRes = handleCompositeValueInProps(value as any);
          childrenRes.push(...childRes);
        });
      }
    }
  } else {
    throw new CodeGeneratorError(
      'handleSubNodes got invalid NodeData',
      components,
    );
  }

  if (result !== undefined) {
    childrenRes.unshift(result);
  }

  return childrenRes;

  function handleCompositeValueInProps(value: any): T[] {
    if (isJSSlot(value)) {
      return handleSubNodes(value.value, handlers, {
        ...opt,
        maxDepth: maxDepth - 1,
      });
    }

    // CompositeArray
    if (Array.isArray(value)) {
      return _.flatMap(value, (v) => handleCompositeValueInProps(v));
    }

    // IPublicTypeCompositeObject
    if (
      !isJSExpression(value) &&
      !isJSExpressionFn(value) &&
      !isJSFunction(value) &&
      typeof value === 'object' &&
      value !== null
    ) {
      return _.flatMap(Object.values(value), (v) =>
        handleCompositeValueInProps(v),
      );
    }

    return [];
  }
}

export function isValidContainerType(schema: Component) {
  return ['Page', 'Component', 'Block'].includes(schema.type);
}

export const enum ContainerType {
  Page = 'Page',
  Component = 'Component',
  Block = 'Block',
}
