import { LingxiForwardRef } from '@lingxiteam/types';
import { Collapse } from 'antd-mobile-5';
import classnames from 'classnames';
import isUndefined from 'lodash/isUndefined';
import React, {
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import MyIcon, { IconFileProps } from '../Icon';
import ChannelContainer, {
  ChannelContainerOptions,
} from '../utils/ChannelContainer';
import useHiddenStyle from '../utils/hooks/useHiddenStyle';
import './index.less';

const prefixCls = 'lcdp-accordion';
export interface MyAccordionProps {
  defaultActiveKey: string;
  titleStyle: React.CSSProperties;
  subTitleStyle: React.CSSProperties;
  data: any[];
  headerColor?: string;
  titleColor?: string;
  bordered?: boolean;
  cardIconType?: string;
  prefixIcon?: {
    prefixIconType?: string;
    prefixIconTheme?: any;
    prefixIconIsIconFont?: boolean;
    prefixIconFontAddress?: string;
    prefixIconiconFile?: IconFileProps;
  };
  visible: boolean;
  id: string;
  collapseColumns?: any;
  borderRadius?: string;
  accordion?: any;
  onChange: (key: any) => void;
  fontSize?: number;
  header?: React.ReactNode | string;
  style?: any;
  src?: string;
  fileCode?: string;
  backgroundType: any;
  className: string;
}

const MyAccordion = LingxiForwardRef<any, MyAccordionProps>((props, ref) => {
  const {
    children,
    headerColor,
    titleColor,
    bordered = true,
    cardIconType,
    borderRadius,
    accordion = true,
    fontSize,
    style,
    src,
    fileCode,
    backgroundType = {},
    onChange,
    visible,
    className,
    getEngineApis,
    $$componentItem,
    defaultActiveKey,
    prefixIcon,
  } = props;
  const displayStyle = useHiddenStyle(visible);
  const [activeKeys, setActiveKeys] = useState<
    string[] | string | null | undefined
  >([]);
  const childKeys = useRef<string[]>([]);

  const {
    prefixIconType,
    prefixIconTheme,
    prefixIconIsIconFont,
    prefixIconFontAddress,
    prefixIconiconFile,
  } = prefixIcon || {};
  useEffect(() => {
    if (Array.isArray(defaultActiveKey)) {
      setActiveKeys(defaultActiveKey || []);
    } else if (typeof defaultActiveKey === 'string') {
      setActiveKeys(defaultActiveKey.split(','));
    }
  }, [JSON.stringify(defaultActiveKey)]);
  useImperativeHandle(ref, () => ({
    // 0 全部展开， 1全部收起，2切换，3 自定义
    setExpansionTerm: (type: '0' | '1' | '2' | '3', keys: string) => {
      if (type === '0') {
        setActiveKeys(childKeys.current);
      } else if (type === '1') {
        setActiveKeys([]);
      } else if (type === '2') {
        const childsKeys = childKeys.current?.filter(
          (key) => !activeKeys?.includes(key),
        );
        setActiveKeys(childsKeys);
      } else if (type === '3') {
        if (typeof keys === 'string') {
          setActiveKeys(keys.split(','));
        }
      }
    },
  }));
  // 需要转化展开项，手风琴模式和非手风琴模式数据格式不同
  const myActiveKeys = useMemo(() => {
    if (isUndefined(activeKeys)) {
      return null;
    }
    if (accordion) {
      return activeKeys?.[0] === undefined ? null : activeKeys?.[0];
    }
    return activeKeys;
  }, [activeKeys, accordion]);

  const renderHeader = (header: string) => {
    const headStyle: any = {
      fontSize: `${fontSize}px`,
      ...style,
      border: 'none',
      borderRadius: 0,
    };
    const aHeaderColor = headerColor || style?.background; // 兼容旧数据
    if (aHeaderColor) {
      headStyle.backgroundColor = aHeaderColor;
    }
    const aTitleColor = titleColor || style?.titleColor || style?.color;
    const panelHeader =
      cardIconType === 'left' ? (
        <div style={{ color: aTitleColor, width: '100%' }}>{header}</div>
      ) : (
        <div style={{ color: aTitleColor, width: '82%' }}>{header}</div>
      );

    if (cardIconType) {
      // 兼容存量数据中没有设置标题样式的
      switch (cardIconType) {
        case 'middle':
          return (
            <div className={`${prefixCls}-header`} style={headStyle}>
              <span
                className={`${prefixCls}-header-default-icon`}
                style={{ backgroundColor: aTitleColor }}
              />
              {panelHeader}
            </div>
          );
        case 'left':
          return (
            <div style={headStyle} className={`${prefixCls}-header`}>
              <span
                className={`${prefixCls}-header-icon-left`}
                style={{ backgroundColor: aTitleColor }}
              />
              <div style={{ marginLeft: '6px', width: '84%' }}>
                {panelHeader}
              </div>
            </div>
          );
        case 'auto':
          return (
            <div
              style={headStyle}
              className={classnames(
                `${prefixCls}-header`,
                `${prefixCls}-header-icon-auto`,
              )}
            >
              {(prefixIconTheme ||
                prefixIconFontAddress ||
                prefixIconiconFile) &&
              (prefixIconType || prefixIconiconFile) ? (
                // @ts-ignore
                <MyIcon
                  style={{ color: aTitleColor }}
                  type={prefixIconType}
                  theme={prefixIconTheme}
                  isIconFont={prefixIconIsIconFont}
                  fontAddress={prefixIconFontAddress}
                  getEngineApis={getEngineApis}
                  $$componentItem={$$componentItem}
                  iconFile={prefixIconiconFile}
                />
              ) : null}
              {panelHeader}
            </div>
          );
        case 'none':
          return (
            <div style={headStyle} className={`${prefixCls}-header-default`}>
              {panelHeader}
            </div>
          );
        default:
          return (
            <div style={headStyle} className={`${prefixCls}-header`}>
              {panelHeader}
            </div>
          );
      }
    } else {
      return (
        <div style={headStyle} className={`${prefixCls}-header-default`}>
          {panelHeader}
        </div>
      );
    }
  };

  const renderChildren = (options: ChannelContainerOptions) => {
    childKeys.current = [];
    return React.Children.toArray(children).map((c) => {
      const { getProps, uploadChannelProps } = options;
      if (React.isValidElement(c) && c.key) {
        const { visible = true, extendProps, header } = getProps(c);
        // 这里是为了兼容旧逻辑，理论上不应该在props上设置key值。这个属性无法带入到组件内
        const {
          schema: {
            props: { key },
          },
        } = c.props;
        if (!childKeys.current?.includes(key)) {
          childKeys.current.push(key);
          console.log('childKeys', childKeys.current);
        }
        return (
          <Collapse.Panel
            title={renderHeader(header)}
            forceRender
            {...extendProps}
            key={key}
            style={!visible && { display: 'none' }}
          >
            <ChannelContainer.Item
              extendProps={{
                cardIconType,
                prefixIconType,
                prefixIconTheme,
                prefixIconIsIconFont,
                prefixIconFontAddress,
                titleColor,
                headerColor,
                bordered,
                src,
                fileCode,
                backgroundType,
              }}
              uploadChannelProps={uploadChannelProps}
            >
              {c}
            </ChannelContainer.Item>
          </Collapse.Panel>
        );
      }
      return c;
    });
  };
  const collapseStyle = () => {
    const defaultStyle = {
      overflow: 'hidden',
      borderRadius: borderRadius || style?.borderRadius,
    };
    if (bordered) {
      return {
        ...defaultStyle,
        border: 'solid 1px #DDD',
      };
    }
    return {
      ...defaultStyle,
      border: 'none',
    };
  };

  /**
   * FIXME: 根据属性特性还原是否是旧逻辑，
   * 这种方式可能存在异常。但可还原绝大多数情况
   */
  // const shouldRenderCompatible = useMemo(() => {
  //   // 旧逻辑采用数据的方式
  //   if (Array.isArray(data) && data.length > 0) {
  //     return true;
  //   }
  //   // 如果子组件包含AccordionHeader  也是旧逻辑
  //   const hasAccordionHeader = React.Children.toArray(children).find(c => isValidElement(c) ? c?.props?.schema?.compName === "AccordionHeader" : false);
  //   return Boolean(hasAccordionHeader);
  //  }, [data, children]);

  return (
    <div
      className={`${prefixCls} ${className}`}
      id={`${$$componentItem?.uid}`}
      style={displayStyle}
    >
      <ChannelContainer>
        {(options) => (
          // @ts-ignore
          <Collapse
            activeKey={myActiveKeys}
            defaultActiveKey={myActiveKeys}
            accordion={accordion}
            onChange={(key: any) => {
              const temKeys = Array.isArray(key) ? key : [key];
              setActiveKeys(temKeys);
              if (onChange) {
                onChange(key);
              }
            }}
            style={collapseStyle()}
          >
            {/* {shouldRenderCompatible ? renderCompatible(options) : renderChildren(options)} */}
            {renderChildren(options)}
          </Collapse>
        )}
      </ChannelContainer>
    </div>
  );
});

MyAccordion.displayName = 'Accordion';

export default MyAccordion;
