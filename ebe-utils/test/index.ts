import { A } from './a';
import './styles/index.less';
export * from './abc/d';
export { default as Vector } from './abc/e';
export { A, loader };
const loader = async () => await import('./abc/f');
