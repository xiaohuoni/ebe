import { LingxiForwardRef } from '@lingxiteam/types';
import SingleProgressLoader from './loader';
import type { MySingleProgressPros } from './SingleProgress';

const SingleProgress = LingxiForwardRef<unknown, MySingleProgressPros>(
  (props, ref) => {
    return <SingleProgressLoader {...props} {...(props.value || {})} />;
  },
);

export default SingleProgress;
