import { validateMsg } from '../../../src/cmd/pcCmd/validateMsg';
import { expectValue } from '../../utils';

describe('validateMsg', () => {
  it('should generate the correct code for validate form to show message', () => {
    const generateParams = {
      value: {
        options: {
          compId: 'DatePicker_658581',
          compLib: 'comm',
          pageJsonId: '645776',
          compName: 'DatePicker',
          id: '7828416',
          validateStatus: 'success',
          help: '校验成功了',
        },
      },
    };

    const expectedCode = `
    // 日期选择·校验成功
    callComponentMethod(
      'DatePicker_658581', 
      'changeValidateStatus',
      'success',
      "校验成功了"
    )
  `;

    const result = validateMsg(generateParams);

    expectValue(result, expectedCode);
  });
});
