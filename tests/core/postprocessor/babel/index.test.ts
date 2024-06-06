import { babel } from '../../../../src/core/postprocessor';

const fileType = 'ts';
describe('postprocessor/babel', () => {
  it('should remove unused VariableDeclarator', () => {
    const code = `const a = 1;
    const b = 2;
    console.log(a);`;
    const result = babel()(code, fileType);
    const expected = `const a = 1;
console.log(a);`;

    expect(result).toEqual(expected);
  });
  it('should remove unused ObjectProperty', () => {
    const code = `const a = {
    c: 1,
    d: 2
};
const { c, d } = a;
console.log(c);`;
    const result = babel()(code, fileType);
    const expected = `const a = {
  c: 1,
  d: 2
};
const {
  c
} = a;
console.log(c);`;

    expect(result).toEqual(expected);
  });

  it('should remove unused ImportSpecifier', () => {
    const code = `import { c, d } from 'a';console.log(c);`;
    const result = babel()(code, fileType);
    const expected = `import { c } from 'a';
console.log(c);`;

    expect(result).toEqual(expected);
  });
});
