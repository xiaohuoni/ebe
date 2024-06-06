import jsx from '../../../src/plugins/react/jsx';
import { containerIr } from '../containerIr';
describe('plugin react jsx', () => {
  test('compilation completed', async () => {
    const result = await jsx()({
      ir: containerIr,
      contextData: {},
      chunks: [],
      depNames: [],
    });
    expect(result).toMatchSnapshot();
  });
});
