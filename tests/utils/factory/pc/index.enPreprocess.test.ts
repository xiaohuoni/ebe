import pc from '../../../../src/utils/factory/pc/index.enPreprocess';
import { extraData } from '../../../../src/utils/schema/lxschema';

describe('pc enPreprocess', () => {
  test('compilation completed', () => {
    const compDSL = {
      id: 'test-id',
      compName: 'Table',
      props: {
        rowKey: 'data.id',
        columns: [
          {
            attr: {
              attrNbr: 'data.attr1',
              childKeys: ['data.attr2'],
            },
          },
          {
            options: ['option1', 'option2'],
          },
        ],
        rowSelection: true,
        page: true,
        pageSize: 10,
        style: {
          color: 'red',
        },
      },
      style: {
        fontSize: '16px',
      },
    };

    const result = pc.Table(compDSL, extraData);

    expect(result).toMatchSnapshot();
  });
});
