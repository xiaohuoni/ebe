import { useEffect, useMemo, useRef } from 'react';

export const useDynamicDataContainer = ({
  dynamicHelper,
}: {
  dynamicHelper?: any;
}) => {
  const dynamicPageRef = useRef<any>(null);

  useEffect(() => {
    dynamicHelper?.updateSandboxContext(
      () => dynamicPageRef.current?.sandboxContext,
    );
  }, [dynamicHelper, dynamicPageRef.current]);

  const staticAttrKeys = useMemo(() => {
    if (dynamicHelper?.event) {
      return dynamicHelper?.event?.staticAttrKeys || [];
    }
    return [];
  }, [dynamicHelper]);

  return {
    dynamicPageRef,
    staticAttrKeys,
  };
};
