import { generatorDataType } from './type';

/**
 * 生成导入的头文件列表
 */
const importDeps = () => {
  return [
    `import { useState, useRef, useEffect, useMemo } from 'react'`,
    `import { useRequest } from 'alita'`,
    `import { DataSourceType } from './dataSourceType'`,
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
  `;
};

// 生成数据源内容
const getDataSourceContent = (dataSource: any[]) => {
  const defineDataCode = `const [data, setData] = useState<DataSourceType>()`;

  return [`${defineDataCode}`];
};

/**
 * 数据源结束
 */
const getDataSourceEnd = () => {
  return ['}', 'export default useDataSource'].join('\n');
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
