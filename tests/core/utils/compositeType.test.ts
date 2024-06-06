import {
  generateCompositeType,
  generateVarString,
  getLegitimateKey,
  parse2Var,
} from '../../../src/core/utils/compositeType';
import { expectValue } from '../../utils';

describe('compositeType', () => {
  it('generateVarString: 为空', () => {
    expectValue(generateVarString(''), '');
  });

  it('generateVarString: 非表达式', () => {
    expectValue(generateVarString('data.a'), 'data.a');
  });

  it('generateVarString: 简单表达式', () => {
    expectValue(generateVarString('$a$'), 'a');
  });

  it('generateVarString: 表达式-调用链', () => {
    expectValue(generateVarString('$data.a[0].b()$'), 'data?.a?.[0]?.b?.()');
  });

  it('generateVarString: 表达式-语法错误', () => {
    const acceptVal = generateVarString('$let a = 100, let a = 10,$');
    expectValue(acceptVal, '""');
  });

  it('parse2Var: 非表达式', () => {
    expectValue(parse2Var('data.a'), "'data.a'");
  });

  it('parse2Var: 简单表达式', () => {
    expectValue(parse2Var('$a$'), 'a');
  });

  it('parse2Var: 表达式-调用链', () => {
    expectValue(parse2Var('$data.a[0].b()$'), 'data?.a?.[0]?.b?.()');
  });

  it('parse2Var: 表达式-对象', () => {
    expect(
      parse2Var({
        arr: ['$data$'],
        str: '$data.a[0].b()$',
        obj: {
          id: '$123$',
        },
        undef: undefined,
        nul: null,
        normalString: 'data.a[0].b()',
      }),
    ).toEqual(
      '{arr: [data],str: data?.a?.[0]?.b?.(),obj: {id: 123},undef: undefined,nul: null,normalString: "data.a[0].b()"}',
    );
  });

  it('parse2Var: 表达式-数组', () => {
    expect(parse2Var(['$data.a$', 'data.b', null, NaN])).toEqual(
      '[data?.a,"data.b",null,NaN]',
    );
  });

  it('parse2Var: 表达式-undefined', () => {
    expect(parse2Var(undefined)).toEqual('undefined');
  });

  it('parse2Var: 表达式-null', () => {
    expect(parse2Var(null)).toEqual('null');
  });

  it('getLegitimateKey: 正确key1', () => {
    expect(getLegitimateKey('abc')).toEqual('abc');
    expect(getLegitimateKey('abc_1')).toEqual('abc_1');
    expect(getLegitimateKey('_abc')).toEqual('_abc');
    expect(getLegitimateKey('$_abc')).toEqual('$_abc');
  });

  it('getLegitimateKey: 错误key', () => {
    expect(getLegitimateKey('%a')).toEqual("['%a']");
    expect(getLegitimateKey('anb.c')).toEqual("['anb.c']");
    expect(getLegitimateKey('_,abc')).toEqual("['_,abc']");
    expect(getLegitimateKey('1abc')).toEqual("['1abc']");
    expect(getLegitimateKey('*abc')).toEqual("['*abc']");
  });

  it('generateCompositeType: 非表达式', () => {
    expectValue(generateCompositeType(undefined, {} as any, {}), 'undefined');
    expectValue(generateCompositeType(null, {} as any, {}), 'null');
    expectValue(generateCompositeType([null], {} as any, {}), '[null]');
    expectValue(generateCompositeType('$data.a$', {} as any, {}), 'data?.a');
    expectValue(
      generateCompositeType('##{{ type: 1 }}##', {} as any, {}),
      '{type: 1}',
    );
    expect(
      generateCompositeType(
        {
          arr: ['$data$'],
          str: '$data.a[0].b()$',
          obj: {
            id: '$123$',
          },
          undef: undefined,
          nul: null,
          normalString: 'data.a[0].b()',
        },
        {} as any,
        {},
      ),
    ).toEqual(
      '{"arr": [data],\n"str": data?.a?.[0]?.b?.(),\n"obj": {"id": 123},\n"undef": undefined,\n"nul": null,\n"normalString": "data.a[0].b()"}',
    );
  });
});
