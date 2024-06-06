import { getImportFrom } from '../../../src/utils/depsHelper';

describe('getImportFrom', () => {
  test('should return the correct IDependency object', () => {
    const pkg = 'lodash';
    const type = 'debounce';
    const destructuring = true;
    const exportName = 'debounce';
    const version = '1.0.0';
    const dependencyType = 'External';

    const expectedDependency = {
      package: pkg,
      type: type,
      exportName: exportName,
      version: version,
      dependencyType: dependencyType,
      destructuring: destructuring,
    };

    const result = getImportFrom(
      pkg,
      type,
      destructuring,
      exportName,
      version,
      dependencyType,
    );

    expect(result).toEqual(expectedDependency);
  });

  test('should use the type as exportName if exportName is not provided', () => {
    const pkg = 'lodash';
    const type = 'debounce';
    const destructuring = true;
    const version = '1.0.0';
    const dependencyType = 'External';

    const expectedDependency = {
      package: pkg,
      type: type,
      exportName: type,
      version: version,
      dependencyType: dependencyType,
      destructuring: destructuring,
    };

    const result = getImportFrom(
      pkg,
      type,
      destructuring,
      undefined,
      version,
      dependencyType,
    );

    expect(result).toEqual(expectedDependency);
  });
});
