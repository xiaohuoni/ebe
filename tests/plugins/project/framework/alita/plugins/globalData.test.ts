import globalData from '../../../../../../src/plugins/project/framework/alita/plugins/globalData';
import { containerIr } from '../../../../containerIr';
describe('plugin alita globalData', () => {
  test('compilation completed', async () => {
    const result = await globalData()({
      ir: containerIr,
      contextData: {},
      chunks: [],
      depNames: [],
    });
    expect(result).toMatchSnapshot();
  });
});
