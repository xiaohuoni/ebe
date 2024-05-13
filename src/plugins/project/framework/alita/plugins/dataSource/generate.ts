import { initialDataSource, reloadDataSource, resetDataSource, updateData } from "./utils";
import { generatorDataType } from "./type";

/**
 * 生成导入的头文件列表
 */
const importDeps = () => {
  return [
    `import { useState, useRef, useEffect, useMemo } from 'react';`,
    `import { useRequest } from 'alita';`,
    `import { cloneDeep, isPlainObject, set } from 'lodash';`,
    `import useSetState from '@/hooks/useSetState'`,
    `import ArrayUtil from '@/utils/array';`,
    `import { DataSourceType } from './dataSourceType'`,
  ].join(';\n');
};

// 获取数据的起止节点
const getDataSourceBegin = (
  params: Record<string, { isRequired: boolean; type: string }> = {},
) => {
  return `
  // 数组操作类型 operateType
  export const ARRAY_OPERATE_TYPE = {
    ADD: 0, // 新增元素
    UPDATE: 1, // 更新元素
    DELETE: 2, // 删除元素
    REPLACE: 3, // 替换数据
  } as const;

  export interface UpdateDataSourceOptions { 
    /**
     * 数据源名称
     */
    name: string;
  
    /**
     * 更新数据源的路径
     */
    path: string;
  
    /**
     * 目标值
     */
    value?: any;
  
    /**
     * 需要过滤的变量
     */
    predicate?: (item: any, index: number) => boolean;
  
    /**
     * 操作类型 数组时需要
     */
    operateType?: 0 | 1 | 2 | 3;
  
    /**
     * 数组或者对象类型
     */
    type: 'object' | 'array'
  }

    export interface DataSourceOptions {
      ${Object.keys(params)
        .map((propertyKey) => {
          const { isRequired, type } = params[propertyKey];
          return `${propertyKey}${isRequired ? '' : '?'} : ${
            type || 'unknown'
          }`;
        })
        .join(';')}
    }

    const useDataSource = (options: DataSourceOptions) => {
      const { ${Object.keys(params).join(',')}} = options;
  `;
};

// 生成数据源内容
const getDataSourceContent = (dataSource: any[]) => { 
  const defineDataCode = `
  const [loading, setLoading] = useState(false);
  const [data, setData] = useSetState<DataSourceType>();
  `;

  return [
    `${defineDataCode}`,
    initialDataSource(dataSource),
    updateData(dataSource),
    resetDataSource(),
    reloadDataSource(dataSource),
  ].join('\n\n')
}

/**
 * 数据源结束
 */
const getDataSourceEnd = () => { 
  return [
    `
      return {
        data,
        updateData,
        resetDataSource,
        reloadDataSource,
        loading,
      };
    `,
    '}',
    'export default useDataSource'
  ].join('\n')
}


/**
 * 生成
 * @param dataSource
 */
export const generate = (dataSource: any[]) => {
  // 生成头文件
  const deps = importDeps();

  // 生成函数定义入口
  const beginCode = getDataSourceBegin({
    urlParam: {
      isRequired: false,
      type: 'Record<string, unknown>',
    },
    routerData: {
      isRequired: false,
      type: 'Record<string, unknown>',
    },
    state: {
      isRequired: false,
      type: 'Record<string, unknown>',
    },
    lcdpApi: {
      isRequired: false,
      type: 'any',
    },
  });

  const dataCode = getDataSourceContent(dataSource);

  // 生成结束
  const endCode = getDataSourceEnd();

  return {
    type: generatorDataType(dataSource),
    code: [deps, beginCode, dataCode, endCode].join('\n'),
  };
};
