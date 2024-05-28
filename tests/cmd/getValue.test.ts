import { getValue } from '../../src/cmd/getValue';
import { expectValue } from '../utils';

describe('getValue', () => {
  it('should generate the correct code for getting a component value', () => {
    const generateParams = {
      value: {
        options: {
          compId: 'table1',
        },
      },
      platform: 'web',
      config: {},
    };

    const expectedCode = `// 获取组件的值 
    getValue('table1');
  `;

    const result = getValue(generateParams);

    expectValue(result, expectedCode);
  });

  it('should return an empty string if options.compId is not provided', () => {
    const generateParams = {
      value: {
        options: {},
      },
      platform: 'web',
      config: {},
    };

    const expectedCode = '';

    const result = getValue(generateParams);

    expectValue(result, expectedCode);
  });
});
