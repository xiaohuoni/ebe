import containerLifeCycle from '../../../src/plugins/react/containerLifeCycle';
import { containerIr } from '../containerIr';
describe('plugin react containerLifeCycle', () => {
  test('compilation completed', async () => {
    // TODO: 数据应该由解析器提供
    const result = await containerLifeCycle()({
      ir: containerIr,
      contextData: {
        options: {
          busiCompMapping: {},
          pageIdMapping: {},
        },
      },
      chunks: [],
      depNames: [],
    } as any);
    expect(result).toMatchSnapshot();
  });
});
