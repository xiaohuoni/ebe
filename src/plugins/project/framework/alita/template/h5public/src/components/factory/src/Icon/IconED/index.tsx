import { createFromIconfontCN } from '@ant-design/icons';
import { Icon as LegacyIcon } from '@lingxiteam/icons';
import { LingXiEdFC } from '@lingxiteam/types';
import classnames from 'classnames';
import { useEffect, useMemo, useState } from 'react';
import './index.less';

export interface IconFileEDProps {
  fileId: string;
  fileCode: string;
  fileSubType: 'ICON_IMAGE' | 'ICONFONT';
}

export interface MyIconEDProps {
  type?: string;
  isIconFont?: boolean;
  fontAddress?: string;
  svgContent?: string;
  theme?: string;
  iconFileInfo?: any;
  iconFile?: IconFileEDProps;
}

export interface IconEDProps {
  icon?: MyIconEDProps;
  type?: string;
  isIconFont?: boolean;
  fontAddress?: string;
  svgContent?: string;
  theme?: string;
  style?: any;
  className?: any;
  rotate?: any;
  iconFileInfo?: any;
  iconFile?: IconFileEDProps;
  size?: any;
  color?: any;
  mode?: string;
  iconItems?: any;
  isUsePrimary?: boolean;
}

const IconED: LingXiEdFC<IconEDProps> = (props) => {
  const {
    icon = {},
    type,
    rotate,
    size,
    style,
    mode,
    iconItems,
    isUsePrimary: curIsUsePrimary,
    theme: curTheme,
    isIconFont: curIsIconFont,
    fontAddress: curFontAddress,
    svgContent: curSvgContent,
    iconFileInfo: curIconFileInfo,
    iconFile: curIconFile,
    getEdEngineApi,
    $$componentItem,
    ...restProps
  } = props;
  const [scriptUrl, setScripUrl] = useState<any>();

  const {
    curType,
    iconFile,
    iconFileInfo,
    fontAddress,
    isIconFont,
    theme,
    svgContent,
    isUsePrimary,
    color,
  } = useMemo(() => {
    const iconInfo = Array.isArray(iconItems) && iconItems[0];
    if (mode === 'custom' && iconInfo) {
      return {
        curType: iconInfo?.icon?.type,
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
      curType: icon?.type || type,
      iconFile: icon?.iconFile || curIconFile,
      iconFileInfo: icon?.iconFileInfo || curIconFileInfo,
      fontAddress: icon?.fontAddress || curFontAddress,
      isIconFont: icon?.isIconFont || curIsIconFont,
      theme: icon?.theme || curTheme,
      svgContent: icon?.svgContent || curSvgContent,
    };
  }, [
    JSON.stringify(icon),
    type,
    curIconFile,
    curIconFileInfo,
    curFontAddress,
    curIsIconFont,
    curTheme,
    curSvgContent,
    mode,
    iconItems,
  ]);

  useEffect(() => {
    if (iconFile) {
      const { fileId, fileCode, fileHttp } = iconFile;
      (async () => {
        const { getAppFileUrlById, getAppFileUrlByFileCode } =
          getEdEngineApi?.() || {};
        if (fileId && getAppFileUrlById) {
          setScripUrl(getAppFileUrlById(fileId));
        } else if (fileCode && getAppFileUrlByFileCode) {
          setScripUrl(
            getAppFileUrlByFileCode({
              appId: $$componentItem?.appId || window.appId,
              fileCode,
            }),
          );
        } else if (fileHttp) {
          setScripUrl(fileHttp);
        }
      })();
    } else if (fontAddress) {
      setScripUrl(fontAddress);
    } else if (iconFileInfo && !iconFileInfo.svgContent) {
      const { getMaterialFile } = getEdEngineApi?.() || {};
      (async () => {
        if (iconFileInfo.materialId && iconFileInfo.fileName) {
          setScripUrl(
            getMaterialFile({
              materialId: iconFileInfo.materialId,
              fileName: iconFileInfo.fileName,
            }),
          );
        }
      })();
    } else {
      setScripUrl('');
    }
  }, [iconFile, fontAddress, iconFileInfo]);

  const curClassName = classnames({
    [restProps?.className]: restProps?.className,
    'cust-icon-ed': true,
    'cust-icon-theme': isUsePrimary,
    [`cust-icon-ed-${size}`]: size,
  });
  const curStyle = useMemo(
    () => ({
      width: style?.fontSize || style?.width,
      height: style?.fontSize || style?.height,
      fontSize: style?.fontSize || style?.width, // 兼容存量数据
      ...(style || {}),
      color: isUsePrimary
        ? undefined
        : color || style?.color || restProps?.color,
      fill: isUsePrimary
        ? undefined
        : color || style?.color || restProps?.color,
    }),
    [isUsePrimary, style, color],
  );

  if (svgContent) {
    return (
      <div
        className={curClassName}
        style={{
          ...curStyle,
          transform: `rotate(${rotate}deg)`,
        }}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: svgContent,
        }}
      />
    );
  }

  if (curType) {
    if (fontAddress || iconFile?.fileSubType === 'ICONFONT' || isIconFont) {
      if (scriptUrl) {
        const IconFont = createFromIconfontCN({
          scriptUrl,
        });
        return (
          <IconFont
            type={curType}
            rotate={rotate}
            {...restProps}
            style={curStyle}
            className={curClassName}
          />
        );
      }
      if (!fontAddress) {
        // 采用项目本地的iconfont文件
        return (
          <svg
            style={{
              ...curStyle,
              transform: `rotate(${rotate}deg)`,
            }}
            aria-hidden="true"
            className={curClassName}
          >
            <use xlinkHref={`#${curType}`} />
          </svg>
        );
      }
    } else if (
      theme &&
      !['cross-circle', 'cross-circle-o'].includes(curType) &&
      Object.keys(iconFileInfo || {})?.length < 1
    ) {
      // 兼容原来的antd-mobile的图标
      return (
        <LegacyIcon
          type={curType}
          rotate={rotate}
          theme={theme}
          {...restProps}
          style={curStyle}
          className={curClassName}
        />
      );
    } else if (iconFileInfo && Object.keys(iconFileInfo)?.length > 0) {
      if (iconFileInfo.svgContent) {
        return (
          <div
            className={curClassName}
            style={{
              ...curStyle,
              transform: `rotate(${rotate}deg)`,
            }}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: iconFileInfo.svgContent }}
          />
        );
      }
      return (
        <img
          className={curClassName}
          style={{
            ...curStyle,
            transform: `rotate(${rotate}deg)`,
          }}
          src={scriptUrl}
          alt=""
        />
      );
    } else if (curType) {
      return (
        <LegacyIcon
          type={curType}
          rotate={rotate}
          theme={theme}
          {...restProps}
          style={curStyle}
          className={curClassName}
        />
      );
    }
  }
  if (iconFile?.fileSubType === 'ICON_IMAGE' && scriptUrl) {
    return (
      <img
        alt="图片格式错误"
        src={scriptUrl}
        {...restProps}
        style={{
          ...curStyle,
          transform: `rotate(${rotate}deg)`,
        }}
        className={curClassName}
      />
    );
  }
  return null;
};

export default IconED;
