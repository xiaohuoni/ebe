import { setTreeSelectedKey } from '../../src/cmd/setTreeSelectedKey';
import { expectValue } from '../utils';

describe('setTreeSelectedKey', () => {
  it('should return the correct code', () => {
    const generateParams = {
      value: {
        options: {
          compId: 'myCompId',
          value: 'myValue',
        },
      },
    };

    const expectedCode = `
    // 设置选中节点
    asyncCallComponentMethod('myCompId', 'setSelectedKeys', 'myValue')
  `;

    expectValue(setTreeSelectedKey(generateParams), expectedCode);
  });
});
