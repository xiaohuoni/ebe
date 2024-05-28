import { dropPageByCatch } from '../../src/cmd/dropPageByCatch';
import { expectValue } from '../utils';

describe('dropPageByCatch', () => {
  it('should generate the correct code for dropping a page by cache key', () => {
    const generateParams = {
      value: {
        options: {
          dropPathname: '/path/to/page',
        },
      },
      config: {
        ir: {
          deps: [],
        } as any,
      },
    };

    const expectedCode = `dropByCacheKey('/path/to/page');`;

    const result = dropPageByCatch(generateParams);

    expectValue(result, expectedCode);
    expect(generateParams.config.ir.deps).toEqual([
      {
        dependencyType: 'External',
        destructuring: true,
        exportName: 'dropByCacheKey',
        package: 'alita',
        type: 'dropByCacheKey',
        version: '*',
      },
    ]);
  });

  it('should return an empty string if dropPathname is not provided', () => {
    const generateParams = {
      value: {
        options: {},
      },
      config: {
        ir: {
          deps: [],
        },
      },
    };

    const expectedCode = '';

    const result = dropPageByCatch(generateParams as any);

    expectValue(result, expectedCode);
    expect(generateParams.config.ir.deps).toEqual([]);
  });
});
