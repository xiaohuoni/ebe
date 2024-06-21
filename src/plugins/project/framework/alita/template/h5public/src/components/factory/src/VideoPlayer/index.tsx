import { LingxiForwardRef } from '@lingxiteam/types';
import { useImperativeHandle } from 'react';
import type { ReactPlayerProps } from 'react-player';
import ViewPlayerLoader from './loader';

const ViewPlayer = LingxiForwardRef<unknown, ReactPlayerProps>((props, ref) => {
  useImperativeHandle(ref, () => ({}));
  return <ViewPlayerLoader {...props} />;
});

export default ViewPlayer;
