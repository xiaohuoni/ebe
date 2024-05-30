import { LingxiForwardRef } from '@lingxiteam/types';
import { Card, Skeleton } from 'antd';
import type { CardProps } from 'antd/lib/card';
import classnames from 'classnames';
import React, { useImperativeHandle, useMemo, useState } from 'react';
import CommIcon from '../Icon';
import { useHiddenStyle } from '../utils';
import useBackgroundStyle from '../View/useBackgroundStyle';
import useExtendBtn from './useExtendBtn';

export type FunctionHandleType = (e: any) => void;

export interface MyCardProps extends CardProps {
  prefixIcon?: any;
  name?: string;
  hasHeader?: boolean;
  hasIcon?: string;
  pageState: any;
  pagePublicState: any;
  className: string;
  cardIconType: string;
  titleColor: string;
  headerColor?: string;
  extend?: any;
  visible?: boolean;
  size?: any;
  onValueRelease?: FunctionHandleType;
  onSelectedRowsRelease?: FunctionHandleType;
  onSelectedRowKeysRelease?: FunctionHandleType;
  onSelectedKeysRelease?: FunctionHandleType;
  onEditingKeyRelease?: FunctionHandleType;
  onInlineEditRelease?: FunctionHandleType;
  onInlineSaveRelease?: FunctionHandleType;
  onSelectedDataRelease?: FunctionHandleType;
  extendNum?: number;
  backgroundType?: any;
  appId?: string;
  getEngineApis?: any;
}

const MyCard = LingxiForwardRef<any, MyCardProps>((props, ref) => {
  const {
    children,
    style,
    name,
    hasHeader,
    hasIcon,
    title,
    headerColor,
    extend,
    size = 'small',
    visible = true,
    onValueRelease,
    onSelectedRowsRelease,
    onSelectedRowKeysRelease,
    onSelectedKeysRelease,
    onEditingKeyRelease,
    onInlineEditRelease,
    onInlineSaveRelease,
    onSelectedDataRelease,
    pageState,
    pagePublicState,
    className,
    cardIconType,
    titleColor,
    backgroundType,
    appId,
    prefixIcon = {},
    getEngineApis,
    ...restProps
  } = props;
  const [loading, setLoading] = useState(props.loading);
  const engineApis = getEngineApis?.() || {};

  const { padding, ...restStyle } = style || {};
  const { backgroundStyle } = useBackgroundStyle({
    engineApis,
    backgroundType,
    appId,
    mode: 'engine',
  });

  const { renderExtendBtn } = useExtendBtn({ ...props, prefixCls: 'ued-card' });

  const headStyle = useMemo(() => {
    const s: React.CSSProperties = {};
    if (headerColor) {
      s.backgroundColor = headerColor;
    }
    if (hasHeader === false) {
      s.display = 'none';
    }
    return s;
  }, [headerColor, hasHeader]);
  const bodyStyleRelative = useMemo(() => {
    if (loading === true) {
      return {
        position: 'relative',
      };
    }
    return {};
  }, [loading]);
  const renderTitle = () => {
    const cardTitle = titleColor ? (
      <div style={{ color: titleColor }}>{title}</div>
    ) : (
      title
    );

    if (hasIcon || cardIconType) {
      switch (cardIconType) {
        case 'middle':
          return <div className="ued-card-title">{cardTitle}</div>;
        case 'left':
          return (
            <div className="ued-card-title ued-card-title-icon-left">
              {cardTitle}
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
          return (
            <div className="ued-card-title ued-card-title-icon-auto">
              <CommIcon
                icon={{
                  type: prefixIconType,
                  theme: prefixIconTheme,
                  isIconFont: prefixIconIsIconFont,
                  fontAddress: prefixIconFontAddress,
                  iconFile: prefixIconiconFile,
                  iconFileInfo: prefixIconIconFileInfo,
                }}
                engineApis={engineApis}
                getEngineApis={getEngineApis}
                $$componentItem={props.$$componentItem}
                className=""
              />
              {cardTitle}
            </div>
          );
        }
        case 'none':
          return cardTitle;
        default:
          return <div className="ued-card-title">{cardTitle}</div>;
      }
    } else {
      return cardTitle;
    }
  };

  useImperativeHandle(ref, () => ({
    setLoading: (_loading: boolean) => {
      setLoading(_loading);
    },
  }));

  const finalStyle = useHiddenStyle(visible, restStyle);
  // if (visible === false) {
  //   return null;
  // }
  return (
    <Card
      style={finalStyle}
      {...restProps}
      className={classnames('ued-card', className, {
        'ued-card-simple': cardIconType === 'middle',
      })}
      size={size}
      title={renderTitle()}
      headStyle={headStyle}
      bodyStyle={
        padding
          ? { padding, ...backgroundStyle, ...bodyStyleRelative }
          : { ...backgroundStyle, ...bodyStyleRelative }
      }
      extra={<div className="ued-card-extend">{renderExtendBtn()}</div>}
    >
      {/** Card 的loingd 会导致子容器重新刷新 */}
      {loading === true && (
        <Skeleton
          loading
          active
          paragraph={{ rows: 4 }}
          title={false}
          className="ued-card-children-skeleton"
        />
      )}
      {children}
    </Card>
  );
});

export default MyCard;
