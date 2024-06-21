import { removeTransferKeys } from '../../../src/cmd/pcCmd/removeTransferKeys';
import { expectValue } from '../../utils';

describe('removeTransferKeys', () => {
  it('should generate the correct code for remove transfer keys', () => {
    const generateParams = {
      value: {
        options: {
          compId: 'Transfer_160313',
          compLib: 'comm',
          pageJsonId: '671236',
          compName: 'Transfer',
          id: '8117026',
          transferValue: '1,2',
        },
      },
    };

    const expectedCode = ` 
    // 穿梭框·删除右侧列表值
    const valueMap = "1,2"
    const currentVal = [...(refs['Transfer_160313']?.value || [])];
    if (typeof valueMap === 'string') {
     const vals = (valueMap || '').replace(/ /g, '').split(',');
     if (vals.length > 0 && Array.isArray(currentVal)) {
       vals.forEach(key => {
         const idx = currentVal.findIndex(el => el === key);
         if (idx !== -1) {
           currentVal.splice(idx, 1);
         }
       });
     }
     asyncCallComponentMethod(
      'Transfer_160313',
      'setValue',
      [...currentVal]
     )
    } else {
      console.error("穿梭框·删除右侧列表值数据类型错误")
    }
  `;

    const result = removeTransferKeys(generateParams);

    expectValue(result, expectedCode);
  });
});
