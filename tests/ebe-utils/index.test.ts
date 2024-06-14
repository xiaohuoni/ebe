import {
  clearLXPagesDSL,
  clearProps,
  getNewDataByRules,
  IRulesType,
  removeObjectByRules,
} from '../../ebe-utils/src/index';
import n from '../solutions/n.json';

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
});

describe('clearProps', () => {
  it('should clear props based on diff object', () => {
    const data = {
      name: 'John',
      age: 30,
      address: {
        street: '123 Main St',
        city: 'New York',
      },
    };
    const diff = {
      age: 30,
      address: {
        street: '123 Main St',
      },
    };
    const expected = {
      name: 'John',
      address: {
        city: 'New York',
      },
    };
    const result = clearProps(data, diff);
    expect(result).toEqual(expected);
  });

  it('should clear props recursively', () => {
    const data = {
      prop1: 'value1',
      prop2: {
        nestedProp1: 'value2',
        nestedProp2: 'value3',
      },
      prop3: ['item1', 'item2'],
    };
    const diff = {
      prop1: 'value1',
      prop2: {
        nestedProp1: 'value2',
      },
      prop3: [],
    };
    const expected = {
      prop2: {
        nestedProp2: 'value3',
      },
    };
    const result = clearProps(data, diff);
    expect(result).toEqual(expected);
  });
});

describe('getNewDataByRules', () => {
  it('should get new data based on rules', () => {
    const value = {
      name: 'John',
      age: 30,
      address: {
        street: '123 Main St',
        city: 'New York',
      },
    };
    const rule: any = ({ paths, value, key, diffraction }) => {
      if (key === 'address') {
        return diffraction?.({ street: '123 Main St' });
      }
      return value;
    };
    const path = [];
    const expected = {
      name: 'John',
      age: 30,
      address: {
        city: 'New York',
        street: '123 Main St',
      },
    };
    const result = getNewDataByRules(value, rule, path);
    expect(result).toEqual(expected);
  });
});
describe('clearLXPagesDSL', () => {
  it('should clear LX pages DSL based on rules', () => {
    const result = clearLXPagesDSL(n.pages);
    expect(result).toMatchSnapshot();
  });
});
