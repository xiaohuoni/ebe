interface IRulesType {
  [key: string]: IRule;
}
interface IRulePrams {
  // 根据当前循环的数据 key，比如 data.a.c ,paths 为 ['data','a','c']
  paths: string[];
  // 此时循环中的值
  value: any;
  // 此时循环中的key
  key: string;
  // 提供的工具类，此时的值和data比较，如果是字符串相等则返回 true，如果对象和 data key-value 都相同的值会被删除，并返回清楚后的新对象
  diffraction?: (data: any) => any;
}
interface IRule {
  // 是否删除的判断规则，会根据
  rule?: (props: IRulePrams) => any;
  // 如果存在 loopRule 表示循环对象是一个数组，就根据 loop 中定义的规则清理 item，loop 中的 key 为 loopRule 返回值的判断依据
  loopRule?: (item: any) => string;
  loop?: IRulesType;
}

const clearProps = (data: any, diff: any) => {
  const clearedProps = { ...data };
  Object.keys(diff).forEach((key) => {
    if (typeof diff[key] === 'object') {
      clearedProps[key] = clearProps(clearedProps[key], diff[key]);
    } else {
      delete clearedProps[key];
    }
  });
  return clearedProps;
};
const getNewDataByRules = (
  value: any,
  rule: (props: IRulePrams) => any,
  path: string[],
) => {
  const newValue = { ...value };
  let newData = newValue;
  const rootObj = rule?.({
    paths: path,
    value: newValue,
    key: 'root',
    diffraction: (diffObj) => {
      return clearProps(newValue, diffObj);
    },
  });
  if (rootObj && rootObj !== true) {
    newData = rootObj;
  } else {
    // 只支持两层
    Object.keys(newValue).forEach((newKey) => {
      if (
        rule?.({
          paths: [...path, newKey],
          value: newValue[newKey],
          key: newKey,
        })
      ) {
        delete newValue[newKey];
      }
    });
    newData = newValue;
  }
  return newData;
};
const removeObjectByRules = (
  data: any,
  rules: IRulesType,
  paths: string[] = [],
): any => {
  const newData: any = {};

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const value = data[key];
      const rule = rules[key];
      const path = [...paths, key];
      // 如果是字符串，直接比较
      if (
        typeof value === 'string' &&
        rule &&
        rule.rule &&
        rule.rule({ paths: [key], value, key })
      ) {
        continue;
      }
      if (Array.isArray(value)) {
        const loopRule = rule && rule.loopRule;
        const loop = rule && rule.loop;
        if (loopRule && loop) {
          newData[key] = value.map((item) => {
            const loopKey = loopRule(item);
            const loopRuleObj = loop[loopKey];
            if (loopRuleObj && loopRuleObj?.rule) {
              return getNewDataByRules(item, loopRuleObj?.rule, path);
            }
            return item;
          });
        }
      } else if (typeof value === 'object' && value !== null && rule?.rule) {
        newData[key] = getNewDataByRules(value, rule?.rule, path);
      } else {
        newData[key] = value;
      }
    }
  }

  return newData;
};
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
