import { importCustomBusiObjectData } from '../../src/cmd/importCustomBusiObjectData';
import { expectValue } from '../utils';

describe('importCustomBusiObjectData', () => {
  it('should generate the correct code for importing custom business object data', () => {
    const generateParams = {
      value: {
        callback1: [],
        callback2: [],
        options: {
          busiObjectId: '123',
          busiObjectFields: [{ name: 'field1' }, { name: 'field2' }],
          showOnly: true,
          name: 'data.csv',
          customGroup: 'group1',
          exception: 'error',
        },
      },
      config: {},
      platform: 'web',
    };

    const expectedCode = `
// 自定义导入业务对象数据
  ImportBusiObjModalRef.current.openWithCustFields({
    busiObjectId: "123",
    busiObjectFields:  [{name: "field1"},{name: "field2"}],
    showOnly: true,
    fileName:  "data.csv",
    // 配置态设置的表头分组
    customGroup:  "group1",
    // 异常配置
     exception:  "error",
  });
  `;

    const result = importCustomBusiObjectData(generateParams);

    expectValue(result, expectedCode);
  });
});
