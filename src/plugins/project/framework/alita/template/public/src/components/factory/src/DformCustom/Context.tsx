import type { FormInstance } from 'rc-field-form';
import React from 'react';

export interface DFormCustomContextProviderType {
  inCustomForm: true;
  name: string;
  error: any;
  onChange: (...v: any[]) => void;
  disabled?: boolean;
  getRules: ({ compName }?: any) => any;
  visible: boolean;
  value: unknown;
  message?: string;
  form: FormInstance;
}

const DFormCustomContext = React.createContext<
  DFormCustomContextProviderType | { inCustomForm: false }
>({
  inCustomForm: false,
});

DFormCustomContext.displayName = 'DFormCustomContext';

const DFormCustomProvider = DFormCustomContext.Provider;

const useDformCustom = () => {
  return React.useContext(DFormCustomContext);
};

export { DFormCustomContext, useDformCustom, DFormCustomProvider };
