import { getLoopListValues } from '../../src/cmd/getLoopListValues';
import { expectValue } from '../utils';

describe('getLoopListValues', () => {
  it('should generate the correct code for getting loop list values', () => {
    const generateParams = {
      value: {
        options: {
          compId: 'table1',
          id: '1',
        },
      },
    };

    const expectedCode = `
  // 循环列表获取选中值
  new Promise<void>((resolve, reject) => {
    if (refs["table1"].getValues) {
      const values = refs["table1"].getValues();
      if (values && values.length) {
        resolve(values)
      }else{
        reject(values)
      }
    }
  })
  `;

    const result = getLoopListValues(generateParams);

    expectValue(result, expectedCode);
  });
});
