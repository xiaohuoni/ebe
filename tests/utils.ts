import prettier from '../src/core/postprocessor/prettier/index';

const codePrettier = prettier();
const fileType = 'ts';
//
export const expectValue = (result: string, res: string) => {
  expect(codePrettier(result, fileType)).toEqual(codePrettier(res, fileType));
};

export const expectValueIgnoreWhitespace = (result: string, res: string) => {
  expect(ignoreWhitespaceAndNewlines(result)).toEqual(
    ignoreWhitespaceAndNewlines(res),
  );
};
export const ignoreWhitespaceAndNewlines = (str: string): string => {
  return str.replace(/\s/g, '');
};
