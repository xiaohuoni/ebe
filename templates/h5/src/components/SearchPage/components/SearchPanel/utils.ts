const filterOptionFunc = (targetStr: string, keyStr: string) => {
  return String(targetStr ?? '')
    .toLowerCase()
    ?.includes(keyStr?.toLowerCase());
};

/**
 * 目录当中是否含有关键字
 */
export const findNodesWithKeyword = (treeData: any[], keyword: string) => {
  const dig = (list: any, isInclude: boolean = false) => {
    return list
      .map(
        (node: {
          children?: never[] | undefined;
          catalogItemName?: '' | undefined;
        }) => {
          const { children = [], catalogItemName = '' } = node;
          const match = isInclude || filterOptionFunc(catalogItemName, keyword);
          const childList = dig(children || [], match);
          if (match || childList.length) {
            return {
              ...node,
              open: !!childList.length,
              children: childList,
            };
          }
          return null;
        },
      )
      .filter((node: any) => node);
  };
  return dig(treeData);
};
