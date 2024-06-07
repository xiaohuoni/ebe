import { changeContent } from '../../../src/cmd/pcCmd/changeContent';
import { expectValue } from '../../utils';

describe('changeContent', () => {
  it('should generate the correct code for changing button content', () => {
    const generateParams = {
      value: {
        options: {
          name: 'Button1',
          compId: 'button1',
          theme: 'primary',
          iconType: 'edit',
          fontAddress: 'https://example.com/font.css',
          isIconFont: true,
          iconFileInfo: { width: 16, height: 16 },
          iconFile: { url: 'https://example.com/icon.png' },
        },
      },
    };

    const expectedCode = `
    // 按钮更改内容
    callComponentMethod('button1', 'changeContent', {
      name: 'Button1',
      iconType: 'edit',
      theme: 'primary',
      fontAddress: 'https://example.com/font.css',
      isIconFont: true,
      iconFileInfo: { width: 16, height: 16 },
      hasIcon: true,
    })`;

    const result = changeContent(generateParams);

    expectValue(result, expectedCode);
  });
});
