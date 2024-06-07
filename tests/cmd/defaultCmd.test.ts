import { getDefault } from '../../src/cmd/defaultCmd';
import { CMDGeneratorPrames } from '../../src/core/types';

describe('getDefault', () => {
  it('should return the correct code when options.value is an array', () => {
    const generateParams: CMDGeneratorPrames = {
      value: {
        options: {
          value: ['myValue1', 'myValue2'],
        },
        type: 'myType',
        dataId: 'myDataId',
      },
      params: [],
      platform: 'myPlatform',
      config: {},
    };

    const expectedCode = `// myType myDataId 未支持转源码 \n console.error('myType myDataId');\n`;

    expect(getDefault(generateParams)).toBe(expectedCode);
  });
});
