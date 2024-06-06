import app from '../../../../../../src/plugins/project/framework/alita/plugins/app';
import { containerIr } from '../../../../containerIr';
describe('plugin alita app', () => {
  test('compilation completed', async () => {
    const result = await app()({
      ir: containerIr,
      contextData: {},
      chunks: [],
      depNames: [],
    });
    expect(result).toMatchSnapshot();
  });
});
