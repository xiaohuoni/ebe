import { LingxiForwardRef } from '@lingxiteam/types';
import { CSSProperties } from 'react';

export interface VirtualGroupProps {
  style: CSSProperties;
}

const VirtualGroup = LingxiForwardRef<any, VirtualGroupProps>((props: any) => {
  return (
    <div style={props.style} data-compid={props?.['data-compid']}>
      {props.children}
    </div>
  );
});

export default VirtualGroup;
