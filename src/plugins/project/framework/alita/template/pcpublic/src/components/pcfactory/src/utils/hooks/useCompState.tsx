import { useMemo } from 'react';

export const renderHTML = (des: string) => {
  if (des) {
    // eslint-disable-next-line react/no-danger
    return (
      <span
        dangerouslySetInnerHTML={{ __html: des }}
        style={{ display: 'flex', justifyContent: 'center' }}
      />
    );
  }
  return null;
};

interface CompStateProps {
  dataState: any;
  type: 'loading' | 'empty';
  tip?: string;
}

const useCompState = (props: CompStateProps) => {
  const { dataState, type, tip } = props;
  const state = useMemo(() => dataState?.[type], [dataState?.[type]]);

  const stateTip = useMemo(
    () => renderHTML(tip || state?.tip),
    [state?.tip, tip],
  );

  const stateIcon = useMemo(() => {
    if (state?.iconIsCustom && state?.icon) {
      return renderHTML(state.icon);
    }
    return null;
  }, [state?.iconIsCustom, state?.icon]);

  return {
    stateIcon,
    stateTip,
  };
};

export default useCompState;
