export const cleanDataSource = `
  // 清空数据源
  const cleanDataSource = (name: string) => { 
    const newData = initialData[name];
    if (Array.isArray(newData)) {
      return [];
    }

    if (isPlainObject(newData)) {
      return {};
    }
    return undefined;
  }
`;
