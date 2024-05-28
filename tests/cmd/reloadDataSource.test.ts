import { reloadDataSource } from '../../src/cmd/reloadDataSource';
import { expectValue } from '../utils';

describe('reloadDataSource', () => {
  it('should return the correct code for reloading a data source', () => {
    const generateParams = {
      value: {
        options: {
          dataSourceName: 'myDataSource',
          dataSourceReloadFilter: [
            {
              filter1: 'value1',
              filter2: 'value2',
            },
          ],
        },
      },
      config: {
        ir: {
          dataSource: [
            {
              name: 'myDataSource',
              source: 'service',
              id: '123',
              config: {
                options: {
                  service: {
                    serviceCode: 'myService',
                    serviceMethod: 'reload',
                  },
                },
              },
            },
          ],
        },
      },
    };

    const expectedCode = `reloadServiceDataSource(
        "myDataSource",
        {serviceCode: "myService",serviceMethod: "reload"},
      {orderByAsc: data?.myDataSourceFilter?.orderByAsc,orderByDesc: data?.myDataSourceFilter?.orderByDesc}
    )
    `;

    const result = reloadDataSource(generateParams as any);

    expectValue(result, expectedCode);
  });

  it('should return the correct code for reloading a global data source', () => {
    const generateParams = {
      value: {
        options: {
          isGlobalData: true,
        },
      },
    };

    const expectedCode = `//【刷新全局数据源】全局数据源指令暂不支持`;

    const result = reloadDataSource(generateParams);

    expectValue(result, expectedCode);
  });

  it('should return the correct code when the data source name is missing', () => {
    const generateParams = {
      value: {
        options: {},
      },
    };

    const expectedCode = `//【刷新数据源】数据源名称不存在，请检查配置`;

    const result = reloadDataSource(generateParams);

    expectValue(result, expectedCode);
  });

  it('should return the correct code when the data source does not exist', () => {
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
              source: 'service',
              id: '123',
              config: {
                options: {
                  service: {
                    serviceCode: 'myService',
                    serviceMethod: 'reload',
                  },
                },
              },
            },
          ],
        },
      },
    };

    const expectedCode = `//【刷新数据源 数据源nonExistentDataSource不存在，请检查配置\n`;

    const result = reloadDataSource(generateParams as any);

    expectValue(result, expectedCode);
  });
});
