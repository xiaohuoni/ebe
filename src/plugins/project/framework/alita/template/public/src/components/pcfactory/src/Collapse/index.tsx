import { DownOutlined } from '@ant-design/icons';
import { LingxiForwardRef } from '@lingxiteam/types';
import { Collapse } from 'antd';
import type { CollapsePanelProps } from 'antd/es/collapse';
import classnames from 'classnames';
import isUndefined from 'lodash/isUndefined';
import React, {
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from 'react';
import { PrefixIconIconProps } from '../Icon/PropsType';
import { ChildRenderProvider, useChildRender } from '../utils';

export interface MyCollapseProps extends CollapsePanelProps {
  name: string;
  _component: any;
  collapseType?: string;
  size?: any;
  headerColor?: string;
  hasIcon?: boolean;
  cardIconType?: string;
  titleColor?: string;
  appId?: string;
  prefixIcon?: PrefixIconIconProps;

  onChange?: (activeKey: string[] | string) => void;

  /**
   * 默认展开的面板
   */
  defaultActiveKey?: string[] | string;

  /**
   * 手风琴模式
   */
  accordion: boolean;
}

export interface WrapperCollapseProps {
  children: React.ReactElement;
}

const WrapperCollapse: React.FC<WrapperCollapseProps> = ({ children }) =>
  React.cloneElement(children, {
    className: `ued-collapse-wrap ${children.props.className || ''}`,
  });

const MyCollapse = LingxiForwardRef<any, MyCollapseProps>((props, ref) => {
  const {
    children,
    style,
    name,
    className,
    _component,
    id,
    size,
    hasIcon,
    cardIconType,
    titleColor,
    headerColor,
    appId,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    prefixIcon = {},
    defaultActiveKey,
    onChange,
    accordion,
    ...restProps
  } = props;

  const {
    context,
    resetList,
    addChildProps,
    addParentProps,
    renderChildren,
    childRef,
  } = useChildRender();
  const [activeKeys, setActiveKeys] = useState<string[] | string>(
    defaultActiveKey || [],
  );

  const { padding, ...restStyle } = style || {};
  addParentProps(props);
  const renderComponent = () => {
    const components: any[] = [];
    const childrenList = React.Children.toArray(children);
    const list: string[] = [];
    React.Children.forEach(childrenList, (child: any) => {
      list.push(child?.props?.uid);
      components.push(child);
      addChildProps(child.props.uid, child.props?.schema?.props);
    });
    resetList(list);
    return components;
  };

  useEffect(() => {
    if (Array.isArray(defaultActiveKey)) {
      setActiveKeys(defaultActiveKey || []);
    } else if (typeof defaultActiveKey === 'string') {
      setActiveKeys(defaultActiveKey.split(','));
    }
  }, [JSON.stringify(defaultActiveKey)]);
  useImperativeHandle(ref, () => ({
    setExpansionTerm: (type: '0' | '1' | '2' | '2', keys: string) => {
      const collectChildsKeys = () => {
        const childsKeys = [];
        const childProps = childRef.current.props?.values();
        if (childProps) {
          for (const value of childProps) {
            childsKeys.push(value.key);
          }
        }
        return childsKeys;
      };
      if (type === '0') {
        setActiveKeys(collectChildsKeys());
      } else if (type === '1') {
        setActiveKeys([]);
      } else if (type === '2') {
        const childsKeys = collectChildsKeys().filter(
          (key) => !activeKeys.includes(key),
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

  return (
    <ChildRenderProvider value={context}>
      <WrapperCollapse>
        <div className={className} style={restStyle} id={id}>
          <Collapse
            {...restProps}
            accordion={accordion}
            // @ts-ignore
            defaultActiveKey={myActiveKeys}
            // @ts-ignore
            activeKey={myActiveKeys}
            onChange={(key) => {
              const temKeys = Array.isArray(key) ? key : [key];
              setActiveKeys(temKeys);
              onChange && onChange(key);
            }}
            expandIcon={({ isActive }) => (
              <div
                className={classnames('ued-collapse-expand-icon-arrow', {
                  active: isActive,
                })}
              >
                <DownOutlined style={{ fontSize: 14 }} rev="" />
              </div>
            )}
            className={classnames(
              `ued-collapse-${size || 'default'}`,
              restProps.collapseType === 'simple' ? 'ued-collapse-simple' : '',
            )}
          >
            {renderChildren()}
          </Collapse>
          {renderComponent()}
        </div>
      </WrapperCollapse>
    </ChildRenderProvider>
  );
});

export default MyCollapse;

export { WrapperCollapse };
