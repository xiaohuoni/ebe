import styleInject from '../../../../../../src/plugins/project/framework/alita/plugins/styleInject';
import { containerIr } from '../../../../containerIr';
describe('plugin alita styleInject', () => {
  test('compilation completed', async () => {
    const result = await styleInject()({
      ir: containerIr,
      contextData: {},
      chunks: [],
      depNames: [],
    });
    expect(result).toMatchSnapshot();
  });
});
