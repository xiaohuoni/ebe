import {
  getCondition,
  getConditionOption,
  getIfelse,
  type Icondition
} from '../../src/cmd/ifelse';

// mock config
const config: any = {
  ir: {
    deps: [],
  },
};

describe('getConditionOption 手写值比较', () => {
  it('值为空', () => {
    const options = {
      operate: 'empty',
      manualValue: '1',
    };
    const expected = 'checkIsEmpty(value)';
    const result = getConditionOption('value', options, config);
    expect(
      config.ir.deps.filter((i: any) => i.type === 'checkIsEmpty').length > 0,
    ).toBeTruthy();
    expect(result).toEqual(expected);
  });
  it('值不为空', () => {
    const options = {
      operate: 'notEmpty',
    };
    const expected = '!checkIsEmpty(value)';
    const result = getConditionOption('value', options, config);
    expect(
      config.ir.deps.filter((i: any) => i.type === 'checkIsEmpty').length > 0,
    ).toBeTruthy();
    expect(result).toEqual(expected);
  });
  it('值包含1', () => {
    const options = {
      useManual: true,
      useObject: false,
      operate: 'contains',
      manualValue: '1',
    };
    const expected = 'checkIsContains(value, 1)';
    const result = getConditionOption('value', options, config);
    expect(
      config.ir.deps.filter((i: any) => i.type === 'checkIsContains').length >
        0,
    ).toBeTruthy();
    expect(result).toEqual(expected);
  });
  it('值不包含1', () => {
    const options = {
      operate: 'notContains',
      useManual: true,
      manualValue: '1',
    };
    const expected = '!checkIsContains(value, 1)';
    const result = getConditionOption('value', options, config);
    expect(
      config.ir.deps.filter((i: any) => i.type === 'checkIsContains').length >
        0,
    ).toBeTruthy();
    expect(result).toEqual(expected);
  });
  const otherOperates = ['>', '>=', '<', '<=', '==', '!='];
  otherOperates.forEach((i: any) => {
    it(`值 ${i} 1`, () => {
      const options = {
        operate: i,
        useManual: true,
        manualValue: '1',
      };
      const expected = `value ${i} 1`;
      const result = getConditionOption('value', options, config);
      expect(result).toEqual(expected);
    });
  });
  it('值为真', () => {
    const options = {
      operate: '== true',
      useManual: true,
      manualValue: '1',
    };
    const expected = 'value == true';
    const result = getConditionOption('value', options, config);
    expect(result).toEqual(expected);
  });
  it('值为假', () => {
    const options = {
      operate: '== false',
      useManual: true,
      manualValue: '1',
    };
    const expected = 'value == false';
    const result = getConditionOption('value', options, config);
    expect(result).toEqual(expected);
  });
});

describe('getConditionOption 使用对象比较', () => {
  it('值等于另一个组件的值', () => {
    const options = {
      operate: '==',
      useManual: false,
      objOperate: 'setValue',
      useObject: true,
      objType: 'Input',
      objId: 'Input_347757',
    };
    const expected = `value == safeNumber(getValue('Input_347757'))`;
    const result = getConditionOption('value', options, config);
    expect(
      config.ir.deps.filter((i: any) => i.type === 'safeNumber').length > 0,
    ).toBeTruthy();
    expect(result).toEqual(expected);
  });
  it('值等于系统级变量', () => {
    // 其实支持任意变量，好像不区分是不是系统级
    const options = {
      operate: '==',
      useManual: false,
      objOperate: 'setSysState',
      useObject: true,
      objType: 'system',
      objId: 'sys',
      stateVal: '$urlParam.bizId$',
    };
    const expected = `value == urlParam?.bizId`;
    const result = getConditionOption('value', options, config);
    expect(result).toEqual(expected);
  });
});

describe('getCondition', () => {
  it('四种 conditionType ', () => {
    const conditions: Icondition[] = [
      {
        options: {},
        condId: '58469',
        conditionType: 'isVisible',
        objType: 'Input',
        objId: 'Input_347757',
      },
      {
        options: {
          useManual: true,
          useObject: false,
          operate: '==',
          manualValue: '1',
        },
        condId: '94672661',
        connector: '&&',
        conditionType: 'checkValue',
        objType: 'Input',
        objId: 'Input_1814256',
      },
      {
        options: {
          useManual: true,
          useObject: false,
          context: '$urlParam.bizId$',
          operate: '==',
          manualValue: '123',
        },
        condId: '9027607',
        connector: '&&',
        conditionType: 'checkContextValue',
        objType: 'system',
        objId: 'sys',
      },
      {
        options: {},
        condId: '801297',
        connector: '&&',
        conditionType: 'notVisible',
        objType: 'Input',
        objId: 'Input_1814256',
      },
    ];

    const expected = `getVisible('Input_347757') && getValue('Input_1814256') == 1 && urlParam?.bizId == 123 && !getVisible('Input_1814256')`;
    const result = getCondition(conditions, config);
    expect(result).toEqual(expected);
  });
});

describe('getIfelse', () => {
  it('if else', () => {
    const action: any = {
      type: 'ifelse',
      shielding: undefined,
      condition: [
        {
          options: {},
          condId: '58469',
          conditionType: 'isVisible',
          objType: 'Input',
          objId: 'Input_347757',
        },
      ],
      path: [171573860914746140],
      dataId: 171574149702936580,
      elseIfs: [
        {
          dataName: 'elseIf',
          dataId: 171576763139135300,
          path: [171573860914746140, 171574149702936580],
          condition: [],
          value: 'elseIf',
          children: [
            {
              dataName: 'action',
              dataId: 171576765418323900,
              todoOptions: ['valueArray'],
              path: [
                171573860914746140, 171574149702936580, 171576763139135300,
              ],
              options: {
                compId: 'console',
                compName: 'system',
                id: '442761',
                pageJsonId: '542158',
                value: ['2222'],
              },
              actionObjId: 'console',
              actionObjName: 'system',
              value: 'console',
              children: [],
              elseIfs: [],
              line_number: 3,
            },
          ],
          elseIfs: [],
          callback: [
            {
              type: 'console',
              dataId: 171576765418323900,
              shielding: undefined,
              options: {
                compId: 'console',
                compName: 'system',
                id: '442761',
                pageJsonId: '542158',
                value: ['2222'],
              },
              path: [
                171573860914746140, 171574149702936580, 171576763139135300,
              ],
              line_number: 3,
            },
          ],
        },
      ],
      line_number: 1,
      callback1: [
        {
          type: 'console',
          dataId: 171576713163522750,
          shielding: undefined,
          options: {
            compId: 'console',
            compName: 'system',
            id: '179761',
            pageJsonId: '542158',
            value: ['123'],
          },
          path: [171573860914746140, 171574149702936580],
          line_number: 2,
        },
      ],
    };

    const expected = `if (getVisible('Input_347757')) {
      // 打印日志
      console.log('123');
    } else {
      // 打印日志
      console.log('2222');
    }`;
    const result = getIfelse({ value: action, config });
    expect(result.replace(/\s/g, '')).toEqual(expected.replace(/\s/g, ''));
  });
  it('if else if else', () => {
    const action: any = {
      type: 'ifelse',
      shielding: undefined,
      condition: [
        {
          options: {},
          condId: '58469',
          conditionType: 'isVisible',
          objType: 'Input',
          objId: 'Input_347757',
        },
      ],
      path: [171573860914746140],
      dataId: 171574149702936580,
      elseIfs: [
        {
          dataName: 'elseIf',
          dataId: 171576763139135300,
          path: [171573860914746140, 171574149702936580],
          condition: [
            {
              options: {},
              condId: '250352',
              conditionType: 'notVisible',
              objType: 'Input',
              objId: 'Input_1814256',
            },
          ],
          value: 'elseIf',
          elseIfs: [],
          children: [
            {
              dataName: 'action',
              dataId: 171576765418323900,
              todoOptions: ['valueArray'],
              path: [
                171573860914746140, 171574149702936580, 171576763139135300,
              ],
              options: {
                compId: 'console',
                compName: 'system',
                id: '442761',
                pageJsonId: '542158',
                value: ['2222'],
              },
              actionObjId: 'console',
              actionObjName: 'system',
              value: 'console',
              elseIfs: [],
              children: [],
              line_number: 3,
            },
          ],
          callback: [
            {
              type: 'console',
              dataId: 171576765418323900,
              shielding: undefined,
              options: {
                compId: 'console',
                compName: 'system',
                id: '442761',
                pageJsonId: '542158',
                value: ['2222'],
              },
              path: [
                171573860914746140, 171574149702936580, 171576763139135300,
              ],
              line_number: 3,
            },
          ],
        },
        {
          dataName: 'elseIf',
          dataId: 171577179754159780,
          path: [171573860914746140, 171574149702936580],
          condition: [],
          value: 'elseIf',
          elseIfs: [],
          children: [
            {
              dataName: 'action',
              dataId: 171577180618680400,
              todoOptions: ['valueArray'],
              path: [
                171573860914746140, 171574149702936580, 171577179754159780,
              ],
              options: {
                compId: 'console',
                compName: 'system',
                id: '880927',
                pageJsonId: '542158',
                value: ['333333'],
              },
              actionObjId: 'console',
              actionObjName: 'system',
              value: 'console',
              elseIfs: [],
              children: [],
              line_number: 4,
            },
          ],
          callback: [
            {
              type: 'console',
              dataId: 171577180618680400,
              shielding: undefined,
              options: {
                compId: 'console',
                compName: 'system',
                id: '880927',
                pageJsonId: '542158',
                value: ['333333'],
              },
              path: [
                171573860914746140, 171574149702936580, 171577179754159780,
              ],
              line_number: 4,
            },
          ],
        },
      ],
      line_number: 1,
      callback1: [
        {
          type: 'console',
          dataId: 171576713163522750,
          shielding: undefined,
          options: {
            compId: 'console',
            compName: 'system',
            id: '179761',
            pageJsonId: '542158',
            value: ['123'],
          },
          path: [171573860914746140, 171574149702936580],
          line_number: 2,
        },
      ],
    };

    const expected = `if (getVisible('Input_347757')) {
      // 打印日志
      console.log('123');
    } else if (!getVisible('Input_1814256')) {
      // 打印日志
      console.log('2222');
    } else {
      // 打印日志
      console.log('333333');
    }`;
    const result = getIfelse({ value: action, config });
    expect(result.replace(/\s/g, '')).toEqual(expected.replace(/\s/g, ''));
  });
});
