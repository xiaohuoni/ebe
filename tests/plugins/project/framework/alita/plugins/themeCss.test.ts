import themeCss from '../../../../../../src/plugins/project/framework/alita/plugins/themeCss';
import { containerIr } from '../../../../containerIr';
describe('plugin alita themeCss', () => {
  test('compilation completed', async () => {
    const result = await themeCss()({
      ir: containerIr,
      contextData: {},
      chunks: [],
      depNames: [],
    });
    expect(result).toMatchSnapshot();
  });
});
