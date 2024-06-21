import { LingxiForwardRef } from '@lingxiteam/types';
import type { MyCardFooterProps } from './CardFooter';
import CardFooterLoader from './loader';

const CardFooter = LingxiForwardRef<unknown, MyCardFooterProps>(
  (props, ref) => {
    return <CardFooterLoader {...props} />;
  },
);

export default CardFooter;
