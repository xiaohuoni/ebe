import { getResetDataSource } from '../../../src/cmd/sysCmd/resetDataSource';
import { expectValue } from '../../utils';

describe('getResetDataSource', () => {
  it('should return the correct code for resetting data source', () => {
    const generateParams = {
      value: {
        options: {
          isGlobalData: false,
          dataSourceName: 'myDataSource',
        },
      },
    };

    const expectedCode = `resetDataSource('myDataSource')`;

    const result = getResetDataSource(generateParams);

    expectValue(result, expectedCode);
  });

  it('should return the correct code for global data source', () => {
    const generateParams = {
      value: {
        options: {
          isGlobalData: true,
          dataSourceName: 'myDataSource',
        },
      },
    };

    const expectedCode = `//【清空全局数据源】全局数据源指令暂不支持`;

    const result = getResetDataSource(generateParams);

    expectValue(result, expectedCode);
  });
});
