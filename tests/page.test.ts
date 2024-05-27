import { clearLXPagesDSL } from '../ebe-utils/src/index';
import expected from './expected.json';
import page from './page.json';

describe('clearLXPagesDSL', () => {
  it('should remove object by clearLXPagesDSL', () => {
    const result = clearLXPagesDSL([page]);
    expect(result).toEqual(expected);
  });
});
