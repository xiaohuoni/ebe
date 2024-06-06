import reactCommonDeps from '../../../src/plugins/react/reactCommonDeps';
import { containerIr } from '../containerIr';
describe('plugin react reactCommonDeps', () => {
  test('compilation completed', async () => {
    // TODO: 数据应该由解析器提供
    const result = await reactCommonDeps()({
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
