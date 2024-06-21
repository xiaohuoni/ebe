import { LingxiForwardRef } from '@lingxiteam/types';
import type { MyCardBodyProps } from './CardBody';
import CardBodyLoader from './loader';

const CardBody = LingxiForwardRef<unknown, MyCardBodyProps>((props, ref) => {
  return <CardBodyLoader {...props} />;
});

export default CardBody;
