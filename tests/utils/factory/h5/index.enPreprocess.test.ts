import h5 from '../../../../src/utils/factory/h5/index.enPreprocess';
import { extraData } from '../../../../src/utils/schema/lxschema';

describe('h5 enPreprocess', () => {
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

    const result = h5.Table(compDSL, extraData);

    expect(result).toEqual({
      id: 'test-id',
      compName: 'Table',
      props: {
        rowKey: 'id',
        columns: [
          {
            staticDataSource:
              '$attrDataMap[\'data.attr1\'].filter(item=>["data.attr2"].includes(item.attrValue))$',
          },
          {
            staticDataSource: ['option1', 'option2'],
          },
        ],
        rowSelection: {
          type: undefined,
        },
        page: true,
        pageSize: 10,
        pagination: {
          pageSize: 10,
        },
        style: {
          fontSize: '16px',
        },
      },
      style: {
        fontSize: '16px',
      },
    });
  });
});
