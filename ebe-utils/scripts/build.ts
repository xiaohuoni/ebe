import { join } from 'path';
import { copyStatic } from '../src/node/copyStatic';
copyStatic(
  join(__dirname, '../../src/plugins/project/framework/alita/template/public'),
  join(__dirname, '../lib/', 'public'),
);
copyStatic(
  join(
    __dirname,
    '../../src/plugins/project/framework/alita/template/h5public',
  ),
  join(__dirname, '../lib/', 'h5public'),
);
copyStatic(
  join(
    __dirname,
    '../../src/plugins/project/framework/alita/template/pcpublic',
  ),
  join(__dirname, '../lib/', 'pcpublic'),
);
