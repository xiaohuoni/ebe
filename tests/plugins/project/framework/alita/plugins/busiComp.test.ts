import busiComp from '../../../../../../src/plugins/project/framework/alita/plugins/busiComp';
import { containerIr } from '../../../../containerIr';
describe('plugin alita busiComp', () => {
  test('compilation completed', async () => {
    const result = await busiComp()({
      ir: containerIr,
      contextData: {},
      chunks: [],
      depNames: [],
    });
    expect(result).toMatchSnapshot();
  });
});
