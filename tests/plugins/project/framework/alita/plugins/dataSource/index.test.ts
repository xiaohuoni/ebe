import dataSource from '../../../../../../../src/plugins/project/framework/alita/plugins/dataSource';
import { containerIr } from '../../../../../containerIr';
describe('plugin alita dataSource', () => {
  test('compilation completed', async () => {
    const result = await dataSource()({
      ir: containerIr,
      contextData: {},
      chunks: [],
      depNames: [],
    });
    expect(result).toMatchSnapshot();
  });
});
