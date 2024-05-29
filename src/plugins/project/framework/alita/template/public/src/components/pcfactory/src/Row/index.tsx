import { LingxiForwardRef } from '@lingxiteam/types';
import RowLoader from './loader';

const Row = LingxiForwardRef<unknown, any>((props) => {
  // eslint-disable-next-line react/react-in-jsx-scope
  return <RowLoader {...props} />;
});

export default Row;
