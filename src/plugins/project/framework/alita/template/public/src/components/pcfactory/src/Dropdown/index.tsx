import React, { useImperativeHandle, useMemo, useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Menu, Dropdown as AntdDropdown, Space } from 'antd';
import classnames from 'classnames';
import Icon from '../Icon';
import { LingxiForwardRef } from '@lingxiteam/types';
import { useListenProps } from '../utils';
import { useLocale } from '../utils/hooks/useLocale';

interface menuData {
  disabled: boolean;
  key: string | number;
  title: string;
  children: any[];
}
export interface MyDropdownProps {
  children: React.ReactNode;
  treeData: menuData[];
  dataSource: menuData[];
  className: any;
  style: React.CSSProperties | undefined;
  name: any;
  visible: boolean;
  menuType: any;
  trigger: any;
  buttonType: any;
  isUsePrimary: boolean;
  buttonIcon: any;
  selectable: any;
  treeService: any;
  extendRules: any;
  clickClose: any;
  arrow: any;
  icon?: any;
  color: any;
  onVisibleChange?: (vis: boolean) => void;
  onClick?: (key: any, url: any, data: any) => void;
  getEngineApis?: any;
}

const Dropdown = LingxiForwardRef<any, MyDropdownProps>((props, ref) => {
  const {
    children,
    treeData,
    className,
    style,
    name,
    visible,
    menuType,
    trigger,
    buttonType,
    isUsePrimary,
    buttonIcon,
    selectable,
    extendRules,
    clickClose,
    arrow,
    color,
    onVisibleChange,
    onClick,
    icon = {},
    getEngineApis,
    ...restProps
  } = props;
  const [dataSource, setDataSource] = useListenProps(props.dataSource);
  const [treeService, setTreeService] = useListenProps(props.treeService);

  const { iconInfo = {} } = icon;
  const [menuExpandedKeys, setMenuExpandedKeys] = useState<string[]>([]);
  const [menuSelectedKeys, setMenuSelectedKeys] = useState<string[]>([]);
  const [menuVisible, setMenuVisible] = useState<boolean>(false);

  const [loading, setLoading] = useState(false);

  const { getLocale } = useLocale(getEngineApis?.());

  useImperativeHandle(ref, () => ({
    loading,
    setLoading(flag: boolean) {
      setLoading(!!flag);
    },
    setDataSource(data: any) {
      if (Array.isArray(data.dataSource)) {
        setDataSource(data.dataSource);
      }
      if (data.treeService) {
        setTreeService(data.treeService);
      }
    },
  }));

  // 图标规则
  const getRuleFunc = (rule: string) => {
    if (!rule) {
      return () => {};
    }
    if (typeof rule === 'function') {
      return rule;
    }
    if (typeof rule === 'string') {
      // eslint-disable-next-line no-new-func
      return new Function(
        'node',
        `try { return ${rule};} catch(e) { console.warn("${rule}${getLocale?.('nodeRule')}");}`,
      );
    }
    return () => {};
  };
  const extRules = useMemo(() => {
    if (Array.isArray(extendRules) && extendRules?.length) {
      return (extendRules || []).map((iconRule: any) => {
        const { rule } = iconRule;
        let ruleFunc;
        if (rule) {
          try {
            ruleFunc = getRuleFunc(rule);
          } catch (e) {
            console.warn(`${rule}${getLocale?.('nodeRule')}`);
          }
        }
        return {
          ...iconRule,
          rule: ruleFunc,
        };
      });
    }
    return [];
  }, [extendRules]);
  const renderIconFont = (info: any, _style?: any) => {
    if (info) {
      return (
        <Icon
          icon={info}
          isUsePrimary={isUsePrimary}
          style={
            _style || {
              width: '14px',
              height: '14px',
              fontSize: '14px',
              fill: isUsePrimary ? undefined : color,
              color: isUsePrimary ? undefined : color,
            }
          }
          $$componentItem={props.$$componentItem}
          className=""
          getEngineApis={getEngineApis}
        />
      );
    }
    return undefined;
  };
  // 根据类型获取icon
  const getIcon = (item: any) => {
    const { key, expandedIcon, closedIcon, data, children } = item;
    if (data) {
      // data为动态加载数据才有的数据
      if (!iconInfo && !extendRules?.length) {
        return undefined;
      }
      let info;
      if (extendRules?.length) {
        extRules.forEach((iconRule: any) => {
          const { rule } = iconRule;
          if (typeof rule === 'function') {
            const ruleResult = rule({ ...item, ...(item || {}) });
            if (ruleResult) {
              // 为真时表示配置该图标
              info = iconRule;
            }
          }
        });
      }
      if (info) {
        return renderIconFont(info);
      } if (menuExpandedKeys.includes(key)) {
        return renderIconFont(iconInfo.expanded);
      } if (children?.length) {
        return renderIconFont(iconInfo.closed);
      }
      return renderIconFont(iconInfo.leaf);
    }
    // eslint-disable-next-line no-nested-ternary
    const iconType = menuExpandedKeys.includes(key)
      ? expandedIcon
      : item?.children?.length
        ? closedIcon
        : closedIcon || expandedIcon;
    return renderIconFont(iconType);
  };

  const renderSubMenu = (data: any) => {
    return data?.map((opt: any) => {
      const { disabled, title, key } = opt;
      const itemIcon = getIcon(opt);
      if (opt.children?.length) {
        return (
          <Menu.SubMenu disabled={opt.disabled} key={opt.key} title={opt.title} icon={itemIcon}>
            {renderSubMenu(opt.children)}
          </Menu.SubMenu>
        );
      } if (key) {
        return (
          <Menu.Item
            disabled={disabled}
            key={key}
            title={title}
            icon={itemIcon}
            onClick={() => {
              if (onClick instanceof Function) {
                let newItem = opt;
                if (!newItem?.data) {
                  // 节点数据获取的是data属性的内容
                  newItem = { ...newItem, data: opt };
                }
                onClick(opt.key, opt.url, newItem);
              }
              if (typeof clickClose === 'undefined' || clickClose) {
                setMenuVisible(false);
              }
            }}
          >
            {title}
          </Menu.Item>
        );
      }
      return null;
    });
  };

  const renderMenu = (opts: menuData[]) => (
    <Menu
      openKeys={menuExpandedKeys}
      onOpenChange={(keys: any) => {
        setMenuExpandedKeys([...(keys || [])]);
      }}
      onSelect={({ selectedKeys }) => {
        setMenuSelectedKeys([...(selectedKeys || [])]);
      }}
      selectedKeys={selectable ? menuSelectedKeys : []}
      selectable={selectable}
    >
      {renderSubMenu(opts)}
    </Menu>
  );

  const loadData = (source: any[], service: Record<string, any>) => {
    const { key, title, children, selectable, url } = service || {};
    const getTreeData = (arr: any[]) => {
      if (Array.isArray(arr)) {
        return arr.map(c => {
          // _isReload 标识节点数据是通过加载子节点动作设置的,此时取该动作配置好的key/title/selectable
          const serviceSelectable = c[selectable] !== undefined ? c[selectable] : true;
          const params = {
            key: c._isReload ? c.key : c[key] || c.key,
            title: c._isReload ? c.title : c[title] || c.title,
            label: c._isReload ? c.title : c[title] || c.title,
            disabled: c._isReload ? !c.selectable : !serviceSelectable,
            url: c._isReload ? c.url : c[url] || c.url,
            isIframe: true,
          };
          const node: Record<string, any> = {
            ...params,
            data: c.data || { ...c, ...params },
          };
          // 优先取配置的children字段，若配置错误则子节点为空，若无配置默认访问数据自身chidren
          const childrenKey = children || 'children';
          if (Array.isArray(c[childrenKey])) {
            node.children = getTreeData(c[childrenKey]);
          } else {
            node.children = [];
          }
          return node;
        });
      }
      return [];
    };
    const datas = getTreeData(source);
    return datas;
  };
  // 菜单展示数据列表
  const menuDatas: any = useMemo(() => {
    if (Array.isArray(dataSource) && dataSource?.length) {
      // 动态获取回来的服务数据
      const dataAttrs: any = loadData(dataSource, treeService);
      return [...(dataAttrs || [])];
    } if (Array.isArray(treeData) && treeData?.length) {
      // 项目设置配置的静态数据
      return [...treeData];
    }
    return [];
  }, [dataSource, treeData, extRules, isUsePrimary, menuExpandedKeys]);

  const options = useMemo(() => {
    return {
      ...restProps,
      loading,
      visible: menuVisible,
      arrow: !!arrow,
      trigger: menuType === 'rightClick' ? ['contextMenu'] : trigger,
      overlay: renderMenu(menuDatas),
      onVisibleChange: (vis: boolean) => {
        setMenuVisible(vis);
        if (onVisibleChange instanceof Function) onVisibleChange(vis);
      },
    };
  }, [restProps, loading]);

  if (!visible) {
    return null;
  }
  if (menuType === 'button') {
    const { fontSize, fontWeight, letterSpacing, lineHeight, ...restStyle } = style || {};
    return (
      <AntdDropdown.Button
        {...options}
        type={buttonType}
        style={restStyle}
        className={classnames({
          'ued-dropdown-wrap': true,
          [`${className}`]: className,
        })}
        icon={renderIconFont(
          buttonIcon || {
            isIconFont: false,
            theme: 'outlined',
            type: 'ellipsis',
          },
          {
            fontSize,
            width: fontSize,
            height: fontSize,
            color: style?.color,
            fill: style?.color,
          },
        )}
        buttonsRender={([leftButton, rightButton]) => [
          React.cloneElement(leftButton as React.ReactElement<any, string>, {
            style: {
              color: style?.color,
              fontSize,
              fontWeight,
              letterSpacing,
              lineHeight,
            },
          }),
          rightButton,
        ]}
      >
        {children || name}
      </AntdDropdown.Button>
    );
  }
  return (
    <AntdDropdown {...options}>
      <div
        className={classnames({
          'ued-dropdown-wrap': true,
          [`${className}`]: className,
        })}
        {...restProps}
        style={style}
      >
        <Space>
          {children || name}
          <DownOutlined rev="" />
        </Space>
      </div>
    </AntdDropdown>
  );
});

export default Dropdown;
