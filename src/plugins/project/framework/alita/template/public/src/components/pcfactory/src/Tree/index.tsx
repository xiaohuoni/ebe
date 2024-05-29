/* eslint-disable no-underscore-dangle */
/* eslint-disable eqeqeq */
/* eslint-disable no-param-reassign */
import { EllipsisOutlined } from '@ant-design/icons';
import { LingxiForwardRef } from '@lingxiteam/types';
import { Dropdown, Input, Menu, Popconfirm, Tooltip, Tree } from 'antd';
import classnames from 'classnames';
import { uniq } from 'lodash';
import React, {
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import Icon from '../Icon';
import { useListenProps } from '../utils';
import CustomModule from '../utils/CustomModule';
import { useFuncExpExecute } from '../utils/hooks/useFuncExpExecute';
import { useLocale } from '../utils/hooks/useLocale';
import TreeNodeMenu from './TreeNodeMenu';

const SERVICE_SOURCE = {
  // 服务来源
  APP: 'app', // 应用内部 & 模型生成
  QUERY: 'query', // 解析服务
  STD: 'std', // 编排服务
  INNER: 'inner', // 请求层服务
  ATOM: 'atom', // 外部服务(低代码运营平台的原子服务)
  RHIN: 'rhin', // 业务运营服务
  SCENE: 'scene', // 业务运营场景服务
  OBJECT: 'object', // 业务对象生成服务
};
const { TreeNode } = Tree;
const iconMapFn = (getLocale?: Function) => ({
  add: {
    icon: 'lcdp-icon-tianjia-da',
    name: getLocale?.('add'),
  },
  edit: {
    icon: 'lcdp-icon-zidingyi',
    name: getLocale?.('edit'),
  },
  delete: {
    icon: 'lcdp-icon-shanchu',
    name: getLocale?.('delete'),
  },
});

export interface MyTreeProps {
  visible?: boolean;
  isAsync?: boolean;
  treeData: any[];
  defaultExpandAll?: boolean;
  asyncService?: any;
  treeService?: any;
  dataSource?: any;
  onSelect?: (
    key: any,
    data: any,
    parentNodeKey: any,
    parentNodeData: any,
  ) => void;
  onCheck?: (checked: any) => void;
  onDataSourceRelease?: (e: any) => void;
  onSelectedKeysRelease?: (e: any) => void;
  nodeIcons?: any[];
  onNodeAdd?: (
    key: any,
    data: any,
    parentNodeKey: any,
    parentNodeData: any,
  ) => void;
  onNodeEdit?: (
    key: any,
    data: any,
    parentNodeKey: any,
    parentNodeData: any,
  ) => void;
  onNodeDelete?: (
    key: any,
    data: any,
    parentNodeKey: any,
    parentNodeData: any,
  ) => void;
  onEditingKeyRelease?: (e: any) => void;
  onSelectedDataRelease?: (e: any) => void;
  onCheckedKeysRelease?: (e: any) => void;
  onSelectAllRelease?: () => void;
  className?: any;
  showLineIcon?: boolean;
  selectedKeys?: string;
  checkedKeys?: string;
  disabled?: boolean;
  onExpand?: any;
  treeNodeIcon?: any;
  appId?: string;
  showSearch?: boolean;
  isSelectAll?: boolean;
  checkable?: boolean;
  rightMenuInfo?: any;
  onRightClickNode?: (
    key: any,
    data: any,
    isLoaded: boolean,
    parentNodeKey: any,
    parentNodeData: any,
  ) => void;
  onClickMenuItem?: (key: string, menuData: any, path: any[]) => void;
  customRenderCode?: any;
  expandedKey?: any;
  closeExpandedKey?: any;
  showLine?: any;
  getEngineApis: any;
}

// const prefixCls = 'tree';

const MyTree = LingxiForwardRef<any, MyTreeProps>((props, ref) => {
  const {
    visible = true,
    treeData,
    isAsync,
    asyncService,
    defaultExpandAll,
    onSelect,
    onCheck,
    nodeIcons,
    onNodeAdd,
    onNodeEdit,
    onNodeDelete,
    onRightClickNode,
    className,
    showLineIcon,
    onExpand,
    appId,
    treeNodeIcon,
    showSearch,
    rightMenuInfo,
    onClickMenuItem,
    customRenderCode,
    getEngineApis,
    ...resetProps
  } = props;

  const [closeExpandedKey, setCloseExpandedKey] = useListenProps(
    props.closeExpandedKey,
  );
  const [expandedKey, setExpandedKey] = useListenProps(props.expandedKey);

  // 加载数据字段映射
  const [treeService, setTreeService] = useListenProps(props.treeService);
  // 加载数据
  const [dataSource, setDataSource] = useListenProps(props.dataSource);

  const engineApis = getEngineApis?.() || {};

  const { sandBoxSafeRun, sandBoxLoadModule } = engineApis;

  const { getLocale } = useLocale(engineApis);

  const iconMap: any = iconMapFn(getLocale);

  const funcExpExecute = useFuncExpExecute(sandBoxSafeRun, getLocale);

  const [data, setData] = useState<any[]>(treeService ? [] : treeData);
  const [selectedKeys, setSelectedKeys] = useState<any[]>([]);

  // 当前选中数据
  const [selectedDataList, setSelectDataList] = useState<any[]>([]);

  const [checkedKeys, setCheckedKeys] = useState<any[]>([]);
  const [loadedKeys, setLoadedKeys] = useState<any[]>([]);
  const [isSelectAll, setIsSelectAll] = useState<boolean>(
    props?.isSelectAll || false,
  );
  const [expandedKeys, setExpandedKeys] = useState<any[]>([]);
  const [searchVal, setSearchVal] = useState('');
  const [showRightMenu, setShowRightMenu] = useState<any>({});
  const [rightMenuData, setRightMenuData] = useState<any>(
    props.rightMenuInfo ?? {},
  );
  const [popVisible, setPopVisible] = useState<any>({});
  const scrollIntoViewComp = useRef(false);
  const treeWrapRef = useRef<any>();

  // 当前操作字段key
  const [editingKey, setEditingKey] = useState('');

  useImperativeHandle(ref, () => ({
    get dataSource() {
      return data;
    },
    setDataSource(_data: any[]) {
      setDataSource(_data);
    },
    setStateMap(stateMap: any) {
      if (stateMap?.treeService) {
        setTreeService(stateMap.treeService);
      }
      if (Array.isArray(stateMap?.dataSource)) {
        setDataSource([...stateMap.dataSource]);
      }
    },
    // 获取选中数据
    getSelectedData() {
      return selectedDataList;
    },
    // 获取当前操作的key
    get editingKey() {
      return editingKey;
    },
    get selectedKeys() {
      return selectedKeys;
    },
    get checkedKeys() {
      return checkedKeys;
    },
    setCheckedKeys(keys: any[]) {
      setCheckedKeys(keys);
    },
    // 设置全部选中
    setSelectAll(_flag: boolean) {
      setIsSelectAll(_flag);
    },
    setSelectedKeys(keys: any[]) {
      if (Array.isArray(keys)) {
        setSelectedKeys(keys);
      }
    },
    setRightMenuData(rightInfo: any) {
      setRightMenuData(rightInfo);
    },
    setExpandedKey(_keys: any[]) {
      setExpandedKey(_keys);
    },
    setCloseExpandedKey(_keys: any[]) {
      setCloseExpandedKey(_keys);
    },
  }));

  useEffect(() => {
    if (rightMenuData) {
      const { dataSource, treeKey, titleKey, valueKey, children, selectable } =
        rightMenuData || {};

      if (
        treeKey &&
        !showRightMenu[treeKey] &&
        showRightMenu?.treeKey === treeKey
      ) {
        const recursiveSetData = (arr: any) => {
          if (Array.isArray(arr) && arr?.length) {
            return (arr || []).map((c: any) => {
              const d: Record<string, any> = {
                data: c,
                title: c[titleKey],
                key: c[valueKey] || c.key,
                label: c[titleKey],
                selectable: c[selectable],
              };
              if (c[children]) {
                d.children = recursiveSetData(c[children]);
              }
              return d;
            });
          }
          return [];
        };
        const d = recursiveSetData(dataSource);
        if (d?.length) {
          setRightMenuData((pre: any) => ({
            ...pre,
            [treeKey]: d,
          }));
          setShowRightMenu((pre: any) => ({ ...pre, [treeKey]: true }));
        }
      }
    }
  }, [rightMenuData, showRightMenu]);

  // isGetAll 是否获取所有节点keys，否则只获取父级的，展开时使用
  const recursiveFind = (
    arr: any[],
    oldKey: any[],
    keys: any[],
    isGetAll = false,
  ) => {
    arr?.forEach?.((k) => {
      if (
        (Array.isArray(k.children) &&
          k.children.length > 0 &&
          (!oldKey.length || oldKey.find((c) => c == k.key))) ||
        isGetAll
      ) {
        keys.push(oldKey.find((c) => c == k.key) || String(k.key)); // id为数字的时候, 树控件识别string来判断展开节点
        if (Array.isArray(k.children) && k?.children?.length) {
          recursiveFind(k.children, oldKey, keys, isGetAll);
        }
      }
    });
  };

  useEffect(() => {
    if (props.isSelectAll !== undefined) {
      setIsSelectAll(props.isSelectAll);
    }
  }, [props.isSelectAll]);

  useEffect(() => {
    if (isSelectAll && data && props.checkable) {
      // 全选，设置keys
      const keys: any[] = [];
      recursiveFind(data, [], keys, true);
      setCheckedKeys(keys);
      setIsSelectAll(false);
    }
  }, [isSelectAll, data]);

  const getParams = (service: any, key: any) => {
    const {
      providerId,
      appId,
      serviceCode,
      _source,
      loadKey,
      _serviceId,
      serviceVersion,
      sceneCode,
      linkCode,
      busiObjectId,
      versionCode,
    } = service || {};
    let params: Record<string, any> = { [loadKey]: key };
    // 特殊服务参数处理
    if (_source === SERVICE_SOURCE.ATOM) {
      // 原子服务
      params = {
        providerId,
        serviceProviderRequest: params,
      };
    } else if (
      _source === SERVICE_SOURCE.QUERY ||
      _source === SERVICE_SOURCE.INNER
    ) {
      // 解析类服务或请求层服务
      params = {
        appId: (window as any).appId || appId,
        serviceCode,
        params,
      };
    } else if (_source === SERVICE_SOURCE.STD) {
      // 编排类服务
      params = {
        appId: (window as any).appId || appId,
        serviceCode,
        version: versionCode,
        serviceVersionId: _serviceId,
        parameters: params,
      };
    } else if (_source === SERVICE_SOURCE.RHIN) {
      // 业务平台
      params = {
        appId: (window as any).appId || appId,
        serviceCode,
        serviceVersion: versionCode,
        serviceRequest: params,
      };
    } else if (_source === SERVICE_SOURCE.SCENE) {
      // 业务平台场景
      params = {
        appId: (window as any).appId || appId,
        serviceCode,
        serviceVersion,
        sceneCode,
        linkCode,
        serviceRequest: params,
      };
    } else if (_source === SERVICE_SOURCE.OBJECT) {
      params = {
        busiObjectId,
        busiObjectInstId: `${Math.random()}`.slice(12),
        attrs: params,
      };
    }
    return params;
  };

  const transformBoolean = (value: any) => {
    if (value === undefined || value === null) {
      return undefined;
    }
    if (value === 'false') {
      return false;
    }
    return Boolean(value);
  };

  const loadTreeData = (source: any[], service: Record<string, any>) => {
    const { key, title, children, selectable = 'selectable' } = service || {};
    const getTreeData = (arr: any[]) => {
      if (Array.isArray(arr)) {
        return arr.map((c) => {
          // _isReload 标识节点数据是通过加载子节点动作设置的,此时取该动作配置好的key/title/selectable,原数据放在了data字段
          const originData = c._isReload ? c.data : c;
          const isSelectable =
            transformBoolean(originData[selectable] ?? originData.selectable) ??
            true;
          // 如果加载子节点配置了映射，优先取加载子节点的，否则取当时加载数据的映射，若都没有则取数据上的默认字段
          const nodeSelectable = c._isReload
            ? c.selectable ?? isSelectable
            : isSelectable;
          const _key = c._isReload
            ? c.key ?? originData[key]
            : originData[key] ?? originData.key;
          const renderTitle = () => {
            let _title = _key;
            // 返回的数据对象有配置的标题字段
            if (
              Object.prototype.hasOwnProperty.call(c, title) ||
              Object.prototype.hasOwnProperty.call(c, 'title')
            ) {
              _title = '';
            }
            if (c._isReload) {
              return c.title ?? originData[title] ?? _title;
            }
            return originData[title] ?? originData.title ?? _title;
          };
          const node: Record<string, any> = {
            key: _key,
            title: renderTitle() ?? '',
            selectable: nodeSelectable,
            isLeaf: c.isLeaf ?? originData.isLeaf ?? false,
            data: c.data || c,
            disableCheckbox:
              c.disabled ??
              c.disableCheckbox ??
              (nodeSelectable !== undefined ? !nodeSelectable : undefined),
            disabled:
              c.disabled ??
              c.disableCheckbox ??
              (nodeSelectable !== undefined ? !nodeSelectable : undefined),
          };
          // 优先取配置的children字段，若配置错误则子节点为空，若无配置默认访问数据自身chidren
          const childrenKey = children || 'children';
          if (Array.isArray(c[childrenKey])) {
            node.children = getTreeData(c[childrenKey]);
          }
          if (originData.isLeaf === undefined) {
            if (asyncService || isAsync) {
              // 存量异步数据
              // -null是非叶子 -[]是叶子 -属性不存在是非叶子
              if (
                Array.isArray(c[childrenKey]) &&
                c[childrenKey]?.length === 0
              ) {
                node.isLeaf = true;
              }
            } else if (children || c[childrenKey]) {
              // 加载数据配置子节点映射，或者数据上也有children数据，则视为同步加载
              // 目前不处理加载子节点数据动作返回来的数据里面的children
              // -null是叶子 -[]是叶子 -属性不存在是叶子 -[有值]是非叶子
              if (
                c[childrenKey] === null ||
                c[childrenKey] === undefined ||
                !(childrenKey in c) ||
                (Array.isArray(c[childrenKey]) && c[childrenKey]?.length === 0)
              ) {
                node.isLeaf = true;
              }
            }
            // 不符合上述的，默认为异步加载，节点值为非空数组时都，视为未展开节点（非叶子）
          }
          return node;
        });
      }
      return [];
    };
    return getTreeData(source);
  };

  useEffect(() => {
    // treeService 目前只有配置加载数据动作时会有，存量中配置了树控件异步服务的会有
    // 处理获取到的数据
    if (treeService && dataSource) {
      const res = loadTreeData(dataSource, treeService);
      if (isAsync && asyncService) {
        setLoadedKeys((pre: any[]) => {
          const newKeys: any[] = [];
          if (pre?.length > 0) {
            recursiveFind(res, pre, newKeys);
          }
          setExpandedKeys(newKeys);
          return newKeys;
        });
        // setLoadedKeys([]);
      } else if (defaultExpandAll) {
        const newKeys: any[] = [];
        recursiveFind(res, [], newKeys);
        setExpandedKeys(newKeys);
      }
      setData(res);
      // treeServiceRef.current = treeService;
    } else if (!treeService) {
      // treeData应为项目设置中的常量，理应不会变化，因此优先取dataSource
      const res = dataSource || treeData;
      setData(res);
      if (defaultExpandAll) {
        const newKeys: any[] = [];
        recursiveFind(res, [], newKeys);
        setExpandedKeys(newKeys);
      }
    }
  }, [
    JSON.stringify(treeService),
    JSON.stringify(dataSource),
    isAsync,
    JSON.stringify(treeData),
  ]);

  const findTreeDataByKey = (treeD: any, keys: string[]) => {
    const selectedData: any[] = [];
    const findSelectedData = (arr: any[]) => {
      arr.forEach((c) => {
        if (keys?.includes(String(c.key))) {
          selectedData.push(c.data || c);
        }
        if (c.children && c.children.length) {
          findSelectedData(c.children);
        }
      });
    };
    findSelectedData(treeD);
    return selectedData;
  };

  useEffect(() => {
    if (props.selectedKeys !== undefined) {
      let newSelectKeys: string | string[] = props.selectedKeys;
      if (typeof newSelectKeys === 'string') {
        newSelectKeys = props.selectedKeys.split(',');
      }
      const sks = newSelectKeys || [];
      setSelectedKeys([...sks]);
      // 更新当前选中数据
      const selectedData = findTreeDataByKey(data, newSelectKeys);
      setSelectDataList(selectedData);
    }
  }, [props.selectedKeys]);

  useEffect(() => {
    if (props.checkedKeys !== undefined) {
      let nowCheckedKeys: string | string[] = props.checkedKeys;
      if (typeof nowCheckedKeys === 'string') {
        nowCheckedKeys = props.checkedKeys.split(',');
      }
      const cks = nowCheckedKeys || [];
      setCheckedKeys([...cks]);
      // 重新设置选项时，重置全选状态
      setIsSelectAll(false);
    }
  }, [props.checkedKeys]);

  const loadNodeData = (node: any) => {
    const { children, eventKey } = node.props;
    return new Promise<void>((resolve) => {
      if (children && children.length) {
        resolve();
        return;
      }
      const params = getParams(asyncService, eventKey);
      let { serviceMethod } = asyncService;
      if (
        [
          SERVICE_SOURCE.ATOM,
          SERVICE_SOURCE.QUERY,
          SERVICE_SOURCE.INNER,
          SERVICE_SOURCE.STD,
          SERVICE_SOURCE.RHIN,
          SERVICE_SOURCE.SCENE,
        ].includes(asyncService._source)
      ) {
        serviceMethod = 'post';
      }
      engineApis?.service
        ?.commonFetch(serviceMethod, asyncService.api, params)
        .then(
          (res: string | any[]) => {
            setLoadedKeys((pre) => {
              const newKeys = new Set([...pre, eventKey]);
              return [...newKeys];
            });
            if (Array.isArray(res) && res.length) {
              const source = loadTreeData(res, asyncService);
              node.props.dataRef.children = source.map((c) => ({
                ...c,
                isLeaf: false,
              }));
              node.props.dataRef.isLeaf = false;
            } else {
              node.props.dataRef.children = undefined;
              node.props.dataRef.isLeaf = true;
            }
            setData([...data]);
            resolve();
          },
          (err: void | PromiseLike<void>) => {
            node.props.dataRef.children = undefined;
            node.props.dataRef.isLeaf = true;
            setData([...data]);
            resolve(err);
          },
        );
    });
  };

  const onClickIcon = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    c: Record<string, any>,
    icon: any,
  ) => {
    e.stopPropagation();

    // 设置当前操作key
    setEditingKey(c.key);
    let method: any = null;
    if ((icon?.type || icon) === 'add') {
      method = onNodeAdd;
    } else if ((icon?.type || icon) === 'edit') {
      method = onNodeEdit;
    } else if ((icon?.type || icon) !== 'delete') {
      // 处理默认的新增，编辑，删除，其他的所有拓展按钮走自定义事件
      method = (resetProps as any)?.[icon?.value];
    }

    if (typeof method === 'function') {
      // 事件入参：节点key 节点数据 父节点key 父节点数据
      // 由于历史原因，图标点击事件中节点数据是原数据，而非平台包装后的数据，而选中，展开事件的节点数据为平台包装数据
      // 父节点数据保持一致，为平台包装后的数据，访问原数据需要从.data节点获取
      method(c.key, c.data, c?.data?.parentNode?.key, c?.data?.parentNode, c);
    }
  };

  const renderIconFont = (
    c: Record<string, any>,
    icon: any,
    dropdown?: boolean,
  ) => {
    return dropdown ? (
      <span onClick={(e) => onClickIcon(e, c, icon)}>
        {icon?.title || iconMap[icon]?.name}
      </span>
    ) : (
      <span className="ued-tree-icon" onClick={(e) => onClickIcon(e, c, icon)}>
        <Icon
          key={icon}
          appId={appId}
          style={{
            width: 14,
            height: 14,
          }}
          icon={icon?.icon}
          getEngineApis={getEngineApis}
          className=""
          $$componentItem={props.$$componentItem}
        />
      </span>
    );
  };

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

  const nodeIconsInfo = useMemo(() => {
    if (nodeIcons?.length) {
      return nodeIcons.map((node) => {
        if (typeof node === 'string') {
          return {
            icon: {
              isIconFont: true,
              type: iconMap[node]?.icon,
            },
            type: node,
            title: iconMap[node]?.name,
          };
        }
        let ruleFunc;
        try {
          ruleFunc = getRuleFunc(node?.rule);
        } catch (e) {
          console.warn(
            `${node?.rule}节点规则不正确，请使用node.字段名进行配置`,
          );
        }
        return {
          ...node,
          rule: ruleFunc,
        };
      });
    }
    return [];
  }, [JSON.stringify(nodeIcons || {})]);

  const renderDelete = (
    c: Record<string, any>,
    icon: any,
    dropdown?: boolean,
  ) => (
    <Popconfirm
      onVisibleChange={(v) =>
        v && setPopVisible({ ...popVisible, [c.key]: false })
      }
      key={`${icon?.type || icon}_1`}
      title={getLocale?.('deleteConfirm')}
      placement={dropdown ? 'rightBottom' : 'top'}
      onConfirm={(e: any) => {
        e.stopPropagation();
        if (typeof onNodeDelete === 'function') {
          // 事件入参：节点key 节点数据 父节点key 父节点数据
          // 由于历史原因，图标点击事件中节点数据是原数据，而非平台包装后的数据，而选中，展开事件的节点数据为平台包装数据
          // 父节点数据保持一致，为平台包装后的数据，访问原数据需要从.data节点获取
          onNodeDelete(
            c.key,
            c.data,
            c?.data?.parentNode?.key,
            c?.data?.parentNode,
          );
        }
      }}
      onCancel={(e: any) => e.stopPropagation()}
    >
      {renderIconFont(c, icon, dropdown)}
    </Popconfirm>
  );

  const renderIcons = (
    c: Record<string, any>,
    icons: any[],
    dropdown?: boolean,
  ) =>
    dropdown ? (
      <Menu>
        {icons.map((icon) => (
          <Menu.Item key={icon?.type || icon}>
            {(icon?.type || icon) === 'delete'
              ? renderDelete(c, icon, dropdown)
              : renderIconFont(c, icon, dropdown)}
          </Menu.Item>
        ))}
      </Menu>
    ) : (
      icons.map((icon) =>
        (icon?.type || icon) === 'delete' ? (
          <Tooltip
            title={icon?.title || iconMap[icon]?.name}
            visible={popVisible?.[c.key]}
            onVisibleChange={(v) =>
              setPopVisible({ ...popVisible, [c.key]: v })
            }
          >
            {renderDelete(c, icon)}
          </Tooltip>
        ) : (
          <Tooltip title={icon?.title || iconMap[icon]?.name}>
            {renderIconFont(c, icon)}
          </Tooltip>
        ),
      )
    );

  const renderTooltip = (cItem: any, child: React.ReactNode) => (
    <Tooltip
      title={cItem.title}
      overlayClassName="nodeHoverCodeTip"
      placement="top"
    >
      {child}
    </Tooltip>
  );

  const renderContent = (cItem: any, i: number) => {
    let context: any = null;
    let isTooltip = false;

    // 自定义渲染函数-新数据格式
    // 自定义渲染函数-旧数据格式兼容 {code: string, originCode: string}
    let codeStr = customRenderCode?.code;
    if (typeof customRenderCode === 'string' && !codeStr) {
      codeStr = customRenderCode;
    }

    if (customRenderCode && typeof customRenderCode?.jsx === 'object') {
      if (customRenderCode.jsx.key === 'nodeHoverCode') isTooltip = true;
      context = (
        <div style={{ position: 'relative' }}>
          <CustomModule
            code={customRenderCode.targetVal}
            compProps={{ text: cItem.title, item: cItem, index: i }}
            sandBoxLoadModule={sandBoxLoadModule}
            errorInfo={{
              id: props.$$componentItem.id,
            }}
          />
        </div>
      );
    } else if (codeStr && funcExpExecute) {
      if (codeStr.toString().indexOf('节点名称hover展示全称') > -1)
        isTooltip = true;
      context = (
        <div
          style={{ position: 'relative' }}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: funcExpExecute(codeStr, [
              {
                key: 'text',
                value: cItem.title,
              },
              {
                key: 'item',
                value: cItem,
              },
              {
                key: 'index',
                value: i,
              },
            ]),
          }}
        />
      );
    } else {
      context = cItem.title;
    }
    if (isTooltip) {
      return renderTooltip(cItem, context);
    }
    return context;
  };

  const renderTitle = (c: Record<string, any>, i: number) => {
    let iconsDom: any = null;
    if (
      !resetProps.disabled &&
      Array.isArray(nodeIconsInfo) &&
      nodeIconsInfo.length
    ) {
      const finalNodeIcons = nodeIconsInfo.filter((node) => {
        if (node.rule && typeof node.rule === 'function') {
          try {
            return !node.rule(c);
          } catch (e) {
            console.warn(getLocale?.('nodeRule'));
          }
        }
        return true;
      });
      if (finalNodeIcons.length <= 3) {
        iconsDom = (
          <div key={c.key} className="ued-tree-icons ued-tree-icons-normal">
            {renderIcons(c, finalNodeIcons)}
          </div>
        );
      } else {
        iconsDom = (
          <div className="ued-tree-icons">
            <Dropdown
              trigger={['click']}
              overlay={renderIcons(c, finalNodeIcons, true) as any}
              getPopupContainer={(node: any) => node}
            >
              <EllipsisOutlined
                rev=""
                className="ued-tree-icon"
                onClick={(e: { stopPropagation: () => void }) => {
                  e.stopPropagation();
                }}
              />
            </Dropdown>
          </div>
        );
      }
    }

    return (
      <div
        onContextMenu={() => {
          if (typeof onRightClickNode === 'function') {
            onRightClickNode(
              c.key,
              c,
              showRightMenu[c.key] !== undefined,
              c?.data?.parentNode?.key,
              c?.data?.parentNode,
            );
          }
        }}
        className="ued-tree-tit"
      >
        <TreeNodeMenu
          key={c.key}
          onClickMenuItem={onClickMenuItem}
          visible={showRightMenu?.[c.key] || false}
          onVisibleChange={(v: boolean) => {
            setShowRightMenu((pre: any) => ({
              ...pre,
              // 收起菜单时隐藏
              [c.key]: v ? pre?.[c.key]?.visible : v,
              treeKey: v ? c.key : undefined,
            }));
          }}
          overlayClassName="ued-tree-menu"
          menuData={rightMenuData[c.key]}
        >
          <div className="tree-tit-item">{renderContent(c, i)}</div>
        </TreeNodeMenu>
        {iconsDom}
      </div>
    );
  };

  // 渲染节点图标
  const renderNodeIconFont = (info: any) => {
    if (info) {
      return (
        <Icon
          {...info}
          appId={appId}
          isUsePrimary={treeNodeIcon?.isUsePrimary}
          style={{
            fill: treeNodeIcon?.isUsePrimary ? undefined : treeNodeIcon?.color,
          }}
          getEngineApis={getEngineApis}
        />
      );
    }
    return undefined;
  };

  // 扩展规则
  const extRules = useMemo(() => {
    if (
      Array.isArray(treeNodeIcon?.extendRules) &&
      treeNodeIcon?.extendRules?.length
    ) {
      return (treeNodeIcon?.extendRules || []).map((iconRule: any) => {
        const { rule } = iconRule;
        let ruleFunc;
        if (rule) {
          try {
            ruleFunc = getRuleFunc(rule);
          } catch (e) {
            console.warn(`${rule}节点规则不正确，请使用node.字段名进行配置`);
          }
        }
        return {
          ...iconRule,
          rule: ruleFunc,
        };
      });
    }
    return [];
  }, [JSON.stringify(treeNodeIcon?.extendRules || {})]);

  // 执行图标配置规则
  const renderNodeIcon = (node: any) => {
    const { data, expanded } = node;
    if (!(treeNodeIcon?.iconInfo || treeNodeIcon?.extendRules?.length)) {
      return undefined;
    }
    const { iconInfo, extendRules = [], iconType } = treeNodeIcon;
    let info;
    if (iconType === 'custom' && extendRules?.length) {
      extRules.forEach((iconRule: any) => {
        const { rule } = iconRule;
        if (typeof rule === 'function') {
          const ruleResult = rule({
            ...node,
            ...(data?.dataRef || data || {}),
          });
          if (ruleResult) {
            // 为真时表示配置该图标
            info = iconRule;
          }
        }
      });
    }
    if (!info && iconInfo) {
      // 图标规则优先执行，若无匹配中的再设置常规的展开收起
      if (expanded && data?.children) {
        info = iconInfo.expanded;
      } else if (data?.children) {
        info = iconInfo.closed;
      } else {
        info = iconInfo.leaf;
      }
    }
    return renderNodeIconFont(info);
  };

  const createNodes = (nodes: any[], parentNode?: any) =>
    Array.isArray(nodes) && nodes.length > 0
      ? nodes.map((c, i) => {
          const nodeWithParent = {
            ...c,
            data: { ...(c.data || {}), parentNode },
          };
          const nodeProps: any = { dataRef: c };
          return (
            <TreeNode
              key={c.key}
              title={renderTitle(nodeWithParent, i)}
              data={nodeWithParent.data}
              isLeaf={c.isLeaf}
              selectable={c.selectable}
              disableCheckbox={
                c.disabled ??
                c.disableCheckbox ??
                (c.selectable !== undefined ? !c.selectable : undefined)
              }
              disabled={
                c.disabled ??
                c.disableCheckbox ??
                (c.selectable !== undefined ? !c.selectable : undefined)
              }
              className={classnames(
                !c.children || !c.children.length ? 'ued-tree-node-leaf' : '',
                'ued-tree-tree-node',
              )}
              domRef={(ref) => {
                if (
                  c.matchFlag &&
                  !scrollIntoViewComp?.current &&
                  ref &&
                  treeWrapRef?.current
                ) {
                  let currentComp: HTMLElement | null = ref.parentElement;
                  while (currentComp !== treeWrapRef?.current && currentComp) {
                    if (
                      currentComp &&
                      currentComp.scrollHeight - currentComp.clientHeight > 8
                    ) {
                      // 容器存在滚动条
                      break;
                    }
                    currentComp = currentComp
                      ? currentComp.parentElement
                      : null;
                  }
                  if (currentComp && currentComp !== treeWrapRef?.current) {
                    const { top: currentTop } =
                      currentComp.getBoundingClientRect();
                    const { top: refTop } = ref.getBoundingClientRect();
                    if (refTop - currentTop > currentComp.scrollTop) {
                      // 底部被遮挡，滚动
                      currentComp.scrollTop = refTop - currentTop;
                      scrollIntoViewComp.current = true;
                    }
                  }
                }
              }}
              {...nodeProps}
            >
              {c.children &&
                c.children.length > 0 &&
                createNodes(c.children, Object.freeze({ ...c }))}
            </TreeNode>
          );
        })
      : null;

  // 由于为了兼容旧异步加载节点动作，搜索时过滤子节点修改了原节点数据，导致子节点数据丢失
  // 所以记录子节点数据
  const childrenData = useMemo(() => {
    const nodeMap = new WeakMap();
    const recursiveGetChildren = (d: any) => {
      if (Array.isArray(d) && d.length) {
        d.forEach((c) => {
          if (c.children) {
            nodeMap.set(c, c.children);
            recursiveGetChildren(c.children);
          }
        });
      }
    };
    recursiveGetChildren(data);
    return nodeMap;
  }, [data]);

  // 过滤后最终的数据
  const filterData = useMemo(() => {
    let firstMatchFlag = false;
    scrollIntoViewComp.current = false;
    const recursiveFilter = (d: any) => {
      let newArr: any = [];
      if (Array.isArray(d) && d.length) {
        d.forEach((c, i) => {
          const { title } = c;
          const tit = title;
          let titText = title;
          const newD = c;
          newD.title = tit;
          const originChildrenData = childrenData.get(newD);
          if (originChildrenData) {
            newD.children = originChildrenData;
          }
          if (newD.children) {
            // 增加父级key路径
            let pathKeys = newD.pathKeys || [];
            if (newD.key) {
              pathKeys = [...pathKeys, newD.key];
            }
            newD.children.forEach((d: any) => {
              d.pathKeys = pathKeys;
            });
            newD.children = recursiveFilter(newD.children);
          }

          // 自定义渲染函数-新数据格式
          // 自定义渲染函数-旧数据格式兼容 {code: string, originCode: string}
          let codeStr = customRenderCode?.code;
          if (typeof customRenderCode === 'string' && !codeStr) {
            codeStr = customRenderCode;
          }
          if (codeStr && funcExpExecute) {
            const funCodeRes = funcExpExecute(codeStr, [
              {
                key: 'text',
                value: tit,
              },
              {
                key: 'item',
                value: newD,
              },
              {
                key: 'index',
                value: i,
              },
            ]);
            // 过滤掉funCode的html标签
            titText = funCodeRes
              .replace(/<\/?[^>]*>/g, '')
              .replace(/[|]*\n|\s*/g, '');
          }

          if (titText?.includes(searchVal || '') || newD.children?.length > 0) {
            if (titText.includes(searchVal || '') && !firstMatchFlag) {
              firstMatchFlag = true;
              // 匹配中的第一个节点出现在可视区域内
              newD.matchFlag = true;
            }
            // 匹配中或存在子节点的，保留
            newArr.push(newD);
          }
        });
      } else {
        newArr = d;
      }
      return newArr;
    };
    return recursiveFilter(data);
  }, [data, searchVal, customRenderCode]);

  // 展开指定节点
  useEffect(() => {
    if (
      Array.isArray(expandedKey) &&
      expandedKey?.length &&
      filterData?.length
    ) {
      let _expandKeys: any = expandedKeys || [];
      const getKeys = (dataAttr: any) => {
        dataAttr.forEach((da: any) => {
          if (expandedKey.includes(da.key)) {
            const _keys = [...(da.pathKeys || []), da.key];
            _expandKeys = [..._expandKeys, ..._keys];
          }
          if (da?.children?.length) {
            getKeys(da.children);
          }
        });
      };
      getKeys(filterData);
      const extandKeyAttr = uniq(_expandKeys);
      setExpandedKeys(extandKeyAttr);
    }
  }, [expandedKey]);
  // 展开指定节点
  useEffect(() => {
    if (
      Array.isArray(closeExpandedKey) &&
      closeExpandedKey?.length &&
      filterData?.length
    ) {
      const _expandedKeys = expandedKeys.filter(
        (key) => !closeExpandedKey.includes(key),
      );
      setExpandedKeys(_expandedKeys);
    }
  }, [closeExpandedKey]);

  return visible ? (
    <div className="ued-tree-wrap" ref={treeWrapRef}>
      {showSearch && (
        <Input.Search
          className="ued-tree-search"
          value={searchVal}
          onChange={(e) => {
            setSearchVal(e.target.value);
          }}
        />
      )}
      <Tree
        {...resetProps}
        className={classnames(
          'ued-tree',
          className,
          !showLineIcon ? 'ued-tree-no-line-icon' : '',
        )}
        selectedKeys={selectedKeys}
        checkedKeys={checkedKeys}
        showLine={
          resetProps?.showLine
            ? {
                showLeafIcon: false,
              }
            : false
        }
        defaultExpandAll={isAsync && asyncService ? false : defaultExpandAll}
        loadedKeys={loadedKeys}
        onExpand={(keys: any[], eventData) => {
          const { node, expanded } = eventData;
          const parentNode: any = (eventData?.node as any)?.data?.parentNode;
          setExpandedKeys(keys);
          // 展开的时候触发
          if (expanded) {
            if (typeof onExpand === 'function') {
              onExpand(
                node.key,
                (node.children || []).map((c: any) => c.key),
                parentNode?.key,
                parentNode,
              );
            } else {
              node.isLeaf = !(node?.children && node?.children.length > 0);
            }
          }
        }}
        expandedKeys={expandedKeys}
        onCheck={(checked: any) => {
          // 重新设置选项时，重置全选状态
          setCheckedKeys(checked);
          setIsSelectAll(false);
          if (onCheck) {
            onCheck(checked);
          }
        }}
        onSelect={(keys: any[], e: any) => {
          setSelectedKeys(keys);
          const selectedData = findTreeDataByKey(data, keys);
          setSelectDataList(selectedData);
          if (onSelect) {
            onSelect(
              keys,
              e,
              e?.node?.data?.parentNode?.key,
              e?.node?.data?.parentNode,
            );
          }
        }}
        showIcon={showLineIcon}
        icon={showLineIcon ? renderNodeIcon : undefined}
        loadData={isAsync && asyncService ? loadNodeData : undefined}
      >
        {createNodes(filterData)}
      </Tree>
    </div>
  ) : null;
});

export default MyTree;
