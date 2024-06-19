import { generatorDataType } from './type';
import { initialDataSource, resetDataSource } from './utils';

/**
 * 生成导入的头文件列表
 */
const importDeps = () => {
  return [
    `import { useEffect } from 'react';`,
    `import { cloneDeep } from 'lodash';`,
    `import { fetchQueryObject, fetchQueryService } from '@/utils/dataSource';`,
    `import { DataSourceType } from './dataSourceType'`,
    `import useBaseDataSource from '@/hooks/useBaseDataSource';`,
  ].join(';\n');
};

// 获取数据的起止节点
const getDataSourceBegin = (
  params: Record<string, { isRequired: boolean; type: string }> = {},
) => {
  return `
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

      const { 
        data,
        updateData,
        clearDataSource,
        reloadCustomDataSource,
        loading,
        dataSnapshot,
        reloadServiceDataSource,
        reloadObjectDataSource,
        dataReadyComplete,
        setLoading,
        setDataSnapshot,
        setDataReadyComplete,
        setData,
      } = useBaseDataSource<DataSourceType>(options)
  `;
};

// 生成数据源内容
const getDataSourceContent = (dataSource: any[]) => {
  return [
    initialDataSource(dataSource),
    // updateData(dataSource),
    resetDataSource(),
    // reloadDataSource(dataSource),
  ].join('\n\n');
};

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
        reloadCustomDataSource,
        loading,
        dataSnapshot,
        reloadServiceDataSource,
        reloadObjectDataSource,
        dataReadyComplete,
      };
    `,
    '}',
    'export default useDataSource',
  ].join('\n');
};

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
      type: 'Record<string, any>',
    },
    routerData: {
      isRequired: false,
      type: 'Record<string, any>',
    },
    state: {
      isRequired: false,
      type: 'Record<string, any>',
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
