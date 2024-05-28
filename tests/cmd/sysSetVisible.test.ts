import { sysSetVisible } from '../../src/cmd/sysSetVisible';
import { expectValue } from '../utils';

describe('sysSetVisible', () => {
  it('should generate the correct code for setting control visibility with a single compId', () => {
    const generateParams = {
      value: {
        options: {
          compId: 'table1',
          compValueList: {
            table1: true,
          },
        },
      },
    };

    const expectedCode = `// 设置控件显隐 \n setVisible('table1', true)`;

    const result = sysSetVisible(generateParams);

    expectValue(result, expectedCode);
  });

  it('should generate the correct code for setting control visibility with multiple compIds', () => {
    const generateParams = {
      value: {
        options: {
          compId: ['table1', 'table2'],
          compValueList: {
            table1: true,
            table2: false,
          },
        },
      },
    };

    const expectedCode = `// 批量设置控件显隐 \n setVisible({table1: true,table2: false})`;

    const result = sysSetVisible(generateParams);

    expectValue(result, expectedCode);
  });

  it('should return an empty string when compId is not provided', () => {
    const generateParams = {
      value: {
        options: {},
      },
    };

    const expectedCode = '';

    const result = sysSetVisible(generateParams);

    expectValue(result, expectedCode);
  });
});
