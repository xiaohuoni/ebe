import pageview from '../../../../../../src/plugins/project/framework/alita/plugins/pageview';
import { containerIr } from '../../../../containerIr';
describe('plugin alita pageview', () => {
  test('compilation completed', async () => {
    const result = await pageview()({
      ir: containerIr,
      contextData: {},
      chunks: [],
      depNames: [],
    });
    expect(result).toMatchSnapshot();
  });
});
