import { clearOptions } from '../../src/cmd/clearOptions';
import { expectValue } from '../utils';

describe('clearOptions', () => {
  it('should generate the correct code for clearing options', () => {
    const generateParams = {
      value: {
        options: {
          compId: 'table1',
        },
      },
    };

    const expectedCode = `// 清空选项
  callComponentMethod("table1", 'clearOptions');
  `;

    const result = clearOptions(generateParams);

    expectValue(result, expectedCode);
  });
});
