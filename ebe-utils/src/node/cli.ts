import { cac } from 'cac';
import { VERSION } from './constants';

const cli = cac('ebe');

// global options
interface GlobalCLIOptions {
  '--'?: string[];
}

// init
cli
  .command(
    'setup',
    '初始化出码产物项目，完成出码后置动作之后，移除 ebe-utils 依赖',
  )
  .alias('init')
  .alias('i')
  .action(async (root: string, options: GlobalCLIOptions) => {
    console.log('init ebe package ');
    const { setup } = require('./setup');
    try {
      await setup();
    } catch (e) {
      console.error(e);
      process.exit(1);
    } finally {
    }
  });

// move
cli
  .command('move <path>', '通过提供的入口，将所有相关依赖复制到指定文件夹中')
  .option('--o [outdir]', '指定拷贝产物路径', {
    default: 'factory',
  })
  .action(async (path, option: { o?: string } & GlobalCLIOptions) => {
    const { o } = option;
    const { move } = require('./move');
    try {
      await move({
        target: path,
        outDir: o,
      });
    } catch (e) {
      console.error(e);
      process.exit(1);
    } finally {
    }
  });

cli.help();
cli.version(VERSION);

cli.parse();
