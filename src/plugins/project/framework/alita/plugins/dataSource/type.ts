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
      typeCode.filter(Boolean).join('\n'),
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

export const generatorType = (item: any) => {
  const { name, filterParams, outParams, type, description } = item;
  const filterName = getDSFilterName(name);
  return `
      ${
        description
          ? `/**
      * 过滤字段: ${description}
      */`
          : ''
      }
      ${getKey(filterName)}?: ${
    gType.object?.(filterParams, `orderByAsc?: string; orderByDesc?: string`) ??
    'unknown'
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
      `;
};

// 生成数据源的类型
export const generatorDataType = (dataSource: any[]) => {
  const code = dataSource.map((item) => generatorType(item));
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
