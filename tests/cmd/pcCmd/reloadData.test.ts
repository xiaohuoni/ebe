import { reloadData } from '../../../src/cmd/pcCmd/reloadData';
import { expectValue } from '../../utils';

describe('reloadData', () => {
  it('should generate the correct code for reloading data', () => {
    const generateParams = {
      value: {
        options: {
          data: {},
          compId: 'myCompId',
          compName: 'myCompName',
          nodeValueKey: 'myNodeValueKey',
          labelKey: 'myLabelKey',
          selectable: true,
          childrenKey: 'myChildrenKey',
        },
      },
    };

    const expectedCode = `
    // 加载数据
    asyncCallComponentMethod("myCompId", 'setDataSource', "{}")
    `;

    const result = reloadData(generateParams);

    expectValue(result, expectedCode);
  });
});
