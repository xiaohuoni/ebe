import { removeObjectByRules, type IRulesType } from '../ebe-utils/src/index';

describe('removeObjectByRules', () => {
  it('should remove object by key', () => {
    const value = {
      options: {
        value: ['option1', 'option2'],
      },
      type: 'log',
      dataId: '123',
    };
    const rules: IRulesType = {
      type: {
        rule: () => {
          return true;
        },
      },
    };
    const expected = {
      options: {
        value: ['option1', 'option2'],
      },
      dataId: '123',
    };
    const result = removeObjectByRules(value, rules);
    expect(result).toEqual(expected);
  });
  it('should remove object by sub key', () => {
    const value = {
      options: {
        value: ['option1', 'option2'],
      },
      data: {
        key: '123',
      },
      dataId: '123',
    };
    const rules: IRulesType = {
      data: {
        rule: ({ paths, value }) => {
          if (paths.join('.') === 'data.key' && value === '123') {
            return true;
          }
          return false;
        },
      },
    };
    const expected = {
      options: {
        value: ['option1', 'option2'],
      },
      data: {},
      dataId: '123',
    };
    const result = removeObjectByRules(value, rules);
    expect(result).toEqual(expected);
  });
  it('should remove object by diffraction object', () => {
    const value = {
      data: { id: 'as', va: '123' },
    };
    const rules: IRulesType = {
      data: {
        rule: ({ paths, value, key, diffraction }) => {
          return diffraction?.({ va: '123' });
        },
      },
    };
    const expected = {
      data: { id: 'as' },
    };
    const result = removeObjectByRules(value, rules);
    expect(result).toEqual(expected);
  });
  it('should remove list item by key', () => {
    const value = {
      options: [
        { id: 'as', va: '123' },
        { id: 'ds', vae: '12' },
      ],
      data: {
        key: '123',
      },
      dataId: '123',
    };
    const rules: IRulesType = {
      options: {
        loopRule: (item) => item.id,
        loop: {
          as: {
            rule: ({ paths, value, key }) => {
              if (key === 'va') {
                return true;
              }
              return false;
            },
          },
        },
      },
    };
    const expected = {
      options: [{ id: 'as' }, { id: 'ds', vae: '12' }],
      data: {
        key: '123',
      },
      dataId: '123',
    };
    const result = removeObjectByRules(value, rules);
    expect(result).toEqual(expected);
  });
  it('should remove list item by diffraction object', () => {
    const value = {
      options: [
        { id: 'as', va: '123' },
        { id: 'ds', vae: '12' },
      ],
      data: {
        key: '123',
      },
      dataId: '123',
    };
    const rules: IRulesType = {
      options: {
        loopRule: (item) => item.id,
        loop: {
          as: {
            rule: ({ paths, value, key, diffraction }) => {
              return diffraction?.({ va: '123' });
            },
          },
        },
      },
    };
    const expected = {
      options: [{ id: 'as' }, { id: 'ds', vae: '12' }],
      data: {
        key: '123',
      },
      dataId: '123',
    };
    const result = removeObjectByRules(value, rules);
    expect(result).toEqual(expected);
  });
});

// 我要删除 defaultVersionId 字段 ，
// components 中的 compName 值为 View 时
// 当 props 中的 conten 字段等于 $$ 时 删除 conten
// const dsRules: IRulesType = {
//   defaultVersionId: {
//     rule: () => true,
//   },
//   components: {
//     loopRule: (item) => item.compName,
//     loop: {
//       View: {
//         rule: ({ diffraction }) => {
//           return diffraction?.({
//             props: {
//               conten: '$$',
//             },
//           });
//         },
//       },
//     },
//   },
// };
