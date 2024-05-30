import { EngineBaseProps, IEdCompBaseProps } from '@lingxiteam/types';
import React from 'react';
import { FormGroupProps } from '.';
import Icon from '../Icon';
import IconED from '../Icon/IconED';

type TitleProps = Pick<
  FormGroupProps,
  'hasIcon' | 'iconType' | 'prefixIcon' | 'title'
>;
type TitleCompProps = {
  prefixCls: string;
  isED?: boolean;
  getEngineApis?: EngineBaseProps['getEngineApis'];
  getEdEngineApi?: IEdCompBaseProps['getEdEngineApi'];
  $$componentItem?:
    | EngineBaseProps['$$componentItem']
    | IEdCompBaseProps['$$componentItem'];
} & TitleProps;
const TitleComp = (props: TitleCompProps) => {
  const {
    iconType,
    hasIcon,
    title,
    prefixCls,
    prefixIcon = {},
    isED,
    getEdEngineApi,
    getEngineApis,
    $$componentItem,
  } = props || {};
  const titlePrefix = `${prefixCls}-title`;
  const renderTitle = () => {
    if (hasIcon || iconType) {
      switch (iconType) {
        case 'line':
          return (
            <div className={`${titlePrefix} ${titlePrefix}-icon-line`}>
              {title}
            </div>
          );
        case 'auto': {
          const {
            prefixIconIsIconFont,
            prefixIconFontAddress,
            prefixIconTheme,
            prefixIconType,
            prefixIconiconFile,
            prefixIconIconFileInfo,
          } = prefixIcon;
          let icon = null;
          if (!isED && getEngineApis) {
            icon = (
              <Icon
                icon={{
                  type: prefixIconType,
                  theme: prefixIconTheme,
                  isIconFont: prefixIconIsIconFont,
                  fontAddress: prefixIconFontAddress,
                  iconFile: prefixIconiconFile,
                  iconFileInfo: prefixIconIconFileInfo,
                }}
                engineApis={getEngineApis?.()}
                getEngineApis={getEngineApis}
                $$componentItem={$$componentItem!}
                className=""
              />
            );
          } else if (getEdEngineApi) {
            icon = (
              <IconED
                icon={{
                  type: prefixIconType,
                  theme: prefixIconTheme,
                  isIconFont: prefixIconIsIconFont,
                  fontAddress: prefixIconFontAddress,
                  iconFile: prefixIconiconFile,
                  iconFileInfo: prefixIconIconFileInfo,
                }}
                getEdEngineApi={getEdEngineApi}
                $$componentItem={props.$$componentItem}
              />
            );
          }
          return (
            <div className={`${titlePrefix} ${titlePrefix}-icon-auto`}>
              {icon}
              {title}
            </div>
          );
        }
        case 'circle':
          return (
            <div className={`${titlePrefix} ${titlePrefix}-circle`}>
              {title}
            </div>
          );
        default:
          return <div className={`${titlePrefix}`}>{title}</div>;
      }
    } else {
      return <div className={`${titlePrefix}`}>{title}</div>;
    }
  };
  return renderTitle();
};

export default TitleComp;
