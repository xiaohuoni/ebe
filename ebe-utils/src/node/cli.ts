import { cac } from 'cac';
import { VERSION } from './constants';

const cli = cac('ebe');

// global options
interface GlobalCLIOptions {
  '--'?: string[];
}

// init
cli
  .command('init', 'init ebe package')
  .alias('i')
  .action(async (root: string, options: GlobalCLIOptions) => {
    console.log('init ebe package ');
  });

cli.help();
cli.version(VERSION);

cli.parse();
