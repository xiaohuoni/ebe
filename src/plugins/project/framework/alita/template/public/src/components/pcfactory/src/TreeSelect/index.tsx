import { LingxiForwardRef } from '@lingxiteam/types';
import { TreeSelect } from 'antd';
import _ from 'lodash';
import React, { useEffect, useRef, useState } from 'react';
import IconFont from '../IconFont';
import {
  FormFields,
  getFieldsProps,
  useCommonImperativeHandle,
  useListenProps,
} from '../utils';
import { flattenTreeData, renderCommonList } from '../utils/renderReadOnly';

const { TreeNode } = TreeSelect;

const TREESELECT_WRAPPER_CLASSNAME = 'ued-treeSelect-wrap';
const WrapperTreeSelect = ({ children }: { children: JSX.Element }) =>
  React.cloneElement(children, {
    className: `${TREESELECT_WRAPPER_CLASSNAME} ${
      children.props.className || ''
    }`,
  });

export interface MyTreeSelectProps {
  value?: any;
  visible?: boolean;
  onChange?: (e: any, label: any, ext: any) => void;
  onValueRelease?: (value: any) => void;
  getCompPropMapState?: (id: string, type: string) => any;
  compId?: string;
  name?: string;
  fieldName: string;
  required?: any;
  hidden?: boolean;
  regexp?: any;
  message?: any;
  label?: any;
  labelCol?: any;
  wrapperCol?: any;
  text?: any;
  selfSpan?: number;
  colSpan?: number;
  dataSource?: any;
  style?: React.CSSProperties;
  treeService?: any;
  treeDefaultExpandAll?: boolean;
  treeData?: any;
  onDataSourceRelease?: (data: any[]) => void;
  isAsync?: boolean;
  asyncService?: any;
  showWrapperContainer: boolean;
  wrapperContainer: any;
  titleTip?: any;
  tipIcon?: any;
  tipLocation?: any;
  tipContent?: any;
  tipPlacement?: any;
  isSelectAll?: boolean;
  treeCheckable?: boolean; // 是否复选
  onTreeExpand?: (
    nodeKey: any,
    childrenKey: any,
    parentNodeKey: any,
    parentNodeData: any,
  ) => void;
  onSelectAllRelease?: () => void;
  colon?: boolean;
  multiple: boolean;
  isFormChild?: boolean | undefined;
  onSelect?: (
    key: any,
    data: any,
    parentNodeKey: any,
    parentNodeData: any,
  ) => void;
  readOnly: boolean;
  rules?: any[];
  filter?: any;
  onSearch?: (value: any) => void;
  tipSize?: string; // 文字提示
  tipWidth?: string; // 提示自定义的宽度
  tipHeight?: string; // 提示自定义的高度
  getEngineApis?: any;
}

const SERVICE_SOURCE = {
  // 服务来源
  APP: 'app', // 应用内部 & 模型生成
  QUERY: 'query', // 解析服务
  STD: 'std', // 编排服务
  INNER: 'inner', // 高代码服务
  PLATFORM: 'platform', // 平台服务
  ATOM: 'atom', // 外部服务(低代码运营平台的原子服务)
  RHIN: 'rhin', // 业务运营服务
  SCENE: 'scene', // 业务运营场景服务
  OBJECT: 'object', // 业务对象生成服务
};

const MyTreeSelect = LingxiForwardRef<any, MyTreeSelectProps>((props, ref) => {
  const {
    onChange,
    getCompPropMapState,
    compId,
    name,
    fieldName: rawFieldName,
    hidden,
    regexp,
    message,
    label,
    labelCol,
    wrapperCol,
    selfSpan,
    colSpan,
    treeDefaultExpandAll,
    treeData,
    isAsync,
    asyncService,
    showWrapperContainer,
    wrapperContainer: WrapperContainer,
    titleTip,
    tipIcon,
    tipLocation,
    tipContent,
    tipPlacement,
    isFormChild,
    onSelect,
    onSearch,
    filter,
    tipSize,
    tipWidth,
    tipHeight,
    getEngineApis,
    value,
    ...restProps
  } = props;

  const engineApis = getEngineApis?.() || {};

  const { onlySyncValue } = engineApis;

  // 加载数据字段映射
  const [treeService, setTreeService] = useListenProps(props.treeService);
  // 加载数据
  const [dataSource, setDataSource] = useListenProps(props.dataSource);

  const [data, setData] = useState(treeService ? [] : treeData);
  const [isSelectAll, setIsSelectAll] = useState<boolean>(
    props?.isSelectAll || false,
  );
  const [filterObject, setFilterObject] = useState<any>({});
  // 记录节点集合
  const treeNodeMap = useRef<any>({});
  // 用来记录当前展开的key，节点展开事件中以获取展开的节点
  const [expandedKeys, setExpandedKeys] = useState<any[]>([]);

  const { formFieldsRef, required, readOnly, disabled, finalRules } =
    useCommonImperativeHandle(ref, props, {
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
      // 设置全部选中
      setSelectAll(_flag: boolean) {
        setIsSelectAll(_flag);
      },
      clearValue() {
        if (treeProps.multiple || treeProps.treeCheckable) {
          onlySyncValue?.([]);
        } else {
          onlySyncValue?.(null);
        }
      },
      setValue(newValue: any) {
        if (treeProps.multiple || treeProps.treeCheckable) {
          const _value = Array.isArray(newValue)
            ? newValue
            : newValue?.split(',');
          onlySyncValue?.(_value);
        } else {
          onlySyncValue?.(newValue);
        }
      },
    });

  // isGetAll 是否获取所有节点keys，否则只获取父级的，展开时使用
  const recursive = (
    arr: any[],
    keys: any[],
    map?: any,
    isGetAll = false,
    parentNode?: any,
  ) => {
    if (Array.isArray(arr)) {
      arr.forEach((a) => {
        if (map) {
          map[a.key] = { ...a, data: { ...(a.data || {}), parentNode } };
        }
        // 有子节点才展开
        if (a.children && a?.children?.length) {
          keys.push(a.key);
          recursive(a.children, keys, map, isGetAll, Object.freeze({ ...a }));
        } else if (isGetAll) {
          keys.push(a.key);
        }
      });
    }
  };

  // 重新选择/设置选项时，重置之前全选的状态
  const resetSelectAll = () => {
    if (restProps.treeCheckable) {
      setIsSelectAll(false);
    }
  };

  useEffect(() => {
    if (isSelectAll && data && restProps.treeCheckable) {
      // 全选，设置keys
      const keys: any[] = [];
      recursive(data, keys, undefined, true);
      onlySyncValue?.(keys);
      resetSelectAll();
    }
  }, [isSelectAll, data, restProps.treeCheckable]);

  const getExpandedKeysAsync = () => {
    if (data?.length) {
      const map = {};
      const keys: any[] = [];

      recursive(data, keys, map);
      if (!asyncService && treeDefaultExpandAll) {
        setExpandedKeys(keys);
      }
      treeNodeMap.current = map;
    }
  };

  useEffect(() => {
    if (data) {
      getExpandedKeysAsync();
    }
  }, [data, asyncService, treeDefaultExpandAll]);

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
    let params: any = { [loadKey]: key };
    // 特殊服务参数处理
    if (_source === SERVICE_SOURCE.ATOM) {
      // 原子服务
      params = {
        providerId,
        serviceProviderRequest: params,
      };
    } else if (
      _source === SERVICE_SOURCE.QUERY ||
      _source === SERVICE_SOURCE.INNER ||
      _source === SERVICE_SOURCE.PLATFORM
    ) {
      // 解析类服务 或 请求层服务
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

  const loadTreeData = (source: any[], service: any) => {
    const { key, title, children, selectable = 'selectable' } = service || {};
    const getTreeData = (arr: any[]) => {
      if (Array.isArray(arr)) {
        return arr.map((c) => {
          // _isReload 标识节点数据是通过加载子节点动作设置的,此时取该动作配置好的key/title/selectable
          const originData = c._isReload ? c.data : c;
          const isSelectable = transformBoolean(
            originData[selectable] ?? originData.selectable,
          );
          // 如果加载子节点配置了映射，优先取加载子节点的，否则取当时加载数据的映射，若都没有则取数据上的默认字段
          const nodeSelectable = c._isReload
            ? c.selectable ?? isSelectable
            : isSelectable;
          const node: any = {
            key: c._isReload
              ? c.key ?? originData[key]
              : originData[key] ?? originData.key,
            title: c._isReload
              ? c.title ?? originData[title]
              : originData[title] ?? originData.title,
            selectable: c._isReload
              ? c.selectable ?? isSelectable
              : isSelectable,
            disableCheckbox:
              c.disabled ??
              c.disableCheckbox ??
              (nodeSelectable !== undefined ? !nodeSelectable : undefined),
            disabled:
              c.disabled ??
              c.disableCheckbox ??
              (nodeSelectable !== undefined ? !nodeSelectable : undefined),
            isLeaf: c.isLeaf ?? originData.isLeaf ?? false,
            data: c.data || c,
          };
          // 优先取配置的children字段，若配置错误则子节点为空，若无配置默认访问数据自身children
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
            // 不符合上述的，默认为异步加载，节点值为非空数组时都视为未展开节点（非叶子）
          }
          return node;
        });
      }
      return [];
    };
    return getTreeData(source);
  };

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
          SERVICE_SOURCE.PLATFORM,
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

  // 需要判断自己是否处于表单内，处于表单内的话不能用value
  useEffect(() => {
    // 处理获取到的数据
    if (treeService && dataSource) {
      const res = loadTreeData(dataSource, treeService);
      setData(res);
    } else if (!treeService) {
      // treeService只有配置了加载数据动作才有，若一级为常量配置时，dataSource变化也需要触发刷新
      setData(dataSource || treeData);
    }
  }, [JSON.stringify(treeService), dataSource]);

  const createNodes = (nodes: any[], parentNode?: any) =>
    Array.isArray(nodes) && nodes.length > 0
      ? nodes.map((c) => (
          <TreeNode
            key={c.key}
            title={c.title}
            data={{ ...(c.data || {}), parentNode }}
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
            dataRef={c}
            value={c.key}
          >
            {c.children &&
              c.children.length > 0 &&
              createNodes(c.children, Object.freeze({ ...c }))}
          </TreeNode>
        ))
      : null;

  const treeProps: any = {
    ...restProps,
    treeDefaultExpandAll: asyncService ? false : treeDefaultExpandAll,
    treeExpandedKeys: expandedKeys,
    loadData: asyncService ? loadNodeData : undefined,
    dropdownStyle: { maxHeight: 450, overflow: 'auto' },
  };

  // 是否加载过滤
  useEffect(() => {
    if (!treeProps.showSearch) {
      setFilterObject({});
      return;
    }
    if (filter === 'local') {
      // 支持名称和选项值过滤
      setFilterObject({
        filterTreeNode: (input: any, treeNode: any) => {
          const { title = '', key = '' } = treeNode.props;
          return (
            title.toLowerCase().indexOf(input.toLowerCase()) >= 0 ||
            key.toLowerCase().indexOf(input.toLowerCase()) >= 0
          );
        },
      });
    } else if (filter === 'remote') {
      // 根据配置的‘搜索’事件过滤
      setFilterObject({
        filterTreeNode: () => {
          return true;
        },
        onSearch: _.debounce((input: any) => {
          try {
            if (typeof onSearch === 'function') {
              onSearch(input);
            }
          } catch (err) {
            console.log('err', err);
          }
        }, 300),
      });
    } else if (filter === 'none') {
      // 不过滤
      setFilterObject({
        filterTreeNode: () => {
          return true;
        },
      });
    }
  }, [filter, treeProps.showSearch]);

  return (
    <FormFields
      {...getFieldsProps(props)}
      disabled={disabled}
      readOnly={readOnly}
      required={required}
      wrapperClassName={TREESELECT_WRAPPER_CLASSNAME}
      rules={finalRules}
      render={(val) =>
        renderCommonList(val, flattenTreeData(data), {
          labelKey: 'title',
          valueKey: 'value',
          childrenKey: 'children',
        })
      }
      ref={formFieldsRef}
      value={value}
      // @ts-ignore
      afterComponent={
        treeProps.showSearch &&
        (treeProps.multiple || treeProps.treeCheckable) ? (
          <IconFont
            width={14}
            height={14}
            className="ued-treeSelect-icon"
            iconClass="lcdp-icon-flow-single-record"
          />
        ) : null
      }
      handleFormValue={(val) => {
        if (val !== undefined) {
          let newValue = val;
          if (restProps.treeCheckable) {
            if (typeof val === 'string') {
              newValue = val.split(',');
            }
            resetSelectAll();
          }
          // 如果newValue 是null 或者空字符串 应该根据当前控件是否多选来赋值。多选是数组，单选是字符串
          if (!newValue) {
            newValue = props.multiple ? [] : '';
          }
          return newValue;
        }
        return undefined;
      }}
    >
      <TreeSelect
        {...treeProps}
        {...filterObject}
        value={value || []}
        onSelect={(keys: any[], e: any) => {
          if (typeof onSelect === 'function') {
            onSelect(keys, e, e?.data?.parentNode?.key, e?.data?.parentNode);
          }
        }}
        dropdownClassName="ued-treeSelect-dropdown"
        onChange={(e, label, extra) => {
          if (onChange) {
            onChange(e, label, extra);
          }
          resetSelectAll();
        }}
        onTreeExpand={(keys) => {
          setExpandedKeys(keys);
          // 展开的时候触发
          if (keys?.length - expandedKeys?.length === 1) {
            const nodeKey = keys[keys.length - 1];
            const node = treeNodeMap.current[nodeKey] || {};
            if (typeof restProps?.onTreeExpand === 'function') {
              restProps.onTreeExpand(
                nodeKey,
                (node.children || []).map((c: any) => c.key),
                node?.data?.parentNode?.key,
                node?.data?.parentNode,
              );
            } else {
              node.isLeaf = !(node.children?.length > 0);
            }
          }
        }}
      >
        {createNodes(data)}
      </TreeSelect>
    </FormFields>
  );
});

export default MyTreeSelect;
export { WrapperTreeSelect, TREESELECT_WRAPPER_CLASSNAME };
