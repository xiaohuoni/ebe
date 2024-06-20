import { LingxiForwardRef } from '@lingxiteam/types';
import { useImperativeHandle, useRef, useState } from 'react';
import StepProcessLoader from './loader';
import type { MyStepProcessProps } from './StepProcess';

const StepProcess = LingxiForwardRef<unknown, MyStepProcessProps>(
  (props, ref) => {
    const progressRef = useRef<MyStepProcessProps>(null);
    const [refData, setData] = useState<any[]>();
    const [refDisabled, setDisabled] = useState(false);

    useImperativeHandle(ref, () => ({
      setValue: (options: any[]) => {
        if (Array.isArray(options)) {
          setData(options);
        }
      },
      setDisabled: (v: boolean) => {
        setDisabled(v);
      },
      get disabled() {
        return progressRef.current?.disabled;
      },
      setStatus: (status: string) => {
        setDisabled(`${status}` !== '1');
      },
      setEditor: (e: boolean) => {
        setDisabled(false);
      },
    }));
    return (
      <StepProcessLoader
        {...props}
        refData={refData}
        refDisabled={refDisabled}
        ref={progressRef}
      />
    );
  },
);

export default StepProcess;
