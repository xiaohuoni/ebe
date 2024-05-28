import { setLoading } from '../../src/cmd/setLoading';
import { expectValue } from '../utils';

describe('setLoading', () => {
  it('should generate the correct code for setting loading', () => {
    const generateParams = {
      value: {
        options: {
          loading: 'isLoading',
          compId: 'table1',
        },
      },
    };

    const expectedCode = `// 加载loading
  refs[table1]?.setLoading?.(!!isLoading);`;

    const result = setLoading(generateParams);

    expectValue(result, expectedCode);
  });
});
