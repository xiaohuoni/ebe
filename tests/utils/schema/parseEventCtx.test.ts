import parseEventCtx from '../../../src/utils/schema/parseEventCtx';

describe('parseEventCtx', () => {
  it('should parse event context correctly', () => {
    const eventCfg = {
      params: [{ name: 'event' }, { name: 'arg1' }, { name: 'arg2' }],
    };
    const args = [
      { persist: true, target: 'button', preventDefault: jest.fn() },
      'value1',
      'value2',
    ];

    const expectedOutput = {
      event: {
        target: 'button',
        preventDefault: expect.any(Function),
      },
      arg1: 'value1',
      arg2: 'value2',
    };

    const result = parseEventCtx({ eventCfg, args });

    expect(result).toEqual(expectedOutput);
    expect(result.event.preventDefault).toBeCalledTimes(0);
  });
});
