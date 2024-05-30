import React, { forwardRef, useEffect, useImperativeHandle, useMemo, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Divider, Input, Select } from 'antd';
import { useMap } from '../utils/ahooks';
import { createId } from '../utils/common';
import useGetStaticAttrData from '../utils/hooks/useGetStaticAttrData';
import type { EngineApisType } from '@lingxiteam/types';
import { useLocale } from '../utils/hooks/useLocale';

interface ComSelectProps {
  className?: any;
  value?: any; // 小心，这个value好像已经没有用了
  defaultValue?: any;
  labelInValue?: any;
  showLabel?: any; // labelInValue中传入的label
  onChange?: any;
  showMode?: any;
  mode?: any;
  modalTitle?: any;
  staticService?: any;
  form?: any;
  fieldName?: any;
  onValueRelease?: any;
  onSelectedDataRelease?: (slData: any) => void;
  disabled?: any;
  readOnly?: any;
  selcetMode?: any;
  showAddBtn?: any;
  addBtnText?: any;
  onClickAddBtn?: any;
  doCompsFuncMap?: any;
  label?: any; // 是否已无用？
  ignoreValueType?: any;
  style?: any;
  addNewDataSource?: any;
  onClick?: any;
  engineApis?: EngineApisType;
  getEngineApis?: () => EngineApisType;
  comSelectRef?: React.Ref<any>;
}

const defaultParams = {
  pageNum: 1,
  pageSize: 50,
  searchContent: '',
};

const transFormType: Record<string, NumberConstructor | StringConstructor> = {
  number: Number,
  string: String,
};

const superSelectCls = 'ued-superSelect';

// const ComSelect: React.ForwardRefRenderFunction<any, ComSelectProps> = (props, ref) => {
const ComSelect = forwardRef<any, ComSelectProps>((props) => {
  // const api = getApis();
  const { getLocale } = useLocale((props?.engineApis || props?.getEngineApis?.()));
  const {
    className,
    value,
    defaultValue,
    onChange,
    labelInValue = false, // 表格行编辑时使用
    showLabel, // 表格行编辑时使用
    showMode,
    mode,
    staticService = {},
    disabled,
    readOnly,
    selcetMode = 'select',
    showAddBtn,
    addBtnText = getLocale('createNew'),
    onClickAddBtn,
    ignoreValueType = false, // 表格行编辑时使用
    onClick,
    engineApis: receivedEngineApis,
    getEngineApis,
    comSelectRef,
  } = props;

  const engineApis = receivedEngineApis || getEngineApis?.() || {};

  const {
    valueKey = {},
    labelKey = {},
    extraKey = [],
    api: apiKeys = {},
    showExtraKey = true,
    doFilter = false,
  } = staticService;

  const [reload, setReload] = useState(0);
  const [compValue, setCompValue] = useState<any>();
  const [dataSource, setDataSource] = useState([]);
  const [oldDataSource, setOldDataSource] = useState([]);
  const [selectedRows, setSelectedRows] = useState<any>([]);
  const [params, setParams] = useState(defaultParams);
  const [total, setTotal] = useState(0);
  const [, setShow] = useState(false);
  const [fetching, setFetching] = useState(false); // 下拉框加载数据loading
  const [showMoreTips, setShowMoreTips] = useState(true); // 是否展示  更多加载  提示项

  const [poolDataSource, { set, get }] = useMap();

  const innerValue = useMemo(() => {
    return value;
  }, [JSON.stringify(value)]);

  useEffect(() => {
    if (compValue === undefined || (Array.isArray(compValue) && !compValue.length)) {
      setSelectedRows([]);
    }
  }, [compValue]);

  const [attrMap] = useGetStaticAttrData({
    attrNbrs: extraKey.filter((item: any) => item.staticCode).map((item: any) => item.staticCode),
  });

  const onTriggerChange = (v: any) => {
    if (onChange) {
      onChange(v);
      // 以下一段 原为 抛出选中 的下拉项集合，与陈泽雄确认 目前只需 返回变化值
      // if (mode === 'multiple') {
      //   if (Array.isArray(v) && v.length) {
      //     const sltData: any = [];
      //     v.forEach((item) => {
      //       if (poolDataSource.has(item)) {
      //         sltData.push(get(item));
      //       }
      //     });
      //     onChange(sltData);
      //   } else {
      //     onChange(undefined);
      //   }
      // } else {
      //   const sltData = get(v);
      //   onChange(sltData ? [sltData] : undefined);
      // }
    }
  };

  useImperativeHandle(comSelectRef, () => ({
    getSelectedData: () => {
      return selectedRows;
    },
    reloadOptions: () => {
      setReload(reload + 1);
    },
  }));

  // 表格行编辑时，需手动返回选中的lebel做展示
  const onSelectChange = (v: any, _label: any) => {
    if (value === undefined || ignoreValueType) {
      setCompValue(v);
    }
    if (onChange) {
      onChange(v, _label);
    }
    onTriggerChange(v);
  };

  const computeValue = (data: any) => {
    const values = data.map((item: any) => item[valueKey?.key]);
    // eslint-disable-next-line no-nested-ternary
    const nowValues = mode === 'multiple' ? values : values.length ? values[0] : undefined;
    // eslint-disable-next-line no-underscore-dangle
    const _label = data.map((item: any) => item[labelKey?.key || valueKey?.key]).join(',');
    onSelectChange(nowValues, _label);
  };

  const onShow = (e?: any) => {
    if (e) {
      e.stopPropagation();
    }
    // if (disabled || readOnly) {
    //   return;
    // }
    const values = mode === 'multiple' ? innerValue : [innerValue];
    const array = [];

    // eslint-disable-next-line no-restricted-syntax
    for (const item of poolDataSource.keys()) {
      if ((values || []).includes(item)) {
        array.push(get(item));
      }
    }
    setParams(defaultParams);
    setSelectedRows(array);
    setShow(true);
  };

  // 点击新增之后，更新查询数据
  useEffect(() => {
    if (props?.addNewDataSource?.length) {
      setDataSource(props?.addNewDataSource);
      setTotal(props.addNewDataSource.length);
    }
  }, [props?.addNewDataSource]);

  const getUnknownIdsInfo = async (ids = [], _labels = []) => {
    if (!ids?.length) {
      return;
    }
    // 开启labelInValue模式后，初始化时不需要调接口获取label值，使用传入的showLabel做为label值
    if ((labelInValue && _labels.length) || !apiKeys.selectByKeys) {
      const rows: any[] = [];
      ids.forEach((i, idx) => {
        rows.push({
          [valueKey?.key]: i,
          [labelKey?.key || valueKey?.key]: _labels[idx],
        });
      });
      setSelectedRows(rows);
    } else {
      const { serviceCode, servicePath, serviceMethod, busiObjectId } = apiKeys.selectByKeys;
      (engineApis as any)?.service?.commonFetch(serviceMethod, `${servicePath}/${serviceCode}`, {
        busiObjectInstId: createId(),
        busiObjectId,
        attrs: {
          primaryValues: ids.map((item) => `${item}`),
        },
      }).then((res = []) => {
        res.forEach((item) => {
          set(item[valueKey?.key], item);
        });
        // 针对选择的数据在对应表中已删除时，手动补齐数据做展示
        const others: any[] = [];
        ids.map((i:any) => {
          // eslint-disable-next-line eqeqeq
          if (!res.find(r => r[valueKey?.key] == i)) {
            others.push({
              [valueKey?.key]: i,
              [labelKey?.key || valueKey?.key]: i,
            });
          }
          return i;
        });
        setSelectedRows([...res, ...others]);
        // 如果初次未传入正确的value数据类型
        if (res?.length && res[0][valueKey?.key]) {
          const realType = typeof res[0][valueKey?.key];
          const valueType = typeof ids[0];
          if ((realType !== valueType || ignoreValueType) && transFormType[realType]) {
            const transformValue =
              mode !== 'multiple'
                ? transFormType[realType](ids[0])
                : ids.map((item) => transFormType[realType](item));
            onSelectChange(
              transformValue,
              res.map((item) => item[labelKey?.key || valueKey?.key]).join(','),
            );
          }
        }
      });
    }
  };

  const superSelectGetAllPage = async (val = '', isSearch = false) => {
    if (!apiKeys?.selectAllPage) {
      return;
    }
    // 搜索过滤条件为空时，加载原本的50条数据
    if (isSearch && !val.length) {
      setDataSource([...oldDataSource]);
      return;
    }
    try {
      if (isSearch) {
        setShowMoreTips(false);
      }
      setFetching(true);
      const { serviceCode, servicePath, serviceMethod, busiObjectId } = apiKeys.selectAllPage;
      (engineApis as any)?.service?.commonFetch(serviceMethod, `${servicePath}/${serviceCode}`, {
        busiObjectInstId: createId(),
        busiObjectId,
        attrs: {
          pageNum: params.pageNum,
          pageSize: isSearch ? 1000 : params.pageSize, // 搜索过滤时，需要查询所有符合条件的数据，做分页查询时加大查询数据
          [labelKey?.key]: val || undefined,
          // [labelKey?.key]: params.searchContent || undefined,
        },
      }).then((res: any) => {
        const { list = [], total: newTotal } = res || {};
        if (!isSearch) {
          setOldDataSource(list);
          setTotal(newTotal || 0);
        }
        setDataSource(list);
        (list || []).forEach((item: any) => {
          if (!get(item[valueKey?.key])) {
            set(item[valueKey?.key], item);
          }
        });
      });
    } catch (err) {
      console.log(`远程搜索数据异常：${err}`);
    } finally {
      setFetching(false);
    }
  };

  // 需要判断自己是否处于表单内，处于表单内的话不能用value
  useEffect(() => {
    // 对于部分只应“触发一次”的操作，需要自己处理，如值处理
    // 赋值的结果仅应生效一瞬间，而不是锁死在某个值里
    const initValue = innerValue || defaultValue;
    if (initValue) {
      let values: any = Array.isArray(initValue) ? initValue : [initValue];
      let labels: any = typeof showLabel === 'string' ? showLabel?.split(',') : [];
      if (Array.isArray(showLabel)) {
        labels = showLabel;
      }
      values = values.filter((item: any) => !get(item));
      if (!values.length) {
        onShow();
      } else {
        getUnknownIdsInfo(values, labels);
      }
    } else {
      setSelectedRows([]);
    }
    if (initValue !== compValue) {
      setCompValue(initValue);
    }
    // 不懂为啥要同步，导致一进来如果设置了规则会提示规则
    // onTriggerChange(innerValue);
  }, [JSON.stringify(innerValue)]);

  useEffect(() => {
    superSelectGetAllPage('');
  }, [JSON.stringify(apiKeys), params, reload]);

  // 选择区域内容
  const mainContent = useMemo(() => {
    // eslint-disable-next-line no-underscore-dangle
    const _innerValue = mode === 'multiple' ? innerValue : [innerValue];
    if (selcetMode === 'select') {
      const currentValue = mode === 'multiple'
        ? selectedRows.map((f: any) => f[valueKey.key])
        : selectedRows?.[0]?.[valueKey.key];
      // || innerValue;
      // 非弹窗时，直接渲染为下拉，，form中不必重复设置value
      const rows = (selectedRows.length ?
        selectedRows.map((se: any) => ({ value: se[valueKey.key], label: se[labelKey?.key || valueKey?.key] })) : undefined);
      const valueProp = {
        value: labelInValue ? rows : currentValue,
        // 4月份版本屏蔽了弹窗方式打开，兼容存量数据，则不需要添加该判断
        // style: showMode === 'modal' ? { width: 400, ...style } : { ...style },
      };
      // if (showMode === 'modal') {
      //   valueProp.value =
      //     mode === 'multiple'
      //       ? selectedRows.map((f) => f[valueKey.key])
      //       : selectedRows?.[0]?.[valueKey.key];
      // }
      const renderExtralKe = (text: string, staticCode: string) => {
        const el = attrMap[staticCode]?.find((it: any) => it.value === text);
        if (el) {
          return el.label;
        }
        return text;
      };
      return (
        <Select
          className={className}
          optionLabelProp="label"
          disabled={disabled || readOnly}
          allowClear
          labelInValue={labelInValue}
          placeholder={getLocale('selectPlaceholder')}
          {...valueProp}
          mode={mode}
          // notFoundContent={fetching ? <Spin size="small" /> : null}
          dropdownRender={(menu) => (
            <>
              {menu}
              {showAddBtn && (
                <>
                  <Divider style={{ color: '#e5e5e5', margin: '0' }} />
                  <div
                    className={`${superSelectCls}-modal-addBtn`}
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => {
                      if (onClickAddBtn) {
                        onClickAddBtn();
                      }
                    }}
                  >
                    <PlusOutlined style={{ fontSize: '11px' }} rev="" /> {addBtnText}
                  </div>
                </>
              )}
            </>
          )}
          dropdownStyle={{ minWidth: '216px', maxHeight: '300px' }}
          showSearch
          filterOption={false}
          // onSearch={fetchList}
          onSearch={(v) => superSelectGetAllPage(v, true)}
          onChange={(e) => {
            let changeValue: string | never[] = [];
            if (labelInValue) {
              changeValue = mode === 'multiple' ? (e || []).map((ev: any) => ev.value) : e?.value;
            } else {
              changeValue = mode === 'multiple' ? e : [e];
            }
            const newData = dataSource.filter((f) => changeValue.includes(f[valueKey.key]));
            setSelectedRows(newData);
            // 4月份版本屏蔽了弹窗方式打开，兼容存量数据，则不需要添加该判断
            // if (showMode !== 'modal') {
            computeValue(newData);
            // }
          }}
          onClick={onClick}
        >
          {dataSource
            // .filter(d => !doFilter || (doFilter && conditions.length && collectCondition(conditions, d)))
            .map((item: any) => (
              <Select.Option key={item[valueKey.key]} label={item[labelKey.key]}>
                {showExtraKey && extraKey.length ? (
                  <div>
                    {item[labelKey.key]}
                    <div
                      className={`${superSelectCls}-extraContent ${(_innerValue || []).includes(item[valueKey.key])
                        ? `${superSelectCls}-extraContentSelected`
                        : ''
                      }`}
                      title={extraKey
                        .filter((e: any) => !!item[e.key])
                        .map((e: any, i: number) => `${renderExtralKe(item[e.key], item.staticCode)}`)
                        .join('  |  ')}
                    >
                      {extraKey
                        .filter((e: any) => !!item[e.key])
                        .map((e: any, i: number) => `${renderExtralKe(item[e.key], item.staticCode)}`)
                        .join('  |  ')}
                    </div>
                  </div>
                ) : (
                  <>{item[labelKey.key]}</>
                )}
              </Select.Option>
            ))}
          {total > 50 && showMoreTips && (
            <Select.Option key={-1} label={-1} disabled className={`${superSelectCls}-optionTip`}>
              - {getLocale('SuperSelect.load')} -
            </Select.Option>
          )}
        </Select>
      );
    }
    return null;
  }, [
    selcetMode,
    labelKey,
    valueKey,
    dataSource,
    onClickAddBtn,
    extraKey,
    showExtraKey,
    disabled,
    readOnly,
    mode,
    innerValue,
    doFilter,
    selectedRows,
    attrMap,
    fetching,
  ]);

  if (!Object.keys(valueKey).length || !Object.keys(labelKey).length) {
    // message.warn(`${label}使用的高级选择框控件未配置取值字段或展示字段`);
    return <Input disabled />;
  }

  if (showMode !== 'modal' && selcetMode === 'select') {
    return (
      mainContent
    );
  }

  return <></>;
});


export default ComSelect;
