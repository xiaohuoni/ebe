import {
  createId,
  processCustomParams,
  SERVICE_SOURCE,
} from '../../../src/cmd/utils/requestUtil';

describe('requestUtil', () => {
  describe('createId', () => {
    test('should generate a unique id with prefix', () => {
      const prefix = 'test';
      const id = '12345678';
      const result = createId(prefix, id);
      expect(result).toMatch(`${prefix}_${id}`);
    });

    test('should generate a unique id without prefix', () => {
      const prefix = 'test';
      const id = '12345678';
      const result = createId(prefix, id, 8);
      expect(result).toHaveLength(13);
    });
  });

  describe('processCustomParams', () => {
    test('should process custom params for ATOM service source', () => {
      const _options = {
        _source: SERVICE_SOURCE.ATOM,
        _serviceId: '123',
        params: {
          param1: 'value1',
          param2: 'value2',
        },
      };
      const extraData = {
        extraParam: 'extraValue',
      };
      const oParams = {
        param1: 'value1',
        param2: 'value2',
      };
      const expectedOptions = {
        _serviceId: '123',
        _source: 'atom',
        params: {
          providerId: '123',
          serviceProviderRequest: {
            param1: 'value1',
            param2: 'value2',
          },
        },
      };
      const result = processCustomParams(_options, extraData, oParams);
      expect(result).toEqual(expectedOptions);
    });

    // Add more test cases for other service sources
  });
});
