import { CSSProperties, useMemo } from 'react';

const useHiddenStyle = (visible: boolean, style?: CSSProperties) => {
  const finalStyle = useMemo<CSSProperties>(() => {
    if (!visible) {
      if (style) {
        const _style = { ...style };
        _style.display = 'none';
        return _style;
      }
      return { display: 'none' };
    }
    return style || {};
  }, [visible]);

  return finalStyle;
};

export default useHiddenStyle;
