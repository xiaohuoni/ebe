import { join } from 'path';
import { copyStatic } from '../src/node/copyStatic';
copyStatic(
  join(__dirname, '../../src/plugins/project/framework/alita/template/public'),
  join(__dirname, '../dist/', 'public'),
);
