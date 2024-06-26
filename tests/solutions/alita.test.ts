import alita from '../../src/solutions/alita';
import schema from './n.json';

describe('solutions/alita', () => {
  test('compilation completed', async () => {
    const result = alita({
      options: schema.options as any,
      useEbeSetup: false,
    });
    expect(result).toMatchSnapshot();
    const project = await result.generateProject(
      // @ts-ignore
      schema.pages,
    );
    expect(project).toMatchSnapshot();
  });
});
