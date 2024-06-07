import { triggerRelDataSource } from '../../src/cmd/triggerRelDataSource';
import { expectValue } from '../utils';

describe('triggerRelDataSource', () => {
  it('should return the correct code when attrNbr is provided', () => {
    const generateParams = {
      value: {
        options: {
          custTargetVal: 'myCustTargetVal',
          target: 'myTarget',
          arelStaticData: {
            attr: {
              attrNbr: 'myArelAttrNbr',
            },
          },
          zrelStaticData: {
            attr: {
              attrNbr: 'myZrelAttrNbr',
            },
          },
          compId: 'myCompId',
        },
      },
    };

    const expectedCode = `
    // 获取联动数据,并设置
    callComponentMethod('myCompId','setData',getTriggerRelDataSource(attrDataMap,'myArelAttrNbr', 'myZrelAttrNbr', 'myCustTargetVal',))
    `;

    expectValue(triggerRelDataSource(generateParams), expectedCode);
  });

  it('should return an empty string when attrNbr is not provided', () => {
    const generateParams = {
      value: {
        options: {
          custTargetVal: 'myCustTargetVal',
          target: 'myTarget',
          arelStaticData: {
            attr: {},
          },
          zrelStaticData: {
            attr: {},
          },
          compId: 'myCompId',
        },
      },
    };

    const expectedCode = '';

    expectValue(triggerRelDataSource(generateParams), expectedCode);
  });
});
