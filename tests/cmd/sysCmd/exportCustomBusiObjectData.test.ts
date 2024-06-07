import { exportCustomBusiObjectData } from '../../../src/cmd/sysCmd/exportCustomBusiObjectData';
import { expectValue } from '../../utils';

describe('exportCustomBusiObjectData', () => {
  it('should generate the correct code for exporting custom business object data', () => {
    const generateParams = {
      value: {
        callback1: ['onSuccessCallback'],
        callback2: ['onFailCallback'],
        options: {
          busiObjectFilterParams: 'object',
          paramsObj: { param1: 'value1', param2: 'value2' },
          busiObjectId: 'busiObjectIdValue',
          busiObjectFields: ['field1', 'field2'],
          tempParams: { tempParam1: 'tempValue1', tempParam2: 'tempValue2' },
          exportType: 'exportTypeValue',
          async: true,
          custFileName: 'customFileName',
        },
      },
      platform: 'platformValue',
      config: {},
    };

    const expectedCode = `
      // 自定义导出业务对象数据
      ExpBusiObjModalRef.current.openWithCustFields({
        busiObjectId: "busiObjectIdValue",
        busiObjectFields: ["field1","field2"],
        tempParams: {tempParam1: "tempValue1",tempParam2: "tempValue2"},
        exportType: "exportTypeValue",
        async: true,
        attrs:{param1: "value1",param2: "value2"},
        custFileName: "customFileName",
        onSuccess: ()=>{ console.log("这里找不到参数/？")},
        onFail: ()=>{ console.log("这里找不到参数/？")},
      });
  `;

    const result = exportCustomBusiObjectData(generateParams);

    expectValue(result, expectedCode);
  });
});
