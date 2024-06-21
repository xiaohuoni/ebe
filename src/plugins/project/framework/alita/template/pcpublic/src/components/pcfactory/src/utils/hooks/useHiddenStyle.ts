import { CSSProperties, useMemo } from 'react';

/**
 *
 * @param visible 是否显示
 * @param style 样式
 * @param visibility 是否隐藏占位
 * @returns
 */
const useHiddenStyle = (
  visible: boolean,
  style?: CSSProperties,
  visibility?: boolean,
) => {
  const finalStyle = useMemo<CSSProperties>(() => {
    if (!visible) {
      if (style) {
        const _style = { ...style };
        if (visibility) {
          _style.visibility = 'hidden';
          _style.transform = 'opacity 0.3s ease';
          _style.opacity = 0;
        } else {
          _style.display = 'none';
        }
        return _style;
      }
      if (visibility) {
        return {
          visibility: 'hidden',
          transform: 'opacity 0.3s ease',
          opacity: 0,
        };
      }
      return { display: 'none' };
    }
    return style || {};
  }, [visible, visibility]);

  return finalStyle;
};

export default useHiddenStyle;
