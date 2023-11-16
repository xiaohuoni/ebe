import * as _ from 'lodash';
import { CodeGeneratorError } from '../../core/types/error';
import { ProcessFunctionType, PlatformType } from '@lingxiteam/types';
import { IProjectSchema, IPublicTypeNodeDataType } from '../../core/types';
import { parseDsl } from './parseDsl';
import assetHelper from './assets/assets';
import { isNodeSchema } from '../../core/utils/deprecated';

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
    const list: IPublicTypeNodeDataType = components;
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
  } else if (isNodeSchema(components)) {
    const handler = handlers.node || noop;
    const child = components;
    result = handler(child);

    if (child.components) {
      const childRes = handleSubNodes(child.components, handlers, opt);
      childrenRes.push(...childRes);
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
}

// TODO: 写在这里不对啊，先放着
let pageId = '';
let appId = '';
/**
 * 控件属性预处理-只执行一次
 * @param schema
 * @param isRoot
 * @returns
 */
const preprocessComponentSchema = (
  schema: IProjectSchema,
  isRoot: boolean,
): IProjectSchema => {
  let newSchema: any = _.cloneDeep(schema);
  // TODO: extraData sandBoxContext
  const extraData = {} as any;
  const sandBoxContext = {};
  // 预处理事件
  newSchema = parseDsl(schema, isRoot, '', '');
  if (isRoot) {
    pageId = newSchema.pageId;
    appId = newSchema.appId;
    return newSchema;
  }
  const methods = assetHelper.comPreprocess.getComPreprocessMethods(
    schema.compName!,
    schema.platform as PlatformType,
  );
  methods?.forEach((fc: ProcessFunctionType) => {
    newSchema = fc(newSchema, extraData);
  });
  const originProps = schema?.props || {};
  const props = {
    ...originProps,
    $$componentItem: {
      id: schema.id,
      uid: schema.id,
      pageId: pageId,
      appId: appId,
      platform: schema.platform,
      // TODO: fusionMode
      // fusionMode: schema?.fusionMode,
      type: schema.compName,
    },
  };

  // 执行组件预处理
  const methodsRun = assetHelper.comRunPreprocess.getRunComPreprocessMethods(
    schema.compName!,
    schema.platform as PlatformType,
  );
  methodsRun?.forEach((fc: ProcessFunctionType) => {
    // @ts-ignore
    const aprops = fc(newSchema, props, sandBoxContext, extraData);
    newSchema.props = aprops;
  });

  return newSchema;
};

// 解析schema数据
export const parseSchema = (schema: IProjectSchema, isRoot: boolean) => {
  modifySchemaCompName(schema, isRoot);
  const target = preprocessComponentSchema(schema, isRoot) ?? schema;
  const { components } = target as any;
  target.components = components?.map((schem: any) => {
    return parseSchema(schem, false) ?? schem;
  });
  return schema;
};

/**
 * 修改schema的组件名称
 * @param schema
 * @param isRoot
 */
const modifySchemaCompName = (schema: IProjectSchema, isRoot: boolean) => {
  const compName = schema?.compName || schema?.type;

  if (!isRoot && compName) {
    if (schema.compName) {
      schema.compName = compName;
    }
    if (schema.type) {
      schema.type = compName;
    }
  }
};
