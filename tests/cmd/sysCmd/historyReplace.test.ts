import { historyReplace } from '../../../src/cmd/sysCmd/historyReplace';
import { expectValue } from '../../utils';

describe('historyReplace', () => {
  it('should generate the correct code for history replacement', () => {
    const generateParams = {
      value: {
        options: {
          pathname: '/example',
          paramsObj: { id: 123 },
          search: '?query=example',
          routerData: 'data',
        },
      },
      config: {
        ir: {
          deps: [],
        },
      },
    };

    const expectedCode = `
// 路由替换 
    historytool(HISTORYTYPES.replace, {history: history,pathname: "/example",search: {id: 123},state: "data"});
`;

    const result = historyReplace(generateParams as any);

    expectValue(result, expectedCode);
  });
});
