import TreeParser from '../../../../../../core/utils/TreeParser';
import { cleanDataSource } from './template';
import { getDSFilterName } from './type';

const DATADOURCE_TYPE_CN = {
  custom: '自定义数据源',
  object: '对象数据源',
  service: '服务数据源',
};

/**
 * 获取用户信息
 * @returns
 */
const useInfo = () => {
  return `
  /**
   * 设置用户信息
   */
  useEffect(() => {
      setData({
        _others_: {
          personInfo: lcdpApi.data?.user || {}
        }
      })
    }, [lcdpApi.data?.user])`;
};

const generateParams = (
  dataItem: any,
  t: keyof typeof DATADOURCE_TYPE_CN = 'custom',
) => {
  const { name, rootOutParams, rootFilterParams, outParams, filterParams } =
    dataItem;

  const generateStr = (children: any[], value?: any, type?: string) => {
    const parser = new TreeParser();
    return parser.stringify({
      ...dataItem,
      initialData: {
        value,
      },
      children: children,
      code: name,
      type: type || dataItem.type,
    });
  };

  return `
      \n
      /**
     * ${DATADOURCE_TYPE_CN[t]}: ${name}
     */
    ${getDSFilterName(name)}: ${generateStr(
    filterParams,
    rootFilterParams,
    'object',
  )},
    ${name}: ${generateStr(outParams, rootOutParams?.value)}
    \n
  `;
};

const gData = {
  // 生成自定义初始化内容
  custom: (dataItem: any, t: keyof typeof DATADOURCE_TYPE_CN = 'custom') => {
    return generateParams(
      {
        ...dataItem,
        rootFilterParams: '${}$',
      },
      'custom',
    );
  },

  // 生成对象
  object: (dataItem: any) => {
    return {
      requestCode: '',
      initialValue: generateParams(dataItem, 'object'),
    };
  },

  // 服务
  service: (dataItem: any) => {
    const { name, outParams = [], rootOutParams, filterParams } = dataItem;

    return {
      requestCode: '',
      initialValue: generateParams(dataItem, 'service'),
    };
  },
};

/**
 * 初始化数据源
 */
export const initialDataSource = (dataSource: any[]) => {
  const code: string[] = [];

  const initialData = [
    `
    /**
     * 初始化数据
     */
    const initialData: Partial<DataSourceType> = {`,
  ];

  const dataSourceValues: string[] = [];

  dataSource.map((dataItem) => {
    const { source } = dataItem;
    switch (source) {
      case 'custom':
        initialData.push(`${gData.custom(dataItem)},`);
        break;
      case 'object':
        // 解析对象
        const { initialValue, requestCode } = gData.object(dataItem);
        if (initialValue) {
          initialData.push(`${initialValue},`);
        }

        if (requestCode) {
          dataSourceValues.push(requestCode);
        }

        break;

      case 'service':
        {
          // 解析服务
          const { initialValue, requestCode } = gData.service(dataItem);

          if (initialValue) {
            initialData.push(`${initialValue},`);
          }

          if (requestCode) {
            dataSourceValues.push(requestCode);
          }
        }
        break;
    }
  });

  // 关闭对象
  initialData.push('};');

  code.push(
    ...[
      `const newData: Partial<DataSourceType> = cloneDeep(initialData);`,
      `type DataSourceKey = keyof DataSourceType;`,
      'setLoading(true);\n\n',
      `const dataSourceValues: Promise<{ name: DataSourceKey, value: any }>[] = [`,
      dataSourceValues.join(','),
      ']',
      `
    Promise.all(dataSourceValues).then((items) => {
      items.forEach(({ name, value }) => {
        newData[name] = value;
      });
    }).catch(err => {
      console.log('数据源初始化失败')
      console.log(err)
    }).finally(() => {
      setData(newData as DataSourceType);
      setLoading(false)
    });
    `,
    ],
  );

  return [
    useInfo(),
    initialData.join('\n'),
    `
    /**
     * 初始化数据源
     */
    const initialDataSource = () => {`,
    code.join(''),
    '}',
    'useEffect(() => {initialDataSource()}, [])',
  ].join('\n\n');
};

/**
 * 更新数据源
 */
export const updateData = (dataSource: any[]) => {
  return [
    `
    /**
     * 更新数据源
     */
    const updateData = async ({
      name,
      path,
      value,
      type,
      operateType,
      predicate = () => false,
      onlySetPatch = true,
    }: UpdateDataSourceOptions) => { 
      const newData = {};
      try {
        // 对象类型 直接赋值
        if (type === 'object') {
          ArrayUtil.updateObject({
            data,
            path,
            value,
            isPatch: onlySetPatch,
          });
        } else if (type === 'array') {
          if (operateType === ARRAY_OPERATE_TYPE.ADD) {
            ArrayUtil.push(data, path, value)
          } else if (operateType === ARRAY_OPERATE_TYPE.DELETE) {
            ArrayUtil.remove(data, path, predicate);
          } else if (operateType === ARRAY_OPERATE_TYPE.REPLACE) {
            ArrayUtil.replace(data, path, value);
          } else if (operateType === ARRAY_OPERATE_TYPE.UPDATE) {
            ArrayUtil.update({
              data,
              path,
              value,
              isPatch: onlySetPatch,
            }, predicate);
          }
        }
    
        return setData({
          [name]: cloneDeep(data[name])
        });
      } catch (error) {
        return Promise.reject(error as Error);
      }
    };
    `,
  ].join('');
};

/**
 * 刷新数据源
 */
export const reloadDataSource = (dataSource: any[]) => {
  const code = `
    setLoading(true);
  `;

  return [
    `
      /**
       * 刷新数据源
       */
    `,
    `const reloadDataSource = (name: string) => {`,
    code,
    '}',
  ].join('');
};

/**
 * 重置数据源
 */
export const resetDataSource = () => {
  const code = `
  /**
   * 数据源名字不存在，无需重置数据源
   */
  if (!name) return;
  setData({
    [name]: cleanDataSource(name),
  })
`;
  return [
    cleanDataSource,
    `
      /**
       * 重置数据源
       */
    `,
    `const resetDataSource = (name: string) => {`,
    code,
    '}',
  ].join('');
};
