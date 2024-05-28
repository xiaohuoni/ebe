import { apiRequest } from '../../src/cmd/apiRequest';
import { expectValue } from '../utils';

describe('apiRequest', () => {
  it('should generate the correct code for making an API request', () => {
    const generateParams = {
      value: {
        options: {
          _source: 'INNER',
          method: 'post',
          url: '/app/object/run',
          params: {
            param1: 'value1',
            param2: 'value2',
          },
        },
      },
    };

    const expectedCode = `api.commonFetch(
      "post",
      "/app/object/run",
      {param1: "value1",param2: "value2"},
      {}
    )`;

    const result = apiRequest(generateParams);

    expectValue(result, expectedCode);
  });

  it('should generate the correct code for making a batch insert API request', () => {
    const generateParams = {
      value: {
        options: {
          _source: 'INNER',
          method: 'post',
          url: '/app/object/batchInsert',
          params: {
            param1: 'value1',
            param2: 'value2',
          },
        },
      },
    };

    const expectedCode = `api.batchInsert(
        "INNER",
        "post",
        "/app/object/batchInsert",
        {param1: "value1",param2: "value2"},
        {}
      )`;

    const result = apiRequest(generateParams);

    expectValue(result, expectedCode);
  });
});
