function cleanTree(tree: any, fields: string[]): any {
  let fieldSet = new Set(fields); // 使用set结构可以提高查询速度

  if (Array.isArray(tree)) {
    return tree.map((item: any) => cleanTree(item, fields));
  } else if (typeof tree === 'object' && tree !== null) {
    return Object.entries(tree).reduce((newTree: any, [key, value]) => {
      if (!fieldSet.has(key)) {
        newTree[key] = cleanTree(value, fields);
      }
      return newTree;
    }, {});
  } else {
    return tree;
  }
}

export const cleanDataSource = (dataSource: any[]) => {
  return dataSource.map((item) => {
    switch (item?.source) {
      // {
      //     "id": 166780606235440800,
      //     "name": "$_hxLabelDataList",
      //     "description": "画像标签数据集合",
      //     "source": "custom",
      //     "type": "objectArray",
      //     "filterParams": [],
      //     "outParams": [],
      //     "config": { "hooks": [] }
      //   },
      // item: {name: string, outParams?: never[] | undefined; type?: 'object' | 'objectArray'; rootOutParams: any; }
      case 'custom': {
        return cleanTree(item, ['id', 'description', 'filterParams', 'config']);
      }
      case 'object': {
        return cleanTree(item, ['id', 'description']);
      }
      case 'service': {
        return cleanTree(item, ['id', 'description']);
      }
      case 'funcComp': {
        return cleanTree(item, [
          'id',
          'description',
          'filterParams',
          'config',
          'objectArray',
        ]);
      }
      default:
        break;
    }
  });
};
