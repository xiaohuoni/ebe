import config from '../../../../../../src/plugins/project/framework/alita/plugins/config';
import { containerIr } from '../../../../containerIr';
describe('plugin alita config', () => {
  test('compilation completed', async () => {
    const result = await config()({
      ir: containerIr,
      contextData: {},
      chunks: [],
      depNames: [],
    });
    expect(result).toMatchSnapshot();
  });
});
