import { exportCustomData } from '../../../src/cmd/sysCmd/exportCustomData';
import { expectValue } from '../../utils';

describe('exportCustomData', () => {
  it('should generate the correct code', () => {
    const generateParams = {
      value: {
        options: {
          exportSheet: [
            {
              apiRequestSetParams: [{ isRoot: true, code: 'param1' }],
              custSheetName: 'Sheet1',
              serviceData: { _source: 'query' },
            },
            {
              apiRequestSetParams: [{ isRoot: false, code: 'param2' }],
              custSheetName: 'Sheet2',
              serviceData: { _source: 'std' },
            },
          ],
          custFileName: 'customData',
          id: '123',
          async: true,
        },
      },
    };

    const expected = `
    // 导出自定义数据

      const parameters_123_ = {};

      exportCustomDataFile(
         [
           {
             "serviceData": { "_source": "query" },
             "custSheetName": "Sheet1",
             "parameters": parameters_123_?.param1,
             "objType": "customQuery",
             "source": "query"
           },
           {
             "serviceData": { "_source": "std" },
             "custSheetName": "Sheet2",
             "parameters":{},
             "objType": "orchestrationService",
             "source": "std"
           }
         ],
         { "async": true, "custFileName": "customData" },
        ).catch(()=>{});
      `;

    const result = exportCustomData(generateParams);
    expectValue(result, expected);
  });
});
