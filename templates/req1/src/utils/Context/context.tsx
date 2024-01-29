import React from 'react';

export const Context = React.createContext<{
  ModalManagerRef: React.MutableRefObject<any>;
  refs: React.MutableRefObject<any>;
  appId: string;
}>({} as any);
