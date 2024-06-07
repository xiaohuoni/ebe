import { setSrc } from '../../../src/cmd/sysCmd/setSrc';
import { expectValue } from '../../utils';

describe('setSrc', () => {
  it('should generate the correct code for setting the resource address', () => {
    const generateParams = {
      value: {
        options: {
          compId: 'myComponent',
          value: 'example.jpg',
        },
      },
    };

    const expectedCode = `// 设置资源地址
  asyncCallComponentMethod("myComponent", 'setSrc', "example.jpg")`;

    const result = setSrc(generateParams);

    expectValue(result, expectedCode);
  });
});
