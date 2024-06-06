import getFile from '../../../../../../../src/plugins/project/framework/alita/template/files/constants';

describe('constants', () => {
  test('should return the correct file content', () => {
    const config: any = {
      platform: 'h5',
      appId: '12345',
    };

    const expectedFileContent = `export const PLATFORM: 'pc' | 'h5' = 'h5';
export const APPID = '12345';

// 数组操作类型 operateType
export const ARRAY_OPERATE_TYPE = {
  ADD: 0,
  // 新增元素
  UPDATE: 1,
  // 更新元素
  DELETE: 2,
  // 删除元素
  REPLACE: 3, // 替换数据
} as const;
`;

    const [directories, file] = getFile(config);

    expect(directories).toEqual(['src']);
    expect(file.name).toEqual('constants');
    expect(file.ext).toEqual('ts');
    expect(file.content).toEqual(expectedFileContent);
  });

  test('should return the correct file content when platform is not "h5"', () => {
    const config: any = {
      platform: 'pc',
      appId: '54321',
    };

    const expectedFileContent = `export const PLATFORM: 'pc' | 'h5' = 'pc';
export const APPID = '54321';

// 数组操作类型 operateType
export const ARRAY_OPERATE_TYPE = {
  ADD: 0,
  // 新增元素
  UPDATE: 1,
  // 更新元素
  DELETE: 2,
  // 删除元素
  REPLACE: 3, // 替换数据
} as const;
`;

    const [directories, file] = getFile(config);

    expect(directories).toEqual(['src']);
    expect(file.name).toEqual('constants');
    expect(file.ext).toEqual('ts');
    expect(file.content).toEqual(expectedFileContent);
  });
});
