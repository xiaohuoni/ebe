import { EngineBaseProps } from '@lingxiteam/types';
import classNames from 'classnames';
import React, { useMemo } from 'react';
import Icon from '../../Icon';
import { dateToFormatter, toDate } from '../../utils/date';
import './dform.less';

const prefixCls = 'lcdp-dformwrapper';

interface DformWrapperProps {
  style?: React.CSSProperties;
  visible: boolean;
  children: any;
  ctmCoverStyle?: any;
  getEngineApis: EngineBaseProps['getEngineApis'];
}

const DFormWrapper: React.FC<DformWrapperProps> = (props) => {
  const { children, style, visible, ctmCoverStyle, getEngineApis } = props;
  const { useTopContainerHidden } = getEngineApis?.() || {};
  // 获取上层容器是否被隐藏
  const topHidden = useTopContainerHidden?.() || false;
  // const [, hidden] = useStatus(children?.props);
  // const { visible = true } = useContext(DFormContext) || {};

  // const titleProps = useMemo(() => {
  //   if (React.isValidElement(children)) {
  //     const { props: cProps }: any = children;
  //     const { titleProps: tProps, fieldProps, required, title, subTitle, extra } = cProps || {};
  //     return {
  //       ...(tProps || {}),
  //       key: fieldProps,
  //       hidden: visible ? hide ?? hidden : false,
  //       required,
  //       hasStar: true,
  //       title,
  //       subTitle,
  //       extra,
  //       fieldProps,
  //     };
  //   }
  //   return {};
  // }, [children, hidden, hide, visible]);

  const dformKeys = [
    'DformInput',
    'DformInputNumber',
    'DformRadio',
    'DformTextArea',
    'DformSwitch',
    'DAddressPicker',
    'DformSelect',
    'DformPicker',
    'DMultiplePicker',
    'DformImagePicker',
    'DformFile',
    'DformDate',
    'DCheckbox',
    'DformRangePicker',
    'DformRate',
  ];
  const dformStyleProps = {} as any;

  const dformExtraKeys = [
    'DformInput',
    // 'DformInputNumber',
    'DAddressPicker',
    'DformPicker',
    'DformSelect',
    'DformDate',
    'DMultiplePicker',
    'DformRangePicker',
    'Card',
  ];

  // const dformContentSettingKeys = [
  //   'DformInput',
  //   'DformInputNumber',
  //   'DformTextArea',
  // ];

  const getExtra = () => {
    const {
      onDformItemExtra,
      icon = {},
      fieldProps,
      defaultValue,
      postfix,
      postfixIconPosition,
      iconColor,
    } = children?.props || {};
    const { type, theme, isIconFont, fontAddress, iconFileInfo, iconFile } =
      icon;
    let value = defaultValue;
    if (children?.props?.dformType === 'DAddressPicker') {
      value = value?.value;
    }
    if (children?.props?.dformType === 'DformDate') {
      const { formatter = 'YYYY-MM-DD HH:mm:ss' } = children?.props || {};
      value = dateToFormatter(formatter, toDate(value));
    }
    let after = null;
    const style = {
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      whiteSpace: 'nowrap',
    };
    if (type) {
      after = (
        // @ts-ignore
        <Icon
          icon={{
            type,
            theme,
            isIconFont,
            iconFileInfo,
            fontAddress,
            iconFile,
          }}
          className={`${prefixCls}-extra`}
          style={{ color: iconColor }}
          getEngineApis={getEngineApis}
        />
      );
    }
    if (postfix) {
      switch (postfixIconPosition) {
        case 'after':
          after = (
            // @ts-ignore
            <span style={{ ...style }}>
              {postfix}
              {after}
            </span>
          );
          break;
        case 'before':
        default:
          after = (
            // @ts-ignore
            <span style={{ ...style }}>
              {after}
              {postfix}
            </span>
          );
          break;
      }
    }

    return (
      <span
        className={`${prefixCls}-right-content`}
        style={after ? { marginLeft: '8px' } : {}}
        onClick={
          onDformItemExtra
            ? () => onDformItemExtra({ [fieldProps]: value })
            : undefined
        }
      >
        {after}
      </span>
    );
  };
  const getOriginStyle = (props: any) => {
    const {
      borderSetting,
      borderRadius,
      backgroundColor,
      color,
      fontSize,
      fontWeight,
      textAlign,
      lineHeight,
      boxStyle,
      titleStyle,
      coverStyle,
    } = props || {};
    const originStyle = {
      backgroundColor,
      fontSize,
      fontWeight,
      color,
      borderRadius,
      borderSetting,
      boxStyle,
      titleStyle,
      coverStyle,
      textAlign,
      lineHeight,
    };
    return originStyle;
  };

  if (dformKeys.includes(children?.props?.dformType)) {
    // 以下是存量数据，11月份版本兼容，3个月后可替换成从children?.props?.style 取值
    // 存量数据默认有children?.props?.style={textAlign:"right"},需要针对这一个属性单独处理，3个月后可不对textAlign做处理
    const propsStyle = { ...children?.props?.style };
    if (children?.props.textAlign && propsStyle?.textAlign) {
      propsStyle.textAlign = children?.props?.textAlign;
    }
    // 对测试期间地址选择器的textAlign进行兼容
    if (
      children?.props?.dformType === 'DAddressPicker' &&
      children?.props?.style?.textAlign
    ) {
      propsStyle.textAlign = children.props.style.textAlign;
    }
    const mewStyle: any = { ...getOriginStyle(children?.props), ...propsStyle };
    const {
      inputContent,
      coverStyle,
      titleStyle,
      inputBackground,
      inputBorderRadius,
      borderSetting,
      borderRadius,
      backgroundColor,
      color,
      fontSize,
      fontWeight,
      textAlign,
      lineHeight,
      inputColor,
      inputFontSize,
      inputLineHeight,
      inputFontWeight,
      inputTextAlign,
      boxStyle,
    } = mewStyle;
    let borderArr: string[] = [];
    if (borderSetting) {
      borderArr = borderSetting.split(' ');
    }
    dformStyleProps.boxStyle = { borderRadius, backgroundColor, ...boxStyle };
    dformStyleProps.titleStyle = {
      color,
      fontSize,
      fontWeight,
      lineHeight,
      ...titleStyle,
    };
    dformStyleProps.coverStyle = {
      color: inputColor || color,
      fontSize: inputFontSize || fontSize,
      fontWeight: inputFontWeight || fontWeight,
      textAlign: inputTextAlign || textAlign,
      lineHeight: inputLineHeight || lineHeight,
      ...coverStyle,
    };
    if (inputContent === '2') {
      if (inputBackground) {
        dformStyleProps.coverStyle.background = inputBackground;
      }
      dformStyleProps.coverStyle.borderRadius = inputBorderRadius || '4px';
    }
    // 自定义style转换
    if (ctmCoverStyle && Object.keys(ctmCoverStyle).length) {
      Object.keys(ctmCoverStyle).forEach((styleK: string) => {
        if (propsStyle[styleK]) {
          dformStyleProps.coverStyle[ctmCoverStyle[styleK]] =
            propsStyle[styleK];
        }
      });
    }
    // 边框属性处理
    if (borderArr.length) {
      let borderStyleStr = '';
      borderArr.forEach((s, i) => {
        if (i) {
          borderStyleStr += `${s} `;
        }
      });
      dformStyleProps.boxStyle[borderArr[0]] = borderStyleStr;
    }
  }

  if (dformExtraKeys.includes(children?.props?.dformType)) {
    dformStyleProps.extra = getExtra();
    if (
      children?.props?.dformType === 'DformRangePicker' &&
      children?.props.style?.inputContent === '2'
    ) {
      dformStyleProps.showExtra = false;
    } else {
      dformStyleProps.showExtra = !!dformStyleProps.extra;
    }
    if (
      children?.props?.dformType !== 'DformInput' &&
      children?.props?.dformType !== 'DformInputNumber'
    ) {
      dformStyleProps.arrow = !getExtra();
    }
  }

  // 设置内容样式
  // if (dformKeys.includes(children?.props?.dformType)) {
  //   const childrenProps = children?.props;
  //   // 输入区域样式
  //   const coverStyle = { ...dformStyleProps.coverStyle } || {};
  //   const titleStyle = { ...dformStyleProps.titleStyle } || {};
  //   const style = { ...childrenProps?.style };
  //   coverStyle.color = style?.inputColor || childrenProps?.inputColor || '#1c242e';
  //   coverStyle.fontSize = style?.inputFontSize || childrenProps?.inputFontSize || '16px';
  //   coverStyle.fontWeight = style?.inputFontWeight || childrenProps?.inputFontWeight || '400';
  //   coverStyle.lineHeight = style?.inputLineHeight || childrenProps?.inputLineHeight || '24px';
  //   coverStyle.textAlign = style?.textAlign || childrenProps?.textAlign || 'right';
  //   // inputContent 用于设置内容部分背景及圆角，值为'2'时生效，默认背景颜色不设置，圆角为4px
  //   if (style?.inputContent === '2') {
  //     if (style?.inputBackground) {
  //       coverStyle.background = style.inputBackground;
  //     }
  //     coverStyle.borderRadius = style?.inputBorderRadius || '4px';
  //   }
  //   // 标题样式
  //   titleStyle.lineHeight = style?.lineHeight || '24px';
  //   titleStyle.color = style?.color || childrenProps?.color || '#1c242e';
  //   titleStyle.fontSize = style?.fontSize || childrenProps?.fontSize || '16px';
  //   titleStyle.fontWeight = style?.fontWeight || '400';
  //   // 手写的自定义样式级别高于设置样式
  //   dformStyleProps.coverStyle = { ...coverStyle, ...childrenProps?.coverStyle, ...childrenProps?.style?.coverStyle };
  //   dformStyleProps.titleStyle = { ...titleStyle, ...childrenProps?.titleStyle, ...childrenProps?.style?.titleStyle };
  // }
  // console.log("dformStyleProps：", dformStyleProps);

  // 标题图标
  const { titleIcon, prefixIcon, color, fontSize, titleExtension } =
    children?.props || {};
  const titleIconRender = useMemo(() => {
    if (
      titleIcon === 'icon' &&
      (prefixIcon?.prefixIconType || prefixIcon?.prefixIconiconFile) &&
      !titleExtension
    ) {
      return (
        // @ts-ignore
        <Icon
          icon={{
            type: prefixIcon?.prefixIconType,
            theme: prefixIcon?.prefixIconTheme,
            isIconFont: prefixIcon?.prefixIconIsIconFont,
            fontAddress: prefixIcon?.prefixIconFontAddress,
            iconFileInfo: prefixIcon?.prefixIconIconFileInfo,
            iconFile: prefixIcon?.prefixIconiconFile,
          }}
          className="cust-icon-theme"
          style={{
            fontSize,
            width: fontSize,
            height: fontSize,
            marginRight: '6px',
          }}
          getEngineApis={getEngineApis}
        />
      );
    }
    return '';
  }, [titleIcon, prefixIcon, color, fontSize]);

  const myProps = { titleExtension: titleIconRender, ...children?.props } || {};
  // if (children?.props?.status === '4') { // 设置表单只读
  //   myProps.readonly = true;
  // } else {
  //   myProps.readonly = false;
  // }
  return (
    <div
      className={classNames(prefixCls, {
        [`ued-${children?.props?.dformType}`]: true,
        [`${prefixCls}-hidden`]: !visible,
      })}
      style={style}
      aria-label={children?.props?.fieldProps}
      aria-disabled={children?.props?.disabled}
    >
      {React.isValidElement(children)
        ? React.cloneElement(children, {
            ...myProps,
            ...dformStyleProps,
            fieldProps: (children?.props as any)?.fieldProps || '',
            // ...titleProps,
            error: false,
            hidden: topHidden || !visible, // 隐藏模式下表单模式不校验
          })
        : children}
    </div>
  );
};

DFormWrapper.displayName = 'DFormWrapper';
export default DFormWrapper;
