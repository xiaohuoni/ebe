import { isString } from "lodash";
import { generateVarString } from "../../../../../../core/utils/compositeType";
import { isJSVar } from "../../../../../../core/utils/deprecated";
import { getDSFilterName } from "./type";

const DATADOURCE_TYPE_CN = {
  'custom': '自定义数据源',
  'object': '对象数据源',
  'service': '服务数据源'
};

/**
 * 遍历子元素
 */
const forEach = (params: any[], cb: (code: string, item: any) => void) => { 
  const loop = (list: any[]) => {
    list.forEach((item) => {
      const { name, children } = item;
      cb(name, item);
      if (Array.isArray(children)) {
        loop(children);
      }
    })
  }

  loop(params)
}


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
}

const generateParams = (dataItem: any, t: keyof typeof DATADOURCE_TYPE_CN = 'custom') => { 
  const { children = [] } = dataItem;

  const parseValue = (item: any) => { 
    let initialValue = ``;
    if (['array', 'objectArray', 'fieldArray'].includes(item.type)) {
      initialValue = `[]`;
    } else if (item?.initialData?.value) {
      initialValue += generateVarString(item?.initialData?.value);
    } else { 
      const loop = (list: any[]) => {
        let resultCode = '';
        list?.forEach((item) => {
          const { code, children, initialData, type } = item;

          let value: any = initialData?.value;
          
          if (isString(initialData?.value)) {
            if (isJSVar(initialData?.value)) {
              value = generateVarString(initialData.value);
            } else { 
              value = JSON.stringify(value)
            }
          }

          const generate = {
            string: () => value,
            number: () => value,
            boolean: () => value,
            date: () => value,
            datetime: () => value,
            double: () => value,
            long: () => value,
            array: () => value || '[]',
            objectArray: () => value || '[]',
            fieldArray: () => value || '[]',
            object: () => {
              if (value !== undefined) {
                return value;
              }

              const obj = loop(children);

              return [
                `{`,
                obj,
                '}'
              ].join('\n');
              
            }
          }
          value = generate[type as keyof typeof generate]?.();
          if (![undefined].includes(value)) {
            resultCode += `${code}: ${value},`;
          }

        });
        return resultCode;
      }
    
      initialValue += [
        '{',
        loop(children),
        '}'
     ].join('\n')
    }
    return initialValue;
  }

  return parseValue(dataItem);
}


const gData = {
  // 生成自定义初始化内容
  custom: (dataItem: any, t: keyof typeof DATADOURCE_TYPE_CN = 'custom') => { 
    const { name, outParams = [], rootOutParams } = dataItem;

    return `
      \n
      /**
       * ${DATADOURCE_TYPE_CN[t]}: ${name}
       */
      ${getDSFilterName(name)}: {},
      ${name}: ${generateParams({
        ...dataItem,
        initialData: rootOutParams,
        children: outParams,
      })}
      \n
    `;
  },

  // 生成对象
  object: (dataItem: any) => {
    const { name, outParams = [], rootOutParams, filterParams } = dataItem;

    const initialValue = `
    \n
      /**
       * ${DATADOURCE_TYPE_CN.service}: ${name}
       */
      ${getDSFilterName(name)}: ${generateParams({
      ...dataItem,
      children: filterParams,
      type: 'object'
    })},
      ${name}: ${generateParams({
      ...dataItem,
      initialData: rootOutParams,
      children: outParams,
    })}
      \n
    `;

    return {
      requestCode: '',
      initialValue,
    }
  },

  // 服务
  service: (dataItem: any) => { 
    const { name, outParams = [], rootOutParams, filterParams } = dataItem;

    const initialValue = `
    \n
      /**
       * ${DATADOURCE_TYPE_CN.service}: ${name}
       */
      ${getDSFilterName(name)}: ${generateParams({
      ...dataItem,
      children: filterParams,
      type: 'object'
    })},
      ${name}: ${generateParams({
      ...dataItem,
      initialData: rootOutParams,
      children: outParams,
    })}
      \n
    `;

    return {
      requestCode: '',
      initialValue
    }

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
    const initialData: Partial<DataSourceType> = {`
  ];

  const dataSourceValues: string[] = [];
 
  dataSource.map(dataItem => {
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
  })

  // 关闭对象
  initialData.push('};')

  code.push(...[
  `type DataSourceKey = keyof DataSourceType;`,
  `const dataSourceValues: Promise<{ name: DataSourceKey, value: any }>[] = [`,
    dataSourceValues.join(','),
    ']',
    `
    Promise.all(dataSourceValues).then((items) => {
      items.forEach(({ name, value }) => {
        initialData[name] = value;
      });
    }).catch(err => {
      console.log('数据源初始化失败')
      console.log(err)
    }).finally(() => { 
      setData(initialData as DataSourceType);
    });
    `
  ]);

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
    'useEffect(() => {initialDataSource()}, [])'
  ].join('\n\n');
}


/**
 * 更新数据源
 */
export const updateData = (dataSource: any[]) => { 
  return [
    `
      /**
       * 更新数据源
       */
      const updateData = setData;
    `
  ].join('');
}

/**
 * 刷新数据源
 */
export const reloadDataSource = (dataSource: any[]) => { 
  const code = '';
  return [
    `
      /**
       * 刷新数据源
       */
    `,
    `const reloadDataSource = () => {`,
    code,
    '}'
  ].join('');
}

/**
 * 重置数据源
 */
export const resetDataSource = (dataSource: any[]) => { 
  const code = 'setData(initialData as Required<DataSourceType>);';
  return [
    `
      /**
       * 重置数据源
       */
    `,
    `const resetDataSource = () => {`,
    code,
    '}'
  ].join('');
}