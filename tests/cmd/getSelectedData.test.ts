import { getSelectedData } from '../../src/cmd/getSelectedData';
import { expectValue } from '../utils';

describe('getSelectedData', () => {
  it('should generate the correct code for getting selected data', () => {
    const generateParams = {
      value: {
        options: {
          compId: 'table1',
          id: '123',
        },
      },
    };

    const expectedCode = `
  // 获取选中数据
  new Promise<void>((resolve, reject) => {
    if (refs["table1"].getSelectedData) {
      const values = refs["table1"].getSelectedData();
      if (values && values.length) {
        resolve(values)
      }else{
        reject(values)
      }
    }
  })
  `;

    const result = getSelectedData(generateParams);

    expectValue(result, expectedCode);
  });
});
