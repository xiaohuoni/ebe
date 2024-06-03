import { getSetDataSource } from '../../src/cmd/setDataSource';
import { expectValue } from '../utils';

describe('getSetDataSource', () => {
  it('should generate the correct code for setting data source', () => {
    const generateParams = {
      value: {
        options: {
          isGlobalData: false,
          dataSourceName: 'myDataSource',
          onlySetPatch: true,
          targetDataSourcePaths: [
            {
              attrId: '123',
              operateType: 'update',
              itemLocateType: 'key',
              itemLocateKey: 'id',
              itemLocateKeyValue: '1',
              fieldType: 'objectArray',
              newData: { name: 'John', age: 30 },
            },
          ],
        },
      },
      platform: 'web',
      scope: 'app',
      config: {
        ir: {
          dataSource: [
            {
              name: 'myDataSource',
              id: '123',
              type: 'objectArray',
            },
          ],
        },
      },
    };

    const expectedCode = `
  // 更新数据源 myDataSource
  updateData({
    path: "myDataSource.myDataSource",value: {},operateType: update,type: "array",onlySetPatch: true,name: "myDataSource"
  })`;

    const result = getSetDataSource(generateParams as any);

    expectValue(result, expectedCode);
  });

  it('should return an error message when global data source is selected', () => {
    const generateParams = {
      value: {
        options: {
          isGlobalData: true,
          dataSourceName: 'dataName'
        },
      },
    };

    const expectedCode = `//【更新全局数据源】全局数据源${generateParams.value.options.dataSourceName}不存在，请检查配置`;

    const result = getSetDataSource(generateParams);

    expectValue(result, expectedCode);
  });

  it('should return an error message when data source name is missing', () => {
    const generateParams = {
      value: {
        options: {},
      },
    };

    const expectedCode = `//【更新数据源】数据源名称不存在，请检查配置`;

    const result = getSetDataSource(generateParams);

    expectValue(result, expectedCode);
  });

  it('should return an error message when data source does not exist', () => {
    const generateParams = {
      value: {
        options: {
          dataSourceName: 'nonExistentDataSource',
        },
      },
      config: {
        ir: {
          dataSource: [
            {
              name: 'existingDataSource',
              id: '123',
              type: 'objectArray',
            },
          ],
        },
      },
    };

    const expectedCode = `//【更新数据源】数据源nonExistentDataSource不存在，请检查配置`;

    const result = getSetDataSource(generateParams as any);

    expectValue(result, expectedCode);
  });

  // Add more test cases as needed
});
