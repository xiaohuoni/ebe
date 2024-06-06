import hackEngineApis from '../../../../../../src/plugins/project/framework/alita/hooks/hackNodeAttr';
import { expectValueIgnoreWhitespace } from '../../../../../utils';

const scope: any = {
  bindings: undefined,
  parent: null,
};
const config: any = {};
describe('hackEngineApis', () => {
  test('View(div)', () => {
    const nodeItem: any = {};
    const pieces = [{ type: 'NodeCodePieceTag', value: 'div' }];
    const next: any = () => pieces;

    const result = hackEngineApis(nodeItem, scope, config, next);

    expect(Array.isArray(result)).toBe(true);
    expect(result[1].value).toBe('style={{ height: "100%", ...style }}');
  });
  test('BOFramer', () => {
    const nodeItem: any = {
      pageContainerType: 'BusiComp',
      busiCompId: '1234',
      props: {
        busiCompId: '1234',
      },
      id: '1',
      label: '业务组件',
    };
    const pieces = [{ type: 'NodeCodePieceTag', value: 'BOFramer' }];
    const next: any = () => pieces;

    const result = hackEngineApis(nodeItem, scope, config, next);

    expect(Array.isArray(result)).toBe(true);
    expect(result[0].value).toBe('lcdpParentRenderId={customActionId}');
    expect(result[1].value).toBe('YeWuZuJian');
    expect(result[2].value).toBe('{...injectData}');
  });
  test('TabPane', () => {
    const nodeItem: any = {
      style: {},
      props: { key: 1 },
    };
    const scope: any = {
      bindings: undefined,
      parent: null,
    };
    const config: any = {};
    const pieces = [{ type: 'NodeCodePieceTag', value: 'TabPane' }];
    const next: any = () => pieces;

    const result = hackEngineApis(nodeItem, scope, config, next);

    expect(Array.isArray(result)).toBe(true);
    expect(result[0].value).toBe("schema={{ props :{ key: '1' },style:{}}}");
    expect(result[2].value).toBe('{...injectData}');
  });
  test('CardHeader', () => {
    const nodeItem: any = {
      style: {},
      props: { key: 1 },
    };

    const pieces = [{ type: 'NodeCodePieceTag', value: 'CardHeader' }];
    const next: any = () => pieces;

    const result = hackEngineApis(nodeItem, scope, config, next);

    expect(Array.isArray(result)).toBe(true);
    expect(result[0].value).toBe('Card.Header');
  });
  test('Form', () => {
    // TODO: Form 要补充孩子逻辑
    const nodeItem: any = {
      style: {},
      props: { key: 1 },
    };

    const pieces = [
      { type: 'NodeCodePieceTag', value: 'Form' },
      { type: 'NodeCodePieceChildren', value: 'Input' },
    ];
    const next: any = () => pieces;

    const result = hackEngineApis(nodeItem, scope, config, next);

    expect(Array.isArray(result)).toBe(true);
    expect(result[1].value).toBe('{...injectData}');
    // 这里指验证孩子被删除
    expect(result[2].value).toBe('');
  });
  test('Loop', () => {
    const nodeItem: any = {
      style: {},
      props: { key: 1 },
    };

    const pieces = [
      { type: 'NodeCodePieceTag', value: 'Loop' },
      { type: 'NodeCodePieceChildren', value: 'Input' },
    ];
    const next: any = () => pieces;

    const result = hackEngineApis(nodeItem, scope, config, next);

    const getEngineApis = `getEngineApis={() => {
      return {
        ...injectData.getEngineApis(),
        MemoRenderer: {
          renderer: null,
          MemoLoopItem: (props: any) => {
            const item = props[props.itemKey] ?? props?.item; const i = props[props.indexKey] ?? props?.i;
            return (<></>)
          },
        },
      };
    }}`;
    expect(Array.isArray(result)).toBe(true);
    expect(result[1].value).toBe('{...injectData}');
    expectValueIgnoreWhitespace(result[2].value, getEngineApis);
  });
  test('DTalkView', () => {
    const nodeItem: any = {};
    const pieces = [{ type: 'NodeCodePieceTag', value: 'DTalkView' }];
    const next: any = () => pieces;

    const result = hackEngineApis(nodeItem, scope, config, next);
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(0);
  });
  test('Pageview', () => {
    const nodeItem: any = {};

    const pieces = [{ type: 'NodeCodePieceTag', value: 'Pageview' }];
    const next: any = () => pieces;

    const result = hackEngineApis(nodeItem, scope, config, next);

    expect(Array.isArray(result)).toBe(true);
    expect(result[1].value).toBe('{...injectData}');
    expect(result[2].value).toBe('lcdpParentRenderId={customActionId}');
  });
  test('CustomComponent', () => {
    const nodeItem: any = {};
    const customConfig: any = {
      options: {
        compAssetList: [
          {
            compCode: 'EEE',
            engineFileCode: 'abc',
          },
        ],
      },
    };
    const pieces = [{ type: 'NodeCodePieceTag', value: 'EEE' }];
    const next: any = () => pieces;

    const result = hackEngineApis(nodeItem, scope, customConfig, next);

    expect(Array.isArray(result)).toBe(true);
    expect(result[0].value).toBe('fileCode="abc"');
    expect(result[1].value).toBe('type="EEE"');
    expect(result[2].value).toBe('CustomComponent');
  });
});
