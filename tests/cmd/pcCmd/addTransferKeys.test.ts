import { addTransferKeys } from '../../../src/cmd/pcCmd/addTransferKeys';
import { expectValue } from '../../utils';

describe('addTransferKeys', () => {
  it('should generate the correct code for add transfer keys', () => {
    const generateParams = {
      value: {
        options: {
          compId: 'Transfer_160313',
          compLib: 'comm',
          pageJsonId: '671236',
          compName: 'Transfer',
          id: '284938',
          transferValue: '1,2,3',
        },
      },
    };

    const expectedCode = ` 
    // 穿梭框·加载右侧列表值
    const valueMap = "1,2,3"
    const currentVal = [...(refs['Transfer_160313']?.value || [])];
    if (typeof valueMap === 'string') {
     const vals = (valueMap || '').replace(/ /g, '').split(',');
     if (vals.length > 0 && Array.isArray(currentVal)) {
       vals.forEach(key => {
         if (!currentVal.includes(key)) {
           currentVal.push(key);
         }
       });
     }
     asyncCallComponentMethod(
      'Transfer_160313',
      'setValue',
      [...currentVal]
     )
    } else {
      console.error("穿梭框·加载右侧列表值数据类型错误")
    }
  `;

    const result = addTransferKeys(generateParams);

    expectValue(result, expectedCode);
  });
});
