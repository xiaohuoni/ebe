import DynamicForm from '@lingxiteam/dform';
import { LingxiForwardRef } from '@lingxiteam/types';
import React, { useMemo } from 'react';
import Icon from '../Icon';
import CustomModule from '../utils/CustomModule';
import { useFormItem } from '../utils/hooks/useFormItem';
import CustomBtn from './CustomBtn';
import './index.less';
import { isJSX } from './utils';

const { Group } = DynamicForm;
const prefixCls = 'lcdp-dgroup';

export interface MyDGroupProps {
  groupTitleImg?: string;
  status?: string;
  extandPostion?: string;
  titleIcon?: string;
  prefixIcon?: any;
  style?: any;
  rowActions?: any;
  onChange?: (isShow: boolean) => void;
  onRowEdit?: () => void;
  onRowDetail?: () => void;
  onRowDelete?: () => void;
  fontSize?: number;
  lineHeight?: number;
  fontWeight?: number;
  color?: string;
  name: string;
  visible: boolean;
  title: string;
  readOnly: boolean;
}

const DGroup = LingxiForwardRef<any, MyDGroupProps>((props, ref) => {
  const {
    children,
    groupTitleImg,
    extandPostion,
    titleIcon = 'none',
    prefixIcon,
    style,
    rowActions = [],
    onChange,
    onRowEdit,
    onRowDetail,
    onRowDelete,
    fontSize = 16,
    lineHeight,
    fontWeight = 500,
    color = '#333',
    $$componentItem,
    getEngineApis,
    ...restProps
  } = props;
  const { visible, disabled, required } = useFormItem(ref, props);
  const renderIcon = (iconInfo: any) => {
    if (!iconInfo) {
      return null;
    }
    let iconView: React.ReactNode = null;
    // 不知道哪来的逻辑，先注释，三月后删除
    // if (prefixIcon && prefixIcon?.prefixIconIconFileInfo) {
    //   iconView = (
    //     <span
    //       className={`${prefixCls}-icon`}
    //       // eslint-disable-next-line react/no-danger
    //       dangerouslySetInnerHTML={{ __html: prefixIcon?.prefixIconIconFileInfo?.svgContent }}
    //     />
    //   );
    // } else {
    const {
      prefixIconType,
      prefixIconTheme,
      prefixIconIsIconFont,
      prefixIconFontAddress,
      prefixIconiconFile,
    } = iconInfo;
    iconView = (
      <span className={`${prefixCls}-icon`}>
        {/** @ts-ignore */}
        <Icon
          type={prefixIconType}
          theme={prefixIconTheme}
          isIconFont={prefixIconIsIconFont}
          fontAddress={prefixIconFontAddress}
          name={props.name}
          getEngineApis={getEngineApis}
          iconFile={prefixIconiconFile}
        />
      </span>
    );
    // }
    return iconView;
  };
  const renderLeftView = useMemo(() => {
    switch (titleIcon) {
      case 'vStyle':
      case 'hStyle':
        return (
          <span
            className={
              titleIcon === 'vStyle'
                ? `${prefixCls}-vStyle`
                : `${prefixCls}-hStyle`
            }
          />
        );
      case 'icon':
        return renderIcon(prefixIcon);
      case 'auto': // 自定义图片
        return groupTitleImg ? (
          <img
            src={groupTitleImg}
            className={`${prefixCls}-groupLeftView`}
            alt=""
          />
        ) : null;
      default:
        return null;
    }
  }, [titleIcon, groupTitleImg, prefixIcon]);
  const renderRigthView = () => {
    if (Array.isArray(rowActions) && rowActions.length) {
      const showRowActions = rowActions?.filter((it) => it?.checked !== false);
      return (
        <div className={`${prefixCls}-rigthView`}>
          {showRowActions.map((item) => {
            const {
              title,
              iconPos,
              icon,
              customStyle,
              customCode,
              isIcon,
              type,
            } = item;
            let subTitle = title;
            if (subTitle && title.length > 4) {
              subTitle = `${title.substring(0, 4)}...`;
            }
            let onClick: any = () => {};
            switch (type) {
              case 'detail':
                onClick = onRowDetail;
                break;
              case 'edit':
                onClick = onRowEdit;
                break;
              case 'delete':
                onClick = onRowDelete;
                break;
              default:
                break;
            }
            const svgContent =
              (icon && icon?.iconFileInfo && icon?.iconFileInfo?.svgContent) ||
              null;
            let view = <></>;

            const iconView = (
              <Icon
                {...icon}
                svgContent={svgContent}
                size={12}
                style={{ width: '12px', height: '12px' }}
                getEngineApis={getEngineApis}
              />
            );
            if (iconPos === 'left') {
              view = (
                <>
                  {iconView}
                  {subTitle}
                </>
              );
            } else {
              view = (
                <>
                  {subTitle}
                  {iconView}
                </>
              );
            }
            if (isIcon) {
              view = <>{iconView}</>;
            }
            switch (customStyle) {
              case 'borderBtn': // 描边按钮
                return (
                  <div className={`${prefixCls}-border-btn`} onClick={onClick}>
                    {view}
                  </div>
                );
              case 'ligthColor': // 浅色按钮
                return (
                  <div className={`${prefixCls}-light-btn`} onClick={onClick}>
                    {view}
                  </div>
                );
              case 'primaryBtn': // 纯色按钮
                return (
                  <div className={`${prefixCls}-primary-btn`} onClick={onClick}>
                    {view}
                  </div>
                );
              case 'cutsomBtn': // 自定义按钮
                // eslint-disable-next-line no-case-declarations
                const iconInfo: any = {
                  ...icon,
                  svgContent,
                };

                // 通过jsx渲染
                if (isJSX(customCode)) {
                  return (
                    <div>
                      <CustomModule
                        code={customCode.tVal}
                        compProps={{
                          isIcon,
                          icon: (
                            <Icon {...iconInfo} getEngineApis={getEngineApis} />
                          ),
                          title,
                        }}
                        sandBoxLoadModule={getEngineApis().sandBoxLoadModule}
                        errorInfo={{
                          id: $$componentItem.id,
                        }}
                      />
                    </div>
                  );
                }

                return (
                  <CustomBtn
                    isEngine
                    customCode={customCode}
                    icon={iconInfo}
                    title={title}
                    isIcon={isIcon}
                    onClick={onClick}
                    getEngineApis={getEngineApis}
                  />
                );
              default: // 默认图标按钮
                return (
                  <div className={`${prefixCls}-default-btn`} onClick={onClick}>
                    {view}
                  </div>
                );
            }
          })}
        </div>
      );
    }
    return null;
  };

  return (
    <div className={`${prefixCls}-group`}>
      {!visible ? null : (
        <Group
          {...restProps}
          disabled={disabled}
          required={required}
          boxStyle={{ ...style }}
          titleStyle={{ fontSize, lineHeight, fontWeight, color }}
          leftView={renderLeftView}
          extandPostion={extandPostion === 'header' ? 'top' : undefined}
          rightView={renderRigthView()}
          extandChange={(isShow) => {
            if (onChange) {
              onChange(isShow);
            }
          }}
        >
          {children}
        </Group>
      )}
    </div>
  );
});

DGroup.displayName = 'DGroup';

export default DGroup;
