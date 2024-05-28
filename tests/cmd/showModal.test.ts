import { showModal } from '../../src/cmd/showModal';
import { expectValue } from '../utils';

describe('showModal', () => {
  it('should generate the correct code for showing a modal', () => {
    const generateParams = {
      value: {
        options: {
          content: 'This is the content',
          title: 'Modal Title',
          okText: 'OK',
          cancelText: 'Cancel',
          type: 'info',
        },
        callback1: ['callback1'],
        callback2: ['callback2'],
      },
      platform: 'web',
      config: {},
    };

    const expectedCode = `//消息框提示 \n Modal.info({type: 'info', title: "Modal Title", content: "This is the content", okText: "OK", cancelText: "Cancel", onOk: ()=>{ console.log("这里找不到参数/？")},onCancel: ()=>{ console.log("这里找不到参数/？")}})`;

    const result = showModal(generateParams);

    expectValue(result, expectedCode);
  });
});
