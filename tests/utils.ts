import prettier from '../src/core/postprocessor/prettier/index';

const codePrettier = prettier();
const fileType = 'ts';
//
export const expectValue = (result: string, res: string) => {
  expect(codePrettier(result, fileType)).toEqual(codePrettier(res, fileType));
};
