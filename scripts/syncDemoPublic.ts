import { join } from 'path';
import { copyStatic } from '../ebe-utils/src/node/copyStatic';
copyStatic(join(__dirname, '../dist/'), join(__dirname, '../demo/public'));
