import { showCustomModal } from '../../src/cmd/showCustomModal';
import { expectValue } from '../utils';

describe('showCustomModal', () => {
  it('should generate the correct code for showing a custom modal', () => {
    const generateParams = {
      value: {
        options: {
          paramsObj: {
            param1: 'value1',
            param2: 'value2',
          },
          modalname: 'modal1',
          pageId: 'page1',
        },
        callback1: ['callback1'],
        callback2: ['callback2'],
      },
      platform: 'web',
      config: {},
    };

    const expectedCode = `// 打开弹窗\n ModalManagerRef?.current?.openModal({pagePath: 'modal1', lcdpParentRenderId: customActionId, params: {param1: 'value1', param2: 'value2'}, onOk: () => {
           console.log('这里找不到参数/？');
         }, onCancel: () => {
          console.log('这里找不到参数/？');
        }})`;

    const result = showCustomModal(generateParams);

    expectValue(result, expectedCode);
  });
});
