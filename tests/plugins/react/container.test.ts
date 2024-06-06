import container from '../../../src/plugins/react/container';
import { containerIr } from '../containerIr';
describe('plugin react container', () => {
  test('compilation completed', async () => {
    // TODO: 数据应该由解析器提供
    const result = await container()({
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
