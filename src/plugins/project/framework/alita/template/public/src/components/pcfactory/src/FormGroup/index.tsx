import { CaretDownOutlined } from '@ant-design/icons';
import { LingxiForwardRef } from '@lingxiteam/types';
import { Collapse } from 'antd';
import classNames from 'classnames';
import { CSSProperties, useMemo, useState } from 'react';
import { MyCardProps } from '../Card';
import useExtendBtn from '../Card/useExtendBtn';
import { FormChildren } from '../Form/Form';
import { FormContextProps, useForm } from '../utils';
import useBackgroundStyle from '../View/useBackgroundStyle';
import TitleComp from './TitleComp';

type CardProps = Pick<
  MyCardProps,
  | 'title'
  | 'name'
  | 'prefixIcon'
  | 'visible'
  | 'extendNum'
  | 'extend'
  | 'className'
  | 'backgroundType'
  | 'hasIcon'
>;
export interface FormGroupProps extends CardProps {
  appId?: string;
  getEngineApis?: any;
  required?: boolean;
  fold?: boolean;
  onFoldChange?: (fold: boolean) => void;
  iconType?: 'none' | 'line' | 'circle' | 'auto' | 'divider';
  style: CSSProperties & {
    titleColor?: string;
    titleFontSize?: number;
    titleLineHeight?: number;
    titleFontWeight?: number;
  };
  titleStyle?: 'none' | 'divider';
  'data-compid'?: string;
}

const FORM_GROUP_KEY = 'formGroup';
const prefixCls = 'ued-form-group';
const { Panel } = Collapse;
const FormGroup = LingxiForwardRef<any, FormGroupProps>((props) => {
  const {
    style = {},
    title,
    className,
    backgroundType,
    getEngineApis,
    appId,
    fold,
    onFoldChange,
    children,
    titleStyle,
    ...restProps
  } = props;
  const engineApis = getEngineApis?.() || {};
  const [foldKey, setFoldKey] = useState([FORM_GROUP_KEY]);
  const { backgroundStyle } = useBackgroundStyle({
    engineApis,
    backgroundType,
    appId,
    mode: 'engine',
  });
  const { colSpan, rowSpace, layout, colSpace } = useForm() as FormContextProps;

  const { containerStyle, headStyle, bodyStyle } = useMemo(() => {
    const {
      titleColor,
      titleFontSize,
      titleFontWeight,
      titleLineHeight,
      ...restStyle
    } = style;
    const container: CSSProperties = {
      ...(backgroundStyle || {}),
    };
    const head: CSSProperties = {
      color: titleColor,
      fontSize: titleFontSize,
      fontWeight: titleFontWeight,
      lineHeight: titleLineHeight,
    };
    const body: CSSProperties = {
      ...restStyle,
    };
    const containerKeys = ['margin', 'border'];
    Object.keys(body).forEach((k) => {
      const key = k.toLocaleLowerCase() || '';
      const hasKey = containerKeys.find(
        (innerKey) => key && key.indexOf(innerKey) === 0,
      );
      if (hasKey) {
        (container as any)[k] = body[k as keyof CSSProperties];
        delete body[k as keyof CSSProperties];
      }
    });
    return {
      containerStyle: container,
      headStyle: head,
      bodyStyle: body,
    };
  }, [backgroundStyle, style]);

  const { renderExtendBtn } = useExtendBtn({ ...props, prefixCls });

  return (
    <div
      data-compid={props?.['data-compid']}
      className={classNames(prefixCls, className)}
      style={containerStyle}
    >
      <Collapse
        {...restProps}
        expandIconPosition="end"
        activeKey={fold ? foldKey : [FORM_GROUP_KEY]}
        expandIcon={({ isActive }) => {
          return (
            fold && (
              <div
                className={`${prefixCls}-fold`}
                onClick={() => {
                  if (fold) {
                    onFoldChange?.(!(foldKey?.length > 0));
                    setFoldKey(foldKey?.length ? [] : [FORM_GROUP_KEY]);
                  }
                }}
              >
                <CaretDownOutlined rev="" rotate={isActive ? 0 : -90} />
              </div>
            )
          );
        }}
        {...restProps}
      >
        <Panel
          key="formGroup"
          className={classNames(
            `${prefixCls}-body-wrap`,
            `${prefixCls}-body-wrap-${titleStyle}`,
          )}
          header={
            <div
              className={classNames(`${prefixCls}-head-wrap`, className)}
              style={headStyle}
            >
              <div className={`${prefixCls}-title-box`}>
                <TitleComp
                  title={title}
                  getEngineApis={getEngineApis}
                  $$componentItem={props?.$$componentItem}
                  prefixCls={prefixCls}
                  iconType={props.iconType}
                  hasIcon={props.hasIcon}
                  prefixIcon={props.prefixIcon}
                />
              </div>
              {renderExtendBtn()}
            </div>
          }
        >
          <div className={`${prefixCls}-body`} style={bodyStyle}>
            <FormChildren
              rowSpace={rowSpace}
              layout={layout}
              colSpace={colSpace}
              colSpan={colSpan}
              engineApis={engineApis}
            >
              {children}
            </FormChildren>
          </div>
        </Panel>
      </Collapse>
    </div>
  );
});

export default FormGroup;
