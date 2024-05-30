import { A } from './a';
import './styles/index.less';

const loader = async () => await import('./abc/f');

// @ts-ignore
export * from '@/constants';
export * from './abc/d';
export { default as Vector } from './abc/e';
export { A, loader };
