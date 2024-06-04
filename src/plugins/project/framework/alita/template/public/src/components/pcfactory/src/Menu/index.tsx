import { LingxiForwardRef } from '@lingxiteam/types';
import { Menu } from 'antd';
import { useEffect, useImperativeHandle, useMemo, useState } from 'react';
import Icon from '../Icon';
import { useListenProps } from '../utils';
import { useLocale } from '../utils/hooks/useLocale';

export interface MyMenuProps {
  visible?: boolean;
  inlineCollapsed?: boolean;
  isUsePrimary?: boolean;
  mode?: any;
  style?: any;
  color?: any;
  treeData?: any;
  treeService?: any;
  dataSource?: any;
  icon?: any;
  extendRules?: any;
  checkedKeys?: any;
  defaultOpenKey?: any;
  isExpanded?: any;
  propKey?: any;
  onClick?: (key: any, url: any, data: any) => void;
  getEngineApis?: any;
}

const prefixCls = 'menu';

const MyMenu = LingxiForwardRef<any, MyMenuProps>((props, ref) => {
  const {
    visible,
    mode,
    style,
    isUsePrimary,
    color,
    treeData,
    isExpanded,
    propKey,
    onClick,
    icon = {},
    getEngineApis,
    className,
  } = props;

  const { width, height } = style || {};

  const [inlineCollapsed, setInlineCollapsed] = useState(props.inlineCollapsed);
  const [checkedKeys, setCheckedKeys] = useState(props.checkedKeys);
  const [defaultOpenKey] = useState(props.defaultOpenKey);

  const [dataSource, setDataSource] = useListenProps(props.dataSource);
  const [treeService, setTreeService] = useListenProps(props.treeService);
  const { iconInfo = {}, extendRules } = icon;
  const [menuExpandedKeys, setMenuExpandedKeys] = useState<string[]>([]);
  const [defaultSelectedKeys, setDefaultSelectedKeys] = useState<any>({});

  const { getLocale } = useLocale(getEngineApis?.());

  const titleKey = propKey === 'options' ? 'label' : 'title';
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
        `try { return ${rule};} catch(e) { console.warn("${rule}${getLocale?.(
          'nodeRule',
        )}");}`,
      );
    }
    return () => {};
  };

  useImperativeHandle(ref, () => ({
    // 设置展开菜单
    setDefaultOpenKey(keys: any) {
      setCheckedKeys(Array.isArray(keys) ? keys : [keys]);
    },
    // 清空展开菜单
    clearCheckedKeys() {
      setCheckedKeys([]);
    },
    // 切换内嵌菜单
    changeInlineCollapsed(status: string) {
      if (status !== 'toggle') {
        setInlineCollapsed(!!status);
      } else {
        setInlineCollapsed(!inlineCollapsed);
      }
    },
    setDataSource(_data: any) {
      if (Array.isArray(_data.dataSource)) {
        setDataSource(_data.dataSource);
      }
      if (_data.treeService) {
        setTreeService(_data.treeService);
      }
    },
    setSelectKeys(selectedKeys: string[]) {
      setDefaultSelectedKeys(selectedKeys);
    },
  }));

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

  const renderIconFont = (info: any) => {
    if (info) {
      return (
        <Icon
          icon={info}
          isUsePrimary={isUsePrimary}
          style={{
            width: 16,
            height: 16,
            fontSize: '16px',
            fill: isUsePrimary ? undefined : color,
            color: isUsePrimary ? undefined : color,
          }}
          $$componentItem={props.$$componentItem}
          getEngineApis={getEngineApis}
          className=""
        />
      );
    }
    return undefined;
  };
  // 根据类型获取icon
  const getIcon = (node: any) => {
    const { children, key } = node || {};
    if (!iconInfo && !extendRules?.length) {
      return undefined;
    }
    let info;
    if (extendRules?.length) {
      extRules.forEach((iconRule: any) => {
        const { rule } = iconRule;
        if (typeof rule === 'function') {
          const ruleResult = rule({ ...node, ...(node || {}) });
          if (ruleResult) {
            // 为真时表示配置该图标
            info = iconRule;
          }
        }
      });
    }
    if (info) {
      return renderIconFont(info);
    }
    if (menuExpandedKeys.includes(key)) {
      return renderIconFont(node?.expandedIcon || iconInfo.expanded);
    }
    if (children?.length) {
      return renderIconFont(node?.closedIcon || iconInfo.closed);
    }
    return renderIconFont(iconInfo.leaf);
  };
  const loadData = (source: any[], service: Record<string, any>) => {
    const { key, title, children, selectable, url } = service || {};
    const getTreeData = (arr: any[]) => {
      if (Array.isArray(arr)) {
        return arr.map((c) => {
          // _isReload 标识节点数据是通过加载子节点动作设置的,此时取该动作配置好的key/title/selectable
          const serviceSelectable =
            c[selectable] !== undefined ? c[selectable] : true;
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
            icon: getIcon({ ...c, ...params }),
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
    }
    if (Array.isArray(treeData) && treeData?.length) {
      // 项目设置配置的静态数据
      return [...treeData];
    }
    return [];
  }, [
    dataSource,
    treeService,
    treeData,
    extRules,
    isUsePrimary,
    menuExpandedKeys,
  ]);

  const getExpendKeys = (datas: any) => {
    const { key, children } = treeService || {};
    const menuKeys: any = [];
    const getTreeKey = (arr: any[]) => {
      if (Array.isArray(arr)) {
        arr.forEach((c) => {
          const childrenKey = children || 'children';
          if (Array.isArray(c[childrenKey])) {
            if (mode === 'inline' && c[childrenKey]?.length) {
              // 是否设置默认展开项
              menuKeys.push(c._isReload ? c.key : c[key] || c.key);
            }
            getTreeKey(c[childrenKey]);
          }
        });
      }
    };
    getTreeKey(datas);
    return menuKeys;
  };
  // 设置默认展开项数据
  useEffect(() => {
    if (
      dataSource?.length &&
      isExpanded &&
      mode === 'inline' &&
      !inlineCollapsed
    ) {
      const menuKeys = getExpendKeys(dataSource);
      setMenuExpandedKeys([...(menuKeys || [])]);
    } else if (
      treeData?.length &&
      isExpanded &&
      mode === 'inline' &&
      !inlineCollapsed
    ) {
      const menuKeys = getExpendKeys(treeData);
      setMenuExpandedKeys([...(defaultOpenKey || menuKeys || [])]);
    }
  }, [dataSource, inlineCollapsed, defaultOpenKey]);

  // 查找默认
  useEffect(() => {
    const allDatas = dataSource?.length ? dataSource : treeData;
    if (allDatas?.length) {
      const { key, children } = treeService || {};
      const childrenKey = children || 'children';
      let defSelected: any = null;
      const getDefaultSelect = (items: any) => {
        if (
          items &&
          Array.isArray(items[childrenKey]) &&
          items[childrenKey]?.length &&
          !defSelected
        ) {
          getDefaultSelect(items[childrenKey][0]);
        } else if (items && !defSelected) {
          items.key = items._isReload ? items.key : items[key] || items.key;
          defSelected = items;
        }
      };
      getDefaultSelect(allDatas?.[0]);
      setDefaultSelectedKeys([defSelected?.key]);
    }
  }, [dataSource]);

  // 操作关闭展开项
  useEffect(() => {
    if (menuDatas?.length) {
      if (checkedKeys !== undefined && menuDatas?.length) {
        let nowCheckedKeys: string | string[] = checkedKeys;
        if (typeof nowCheckedKeys === 'string') {
          nowCheckedKeys = checkedKeys.split(',');
        }
        const cks = nowCheckedKeys || [];
        setMenuExpandedKeys([...cks]);
      }
    }
  }, [checkedKeys]);

  // 菜单渲染
  const getItems = (data: any, isStatic: boolean) => {
    return data?.map((item: any) => {
      let itemIcon;
      if (isStatic) {
        const iconType =
          // eslint-disable-next-line no-nested-ternary
          menuExpandedKeys.includes(item?.key)
            ? item?.expandedIcon
            : item?.children?.length
            ? item?.closedIcon
            : item?.closedIcon || item?.expandedIcon;
        itemIcon = renderIconFont(iconType);
      } else {
        itemIcon =
          item?.icon instanceof Function ? item?.icon(item) : item?.icon;
      }
      if (item?.children?.length) {
        return (
          <Menu.SubMenu
            disabled={item.disabled}
            title={
              <>
                {itemIcon && (
                  <span
                    role="img"
                    aria-label="mail"
                    className={`anticon anticon-mail ${`${prefixCls}_icon`}`}
                  >
                    {itemIcon}
                  </span>
                )}
                <span>{item && item[titleKey]}</span>
              </>
            }
            key={item.key}
          >
            {getItems(item.children, isStatic)}
          </Menu.SubMenu>
        );
      }
      return item && item[titleKey] ? (
        <Menu.Item
          key={item.key}
          disabled={item.disabled}
          onClick={() => {
            if (onClick instanceof Function) {
              let newItem = item;
              if (!newItem?.data) {
                // 节点数据获取的是data属性的内容
                newItem = { ...newItem, data: item };
              }
              onClick(item.key, item.url, newItem);
            }
            setDefaultSelectedKeys([item?.key]);
          }}
        >
          {itemIcon && (
            <span
              role="img"
              aria-label="mail"
              className={`anticon anticon-mail ${`${prefixCls}_icon`}`}
            >
              {itemIcon}
            </span>
          )}
          <span>{item && item[titleKey]}</span>
        </Menu.Item>
      ) : null;
    });
  };
  const extendOptions: any =
    mode === 'inline'
      ? {
          inlineCollapsed,
        }
      : {};

  return visible ? (
    <div
      className={`ued-menu ${className} ${prefixCls} ${
        mode === 'inline' && !inlineCollapsed
          ? `${prefixCls}_inline_colloaps`
          : ''
      }`}
      style={{ width, height }}
    >
      <Menu
        {...extendOptions}
        mode={mode}
        style={style}
        selectedKeys={defaultSelectedKeys}
        openKeys={menuExpandedKeys}
        onOpenChange={(keys: any) => setMenuExpandedKeys([...(keys || [])])}
      >
        {getItems(menuDatas || [], (dataSource?.length || 0) < 1) || false}
      </Menu>
    </div>
  ) : null;
});

export default MyMenu;
