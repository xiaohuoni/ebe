import mobileLayout from '../../../../../../src/plugins/project/framework/alita/plugins/mobileLayout';
import { containerIr } from '../../../../containerIr';
describe('plugin alita mobileLayout', () => {
  test('compilation completed', async () => {
    const result = await mobileLayout()({
      ir: containerIr,
      contextData: {},
      chunks: [],
      depNames: [],
    });
    expect(result).toMatchSnapshot();
  });
});
