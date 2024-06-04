import { createFromIconfontCN } from '@ant-design/icons';
import { Icon as LegacyIcon } from '@lingxiteam/icons';
import classnames from 'classnames';
import { useMemo } from 'react';
import { useLocale } from '../../utils/hooks/useLocale';
import { IconCfg, UseIconProps } from '../PropsType';

export const ICON_FILE_IMAGE = 'ICON_IMAGE';
export const ICON_FILE_ICONFONT = 'ICONFONT';

/**
 * 判断 icon 配置是否有效
 * 注：需要与下述渲染判断逻辑保持同步！
 * @param icon
 */
export const handleIsValidIconCfg = (icon: IconCfg) => {
  if (icon?.svgContent) {
    return true;
  }

  if (icon?.fontAddress) {
    return true;
  }

  if (icon?.iconFile && Object.keys(icon.iconFile).length > 0) {
    if (
      [ICON_FILE_ICONFONT, ICON_FILE_IMAGE].includes(
        icon?.iconFile?.fileSubType,
      )
    ) {
      return true;
    }
    return false;
  }

  if (icon?.iconFileInfo && Object.keys(icon.iconFileInfo).length > 0) {
    const { svgContent, materialId, fileName } = icon.iconFileInfo || {};
    if (svgContent) {
      return true;
    }
    if (materialId && fileName) {
      return true;
    }
    return false;
  }

  if (icon?.isIconFont) {
    return true;
  }

  if (icon?.type && icon?.theme) {
    return true;
  }

  return false;
};

const useIcon = (props: UseIconProps) => {
  const {
    isUsePrimary: nIsUsePrimary,
    rotate,
    iconItems,
    mode,
    icon: myIcon = {},
    placeholder = null,
    getFileIconUrl = () => {},
    getDesignPlatormIconUrl = () => {},

    // ---- FIXME: 以下配置暂时保留，但新功能请从 icon 传入，禁止使用-----
    type: nType,
    theme: nTheme,
    isIconFont: nIsIconFont,
    fontAddress: nFontAddress,
    svgContent: nSvgContent,
    iconFileInfo: nIconFileInfo,
    iconFile: nIconFile,
    // ----------------

    visible = true,
    getEngineApis,
    // hidden, // TODO: 不知道做什么用？
    ...resProps
  } = props;

  const { getLocale } = useLocale(getEngineApis?.());

  const {
    type,
    theme,
    isIconFont,
    fontAddress,
    svgContent,
    iconFileInfo,
    iconFile,
    isUsePrimary,
    color,
  } = useMemo(() => {
    const iconInfo =
      Array.isArray(iconItems) &&
      (iconItems.find((c) => c.rule) || iconItems[0]);
    if (mode === 'custom' && iconInfo && !myIcon?.isAction) {
      return {
        type: iconInfo?.icon?.type,
        theme: iconInfo?.icon?.theme,
        isIconFont: iconInfo?.icon?.isIconFont,
        fontAddress: iconInfo?.icon?.fontAddress,
        svgContent: iconInfo?.icon?.svgContent,
        iconFileInfo: iconInfo?.icon?.iconFileInfo,
        iconFile: iconInfo?.icon?.iconFile,
        isUsePrimary: iconInfo?.isUsePrimary,
        color: iconInfo?.color,
      };
    }
    return {
      type: myIcon.type || nType,
      theme: myIcon.theme || nTheme,
      isIconFont: myIcon.isIconFont || nIsIconFont,
      fontAddress: myIcon.fontAddress || nFontAddress,
      svgContent: myIcon.svgContent || nSvgContent,
      iconFileInfo: myIcon.iconFileInfo || nIconFileInfo,
      iconFile: myIcon.iconFile || nIconFile,
      isUsePrimary: nIsUsePrimary,
    };
  }, [
    iconItems,
    mode,
    JSON.stringify(myIcon),
    nIconFile,
    nIconFileInfo,
    nSvgContent,
    nFontAddress,
    nIsIconFont,
    nTheme,
    nType,
    nIsUsePrimary,
  ]);

  const renderIcon = () => {
    if (svgContent) {
      return (
        <div
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: svgContent,
          }}
        />
      );
    }

    const _style = {
      ...resProps?.style,
      color: isUsePrimary ? undefined : color || resProps.style?.color,
    };

    // 图标来源于 iconfont 在线
    if (fontAddress) {
      const IconFont = createFromIconfontCN({
        scriptUrl: fontAddress,
      });
      return (
        <IconFont
          type={type}
          rotate={rotate}
          {...resProps}
          style={_style}
          className={`ued-icon ${resProps?.className || ''} ${
            isUsePrimary ? 'fill-primary' : ''
          }`}
        />
      );
    }

    // 图标来源于 文件资源
    if (iconFile && Object.keys(iconFile).length > 0) {
      const { fileId, fileCode, fileHttp } = iconFile;
      const { getFileIconUrlByCode, getFileIconUrlById } =
        getFileIconUrl() || {};

      let iconUrl;
      if (fileId && typeof getFileIconUrlById === 'function') {
        iconUrl = getFileIconUrlById(fileId);
      } else if (fileCode && typeof getFileIconUrlByCode === 'function') {
        iconUrl = getFileIconUrlByCode(fileCode);
      } else if (fileHttp) {
        iconUrl = fileHttp;
      }

      switch (iconFile?.fileSubType) {
        // 文件是图片
        case ICON_FILE_IMAGE:
          return (
            <img
              alt={getLocale?.('icon.imgFormatWarning')}
              src={iconUrl}
              {...resProps}
              style={{
                ...(resProps.style || {}),
                color: isUsePrimary
                  ? undefined
                  : color || resProps.style?.color,
                width: resProps?.style?.fontSize,
                height: resProps?.style?.fontSize,
              }}
              className={`ued-icon ${resProps?.className || ''} ${
                isUsePrimary ? 'fill-primary' : ''
              }`}
            />
          );
        // 文件是 iconfont.js
        case ICON_FILE_ICONFONT: {
          const IconFont = createFromIconfontCN({
            scriptUrl: iconUrl,
          });
          return (
            <IconFont
              type={type}
              rotate={rotate}
              {...resProps}
              style={_style}
              className={`ued-icon ${resProps?.className || ''} ${
                isUsePrimary ? 'fill-primary' : ''
              }`}
            />
          );
        }
        default:
          return placeholder;
      }
    }

    // 图标来源于 设计平台
    if (iconFileInfo && Object.keys(iconFileInfo).length > 0) {
      const { svgContent, materialId, fileName } = iconFileInfo || {};
      const designPlatformiconCls = 'ued-icon-of-design-platform';
      if (svgContent) {
        return (
          <span
            style={_style}
            className={classnames(
              'anticon',
              `ued-icon ${designPlatformiconCls} ${resProps?.className || ''}`,
            )}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: svgContent }}
          />
        );
      }
      if (materialId && fileName) {
        const iconUrl = getDesignPlatormIconUrl(materialId, fileName);
        return (
          <img
            className={`ued-icon ${designPlatformiconCls} ${
              resProps?.className || ''
            }`}
            src={iconUrl}
            alt=""
          />
        );
      }
      return placeholder;
    }

    // 存量存在项目本地的 iconfont 配置数据 ？？
    if (isIconFont) {
      return (
        <svg
          style={_style}
          aria-hidden="true"
          className={`ued-icon ${resProps?.className || ''} ${
            isUsePrimary ? 'fill-primary' : ''
          }`}
        >
          <use xlinkHref={`#${type}`} />
        </svg>
      );
    }

    // 其他认为，图标为 antd 默认内置图标
    if (type && theme) {
      return (
        <LegacyIcon
          type={type}
          theme={theme}
          rotate={rotate}
          {...resProps}
          style={_style}
          className={`ued-icon ${resProps?.className || ''} ${
            isUsePrimary ? 'fill-primary' : ''
          }`}
        />
      );
    }

    return placeholder;
  };

  return visible ? renderIcon() : null;
};

export { useIcon };
