import { setActiveTabPane } from '../../../src/cmd/pcCmd/setActiveTabPane';
import { expectValue } from '../../utils';

describe('setActiveTabPane', () => {
  it('should generate the correct code for setting active tab pane', () => {
    const generateParams = {
      value: {
        options: {
          compId: 'tab1',
          paramsObj: {
            activiKey: 'tab2',
          },
        },
      },
    };

    const expectedCode = `
    // 设置激活的tab
    if (refs["tab1"].setValue) {
      refs["tab1"].setValue("tab2");
    }
  `;

    const result = setActiveTabPane(generateParams);

    expectValue(result, expectedCode);
  });
});
