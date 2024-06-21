import { ProcessTrack, ProTrackProps } from '@lingxiteam/antd-mobile-plus';
import { LingxiForwardRef } from '@lingxiteam/types';
import React from 'react';
import useHiddenStyle from '../utils/hooks/useHiddenStyle';

export interface MyProcessTrackProps extends ProTrackProps {
  visible: boolean;
  style: React.CSSProperties;
}
const MyProcessTrack = LingxiForwardRef<any, MyProcessTrackProps>(
  (props, ref) => {
    const {
      visible = true,
      style,
      className,
      empty,
      getEngineApis,
      ...restProps
    } = props;

    const { getLocale } = getEngineApis();

    const displayStyle = useHiddenStyle(visible);

    return (
      <div
        style={{
          ...style,
          ...displayStyle,
        }}
        className={className}
      >
        <ProcessTrack
          {...restProps}
          empty={empty ?? getLocale('ProcessTrack.empty')}
        />
      </div>
    );
  },
);

MyProcessTrack.displayName = 'ProcessTrack';

export default MyProcessTrack;
