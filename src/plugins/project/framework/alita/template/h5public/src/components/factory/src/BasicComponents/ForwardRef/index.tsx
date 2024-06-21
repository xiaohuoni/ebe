import type { FC } from 'react';
import React from 'react';

function AppForwardRef<P, T = any>(
  Comp: FC<P & { ref?: React.LegacyRef<T> | undefined }>,
): React.ForwardRefExoticComponent<
  React.PropsWithoutRef<P> & React.RefAttributes<T>
>;

function AppForwardRef(Comp: any) {
  return React.forwardRef(Comp);
}

export default AppForwardRef;
