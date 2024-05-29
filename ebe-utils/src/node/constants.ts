import { readFileSync } from 'fs';

const { version } = JSON.parse(readFileSync('../../../package.json').toString());

export const VERSION = version as string;
