import { Buffer } from 'buffer';

declare const self: any;
describe('buffer polyfill', () => {
  it('should assign Buffer to self', () => {
    const originalSelf = self;
    self.Buffer = undefined;

    require('../../src/polyfills/buffer');

    expect(self.Buffer).toEqual(Buffer);

    self.Buffer = originalSelf.Buffer;
  });

  it('should not assign Buffer to self if it already exists', () => {
    const originalSelf = self;
    self.Buffer = Buffer;

    require('../../src/polyfills/buffer');

    expect(self.Buffer).toEqual(originalSelf.Buffer);
  });
});
