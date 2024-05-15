import { isArray, isPlainObject } from 'lodash';
import { parse2Var } from '../../../../../../core/utils/compositeType';
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

/**
 * 过滤对象中的字段空字段
 */
export const filterObjectEmptyField = (object: any) => {
  if (!isPlainObject(object)) return object;

  const any = (o: any) => o;
  const array = (o: any[]) =>
    o.map((it) => {
      if (isPlainObject(it)) return loopPlainObject(it);
      return any(it);
    });

  const loopPlainObject = (o: any) => {
    if (!isPlainObject(o)) return o;
    const t: Record<string, any> = {};
    Object.keys(o).forEach((key) => {
      if (o[key] !== undefined) {
        if (isArray(o[key])) {
          t[key] = array(o[key]);
        } else if (isPlainObject(o[key])) {
          t[key] = loopPlainObject(o[key]);
        } else {
          t[key] = any(o[key]);
        }
      }
    });
    return t;
  };

  return loopPlainObject(object);
};

const generateParams = (
  dataItem: any,
  t: keyof typeof DATADOURCE_TYPE_CN = 'custom',
) => {
  const { name, rootOutParams, rootFilterParams, outParams, filterParams } =
    dataItem;

  const generateStr = (
    children: any[],
    value?: any,
    type?: string,
    filter: boolean = false,
  ) => {
    const parser = new TreeParser();

    // 过滤要增加排序入参
    if (filter) {
      const orderByAsc: any[] = [];
      const orderByDesc: any[] = [];
      children.forEach((param) => {
        if (param?.sort?.value) {
          if (param.sort.value === 'ascend') {
            orderByAsc.push(param.code);
          } else if (param.sort.value === 'descend') {
            orderByDesc.push(param.code);
          }
        }
      });
      parser.appendProperty('orderByAsc', parse2Var(orderByAsc.join(',')), '');
      parser.appendProperty(
        'orderByDesc',
        parse2Var(orderByDesc.join(',')),
        '',
      );
    }

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
    true,
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
    const {
      config: { options, isInit },
      name,
      id,
    } = dataItem;

    let requestCode = ``;
    if (isInit) {
      requestCode = `
      /**
       * 加载${name}数据源
       */
      fetchQueryObject(
        ${parse2Var(options.url)},
        ${parse2Var({
          method: options.method,
          sceneCode: `$urlParam?.sceneCode ?? ''$`,
          busiObjectInstId: options.service?.appServiceId,
          actionId: id,
          busiObjectId: options.object?.busiObjectId,
          attrs: `$initialData.${getDSFilterName(name)}$`,
        })}
      ).then(res => {
        newData.${name} = res;
        ${
          options.service?.responseType === 'array'
            ? `
          let snapShot = cloneDeep(res);
            if (res === null) {
              snapShot = [];
            }
        `
            : 'const snapShot = cloneDeep(res);'
        }
        setDataSnapshot({
          ${name}: snapShot,
          ${getDSFilterName(name)}: cloneDeep(initialData.${getDSFilterName(
        name,
      )}),
        })
        return res;
      }).catch(console.log)`;
    }

    return {
      requestCode,
      initialValue: generateParams(dataItem, 'object'),
    };
  },

  // 服务
  service: (dataItem: any) => {
    const {
      config: { options, isInit },
      name,
      id,
    } = dataItem;

    let requestCode = ``;
    if (isInit) {
      requestCode = `
      /**
       * 加载${name}数据源
       */
      fetchQueryService(
        ${parse2Var(
          filterObjectEmptyField({
            _capabilityCode: options.service?._capabilityCode,
            _apiCode: options.service?._apiCode,
            api: options.service?.api,
            _source: options.service?._source,
            _serviceId: options.service?._serviceId,
            versionCode: options.service?.versionCode,
            serviceCode: options.service?.serviceCode,
            serviceMethod: options.service?.serviceMethod,
          }),
        )},
        initialData.${getDSFilterName(name)}
      ).then(res => {
        newData.${name} = res;
        setDataSnapshot({
          ${name}: cloneDeep(res),
          ${getDSFilterName(name)}: cloneDeep(initialData.${getDSFilterName(
        name,
      )}),
        });
        return res;
      }).catch(console.log)`;
    }

    return {
      requestCode,
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
    const { source, name, id } = dataItem;
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
    \n
    Promise.all(dataSourceValues).catch(err => {
      console.log('数据源初始化失败')
      console.log(err)
    }).finally(() => {
      setData(newData as DataSourceType);
      setLoading(false);
      setDataReadyComplete(true);
    });
    `,
    ],
  );

  return [
    useInfo(),
    initialData.join('\n\n'),
    `
    `,
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
          [name]: cloneDeep(data![name])
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
  return [
    `
    /**
     * 刷新自定义数据源
     */
    const reloadCustomDataSource = (name: string, params?: any) => setData({
      [name]: params
    });

    /**
     * 刷新对象数据源
     */
    const reloadObjectDataSource = (name: string, url: string, options: any, params: any) => {
      setLoading(true);
      return fetchQueryObject(url, { ...options, attrs: params }).then((res) => {
        setData({
          [name]: res
        })
        const snapShot = cloneDeep(res);
        setDataSnapshot({
          [name]: snapShot,
          [\`\${name}Filter\`]: params,
        });
        return res;
      })
      .catch(console.log).finally(() => { setLoading(false) });
    }

    /**
     * 刷新服务数据源
     */
    const reloadServiceDataSource = (name: string, service: any, params: any) => {
      setLoading(true);
      return fetchQueryService(service, params).then((res) => {
        setData({
          [name]: res
        })
        const snapShot = cloneDeep(res);
        setDataSnapshot({
          [name]: snapShot,
          [\`\${name}Filter\`]: params,
        });
        return res;
      })
      .catch(console.log).finally(() => { setLoading(false) });
    }

    `,
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
