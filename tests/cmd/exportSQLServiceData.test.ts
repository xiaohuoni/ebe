import { exportSQLServiceData } from '../../src/cmd/exportSQLServiceData';
import { expectValue } from '../utils';

describe('exportSQLServiceData', () => {
  it('should generate the correct code for exporting SQL service data', () => {
    const generateParams = {
      value: {
        callback1: ['callback1'],
        callback2: ['callback2'],
        options: {
          busiObjectFilterParams: 'object',
          paramsObj: { param1: 'value1', param2: 'value2' },
          custFileName: 'file.csv',
          sqlServiceCode: 'serviceCode',
          sqlServiceFields: ['field1', 'field2'],
          tempParams: { tempParam: 'value' },
          exportType: 'csv',
          async: true,
        },
      },
      platform: 'web',
      config: {},
    };

    const expectedCode = `
    // 导出SQL查询服务
      ExpSQLServiceModalRef.current.openWithCustFields({
        sqlServiceCode: "serviceCode",
        sqlServiceFields: ["field1", "field2"],
        tempParams: {"tempParam":"value"},
        exportType: "csv",
        async: true,
        attrs:{"param1":"value1","param2":"value2"},
        custFileName: 'file.csv',
        onSuccess:() => {
           console.log('这里找不到参数/？');
           },
        onFail: () => {
          console.log('这里找不到参数/？');
          }
      });
    `;

    const result = exportSQLServiceData(generateParams);

    expectValue(result, expectedCode);
  });
});
