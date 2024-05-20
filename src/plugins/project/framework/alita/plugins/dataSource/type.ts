export const getDSFilterName = (name: string) => `${name}Filter`;

const getKey = (code: string = '') => {
  const iCode = code.trim();
  if (!/^[\$_a-zA-Z][\d_\$a-zA-Z]{0,}/.test(iCode) && !/^\d+$/.test(iCode)) {
    return `['${code}']`;
  }
  return iCode;
};

const gType = {
  object: (filedList: any, extendCode?: string) => {
    if (!Array.isArray(filedList)) {
      return 'any';
    }

    const typeCode: string[] = [];
    // 存储key， 用来检测属性名的唯一性
    const propertyKey: string[] = [];
    filedList.forEach((it) => {
      const { code, type, children, name } = it;

      // 如果key重复了，就不再生成
      if (propertyKey.includes(code)) return;
      propertyKey.push(code);

      typeCode.push(` ${
        name
          ? `/**
      * ${name}
      */`
          : ''
      }
      ${getKey(code)}?: ${
        gType[type as keyof typeof gType]?.(children) ?? 'unknown'
      }
      `);
    });

    return [
      '{',
      typeCode.join(';'),
      extendCode
        ? `
      ${extendCode}
      `
        : '',

      '}',
    ]
      .filter(Boolean)
      .join('');
  },

  fieldArray: (filedList: any) => {
    return 'any[]';
  },

  objectArray: (filedList: any) => {
    return [gType.object(filedList), '[]'].join('');
  },

  array: (filedList: any) => {
    return gType.objectArray(filedList);
  },
  string: () => 'string',
  number: () => 'number',
  boolean: () => 'boolean',
  date: () => 'Date',
  datetime: () => 'Date',
  double: () => 'number',
  long: () => 'number',
};

// 生成数据源的类型
export const generatorDataType = (dataSource: any[]) => {
  const code: string[] = [];

  // 存储key， 用来检测属性名的唯一性
  const propertyKey: string[] = [];
  dataSource.forEach((item) => {
    const { name, filterParams, outParams, type, description } = item;

    const filterName = getDSFilterName(name);
    if (propertyKey.includes(filterName)) return;
    if (propertyKey.includes(name)) return;

    propertyKey.push(...[filterName, name]);

    code.push(
      `
      ${
        description
          ? `/**
      * 过滤字段: ${description}
      */`
          : ''
      }
      ${getKey(getDSFilterName(name))}?: ${
        gType.object?.(
          filterParams,
          `orderByAsc?: string; orderByDesc?: string`,
        ) ?? 'unknown'
      }
      ${
        description
          ? `/**
      * ${description}
      */`
          : ''
      }
      ${getKey(name)}?: ${
        gType[type as keyof typeof gType]?.(outParams) ?? 'unknown'
      }
      `,
    );
  });


  return [
    `export interface DataSourceType {`,

    `_others_: {
      /**
       * 用户信息
       */
      personInfo: Record<string, any>
    }`,
    code.join(';'),
    '\n[key: string]: any',
    '}',
  ].join('');
};
