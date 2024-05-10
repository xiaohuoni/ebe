
export const getDSFilterName = (name: string) => `${name}Filter`;


const gType = {
  object: (filedList: any) => { 
    if (!Array.isArray(filedList)) {
      return 'any';
    }


    const typeCode: string[] = [];

    filedList.forEach(it => { 
      const { code, type, children, name } = it;
      typeCode.push(` ${name ? `/**
      * ${name}
      */` : ''}
      ${code}: ${gType[type as keyof typeof gType]?.(children) ?? 'unknown'}
      `)
    })


    return [
      '{',
      typeCode.join(';'),
      '}'
    ].join('')
  },

  fieldArray: (filedList: any) => { 
    return 'any[]';
  },

  objectArray: (filedList: any) => { 
    return [
      gType.object(filedList),
      '[]'
    ].join('')
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
  long:() => 'number',
};



// 生成数据源的类型
export const generatorDataType = (dataSource: any[]) => { 
  const code: string[] = [];

  dataSource.forEach(item => {
    const { name, filterParams, outParams, type, description } = item;

    code.push(
      `
      ${description ? `/**
      * 过滤字段: ${description}
      */` : ''}
      ${getDSFilterName(name)}: ${gType[type as keyof typeof gType]?.(filterParams) ?? 'unknown'}
      ${description ? `/**
      * ${description}
      */` : ''}
      ${name}: ${gType[type as keyof typeof gType]?.(outParams) ?? 'unknown'}
      `
    );
  });

  return [
    `export interface DataSourceType {`,
    code.join(';'),
    '}'
  ].join('');
}
