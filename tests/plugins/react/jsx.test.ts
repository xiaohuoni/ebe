import jsx from '../../../src/plugins/react/jsx';
import { drawerIr, homeIr, modalIr, popoverIr } from '../containerIr';
describe('plugin react jsx', () => {
  test('compilation completed page', async () => {
    const result = await jsx()({
      ir: homeIr,
      contextData: {},
      chunks: [],
      depNames: [],
    });
    expect(result).toMatchSnapshot();
  });
  test('compilation completed modal', async () => {
    const result = await jsx()({
      ir: modalIr,
      contextData: {},
      chunks: [],
      depNames: [],
    });
    expect(result).toMatchSnapshot();
  });
  test('compilation completed drawer', async () => {
    const result = await jsx()({
      ir: drawerIr,
      contextData: {},
      chunks: [],
      depNames: [],
    });
    expect(result).toMatchSnapshot();
  });
  test('compilation completed popover', async () => {
    const result = await jsx()({
      ir: popoverIr,
      contextData: {},
      chunks: [],
      depNames: [],
    });
    expect(result).toMatchSnapshot();
  });
});
