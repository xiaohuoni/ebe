import { createFromIconfontCN } from '@ant-design/icons';
import { Icon as LegacyIcon } from '@lingxiteam/icons';
import { LingxiForwardRef } from '@lingxiteam/types';
import classnames from 'classnames';
import { useEffect, useImperativeHandle, useMemo, useState } from 'react';
import useHiddenStyle from '../utils/hooks/useHiddenStyle';
import { useListenProps } from '../utils/hooks/useListenState';
import './index.less';

export interface IconFileProps {
  fileId: string;
  fileCode: string;
  fileSubType: 'ICON_IMAGE' | 'ICONFONT';
}

export interface MyIconProps {
  type?: string;
  isIconFont?: boolean;
  fontAddress?: string;
  svgContent?: string;
  theme?: string;
  iconFileInfo?: any;
  iconFile?: IconFileProps;
}
export interface IconProps {
  icon?: MyIconProps;
  type?: string;
  isIconFont?: boolean;
  fontAddress?: string;
  svgContent?: string;
  theme?: string;
  style?: any;
  className?: any;
  rotate?: any;
  iconFileInfo?: any;
  iconFile?: IconFileProps;
  appId?: any;
  color?: any;
  size?: any;
  visible?: boolean;
  onClick?: () => void;
  mode?: string;
  iconItems?: any;
  isUsePrimary?: boolean;
  extendProps?: Record<string, any>;
  name?: string;
}
const MyIcon = LingxiForwardRef<any, IconProps>((props, ref) => {
  const {
    icon: propsIcon = {},
    rotate,
    size,
    style,
    theme: curTheme,
    isIconFont: curIsIconFont,
    fontAddress: curFontAddress,
    svgContent: curSvgContent,
    iconFileInfo: curIconFileInfo,
    iconFile: curIconFile,
    visible = true,
    onClick,
    mode,
    iconItems,
    type,
    isUsePrimary: curIsUsePrimary,
    getEngineApis,
    $$componentItem,
    extendProps,
    ...restProps
  } = props;
  const {
    getAppFileUrlByFileCode = () => {
      console.warn('引擎能力未配置getAppFileUrlByFileCode');
    },
    getMaterialFile = () => {
      console.warn('引擎能力未配置getMaterialFile');
    },
  } = getEngineApis?.() || {};

  const [icon, setIcon] = useListenProps(propsIcon);
  const [scriptUrl, setScripUrl] = useState<any>();
  const displayStyle = useHiddenStyle(visible);
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
    const iconInfo =
      Array.isArray(iconItems) &&
      (iconItems.find((c) => c.rule) || iconItems[0]);
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
    if (iconFile && Object.keys(iconFile).length > 0) {
      const { fileCode, fileHttp } = iconFile;
      setScripUrl(fileHttp || getAppFileUrlByFileCode(fileCode));
    } else if (fontAddress) {
      setScripUrl(fontAddress);
    } else if (iconFileInfo && !iconFileInfo.svgContent) {
      if (iconFileInfo.materialId && iconFileInfo.fileName) {
        setScripUrl(
          getMaterialFile(iconFileInfo.materialId, iconFileInfo.fileName),
        );
      }
    } else {
      setScripUrl('');
    }
  }, [iconFile, fontAddress]);

  useImperativeHandle(ref, () => ({
    changeContent(_content: any) {
      setIcon({ ..._content, type: _content.iconType });
    },
  }));

  const curClassName = classnames({
    /**
     * 用于主题，如果是单独使用的是，在className 增加一个变量，防止在主题设置图标的时候，影响影响引用图标的其他控件
     */
    'factory-icon': $$componentItem?.type === 'Icon',
    [restProps?.className]: restProps?.className,
    'cust-icon': true,
    'cust-icon-theme': isUsePrimary,
    [`cust-icon-${size}`]: size,
  });

  const curStyle = useMemo(
    () => ({
      width: style?.fontSize || style?.width,
      height: style?.fontSize || style?.height,
      fontSize: style?.fontSize || style?.width, // 兼容存量数据
      ...(style || {}), // 修复下从浩鲸D升上来图表丢失部分样式的问题
      color: isUsePrimary
        ? undefined
        : color || style?.color || restProps?.color,
      fill: isUsePrimary
        ? undefined
        : color || style?.color || restProps?.color,
    }),
    [color],
  );

  // svg字符串
  if (svgContent) {
    return (
      <div
        className={curClassName}
        style={{
          ...curStyle,
          ...displayStyle,
          transform: `rotate(${rotate}deg)`,
        }}
        onClick={onClick}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: svgContent,
        }}
      />
    );
  }

  // 来源在线iconFont 在线
  if (fontAddress || iconFile?.fileSubType === 'ICONFONT' || isIconFont) {
    const IconFont = createFromIconfontCN({
      scriptUrl,
    });
    return (
      <IconFont
        type={curType}
        rotate={rotate}
        {...extendProps}
        style={{
          ...curStyle,
          ...displayStyle,
        }}
        className={curClassName}
      />
    );
  }

  // 来自PC逻辑，app显示异常
  // if (iconFile?.fileSubType === 'ICONFONT' || isIconFont) {
  //   const IconFont = createFromIconfontCN({
  //     scriptUrl: iconUrl,
  //   });
  //   // 采用项目本地的iconfont文件
  //   return (
  //     <svg
  //       style={{
  //         ...curStyle,
  //         ...displayStyle,
  //         transform: `rotate(${rotate}deg)`,
  //       }}
  //       aria-hidden="true"
  //       className={curClassName}
  //     >
  //       <use xlinkHref={`#${curType}`} />
  //     </svg>
  //   );
  // }

  // 兼容antd的图标
  if (
    theme &&
    !['cross-circle', 'cross-circle-o'].includes(curType) &&
    Object.keys(iconFileInfo || {})?.length < 1
  ) {
    // 兼容原来的antd的图标
    return (
      <LegacyIcon
        type={curType}
        rotate={rotate}
        theme={theme}
        onClick={onClick}
        {...extendProps}
        style={{
          ...curStyle,
          ...displayStyle,
        }}
        className={curClassName}
      />
    );
  }

  const shouldSysTag =
    curType && iconFileInfo && Object.keys(iconFileInfo)?.length > 0;

  if (shouldSysTag && iconFileInfo.svgContent) {
    return (
      <span
        className={curClassName}
        style={{
          ...curStyle,
          ...displayStyle,
          transform: `rotate(${rotate}deg)`,
        }}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: iconFileInfo.svgContent }}
      />
    );
  }

  if (shouldSysTag) {
    return (
      <img
        className={curClassName}
        style={{
          ...curStyle,
          ...displayStyle,
          transform: `rotate(${rotate}deg)`,
        }}
        src={scriptUrl}
        alt=""
      />
    );
  }

  if (curType) {
    // 删除antd-v2-的icon
    return (
      <LegacyIcon
        type={curType}
        rotate={rotate}
        theme={theme}
        onClick={onClick}
        {...extendProps}
        style={curStyle}
        className={curClassName}
      />
    );
  }

  if (iconFile?.fileSubType === 'ICON_IMAGE' && scriptUrl) {
    return (
      <img
        onClick={onClick}
        alt={props.name}
        src={scriptUrl}
        {...extendProps}
        style={{
          ...curStyle,
          ...displayStyle,
          transform: `rotate(${rotate}deg)`,
        }}
        className={curClassName}
      />
    );
  }
  return null;
});

MyIcon.displayName = 'Icon';
export default MyIcon;
